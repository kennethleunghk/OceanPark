/*
 * jQuery 'Basket' Plugin v1.5.2
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
    var basket = function(){

        var instance = {};
        var items = [];
        var counter = {};
        var promoPackage = {};
        var shopCartCounter = {};
        var couponCode = "";
        var productSelection = {};
        var expireData = {};

        /*
         * Public methods definition
         */

        // Init ( )
        instance.init = function(){

            //Initialize basket
            $.remotingService.execute( {
                'eventName' : 'cart.list',
                'onSuccess' : function( data ){

                    var readNewData = true;
                    //manage the expire time of the cart
                    // if expiry is present and minor of zero the cart is not valid anymore

                    expireData = {
                        expiry       : data.expiry,
                        timeStarted  : data.timeStarted,
                        timerEnabled : data.timerEnabled
                    };

                    if( expireData.timeStarted && expireData.timerEnabled ) {
                        if( expireData.expiry <= 0 ) {
                            readNewData = false;
                            var error = {
                                "basket.error" : {}
                            };
                            error['basket.error'][0] = {
                                expiry : -expireData.expiry,
                                type   : "B_EXPIRED"
                            };
                            // silently reset cart on expiry

                            basket.resetBasket();

                            $( window ).trigger( 'basket.error', [error] );
                        }
                    }

                    if( readNewData ) {
                        items = [];

                        for( var i = 0; i < data.list.length; i++ ) {

                            items.push( data.list[i] );

                            //id is the product or the sibling if present
                            var prId = data.list[i].product.productId;
                            if( data.list[i].sibling > 0 ) {
                                prId = data.list[i].siblingProduct.productId;
                            }
                            productSelection[prId] = data.list[i].quantity;

                        }

                        counter = data.counter;
                        promoPackage = data.promoPackage;
                        shopCartCounter = data.shopCartCounter;
                        basket.build();
                    }
                },
                'onError'   : function( err ){
                }
            } );

        };

        //Build ( )
        //draws the basket based on existing data
        instance.build = function(){
            data = {
                counter         : counter,
                shopCartCounter : shopCartCounter,
                list            : items,
                promoPackage    : promoPackage,
                expiry          : expireData.expiry,
                timeStarted     : expireData.timeStarted,
                timerEnabled    : expireData.timerEnabled
            };
            // ---> Trigger 'init' event
            $( window ).trigger( 'basket.init', [data] );
            return data;
        };

        // Add ( id, quantity, performanceId, productType, groupBy )
        instance.add = function( id, quantity, performanceId, productType, groupBy, sibling ){

            var param = {};
            var skipTrigger = false;

            if( isNaN( id ) ) {

                param['uuid'] = id;
                param['quantity'] = parseInt( quantity );

            }else {
                //check if we're trying to add a delivery
                if( productType == undefined || productType == 'DELIVERY' ) {

                    param['delivery'] = id;

                }
                else {
                    param['quantity'] = parseInt( quantity );
                    param['performanceId'] = performanceId;
                    if( performanceId === 0 ) {
                        param['products'] = id;
                    }else {
                        param['ticket'] = id;
                    }

                    param['productType'] = productType;
                    param['groupBy'] = groupBy;
                    param['sibling'] = sibling;

                    //product is not selected (in cart) and quantity is zero
                    //we dont trigger
                    if( param['quantity'] == 0 && !productSelection[id] ) {
                        skipTrigger = true;
                        if( defaults.onAddZeroError ) {
                            var error = {
                                "basket.error" : {}
                            };
                            errType = "NO_QTY";

                            if( $.inArray( productType, defaults.amtTypes ) != -1 ) {
                                errType = "NO_AMT";
                            }
                            error['basket.error'][0] = {
                                type : errType

                            };
                            $( window ).trigger( 'basket.error', [error] );
                        }
                    }
                    productSelection[id] = param['quantity'];
                }

            }

            if( !skipTrigger ) {
                // ---> Trigger 'before add' event
                $( window ).trigger( 'basket.before-add', [param, "ADD"] );

                // Add to cart via Ajax
                $.remotingService.execute( {
                    'eventName' : 'cart.add',
                    'params'    : [param],
                    'onSuccess' : function( data ){

                        items = data.list;
                        counter = data.counter;
                        shopCartCounter = data.shopCartCounter;
                        // ---> Trigger 'add' event
                        $( window ).trigger( 'basket.add', [data] );

                    },
                    'onError'   : function( error ){

                        if( error != 'abort' ) {
                            $( window ).trigger( 'basket.error', [error] );
                        }

                    }
                } );
            }

        };

        // Remove ( id, quantity, performanceId )
        instance.remove = function( id, performanceId ){

            //Search inside the basket array if element already exist
            var quantity = 0;
            var pos = 0;
            var param = {};

            for( var i = 0; i < items.length; i++ ) {

                if( isNaN( id ) ) {
                    if( items[i]['hashCode'] == id ) {
                        quantity = items[i].quantity;
                        pos = i;

                        param['uuid'] = id;
                        param['quantity'] = quantity;

                        break;
                    }
                }else {
                    if( items[i]['performanceList'].length > 0 ) {
                        if( items[i]['product']['productId'] == id && items[i]['performanceList'][0]['performanceId'] == performanceId ) {
                            quantity = items[i].quantity;
                            pos = i;

                            param['ticket'] = id;
                            param['performanceId'] = performanceId;
                            param['quantity'] = quantity;

                            break;
                        }
                    }
                    else {
                        if( items[i]['product']['productId'] == id ) {
                            quantity = items[i].quantity;
                            pos = i;

                            param['ticket'] = id;
                            param['performanceId'] = performanceId;
                            param['quantity'] = quantity;

                            break;
                        }
                    }
                }

            }

            // ---> Trigger 'before remove' event
            $( window ).trigger( 'basket.before-remove', [
                {
                    'id'            : id,
                    'quantity'      : quantity,
                    'performanceId' : performanceId
                }
            ] );

            // Remove from cart via Ajax
            $.remotingService.execute( {
                'eventName' : 'cart.remove',
                'params'    : [param],
                'onSuccess' : function( data ){

                    items.splice( pos, 1 );

                    // ---> Trigger 'remove' event
                    $( window ).trigger( 'basket.remove', [data] );

                },
                'onError'   : function(){
                }
            } );

        };

        // GetCounter ( ) : get a global cart counter: total, subtotal, items count, items subcount
        instance.getCounter = function(){

            var result = {
                total             : 0.00,
                totalNoFee        : 0.00,
                subtotal          : 0.00,
                count             : 0,
                subcount          : 0,
                delivery          : 0.00,
                discount          : 0.00,
                totalNoDiscounted : 0.00,
                shopcart          : {
                    balance       : 0.00,
                    subTotal      : 0.00,
                    totalDiscount : 0,
                    totalTaxes    : 0,
                    totalAmount   : 0.00,
                    quantity      : 0.00,
                    totalRounding : 0
                }
            };

            result.shopcart = shopCartCounter;
            result.total = parseFloat( counter.totalPrice );
            result.count = parseInt( counter.totalTicket );
            result.totalNoDiscounted = parseInt( counter.totalPriceNoDiscount );

            // WARN proceseed in back end (subtotal is calculate here)
            result.totalNoFee = parseFloat( counter.totalPriceNofee );

            for( var i = 0; i < items.length; i++ ) {

                if( items[i]['isDelivery'] ) {

                    result.delivery = result.delivery + ( parseFloat( items[i]['product']['price'] ) * parseInt( items[i]['quantity'] ) );

                }else if( items[i]['isCoupon'] ) {

                    result.discount = parseInt( counter.totalDiscount );

                }else if( !items[i]['isDelivery'] && !items[i]['isCoupon'] ) {

                    //try {
                    result.subtotal = result.subtotal + (parseFloat( items[i]['product']['price'] ) * parseInt( items[i]['quantity'] ));
                    result.subcount = result.subcount + parseInt( items[i]['quantity'] );
                    //} catch (e) {
                    //
                    //}
                }
            }

            return result;

        };

        // isEmpty ( )
        instance.isEmpty = function(){

            var delivery = instance.getCounter();

            delivery = delivery.count - delivery.subcount;

            if( delivery == items.length ) {

                return true;

            }else {

                return false;

            }

        };

        // Set Sibling (  )
        instance.setSibling = function( performanceId, productType, groupBy, index, list ){

            var param = {};

            // ---> Trigger 'before add' event
            $( window ).trigger( 'basket.before-add', [param, "UPDATE"] );

            param['performanceId'] = performanceId;
            param['productType'] = productType;
            param['groupBy'] = groupBy;
            param['sibling'] = index;
            param['list'] = list;

            // Add to cart via Ajax
            $.remotingService.execute( {
                'eventName' : 'cart.sibling',
                'params'    : [param],
                'onSuccess' : function( data ){

                    $( window ).trigger( 'basket.add', [data] );
                },
                'onError'   : function( error ){

                    $( window ).trigger( 'basket.error', [error] );
                }
            } );

        };

        /**
         * Reset method for basket
         */
        instance.resetBasket = function(){

            $.remotingService.execute( {
                'eventName' : 'cart.reset',
                'onSuccess' : function( resetData ){
                    items = resetData.list;
                    counter = resetData.counter;
                    shopCartCounter = resetData.shopCartCounter;
                    basket.build();
                },
                'onError'   : function(){
                }
            } );

        };

        /**
         * Validate basket
         */
        instance.validate = function( phase ){
            var param = {};
            param['validationPhase'] = phase;

            // triggers wait
            $.remotingService.execute( {
                'eventName' : 'basket.check',
                'params'    : [param],
                'onSuccess' : function(){
                    // triggers validation ok
                    $( window ).trigger( 'basket.validate-ok', [] );
                },
                'onError'   : function( error ){
                    var basketErrors = error['basket.error'];
                    for( var i = 0; i < basketErrors.length; i++ ) {
                        if( basketErrors[i].type === "EXIST_UPGRADABLE_ITEM" && basketErrors.length === 1 ) {
                            $( window ).trigger( 'basket.upgrade', [basketErrors[i]] );
                        }else {
                            $( window ).trigger( 'basket.error', [error] );
                        }
                    }
                }
            } );

        };

        return instance;

    }();

    /*
     * jQuery plugin definition
     */
    var defaults = {

        // Plugin element selector
        selector : {
            "total"      : ".jq-basket-total",
            "totalnofee" : ".jq-basket-totalnofee",
            "subtotal"   : ".jq-basket-subtotal",
            "delivery"   : ".jq-basket-delivery",
            "discount"   : ".jq-basket-discount",
            "coupon"     : ".jq-basket-coupon",
            "package"    : ".jq-basket-package",

            "itemList" : ".jq-basket-itemlist",
            "empty"    : ".jq-basket-empty",

            "item"             : ".jq-basket-item",
            "sibling"          : ".jq-basket-item-sibling",
            "quantity"         : ".jq-basket-item-quantity",
            "idProduct"        : ".jq-basket-item-id",
            "add"              : ".jq-basket-item-add",
            "addProduct"       : ".jq-basket-product-add",
            "remove"           : ".jq-basket-item-remove",
            "setSibling"       : ".jq-basket-item-set-sibling",
            "change"           : ".jq-basket-item-change",		//<-- Use this if you add or remove item with a combobox
            "changeConfirm"    : ".jq-basket-item-change-confirm",
            "changeAdd"        : ".jq-basket-item-change-add",    //<-- Use this if you add or remove item with a combobox  (don't use remove)
            "changeAddConfirm" : ".jq-basket-item-change-add-confirm",
            "submit"           : ".jq-basket-submit",
            "reset"            : ".jq-basket-reset"
        },

        amtTypes       : [],
        onAddZeroError : false,

        actionAddText    : 'Add',
        actionRemoveText : 'Remove',
        useconfirm       : false,
        destroy          : false,
        i18n             : {},
        context          : {},
        modifiers        : {
            total     : "",
            subtotal  : "",
            delivery  : "",
            row       : "",
            bodyempty : "",
            discount  : ""
        }

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
            var data = $this.data( 'basket' );

            if( !data ) {

                $this.data( 'basket', settings );

                //Build cart controller (UI elements that trigger some cart action, like 'add')
                helpers.basketControlFactory( $this );

                //Build cart custom event handler
                helpers.basketEventFactory( $this );

                // Initialize cart
                basket.init();

            }

            return $this;
        },

        /*
         * Basket add method
         */
        add : function( id, qty, performanceId, productType, groupBy ){

            basket.add( id, qty, performanceId, productType, groupBy );

        },

        /*
         * Basket remove method
         */
        remove : function( id, performanceId ){

            basket.remove( id, performanceId );

        },

        /*
         * Set sibling
         */
        setSibling : function( id, performanceId ){

            basket.setSibling();

        },

        /*
         * Basket total method
         */
        total : function(){

            return basket.getCounter();

        },

        /*
         * Basket isEmpty method
         */
        isEmpty : function(){

            return basket.isEmpty();

        },

        /*
         * Basket submit method
         */
        submit : function(){

            if( !basket.isEmpty() ) {

                // ...

            }

            return this;
        },

        /*
         *Reset basket method
         */
        resetBasket : function(){

            basket.resetBasket();
        },
        build       : function(){

            return basket.build();
        }

    };

    var helpers = {

        basketControlFactory : function( $inst ){

            var selector = $inst.data( 'basket' ).selector;

            //Bind the 'add to cart' button
            $( selector.add ).live( 'click', function(){

                var $item = $( this ).parents( selector.item );
                var id = $item.data( 'ticket' );
                var sibling = $item.find( selector.sibling ).val();
                var qty = $item.find( selector.quantity ).val();
                var performanceId = $item.data( 'performanceid' );
                var productType = $item.data( 'producttype' );
                var groupBy = $item.data( 'groupby' );

                if( sibling == 0 ) {
                    qty = 0;
                }else if( sibling == undefined ) {
                    sibling = 0;
                    if( $.donMap ) {
                        //if donation map is defined then we get the sibling from there
                        sibling = $.donMap[performanceId];
                    }
                }

                basket.add( id, qty, performanceId, productType, groupBy, sibling );

                return false;
            } );

            //Bind the 'add to cart' button for a product
            $( selector.addProduct ).live( 'click', function(){

                var $item = $( this ).parents( selector.item );
                var id = $item.find( selector.idProduct ).val();
                var sibling = $item.find( selector.sibling ).val();
                var qty = $item.find( selector.quantity ).val();
                var performanceId = $item.data( 'performanceid' );
                var productType = $item.data( 'producttype' );
                var groupBy = $item.data( 'groupby' );

                if( sibling == 0 ) {
                    qty = 0;
                }else if( sibling == undefined ) {
                    sibling = 0;
                    if( $.donMap ) {
                        //if donation map is defined then we get the sibling from there
                        sibling = $.donMap[performanceId];
                    }
                }

                basket.add( id, qty, performanceId, productType, groupBy, sibling );

                return false;
            } );

            //Bind the 'remove from cart' button
            //$( selector.remove ).live( 'click', function(){
            //
            //    var $item = $( this ).parents( selector.item );
            //    var id = $item.data( 'ticket' );
            //    var performanceId = $item.data( 'performanceid' );
            //    var uuid = $item.data( 'uuid' );
            //
            //    if( uuid != undefined && uuid != '' ) {
            //        basket.remove( uuid );
            //    }else {
            //        basket.remove( id, performanceId );
            //    }
            //
            //    return false;
            //} );

            //Bind the 'change quantity' button (usually a combobox)
            $( selector.change ).live( 'change', function( e ){
                var $change = $( this );

                var $item = $change.parents( selector.item );
                var id = $item.data( 'ticket' );
                var performanceId = $item.data( 'performanceid' );
                var qty = $change.val();
                var productType = $item.data( 'producttype' );
                var groupBy = $item.data( 'groupby' );
                var sibling = $item.data( 'sibling' );
                var uuid = $item.data( 'uuid' );
                var dataValue = $( this ).data( "value" );

                if( qty === "0" ) {
                    $( this ).siblings( selector.changeConfirm )[0].click();
                }else {

                    //Add to cart (change the quantity)
                    if( uuid != undefined && uuid != '' ) {
                        basket.add( uuid, qty );
                    }else {
                        basket.add( id, qty, performanceId, productType, groupBy, sibling );
                    }
                    $change.data( "value", qty );

                }

            } );

            // WARN this impl do not use remove item call
            // Bind the 'change quantity' button (usually a combobox) (could be also a check box)
            $( selector.changeAdd ).live( 'change', function( e ){
                var $change = $( this );

                var $item = $change.parents( selector.item );
                var id = $item.data( 'ticket' );
                var sibling = $item.find( selector.sibling ).val();
                var qty = 0;

                if( $change.data( 'fixedvalue' ) ) {
                    qty = $change.data( 'fixedvalue' );
                }else {
                    qty = $change.val();

                    if( !$.isNumeric( qty ) ) {

                        // it's a checkbox
                        if( this.checked ) {
                            qty = 1;
                        }else {
                            qty = 0;
                        }
                    }

                }

                var performanceId = $item.data( 'performanceid' );
                var productType = $item.data( 'producttype' );
                var groupBy = $item.data( 'groupby' );

                var uuid = $item.data( 'uuid' );

                // WARN new values not used by remove call
                var productType = $item.data( 'producttype' );

                // WARN siblings management
                if( sibling == 0 ) {
                    qty = 0;
                }else if( sibling == undefined ) {
                    sibling = 0;
                    if( $.donMap ) {
                        //if donation map is defined then we get the sibling from there
                        sibling = $.donMap[performanceId];
                    }
                }

                var confirmZero = $change.data( 'confirmzero' );
                if( typeof confirmZero === 'undefined' ) {
                    confirmZero = true;
                }
                if( (qty === 0 || qty === "0") && confirmZero ) {
                    $( this ).siblings( selector.changeAddConfirm )[0].click();
                }else {

                    //Add to cart (change the quantity)
                    if( uuid != undefined && uuid != '' ) {
                        basket.add( uuid, qty );
                    }else {
                        basket.add( id, qty, performanceId, productType, groupBy, sibling );
                    }
                    $change.data( "value", qty );

                }

            } );

            //Bind the 'set sibling' button
            $( selector.setSibling ).live( 'click', function(){

                var $item = $( this );
                var siblingList = $item.data( 'siblinglist' );
                var sibling = $item.filter( ":checked" ).val() == undefined ? 1 : 2;
                var performanceId = $item.data( 'performanceid' );
                var productType = $item.data( 'producttype' );
                var groupBy = $item.data( 'groupby' );

                basket.setSibling( performanceId, productType, groupBy, sibling, siblingList );

            } );

            //Bind the 'submit' button
            $( selector.submit ).live( 'click', function( e ){

                if( !basket.isEmpty() ) {
                    // get phase
                    var $item = $( this );
                    var phase = $item.data( 'phase' );

                    // validate only if phase definited or not empty
                    if( phase != undefined && phase != "" ) {
                        basket.validate( phase );
                        // WARN change page has to be done by bind to "validate.basket.ok" event, triggered by basket.validate
                        e.preventDefault();
                    }
                }

                return true;

            } );

            //change the button's text
            $( ".js-basket-item-sel select" ).live( 'change', function(){
                var selector = $( this );
                var parent = selector.parents( defaults.selector.item );
                var spanText = parent.find( ".js-basket-item-btn" ).find( ".jq-basket-item-add span" );
                var icon = parent.find( ".js-basket-item-btn" ).find( "i" );
                var qty = selector.val();

                if( qty == 0 && $( this ).attr( "data-value" ) != 0 ) {

                    spanText.text( defaults.actionRemoveText );

                }else {

                    spanText.text( defaults.actionAddText );

                }

            } );

        },

        basketEventFactory : function( $inst ){

            $( window ).unbind( 'basket.init.plugin' );
            $( window ).bind( 'basket.init.plugin', function( e, items ){

                helpers.refresh( $inst, items );

            } );

            $( window ).unbind( 'basket.add.plugin' );
            $( window ).bind( 'basket.add.plugin', function( e, items ){

                helpers.refresh( $inst, items );

            } );

            $( window ).unbind( 'basket.remove.plugin' );
            $( window ).bind( 'basket.remove.plugin', function( e, data ){

                //This is needed by refresh function: set quantity to 0 means remove the element.
                data.item['quantity'] = 0;

                helpers.refresh( $inst, data );

            } );

            $( window ).unbind( 'basket.error.plugin' );
            $( window ).bind( 'basket.error.plugin', function( e, error ){

                var errMessage = helpers.basketErrorBuilder( $inst, error );

                basket.build();

                $( window ).trigger( 'show.error', [errMessage, error] );

                return false;

            } );

            $( window ).unbind( 'basket.add-delivery.plugin' );
            $( window ).bind( 'basket.add-delivery.plugin', function( e, id, productType ){

                basket.add( id, 1, "", productType );

            } );

            $( window ).unbind( 'basket.reset.plugin' );
            $( window ).bind( 'basket.reset.plugin', function( e ){

                basket.resetBasket();

            } );

            $( window ).unbind( 'basket.remove-uuid.plugin' );
            $( window ).bind( 'basket.remove-uuid.plugin', function( e, data ){

                basket.add( data.item.uuid, data.item.quantity );

            } );

            $( window ).unbind( 'productlist.drawn.basket' );
            $( window ).bind( 'productlist.drawn.basket', function( e, params ){
                helpers.bindConfirms( $inst );
            } );

        },

        getTemplateHtml : function( $inst, templateName, data ){
            return Handlebars.renderTemplate( 'basket-' + templateName, data, $inst.data( 'basket' ).i18n, $inst.data( 'basket' ).context, $inst.data( 'basket' ).modifiers[templateName] );
        },

        bindConfirms : function( $inst ){

            var selector = $inst.data( 'basket' ).selector;

            $( selector.reset ).one( "click", function(){
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
                $( this ).on( 'confirm.reveal', function( e, params ){
                    //do remove
                    $( window ).trigger( 'basket.reset' );
                    $( ".reveal-modal" ).foundation( 'reveal', 'close' );
                } );
                $( this ).on( 'cancel.reveal', function( e, params ){
                    // do nothing
                } );
            } );

            $( selector.remove ).each( function(){

                $( this ).on( 'confirm.reveal', function( e, params ){

                    //do remove
                    var $item = $( this ).parents( selector.item );
                    var id = $item.data( 'ticket' );
                    var performanceId = $item.data( 'performanceid' );
                    var uuid = $item.data( 'uuid' );

                    if( uuid != undefined && uuid != '' ) {
                        basket.add( uuid, 0 );
                    }else {
                        basket.remove( id, performanceId );
                    }
                    $( ".reveal-modal" ).foundation( 'reveal', 'close' );

                } );
                $( this ).on( 'cancel.reveal', function( e, params ){

                    // do nothing

                } );

            } );

            $( selector.changeConfirm ).each( function(){

                $( this ).off( 'confirm.reveal' );
                $( this ).on( 'confirm.reveal', function( e, params ){

                    var changeItem = $( this ).siblings( selector.change );
                    var $item = changeItem.parents( selector.item );
                    var uuid = $item.data( 'uuid' );
                    var id = $item.data( 'ticket' );
                    var performanceId = $item.data( 'performanceid' );

                    if( uuid != undefined && uuid != '' ) {
                        basket.add( uuid, 0 );
                    }else {
                        basket.remove( id, performanceId );
                    }

                    $( ".reveal-modal" ).foundation( 'reveal', 'close' );

                } );

                $( this ).off( 'cancel.reveal' );
                $( this ).on( 'cancel.reveal', function( e, params ){

                    // do cancel
                    var changeItem = $( this ).siblings( selector.change );
                    changeItem.val( changeItem.data( "value" ) );
                } );

            } );

            $( selector.changeAddConfirm ).each( function(){

                $( this ).off( 'confirm.reveal' );
                $( this ).on( 'confirm.reveal', function( e, params ){

                    var changeItem = $( this ).siblings( selector.changeAdd );
                    var $item = changeItem.parents( selector.item );
                    var uuid = $item.data( 'uuid' );
                    var id = $item.data( 'ticket' );
                    var sibling = $item.find( selector.sibling ).val();
                    var qty = 0;

                    if( changeItem.data( 'fixedvalue' ) ) {
                        qty = changeItem.data( 'fixedvalue' );
                    }else {
                        qty = changeItem.val();

                        if( !$.isNumeric( qty ) ) {

                            // it's a checkbox
                            if( changeItem.checked ) {
                                qty = 1;
                            }else {
                                qty = 0;
                            }
                        }

                    }

                    var performanceId = $item.data( 'performanceid' );
                    var productType = $item.data( 'producttype' );
                    var groupBy = $item.data( 'groupby' );

                    // WARN siblings management
                    if( sibling == 0 ) {
                        qty = 0;
                    }else if( sibling == undefined ) {
                        sibling = 0;
                        if( $.donMap ) {
                            //if donation map is defined then we get the sibling from there
                            sibling = $.donMap[performanceId];
                        }
                    }

                    //do remove
                    if( uuid != undefined && uuid != '' ) {
                        basket.add( uuid, 0 );
                    }else {
                        basket.add( id, qty, performanceId, productType, groupBy, sibling );
                    }

                    $( ".reveal-modal" ).foundation( 'reveal', 'close' );

                } );

                $( this ).off( 'cancel.reveal' );
                $( this ).on( 'cancel.reveal', function( e, params ){

                    // do cancel
                    $( this ).siblings( selector.changeAdd ).val( $( this ).siblings( selector.changeAdd ).data( "value" ) );

                } );

            } );

        },

        refresh : function( $inst, data ){

            var selector = $inst.data( 'basket' ).selector;
            var $itemList = $inst.find( selector.itemList );

            var $item = null;
            var counter = basket.getCounter();
            var items = data.list;
            var item = null;
            var couponCode = "";
            var promoPackage = data.promoPackage;

            counter.subtotal = parseFloat( data.counter.totalPriceNoDiscount );
            counter.count = parseInt( data.counter.totalTicket );
            counter.total = parseFloat( data.counter.totalOrder );
            counter.discount = parseFloat( data.counter.totalDiscount );

            if( data.item != undefined ) {
                item = data.item;
            }

            // ******************************************************************
            // Inline Basket
            if( $inst.data( 'basket' ).modifiers.row !== "empty" ) {

                if( !$.isArray( items ) ) {

                    items = [items];

                }

                // Remove an item
                if( item != null ) {
                    if( !(item['isDelivery'] || item['isCoupon']) ) {

                        var perf = item['performanceList'].length > 0 ? item['performanceList'][0]['performanceId'] : 0;

                        //try {
                        //Get the selected item jQuery reference. Use productId and performanceId to get it!
                        $item = $itemList.find( selector.item +
                                "[data-uuid='" + item['hashCode'] + "']" );

                        if( $item.length && item['quantity'] === 0 ) {

                            $item.remove();

                        }
                        else {

                            $item.replaceWith( helpers.getTemplateHtml( $inst, "row", item ) );

                        }
                    }
                }

                for( var i = 0; i < items.length; i++ ) {
                    // Show single item in the cart

                    if( !(items[i]['isDelivery'] || items[i]['isCoupon']) ) {

                        var perf = items[i]['performanceList'].length > 0 ? items[i]['performanceList'][0]['performanceId'] : 0;

                        //Get the selected item jQuery reference. Use productId and performanceId to get it!
                        $item = $itemList.find( selector.item +
                                "[data-uuid='" +
                                items[i]['hashCode'] +
                                "']" );

                        if( !$item.length ) {

                            $itemList.append( helpers.getTemplateHtml( $inst, "row", items[i] ) );

                        }

                    }else if( items[i]['isCoupon'] ) {

                        couponCode = items[i]['product']['internalCode'];
                        $inst.couponCode = couponCode;

                    }
                }

                if( counter.count === 0 ) {

                    $itemList.html( helpers.getTemplateHtml( $inst, "bodyempty", counter ) );

                }

            }
            $( selector.package ).html( helpers.getTemplateHtml( $inst, "package", promoPackage ) );
            //Update cart totals

            $( selector.total ).html( helpers.getTemplateHtml( $inst, "total", counter ) );
            $( selector.subtotal ).html( helpers.getTemplateHtml( $inst, "subtotal", counter ) );
            $( selector.delivery ).html( helpers.getTemplateHtml( $inst, "delivery", counter ) );
            $( selector.discount ).html( helpers.getTemplateHtml( $inst, "discount", counter ) );
            $( selector.totalnofee ).html( helpers.getTemplateHtml( $inst, "totalnofee", counter ) );

            if( counter.discount > 0 ) {

                $( selector.coupon ).attr( 'value', couponCode );

            }

            if( counter.count === 0 ) {
                // Show message empty basket
                $itemList.html( helpers.getTemplateHtml( $inst, "bodyempty", counter ) );
                // Show a not applicable discount message
                counter.discount = 0;
                counter.delivery = 0;
                counter.total = 0;

                $( selector.total ).html( helpers.getTemplateHtml( $inst, "total", counter ) );
                $( selector.delivery ).html( helpers.getTemplateHtml( $inst, "delivery", counter ) );
                $( selector.discount ).html( helpers.getTemplateHtml( $inst, "discount", counter ) );

            }

            helpers.bindConfirms( $inst );

        },

        basketErrorBuilder : function( $inst, error ){

            /*
             * Supported error type : "QUANTITY", "AVAILABILITY", "FAM", "CAT", "PROD", "PERF"
             * Error object is { type: "", maxQuantity: "" }
             */

            var result = "";
            if( error ) {
                if( error['basket.error'] ) {
                    var basketErrors = error['basket.error'];

                    // intercept errors dedicated to a basket interaction
                    for( var i in basketErrors ) {
                        var key = basketErrors[i]['type'] || '';
                        if( basketErrors[i].validationMessageKey ) {
                            //newest validators
                            key = basketErrors[i].validationMessageKey;
                        }else {
                            // "old style" validators
                            if( basketErrors[i].code ) {
                                key = key + "_" + basketErrors[i].code;
                            }
                        }
                    }
                    var msg = $.fn.modalerror.getErrorLabel( key );
                    if( msg ) {
                        //exit on first error with a message
                        result = Handlebars.compile( msg )( basketErrors[i] );
                        return result;
                    }
                    //generic message if we do not exit above
                    return $.fn.modalerror.getErrorLabel( "DEFAULT" );
                }
            }
            return result;

        }

    };

    $.fn.basket = function( method ){

        if( methods[method] ) {
            return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ) );
        }else if( typeof method === 'object' || !method ) {
            return methods.init.apply( this, arguments );
        }else {
            $.error( 'Method ' + method + ' does not exist on jQuery.basket' );
        }

    };

})( jQuery );