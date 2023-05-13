/**
 * Created by stefano on 05/01/16.
 */

(function( $ ){
    var opts = {};

// Plugin definition.
    $.fn.modalerror = function( options ){
        opts = $.extend( true, {}, $.fn.modalerror.defaults, options );
        keysToLowerCase( opts.errorlabels );
        init();
    };

    // Plugin defaults – added as a property on our plugin function.
    $.fn.modalerror.defaults = {
        errorlabels : {},
        i18n        : {},
        context     : {},
        modifiers   : {
            "modalerror" : ""
        },
        qtip        : {
            title : {
                text   : "Title",
                button : "Close"
            },
            style : {
                classes : 'qtip-basket qtip-shadow',
                tip     : {
                    corner : true
                }
            }
        }
    };

    //private functions

    function keysToLowerCase( obj ){
        var keys = getKeys( obj );
        var n = keys.length;
        var lowKey;
        while( n-- ) {
            var key = keys[n];
            if( key === (lowKey = key.toLowerCase()) ) {
                continue;
            }
            obj[lowKey] = obj[key];
            delete obj[key];
        }
        return (obj);
    }

    function getKeys( obj ){
        var a = [];
        $.each( obj, function( k ){
            a.push( k );
        } );
        return a;
    }

    function showModalError( message, errorData ){

        var compiledMessage = Handlebars.compile( message )( errorData ); //compile message for variables substitution

        var modalBody = Handlebars.renderTemplate( 'modalerror', {message : compiledMessage}, opts.i18n, opts.context, opts.modifiers.modalerror );

        //hide all qtips before modal
        $( '.qtip.ui-tooltip' ).qtip( 'hide' );
        //stop any spinner before modal
        $( '.spinner' ).parent().spin( false );

        var qtip_target = $( window );
        if( navigator.userAgent.indexOf( "Edge" ) != -1 ) {
            qtip_target = $( window );
        }else if( navigator.userAgent.indexOf( "Chrome" ) != -1 || navigator.userAgent.indexOf( "Safari" ) != -1 ) {
            qtip_target = $( document.body )
        }

        $( '<div />' ).qtip( {
            events: {
                visible: function(event, api) {
                    $( window ).trigger( 'modalerror.shown', errorData );
                }
            },
            content  : {
                text  : modalBody,
                title : {
                    text   : opts.qtip.title.text,
                    button : opts.qtip.title.button
                }
            },
            position : {
                at       : "center",
                my       : "center",
                viewport : $( window ),
                target   : qtip_target
            },
            adjust   : {
                // x:-60,
                y      : -100,
                //resize: true,
                screen : true    // Keep the tooltip on-screen at all times
                //method: 'shift none'
            },
            show     : {
                ready : true,
                modal : {
                    on : true
                }
            },
            hide     : false,
            style    : opts.qtip.style
        } );
    }

    function init(){

        $( window ).on( "error", function( e ){
            //any pure js error
            var message = $.fn.modalerror.getErrorLabel( 'BrowserError' );
            showModalError( message, {} );
        } );

        //msg is a "premade" message
        //error is either a validation error or a remote system error
        $( window ).bind( 'show.error', function( e, msg, error ){

            var message = $.fn.modalerror.getErrorLabel( 'GenericError' );
            if( msg !== undefined && msg !== null && msg !== '' ) {
                message = msg;
            }else {
                if( error ) {
                    //error with type is a validation error
                    if( error.type ) {
                        if( $.fn.modalerror.getErrorLabel( error.type ) ) {
                            message = $.fn.modalerror.getErrorLabel( error.type );
                        }
                    }else {
                        //error with errorCode is a remote error
                        if( error.errorCode ) {
                            if( $.fn.modalerror.getErrorLabel( error.errorCode ) ) {
                                message = $.fn.modalerror.getErrorLabel( error.errorCode );
                            }
                        }
                    }
                }
            }
            showModalError( message, error );
        } );

    }

    //public functions
    $.fn.modalerror.getErrorLabels = function(){
        return opts.errorlabels;
    };

    $.fn.modalerror.getErrorLabel = function( key ){
        return opts.errorlabels [key.toLowerCase()];
    };

    // End of plugin.
}( jQuery ));