/*
 * jQuery 'Product List' Plugin v1.0.1
 * http://www.pixelime.net/
 *
 * Copyright (c) 2011, Simone Morlacchini
 * Licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * $Date: 2011-10-13 13:50:56 +0200 (gio, 13 ott 2011) $
 * $Rev: 5651 $
 */

(function( $ ){

    /*
     * productList
     */
    var productList = function(){

        var instance = {};
        var items = [];

        /*
         * Public methods definition
         */

        // Load ( priceTableId, performanceId, dateFrom )
        instance.load = function( priceTableId, performanceId, dateFrom, productType, eventCode, eventHandler ){

            // ---> Trigger 'before load' event
            $( window ).trigger( 'productlist.beforeload', [
                {
                    'priceTableId'  : priceTableId,
                    'performanceId' : performanceId,
                    'dateFrom'      : dateFrom
                }
            ] );

            eventHandler = eventHandler !== undefined ? eventHandler : 'ticket.list';

            //Retrieve settings
            $.remotingService.execute( {
                'eventName' : eventHandler,
                'params'    : [
                    {
                        'productType'   : productType,
                        'dateFrom'      : dateFrom,
                        'performanceId' : performanceId,
                        'priceTableId'  : priceTableId,
                        'eventCode'     : eventCode
                    }
                ],
                'onSuccess' : function( data ){

                    items = data || [];

                    //Performance attaced to the instance to be accessibile
                    instance.performanceId = performanceId;
                    $( "#products" ).spin( false );

                    // ---> Trigger 'load' event
                    $( window ).trigger( 'productlist.loaded', [data] );

                },
                'onError'   : function( error ){
                    $( "#products" ).spin( false );

                    if( error !== 'abort' ) {
                        $( window ).trigger( 'show.error', ['', error] );
                    }

                }
            } );

        };

        // GroupBy ( property )
        instance.groupBy = function( sortBy, groupByLabel ){

            var result = [];
            var gCount = 0;
            var groups = {};
            var id = "";
            var arr = [];
            var item = "";
            var discounts = [];
            var upgrades = [];
            var products = [];

            // New implementation with complex response (2 rows for back compatibility)
            discounts = typeof(items["discount.list"]) == "undefined" ? [] : items["discount.list"];
            upgrades = typeof(items["upgrade.list"]) == "undefined" ? [] : items["upgrade.list"];
            products = typeof(items["product.list"]) == "undefined" ? items : items["product.list"];

            // The service can return an object containing multiple product types
            // The Object is converted to the list
            if( Object.prototype.toString.call( products ) === '[object Object]' ) {
                for( var i in products ) {
                    for( var j = 0; j < products[i].length; j++ ) {
                        item = products[i][j];
                        item.performanceId = instance.performanceId;
                        arr.push( item );
                    }
                }

                items = arr;

            }else {
                // the performance is attached to the product
                for( var j = 0; j < products.length; j++ ) {
                    item = products[j];
                    item.performanceId = instance.performanceId;
                    arr.push( item );
                }

                items = arr;
            }

            for( var i = 0; i < items.length; i++ ) {

                if( items[i][groupByLabel] ) {
                    id = items[i][groupByLabel].toString();
                }else {
                    id = items[i]["productTypeCode"].toString();
                }

                //If group index not exists, create the object
                if( typeof(groups[id]) == "undefined" ) {

                    groups[id] = gCount;
                    gCount = gCount + 1;

                    result[groups[id]] = {};

                    result[groups[id]]["" + sortBy] = items[i][sortBy];
                    result[groups[id]]["" + groupByLabel] = items[i][groupByLabel];
                    result[groups[id]]["items"] = [];

                }

                result[groups[id]].items.push( items[i] );
                result[groups[id]].discounts = discounts;
                result[groups[id]].upgrades = upgrades;

            }

            // category sorted ascending (eg. top 1, bottom 100)
            result.sort(
                    function( a, b ){
                        var diff = a[sortBy] - b[sortBy];
                        return diff;
                    }
            );

            return result;

        };

        return instance;

    }();

    /*
     * jQuery plugin definition
     */
    var defaults = {
        i18n             : {},
        context          : {},
        templateEmptyMod : "",
        templateModifer  : "",
        headerHook       : "",
        headerModifer    : "",
        spinner          : {
            selector : "#products",
            color    : "#84888C",
            size     : "verylarge"
        },
        selector         : {
            groupToggle : ".toggle, .toggleTitle"

        },
        sorting          : {
            sortBy       : "productTypeSort",
            groupByLabel : "productTypeCode"
        }
    };

    var methods = {

        init : function( options ){

            var settings = $.extend( true, {}, defaults, options );
            var $this = this;

            // Initialize plugin data
            var data = $this.data( 'productList' );

            if( !data ) {

                $this.data( 'productList', settings );

                helpers.toggleAnchorFactory( $this, settings );

                // Refresh list on 'load' event
                $( window ).unbind( 'productlist.loaded.plugin' );
                $( window ).bind( 'productlist.loaded.plugin', function(){

                    var products = productList.groupBy( $this.data( 'productList' ).sorting.sortBy, $this.data( 'productList' ).sorting.groupByLabel );

                    helpers.listFactory( $this, products );

                    $this.fadeTo( 400, 1.0 );
                    $( $this.data( 'productList' ).spinner.selector ).spin( false );
                    $( window ).trigger( 'productlist.drawn', [data] );
                } );

            }

        },

        update  : function( param ){

            //Clean html content...
            this.html( "" ).height( "auto" );

            if( !param || !param["priceTableId"] || !param["performanceId"] || !param["dateFrom"] ) {

                helpers.emptyListFactory( this );

            }else {

                this.fadeTo( 400, 0.25 );
                $( this.data( 'productList' ).spinner.selector ).spin( this.data( 'productList' ).spinner.size, this.data( 'productList' ).spinner.color );
                productList.load( param["priceTableId"], param["performanceId"], param["dateFrom"], param["productType"], param["eventCode"], param["eventHandler"] );

            }

        },
        destroy : function(){
            this.each( function(){
                var $this = $( this );
                var data = $this.data( 'productList' );
                if( data ) {
                    $( $this.data( 'productList' ).headerHook ).html( "" );
                    $this.html( "" ).height( "auto" );
                    $this.data( 'productList', null );
                }
            } );
        }

    };

    var helpers = {

        toggleAnchorFactory : function( $inst, settings ){

            $inst.find( settings.selector.groupToggle ).live( "click", function(){

                var $toggle = $( this );
                var label = $toggle.text();

                //Exchange label
                $toggle.text( $toggle.data( 'altlabel' ) );
                $toggle.data( 'altlabel', label );

                //Hide content
                $toggle.parents( ".product-group" ).toggleClass( 'collapse' );

                return false;
            } );

        },

        listFactory : function( $inst, products ){

            if( products.length > 0 ) {
                for( var i = 0; i < products.length; i++ ) {

                    var perfAvailability = Handlebars.helpers['calendar.getPerformanceAvailibility'].apply( this, [products[i].items[0].performanceId, products[i].items[0].seatCategoryLink] );
                    var productAvailable = perfAvailability.available;
                    var productTotal = perfAvailability.total;

                    if( perfAvailability.unlimited === true ) {
                        productAvailable = -1;
                        productTotal = -1;
                    }

                    //add envelopeid to product
                    for( var p = 0; p < products[i].items.length; p++ ) {
                        products[i].items[p].envelopeId = Handlebars.helpers['calendar.getSeatCategory'].apply( this, [products[i].items[p].performanceId, products[i].items[p].seatCategoryLink] ).envelopeId;
                    }

                    if( i === 0 ) {
                        products[i].available = productAvailable;
                        products[i].total = productTotal;
                        $inst.html( Handlebars.renderTemplate( 'productlist-item', products[i], $inst.data( 'productList' ).i18n, $inst.data( 'productList' ).context, $inst.data( 'productList' ).templateModifer ) );
                    }else {
                        products[i].available = productAvailable;
                        products[i].total = productTotal;
                        $inst.append( Handlebars.renderTemplate( 'productlist-item', products[i], $inst.data( 'productList' ).i18n, $inst.data( 'productList' ).context, $inst.data( 'productList' ).templateModifer ) );
                    }
                }
                $( $inst.data( 'productList' ).headerHook ).html( Handlebars.renderTemplate( 'productlist-header', products, $inst.data( 'productList' ).i18n, $inst.data( 'productList' ).context, $inst.data( 'productList' ).headerModifer ) );
            }else {
                helpers.emptyListFactory( $inst );
            }

            $inst.height( "auto" );

            // add a tooltip for event with on-line details
            //$("#product-list a[title]").tooltip();

            // add date selected for event with date selection
            // date is taken from an hidden field populated after the date selection
            // see "views\b2c\script\calendar_js.cfm"
            var dt = $( "#selected-date-hidden" ).text();
            $( "#selected-date" ).text( dt );

        },

        emptyListFactory : function( $inst ){

            $inst.html( Handlebars.renderTemplate( 'productlist-empty', {}, $inst.data( 'productList' ).i18n, $inst.data( 'productList' ).context, $inst.data( 'productList' ).templateEmptyMod ) );
            //$( $inst.data( 'productList' ).headerHook ).html( "" );
            $( $inst.data( 'productList' ).headerHook ).html( Handlebars.renderTemplate( 'productlist-header', {}, $inst.data( 'productList' ).i18n, $inst.data( 'productList' ).context, $inst.data( 'productList' ).headerModifer ) );
        }

    };

    $.fn.productList = function( method ){

        // Method calling logic
        if( methods[method] ) {
            return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ) );
        }else if( typeof method === 'object' || !method ) {
            return methods.init.apply( this, arguments );
        }else {
            $.error( 'Method "' + method + '" does not exist in Product List plugin!' );
        }

    };

})( jQuery );
