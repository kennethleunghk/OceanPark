(function( $ ){


    /*
     * Basket
     */
    var basketActive = function(){

        var instance = {};

        /*
         * Public methods definition
         */

        // Init ( )
        instance.init = function(){

        };

        return instance;

    }();

    /*
     * jQuery plugin definition
     */
    var defaults = {

        selector      : {
            "sidebasket"      : "#sidebasket",
            "sideloading"     : "#sideloading",
            "sidebasketbody"  : "#sidebasket #sidebasketbody",
            "sidebaskethead"  : "#sidebasket #sidebaskethead",
            "sidebaskettotal" : "#sidebasket #sidebaskettotal",
            "sidebaskettitle" : "#sidebaskettitle",
            "removeitehook"   : ".js-ab-remove",
            "item"            : ".jq-ba-item",
            "cartresetbtn"    : ".js-ab-reset",
            "cartfwd"         : ".js-ab-fwd",
            "timer"           : ".jq-basket-float-minimalcd"
        },
        modifiers     : {
            "title"   : "",
            "head"    : "",
            "row"     : "",
            "totals"  : "",
            "empty"   : "",
            "loading" : ""
        },
        i18n          : {},
        context       : {},
        expireData    : {
            activecd    : false,
            showcd      : false,
            layout      : "",
            description : "",
            animated    : true,
            remSeconds  : 9999
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
            var data = $this.data( 'basketActive' );

            if( !data || data.error ) {

                $this.data( 'basketActive', settings );

                //Build cart controller (UI elements that trigger some cart action, like 'add')
                helpers.basketControlFactory( $this );

                //Build cart custom event handler
                helpers.basketEventFactory( $this );

                // Initialize cart
                basketActive.init();

            }

            return $this;
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

            $( window ).unbind( 'basket.init.active' );
            $( window ).bind( 'basket.init.active', function( e, items ){

                //clear basket float html items list
                helpers.beforeLoadContent( $inst );
                helpers.refresh( $inst, items );
                helpers.refreshTimers( $inst, items );

            } );

            $( window ).unbind( 'basket.before-add.active' );
            $( window ).bind( 'basket.before-add.active', function( e ){

                //show loading tooltip
                helpers.showLoading( $inst );

                //clear basket float html items list
                helpers.beforeLoadContent( $inst );

            } );

            $( window ).unbind( 'basket.add.active' );
            $( window ).bind( 'basket.add.active', function( e, items ){

                //clear basket float html items list
                helpers.beforeLoadContent( $inst );
                //draw the basket float
                helpers.refresh( $inst, items );
                helpers.refreshTimers( $inst, items );
                //close the tooltip
                helpers.hideLoading();

            } );

            $( window ).bind( 'add.discount', function( e, items ){

                helpers.refresh( $inst, items );

            } );

            $( window ).bind( 'set.discount', function( e, items ){

                helpers.setCurrentDiscount( $inst );

            } );

            $( window ).unbind( 'basket.remove.active' );
            $( window ).bind( 'basket.remove.active', function( e, data ){

                //clear basket float html items list
                helpers.beforeLoadContent( $inst );
                //draw the basket float
                helpers.refresh( $inst, items );
                helpers.refreshTimers( $inst, items );
                //close the tooltip
                helpers.hideLoading();

            } );

            $( window ).unbind( 'show.error.active' );
            $( window ).bind( 'show.error.active', function( e, msg, error ){

                helpers.hideLoading();

            } );

            $( window ).unbind( 'basket.reset.active' );
            $( window ).bind( 'basket.reset.active', function( e ){
                var cartreset = $( defaults.selector.cartresetbtn );
                if(cartreset.attr('data-page') === 'fastrackandparking' || cartreset.attr('data-page') === 'b2cpayg') {
                    window.location.href = cartreset.attr('data-back');
                }

                //clear basket float html items list
                helpers.beforeLoadContent( $inst );

            } );

        },

        setCurrentDiscount : function( $inst ){

        },

        refresh : function( $inst, data ){

            var basketBody = $( defaults.selector.sidebasketbody );

            var counter = data.counter;
            var items = data.list;
            var item = null;
            var couponCode = "";

            if( data.item != undefined ) {
                item = data.item;
            }

            // ******************************************************************
            // Inline Basket

            //Reset current html
            basketBody.html( "" );

            //always reload title
            $( defaults.selector.sidebaskettitle ).html( Handlebars.renderTemplate( 'activebasket-title', data, $inst.data( 'basketActive' ).i18n, $inst.data( 'basketActive' ).context, $inst.data( 'basketActive' ).modifiers.title ) );

            if( !$.isArray( items ) ) {

                items = [items];

            }

            var deliveryOnly = true;
            if( items.length > 0 ) {

                //always append head
                $( defaults.selector.sidebaskethead ).html( Handlebars.renderTemplate( 'activebasket-head', data, $inst.data( 'basketActive' ).i18n, $inst.data( 'basketActive' ).context, $inst.data( 'basketActive' ).modifiers.head ) );

                for( var i = 0; i < items.length; i++ ) {
                    // Show single item in the cart

                    if( !(items[i]['isDelivery'] || items[i]['isCoupon']) ) {
                        deliveryOnly = false;

                        basketBody.append( Handlebars.renderTemplate( 'activebasket-row', items[i], $inst.data( 'basketActive' ).i18n, $inst.data( 'basketActive' ).context, $inst.data( 'basketActive' ).modifiers.row ) );

                    }
                    else if( items[i]['isCoupon'] ) {

                        couponCode = items[i]['product']['internalCode'];
                        $inst.couponCode = couponCode;

                    }
                }

                //append bottombar to basket
                if( defaults.showTotalsBar && counter.totalTicket > 0 ) {
                    $( defaults.selector.sidebaskettotal ).html( Handlebars.renderTemplate( 'activebasket-totals', data, $inst.data( 'basketActive' ).i18n, $inst.data( 'basketActive' ).context, $inst.data( 'basketActive' ).modifiers.totals ) );
                }else if( defaults.showTotalsBar && counter.totalTicket == 0 ) {
                    $( defaults.selector.sidebaskettotal ).html( Handlebars.renderTemplate( 'activebasket-totalsempty', data, $inst.data( 'basketActive' ).i18n, $inst.data( 'basketActive' ).context, $inst.data( 'basketActive' ).modifiers.totals ) );
                }

            }else {

                helpers.showEmpty( $inst, data );
            }

            // Empty if delivery only
            if( deliveryOnly ) {

                helpers.showEmpty( $inst, data );

            }

            helpers.bindSelectors();
        },

        beforeLoadContent : function( $inst ){

            var $sidebasket = $inst.find( defaults.selector.sidebasket );
            $sidebasket.html( "" );
            $( defaults.selector.timer ).html( "" );

        },

        refreshTimers : function( $inst, data ){

            defaults.expireData.remSeconds = data.expiry;
            defaults.expireData.activecd = data.timeStarted;
            defaults.expireData.showcd = data.timerEnabled;

        },

        bindSelectors : function(){

            $( defaults.selector.removeitehook ).each( function(){

                $( this ).on( 'confirm.reveal', function( e, params ){

                    //do remove
                    var $item = $( this ).parents( defaults.selector.item );
                    var uuid = $item.data( 'uuid' );

                    var data = {
                        item : {
                            uuid     : uuid,
                            quantity : 0
                        }
                    };
                    $( window ).trigger( 'basket.remove-uuid', [data] );
                    $( ".reveal-modal" ).foundation( 'reveal', 'close' );

                } );
                $( this ).on( 'cancel.reveal', function( e, params ){

                    // do nothing

                } );

            } );

            $( defaults.selector.cartresetbtn ).one( "click", function(){
                $( this ).on( 'confirm.reveal', function( e, params ){
                    //do remove
                    $( window ).trigger( 'basket.reset' );
                    $( ".reveal-modal" ).foundation( 'reveal', 'close' );

                } );
                $( this ).on( 'cancel.reveal', function( e, params ){
                    // do nothing
                } );
            } );

            $( defaults.selector.cartfwd ).each(function(){
                var itemperf = $('.row.inner .pageContent .container #left .content-row .agenda-row .agenda .date').text();
                var firstavail = moment().add(2, 'd').format('YYYY-MM-DD');
                if($(this).attr('data-page') === 'fastrackandparking') {
                    if(moment(itemperf).isBefore(firstavail)) {
                        $(this).attr('href',$(this).attr('data-fwd'));
                    } else {
                        $(this).attr('href',$(this).attr('data-url'));
                    }
                } else {
                    $(this).attr('href',$(this).attr('data-url'));
                }
            } );

            $( window ).trigger( 'activebasket.bind', [] );
        },

        /**
         * Method used to show a clean basket
         * @param data
         */
        showEmpty : function( $inst, data ){

            var basketBody = $( defaults.selector.sidebasketbody );

            //Reset current html
            basketBody.html( "" );

            //always reload title
            $( defaults.selector.sidebaskettitle ).html( Handlebars.renderTemplate( 'activebasket-title', data, $inst.data( 'basketActive' ).i18n, $inst.data( 'basketActive' ).context, $inst.data( 'basketActive' ).modifiers.title ) );
            basketBody.append( Handlebars.renderTemplate( 'activebasket-empty', data, $inst.data( 'basketActive' ).i18n, $inst.data( 'basketActive' ).context, $inst.data( 'basketActive' ).modifiers.empty ) );
            $( defaults.selector.sidebaskettotal ).html( Handlebars.renderTemplate( 'activebasket-totalsempty', data, $inst.data( 'basketActive' ).i18n, $inst.data( 'basketActive' ).context, $inst.data( 'basketActive' ).modifiers.totals ) );
        },

        /**
         * The counter thing in showLoading() and hideLoading()
         * is used to manage multiple clicks,
         * don't show the basket unless all the callback have returned
         */
        showLoading : function( $inst ){

            var loadingEl = $( defaults.selector.sideloading );
            loadingEl.attr( 'counter.show', Number( loadingEl.attr( 'counter.show' ) ) + 1 );   //increment custom counter on every show
            loadingEl.html( "" );
            loadingEl.append( Handlebars.renderTemplate( 'activebasket-loading', {}, $inst.data( 'basketActive' ).i18n, $inst.data( 'basketActive' ).context, $inst.data( 'basketActive' ).modifiers.loading ) );

            $( defaults.selector.sidebasket ).hide();
            loadingEl.show();

        },

        hideLoading : function(){

            var loadingEl = $( defaults.selector.sideloading );
            loadingEl.attr( 'counter.show', loadingEl.attr( 'counter.show' ) - 1 );

            if( loadingEl.attr( 'counter.show' ) <= 0 ) {  // if the number of remaining shows is zero or less hide for real

                loadingEl.hide();
                $( defaults.selector.sidebasket ).show();

            }

        }

    };

    $.fn.basketActive = function( method ){

        if( methods[method] ) {
            return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ) );
        }else if( typeof method === 'object' || !method ) {
            return methods.init.apply( this, arguments );
        }else {
            $.error( 'Method ' + method + ' does not exist on jQuery.basketActive' );
        }

    };

})( jQuery );