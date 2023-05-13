// Create closure.
(function( $ ){
    var opts = {};

// Plugin definition.
    $.fn.biscuits = function( options ){
        opts = $.extend( true, {}, $.fn.biscuits.defaults, options );

        opts.prefix = opts.prefix.toUpperCase();
        initBinds();
    };

    // Plugin defaults – added as a property on our plugin function.
    //Cookie default time is "session" until the browser closes
    $.fn.biscuits.defaults = {
        lastLocation : {
            fallback : "",
            name     : "lastLocation"
        },
        navigation   : {
            name      : "navigation",
            page      : "",
            eventCode : ""
        },
        landing      : {
            name     : "LANDING",
            fallback : ""
        },
        attributes   : {
            path   : "/",
            domain : "",
            secure : true
        },
        prefix       : ""
    };

    //private functions

    function initBinds(){

        $( window ).unbind( 'eventmanager.changed.biscuit' );
        $( window ).bind( 'eventmanager.changed.biscuit', function( e, params ){
            if( params.eventInfo ) {
                if( params.eventInfo.locationCode ) {
                    updateLocationCookie( params.eventInfo.locationCode, true );
                }
            }
            if( params.eventConfig ) {
                updateNavigationCookie( params.eventConfig.eventHandler, params.eventCode, true );
            }
        } );

        $( window ).unbind( 'calendar.performanceselect.biscuit' );
        $( window ).bind( 'calendar.performanceselect.biscuit', function( e, params ){
            if( params.performanceData ) {
                if( params.performanceData.locationCode ) {
                    updateLocationCookie( params.performanceData.locationCode, true );
                }
            }
        } );

        $( window ).unbind( 'setnavigationonload.biscuit' );
        $( window ).bind( 'setnavigationonload.biscuit', function( e, params ){
            updateNavigationCookie( params.eventHandler, params.eventCode, true );
        } );

    }

    function getCookieName( cookieConfig ){
        return opts.prefix + "_" + cookieConfig.name;
    }

    function updateLocationCookie( locationCode, doTrigger ){
        if( locationCode ) {
            Cookies.set( getCookieName( opts.lastLocation ), locationCode, opts.attributes );
            if( doTrigger ) {
                triggerBiscuit( getCookieName( opts.lastLocation ) );
            }
        }
    }

    function updateNavigationCookie( page, eventCode, doTrigger ){
        if( page && eventCode ) {
            var value = {"page" : page, "eventCode" : eventCode};
            Cookies.set( getCookieName( opts.navigation ), value, opts.attributes );
            if( doTrigger ) {
                triggerBiscuit( getCookieName( opts.navigation ) );
            }
        }
    }

    function updateLandingCookie( landing, doTrigger ){
        if( landing ) {
            Cookies.set( getCookieName( opts.landing ), landing, opts.attributes );
            if( doTrigger ) {
                triggerBiscuit( getCookieName( opts.landing ) );
            }
        }
    }

    function triggerBiscuit( cookieName ){
        $( window ).trigger( 'biscuit.' + cookieName, Cookies.get( cookieName ) );

    }

    function removeBiscuit( cookieName ){
        Cookies.remove( cookieName, opts.attributes );
    }

    //public functions
    $.fn.biscuits.getLastLocation = function( options ){
        var value = Cookies.get( getCookieName( opts.lastLocation ) );
        if( value ) {
            return value;
        }else {
            updateLocationCookie( opts.lastLocation.fallback, false );
            return Cookies.get( getCookieName( opts.lastLocation ) );
        }
    };

    $.fn.biscuits.resetLastLocation = function(){
        removeBiscuit( getCookieName( opts.lastLocation ) );
        $.fn.biscuits.getLastLocation();
        triggerBiscuit( getCookieName( opts.lastLocation ) );
    };

    $.fn.biscuits.getNavigation = function( options ){
        var value = Cookies.getJSON( getCookieName( opts.navigation ) );
        if( value ) {
            return value;
        }else {
            updateNavigationCookie( opts.navigation.page, opts.navigation.eventCode, false );
            return Cookies.getJSON( getCookieName( opts.navigation ) );
        }
    };

    $.fn.biscuits.resetNavigation = function(){
        removeBiscuit( getCookieName( opts.navigation ) );
        $.fn.biscuits.getNavigation();
        triggerBiscuit( getCookieName( opts.navigation ) );
    };

    $.fn.biscuits.getLanding = function( options ){
        var value = Cookies.get( getCookieName( opts.landing ) );
        if( value ) {
            return value;
        }else {
            updateLandingCookie( opts.landing.fallback, false );
            return Cookies.get( getCookieName( opts.landing ) );
        }
    };

    $.fn.biscuits.resetLanding = function(){
        removeBiscuit( getCookieName( opts.landing ) );
        $.fn.biscuits.getLastLocation();
        triggerBiscuit( getCookieName( opts.landing ) );
    };

    $.fn.biscuits.resetAll = function(){
        $.fn.biscuits.resetLanding();
        $.fn.biscuits.resetLastLocation();
        $.fn.biscuits.resetNavigation();
    };

// End of plugin.
})( jQuery );