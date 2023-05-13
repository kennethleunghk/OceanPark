/*
 * jQuery 'BasketFloat' Plugin v1.5.2
 *
 * Copyright (c) 2011, Simone Morlacchini
 * Licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * $Date: 2011-04-20 15:07:42 +0200 (Wed, 20 Apr 2011) $
 * $Rev: 5120 $
 */

(function( $ ){


    /*
     * Basket
     */
    var basketFloat = function(){

        var instance = {};
        var items = [];
        var counter = {};
        var couponCode = "";

        /*
         * Public methods definition
         */

        // Init ( )
        instance.init = function(){

        };

        // Add ( id, quantity, performanceId, productType, groupBy )
        instance.add = function( id, quantity, performanceId, productType, groupBy, sibling ){

        };

        // Remove ( id, quantity, performanceId )
        instance.remove = function( id, performanceId ){

        };

        // GetCounter ( ) : get a global cart counter: total, subtotal, items count, items subcount
        instance.getCounter = function(){

        };

        // isEmpty ( )
        instance.isEmpty = function(){

        };

        // Set Sibling (  )
        instance.setSibling = function( performanceId, productType, groupBy, index, list ){

        };

        return instance;

    }();

    /*
     * jQuery plugin definition
     */
    var defaults = {

        selector : {
            "itemList"       : ".jq-basket-float-itemlist",
            "empty"          : ".jq-basket-float-empty",
            "item"           : ".jq-basket-float-item",
            "cartloader"     : "#cart-loader",
            "cartcontainer"  : "#cart-container a[title]",
            "basketfloat"    : "#basketFloat",
            "basketLoading"  : "#basketFloatLoading",
            "btmbox"         : ".box-bottom-float",
            "timer"          : ".jq-basket-float-minimalcd",
            "basketTooltip"  : "#qtip-leFloatBasket",
            "basketLoadTip"  : "#qtip-lebkload",
            "basketresetbtn" : ".jq-basket-float-resbtn",
            "totalbox"       : ".box-totals-float"
        },

        i18n          : {},
        expireData    : {
            activecd    : false,
            showcd      : false,
            layout      : "",
            description : "",
            animated    : true,
            remSeconds  : 9999
        },
        showBtmBar    : true,
        perpetualTip  : true,
        useconfirm    : false,
        tooltipText   : {
            title    : "",
            closeTip : ""
        },
        showTotalsBar : true
    };

    ///////////////////////////
    // Plugin public methods //
    ///////////////////////////

    var methods = {

        /*
         * Basket init method
         */
        init : function( options ){

            var settings = $.extend( defaults, defaults, options );
            var $this = this;

            // Initialize plugin data
            var data = $this.data( 'basketFloat' );

            if( !data || data.error ) {

                $this.data( 'basketFloat', settings );

                //Build cart controller (UI elements that trigger some cart action, like 'add')
                helpers.basketControlFactory( $this );

                //Build cart custom event handler
                helpers.basketEventFactory( $this );

                // Initialize cart
                basketFloat.init();

                //init tooltip after reading settings and basket
                helpers.generateTooltip();

            }

            return $this;
        },

        /*
         * Basket add method
         */
        add : function( id, qty, performanceId, productType, groupBy ){

            //basket.add( id, qty, performanceId, productType, groupBy );

        },

        /*
         * Basket remove method
         */
        remove : function( id, performanceId ){

            //basket.remove( id, performanceId );

        },

        /*
         * Set sibling
         */
        setSibling : function( id, performanceId ){

            //basket.setSibling(  );

        },

        /*
         * Basket total method
         */
        total : function(){

            //return basket.getCounter();

        },

        /*
         * Basket isEmpty method
         */
        isEmpty : function(){

            //return basket.isEmpty();

        },

        /*
         * Basket submit method
         */
        submit : function(){

            return this;
        }

    };

    var helpers = {

        basketControlFactory : function( $inst ){

        },

        basketEventFactory : function( $inst ){

            $( window ).unbind( 'basket.init.float' );
            $( window ).bind( 'basket.init.float', function( e, items ){

                //clear basket float html items list
                helpers.beforeLoadContent( $inst );
                helpers.refresh( $inst, items );
                helpers.refreshTimers( $inst, items );

            } );

            $( window ).unbind( 'basket.before-add.float' );
            $( window ).bind( 'basket.before-add.float', function( e ){

                //show loading tooltip
                helpers.showLoadingTooltip();

                //clear basket float html items list
                helpers.beforeLoadContent( $inst );

            } );

            $( window ).unbind( 'basket.add.float' );
            $( window ).bind( 'basket.add.float', function( e, items ){

                //clear basket float html items list
                helpers.beforeLoadContent( $inst );
                //draw the basket float
                helpers.refresh( $inst, items );
                helpers.refreshTimers( $inst, items );
                //close the tooltip
                helpers.hideLoadingTooltip();

            } );

            $( window ).unbind( 'basket.remove.float' );
            $( window ).bind( 'basket.remove.float', function( e, data ){

                //This is needed by refresh function: set quantity to 0 means remove the element.
                //data.item['quantity'] = 0;
                helpers.refresh( $inst, data );
                helpers.refreshTimers( $inst, items );

            } );

            $( window ).unbind( 'show.error.float' );
            $( window ).bind( 'show.error.float', function( e, msg, error ){

                //hide all qtips before modal
                helpers.hideLoadingTooltip();
                //reset the select values to the original after error
                $( ".js-basket-item-sel select" ).each( function(){
                    var select = $( this );
                    select.prop( 'selectedIndex', select.attr( 'data-value' ) );
                } );

            } );

            $( window ).unbind( 'basket.reset.float' );
            $( window ).bind( 'basket.reset.float', function( e ){

                //clear basket float html items list
                helpers.beforeLoadContent( $inst );

            } );

        },

        refresh : function( $inst, data ){

            var selector = $inst.data( 'basketFloat' ).selector;
            var $itemList = $inst.find( selector.itemList );

            var $item = null;
            var counter = data.counter;
            var items = data.list;
            var item = null;
            var couponCode = "";

            if( data.item != undefined ) {
                item = data.item;
            }

            // ******************************************************************
            // Inline Basket

            if( !$.isArray( items ) ) {

                items = [items];

            }

            // Remove an item
            if( item != '' && item != null ) {
                if( !(item['isDelivery'] || item['isCoupon']) ) {

                    var perf = item['performanceList'].length > 0 ? item['performanceList'][0]['performanceId'] : 0;

                    //Get the selected item jQuery reference. Use productId and performanceId to get it!
                    $item = $itemList.find( selector.item +
                            "[data-uuid='" + item['hashCode'] + "']" );

                    if( $item.length && item['quantity'] === 0 ) {

                        $item.remove();

                    }
                    else {

                        $item.replaceWith( Handlebars.renderI18nTemplate( 'floatbasket-item', item, defaults.i18n ) );

                    }
                }
                if( defaults.showBtmBar ) {
                    $( defaults.selector.basketfloat ).find( defaults.selector.btmbox ).html( Handlebars.renderI18nTemplate( 'floatbasket-bottom', {}, defaults.i18n ) );
                }
                if( defaults.showTotalsBar && counter.totalTicket > 0 ) {
                    var totBar = $( defaults.selector.basketfloat ).find( defaults.selector.totalbox );
                    totBar.html( Handlebars.renderI18nTemplate( 'floatbasket-totals', counter, defaults.i18n ) );
                    totBar.show();
                }
            }

            var deliveryOnly = true;
            if( items.length > 0 ) {
                for( var i = 0; i < items.length; i++ ) {
                    // Show single item in the cart

                    if( !(items[i]['isDelivery'] || items[i]['isCoupon']) ) {
                        deliveryOnly = false;
                        var perf = items[i]['performanceList'].length > 0 ? items[i]['performanceList'][0]['performanceId'] : 0;

                        //Get the selected item jQuery reference. Use productId and performanceId to get it!
                        $item = $itemList.find( selector.item +
                                "[data-uuid='" +
                                items[i]['hashCode'] +
                                "']" );

                        if( !$item.length ) {

                            // Remove empty row if exist
                            if( $itemList.find( selector.empty ).length ) {

                                //$itemList.html("");
                            }

                            $itemList.append( Handlebars.renderI18nTemplate( 'floatbasket-item', items[i], defaults.i18n ) );

                        }

                    }
                    else if( items[i]['isCoupon'] ) {

                        couponCode = items[i]['product']['internalCode'];
                        $inst.couponCode = couponCode;

                    }
                }

                //append bottombar to basket

                if( defaults.showBtmBar ) {
                    $( defaults.selector.basketfloat ).find( defaults.selector.btmbox ).html( Handlebars.renderI18nTemplate( 'floatbasket-bottom', {}, defaults.i18n ) );
                }
                if( defaults.showTotalsBar && counter.totalTicket > 0 ) {
                    var totBar = $( defaults.selector.basketfloat ).find( defaults.selector.totalbox );
                    totBar.html( Handlebars.renderI18nTemplate( 'floatbasket-totals', counter, defaults.i18n ) );
                    totBar.show();
                }
            }else {

                $itemList.html( Handlebars.renderI18nTemplate( 'floatbasket-empty', {}, defaults.i18n ) );
            }

            // Empty if delivery only
            if( deliveryOnly ) {

                $itemList.html( Handlebars.renderI18nTemplate( 'floatbasket-empty', {}, defaults.i18n ) );

            }

        },

        beforeLoadContent : function( $inst ){

            var $itemList = $inst.find( defaults.selector.itemList );
            $itemList.html( "" );
            $( defaults.selector.timer ).html( "" );
            $( defaults.selector.btmbox ).html( "" );
            $( defaults.selector.totalbox ).html( "" );
            $( defaults.selector.totalbox ).hide();

        },

        refreshTimers : function( $inst, data ){

            defaults.expireData.remSeconds = data.expiry;
            defaults.expireData.activecd = data.timeStarted;
            defaults.expireData.showcd = data.timerEnabled;

        },

        showLoadingTooltip : function(){

            $( defaults.selector.basketLoading ).html( Handlebars.renderI18nTemplate( 'floatbasket-loading', {}, defaults.i18n ) );
            var qApi = $( defaults.selector.cartloader ).qtip( 'api' );
            qApi.set( 'counter.show', qApi.get( 'counter.show' ) + 1 );   //increment custom counter on every show
            qApi.set( 'content.text', $( defaults.selector.basketLoading ) );
            qApi.show();
            $( defaults.selector.cartcontainer ).fadeTo( 250, 0.5 ).addClass( 'adding_cart' );

        },

        hideLoadingTooltip : function(){

            var qApi = $( defaults.selector.cartloader ).qtip( 'api' );
            qApi.set( 'counter.show', qApi.get( 'counter.show' ) - 1 );   //decrement counter on hide

            if( qApi.get( 'counter.show' ) <= 0 ) {  // if the number of remaining shows is zero or less hide for real
                $( defaults.selector.basketLoadTip ).hide();
                $( defaults.selector.cartcontainer ).fadeTo( 500, 1.0 ).removeClass( 'adding_cart' );
            }

        },

        /**
         * Tooltips must be initialized after the init to correctly read the i18n texts and other settings
         */
        generateTooltip : function(){
            $( defaults.selector.cartcontainer ).qtip(
                    {
                        id       : "leFloatBasket",
                        content  : {
                            text  : $( defaults.selector.basketfloat ),
                            title : {
                                text   : defaults.tooltipText.title,
                                button : defaults.tooltipText.closeTip
                            }
                        },
                        hide     : defaults.perpetualTip ? false : {},
                        position : {
                            my : 'top right',
                            at : 'bottom right'
                        },
                        events   : {

                            show : {
                                effect : function( offset ){
                                    $( this ).slideDown( 100 ); // "this" refers to the tooltip
                                },
                                solo   : true
                            },

                            hide : function( api ){

                                return defaults.perpetualTip ? {} : {when : {target : $( 'h1:first' )}};

                            },

                            visible : function( event, api ){
                                $( defaults.selector.basketresetbtn ).one( "click", function(){
                                    if( defaults.useconfirm ) {
                                        $( this ).on( 'confirm.reveal', function( e, params ){
                                            //do remove
                                            $( window ).trigger( 'basket.reset' );
                                            $( ".reveal-modal" ).foundation( 'reveal', 'close' );

                                        } );
                                        $( this ).on( 'cancel.reveal', function( e, params ){
                                            // do nothing
                                        } );
                                    }else {
                                        $( window ).trigger( 'basket.reset' );
                                    }
                                    $( defaults.selector.basketTooltip ).qtip( 'api' ).hide();
                                } );
                            }
                        },
                        style    : {
                            classes : 'qtip-basket qtip-shadow',
                            width   : '400px',
                            tip     : {
                                corner : false
                            }
                        }

                    }
            );
            $( defaults.selector.cartloader ).qtip(
                    {
                        id       : "lebkload",
                        content  : {
                            text  : $( defaults.selector.basketLoading ),
                            title : {
                                text   : defaults.tooltipText.title,
                                button : defaults.tooltipText.closeTip
                            }
                        },
                        //custom counter, the number of time the loading tooltip has been called on show()
                        counter  : {
                            show : 0
                        },
                        position : {
                            my : 'top right',
                            at : 'bottom right'
                        },
                        show     : {
                            solo : true
                        },
                        hide     : {
                            event    : false,
                            inactive : 10000
                        },
                        style    : {
                            classes : 'qtip-basket-loading qtip-basket qtip-shadow',
                            width   : '400px',
                            tip     : {
                                corner : true,
                                height : 28,
                                width  : 370,
                                border : 0
                            }
                        }

                    }
            );
        }

    };

    $.fn.basketFloat = function( method ){

        if( methods[method] ) {
            return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ) );
        }else if( typeof method === 'object' || !method ) {
            return methods.init.apply( this, arguments );
        }else {
            $.error( 'Method ' + method + ' does not exist on jQuery.basket' );
        }

    };

})( jQuery );