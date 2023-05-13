/**
 * Created on 8/8/13.
 */

(function( $ ){
    var cdManager = function(){
        var instance = {};
        instance.init = function(){
        };
        return instance;
    }();

    var defaults = {
        timer      : ".jq-basket-float-minimalcd",
        expireData : {
            activecd    : false,
            showcd      : false,
            layout      : "",
            description : "",
            animated    : true,
            remSeconds  : 9999
        }
    };

    var methods = {
        init : function( options ){
            var settings = $.extend( defaults, defaults, options );
            var $this = this;
            helpers.cdManagerEventFactory( $this );
            cdManager.init();
            return $this;
        }
    };

    var helpers = {
        cdManagerEventFactory : function( $inst ){

            $( window ).bind( 'init.basket', function( e, params ){
                if( params.timerEnabled == true ) {
                    //has it started? is it positive?
                    if( params.timeStarted == true && params.expiry > 0 ) {
                        $( defaults.timer ).countdown( {
                            until       : params.expiry + 's',
                            compact     : true,
                            layout      : defaults.expireData.layout,
                            description : defaults.expireData.description,
                            expiryUrl   : $( location ).attr( 'href' )
                        } );
                    }
                }
            } );

            $( window ).bind( 'add.basket', function( e, params ){
                if( params.timerEnabled == true ) {
                    //has it started? is it positive?
                    if( params.timeStarted == true && params.expiry > 0 ) {
                        $( defaults.timer ).countdown( {
                            until       : params.expiry + 's',
                            compact     : true,
                            layout      : defaults.expireData.layout,
                            description : defaults.expireData.description,
                            expiryUrl   : $( location ).attr( 'href' )
                        } );
                    }
                }
            } );

            $( window ).bind( 'reset.basket', function( e, params ){
                $( defaults.timer ).countdown( 'destroy' );
            } );

        }
    };

    $.fn.cdManager = function( method ){
        if( methods[method] ) {
            return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ) );
        }else if( typeof method === 'object' || !method ) {
            return methods.init.apply( this, arguments );
        }else {
            $.error( 'Method ' + method + ' does not exist on jQuery.countdown.manager' );
        }
    };
})( jQuery );
