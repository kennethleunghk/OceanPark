/*
 * jQuery 'remotingService' Function v1.1.0
 *
 * Copyright (c) 2011, Simone Morlacchini
 * Licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * $Date: 2011-04-20 15:07:42 +0200 (Wed, 20 Apr 2011) $
 * $Rev: 5120 $
 */

(function( $ ){

    var opts = {};
    var defaults = {
        'servicePage'       : "RemotingService.cfc?method=doJson",
        'appbasepath'       : "",
        'ajaxRequestFormat' : "json",	// required. Default: json
        'eventName'         : "",		// required
        'timeout'           : 30000
    };

    function getParams( options ){
        var _data = {};

        // This are required parameters
        _data.eventName = options.eventName;

        // Add additional parameters
        var params = null;
        var p = null;
        if( options.params ) {

            for( var i = 0; i < options.params.length; i++ ) {

                params = options.params[i];

                for( p in params ) {

                    if( !_data[p] ) {

                        _data[p] = params[p];

                    }else {

                        _data[p] = _data[p] + "," + params[p];

                    }

                }

            }
        }
        return _data;
    }

    //init plugin
    $.remotingService = function( options ){

        opts = $.extend( true, {}, defaults, options );

    };

    //private functions
    function executeCommon( options ){

        if( options.eventName ) {
            $.ajax( {
                type     : "POST",
                url      : opts.appbasepath + opts.servicePage,
                data     : getParams( options ),
                dataType : opts.ajaxRequestFormat,
                timeout  : opts.timeout,
                async    : options.async,

                // Handle 'SUCCESS'
                success : function( data ){
                    // ******************************************************

                    var api = data.api;

                    var hasFailure = false;

                    if( data.failure ) {
                        if( data.failure.errorUUID !== '' ) {
                            hasFailure = true;
                        }
                    }

                    if( hasFailure ) {
                        options.onError( data.failure );
                    }else {

                        if( api.status ) {
                            //onSuccess callback
                            options.onSuccess( api.result );

                        }else {
                            //validation errors
                            //onError callback
                            options.onError( api.error );
                        }
                    }

                },
                // Handle 'ERROR'
                error   : function( jqXHR, textStatus, errorThrown ){
                    // ******************************************************
                    // Once done, the request to an event will be deleted
                    // context[callId] = null;

                    var error = errorThrown || jqXHR.statusText;

                    options.onError( error );
                }

            } );
        }
    }

    //public functions
    $.remotingService.execute = function( options ){
        options.async = true;
        executeCommon( options );
    };

    $.remotingService.getAppbasepath = function(){
        return opts.appbasepath;
    };

    $.remotingService.executeSync = function( options ){
        options.async = false;
        executeCommon( options );
    };

})( jQuery );