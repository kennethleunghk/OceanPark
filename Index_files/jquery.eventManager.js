/**
 * Created by stefano on 21/06/13.
 */

(function( $ ){
    var defaults = {
        remoteEvent     : "event.read",
        defaultLocation : "calendar",  //if no configuration found, should be home or missing event
        lang            : "en-GB",
        pageMatrix      : {
            "halloween" : "urlvalue",
            "calendar"  : "calendarvalue"
        },
        imgRegExp       : "(http|https|\/repository\/).*(?:png|jpg|gif)",
        manageLocation  : true
    };

    var methods = {

        init : function( options ){

            $.extend( defaults, defaults, options );

            return this;
        },

        setEvent : function( event ){

            $.remotingService.execute( {

                'eventName' : defaults.remoteEvent,
                'params'    : [
                    {
                        "eventCode" : event
                    }
                ],
                'onSuccess' : function( data ){

                    if( defaults.manageLocation ) {
                        var returnedHandler;
                        if( data.eventConfig ) {
                            returnedHandler = data.eventConfig.eventHandler;
                        }
                        var returnUrl = defaults.pageMatrix[returnedHandler];

                        if( !returnUrl ) {
                            $( location ).attr( 'href', defaults.defaultLocation );
                            return;
                        }

                        var expr = new RegExp( (returnUrl).replace( /[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&" ) );
                        if( !expr.test( $( location ).attr( 'href' ) ) ) {
                            var oldLoc = $( location ).attr( 'href' );
                            var newLoc = oldLoc;
                            $.each( defaults.pageMatrix, function(){
                                newLoc = newLoc.replace( this, returnUrl );
                            } );
                            //change only if changed
                            if( newLoc === oldLoc ) {
                                $( location ).attr( 'href', defaults.defaultLocation );
                                return;
                            }else {
                                $( location ).attr( 'href', newLoc );
                                return;
                            }

                        }
                    }
                    $( window ).trigger( 'eventmanager.changed', data );

                },
                'onError'   : function( error ){
                    $( window ).trigger( 'eventmanager.error', error );
                    $( window ).trigger( 'show.error', ['', error] );
                }
            } );
        },

        isValidImageUrl : function( imageSourceUrl ){
            var imgRegExp = new RegExp( defaults.imgRegExp );
            return imgRegExp.test( imageSourceUrl );
        },
        urlExists       : function( url, callback ){
            $.ajax( {
                type    : 'GET',
                url     : url,
                success : function(){
                    callback( true );
                },
                error   : function(){
                    callback( false );
                }
            } );
        }

    };

    $.fn.eventManager = function( method ){
        if( methods[method] ) {
            return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ) );
        }else if( typeof method === 'object' || !method ) {
            return methods.init.apply( this, arguments );
        }else {
            return null;
        }
    };

}( jQuery ));