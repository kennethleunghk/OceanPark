// Create closure.
(function( $ ){
    var opts = {};
    var data = {};
// Plugin definition.
    $.fn.calendar = function( options ){
        data = {};
        opts = $.extend( true, {}, $.fn.calendar.defaults, options );
        return this;
    };

    // Plugin defaults – added as a property on our plugin function.
    $.fn.calendar.defaults = {

        url                   : {
            eventCode : "",
            eventDate : ""
        },
        cart                  : {
            lastPerfDate : "",
            lastEvent    : ""
        },
        event                 : {
            eventInfo   : {},
            eventConfig : {}
        },
        listEvent             : "date.list",
        unavailableAfterFirst : false,
        dateListFull          : false,  //used for retrieval of performances for all dates
        i18n                  : {},
        context               : {},
        availabilityRange     : [],
        performanceTipType    : "",
        modifiers             : {
            "perflist"      : "",
            "perflistempty" : ""
        },
        group                 : "",
        tooltipHook           : "",
        perf                  : {
            listSelector  : "",
            boxSelector   : "",
            clickSelector : "",
            tipSelector   : "",
            hastabs       : false,
            tabSelector   : ""
        },
        spinner               : {
            selector : ".datepicker",
            color    : "#84888C",
            size     : "larger"
        },
        selector              : {
            datepicker : ".datepicker",
            calendar   : "#calendar-widget"
        }

    };

    $.fn.calendar.getOpts = function(){
        return opts;
    };

    $.fn.calendar.init = function(){
        return initCalendar();
    };

    //init stuff, privates
    function initCalendar(){
        data.firstclick = true;
        data.performances = null;
        data.discountUICodes = null;
        data.rollingDiscountListUI = null;
        data.dateList = null;
        data.capacity = null;
        data.availabilityObj = {};
        initDatePicker();

    }

    function initDatePicker(){

        var urlDate = moment( opts.url.eventDate );

        var isUrlDateValid = urlDate.isValid() && moment( urlDate ).isAfter( moment().subtract( 1, 'days' ) );
        //Build jQuery UI DatePicker
        $( opts.selector.datepicker ).datepicker( {
            'firstDay'    : moment.localeData().firstDayOfWeek(),
            'dateFormat'  : $.datepicker.ISO_8601,
            'defaultDate' : isUrlDateValid ? opts.url.eventDate : null,
            'isRTL'       : opts.isRTL,
            'dayNamesMin' : moment.weekdaysMin(),
            'monthNames'  : moment.months(),
            'onSelect'    : function( dateText, inst ){
                //calendar date click by user

                if( !data.firstclick ) { //condition to avoid first click made by datepicker
                    //Save selectedDate inside the object
                    refreshPerformanceList();

                    $( window ).trigger( 'calendar.tooltip' );
                }

            },

            'onChangeMonthYear' : function( year, month, inst ){

                var dp = $( opts.selector.datepicker );
                dp.data( "month", month );
                dp.data( "year", year );

                initCalendarDates( year, month );

            },

            'beforeShowDay' : function( date ){

                return isDateValid( date );
            }
        } );

        //set defaults
        var dp = $( opts.selector.datepicker );
        dp.data( "month", "" );
        dp.data( "year", "" );

        $( window ).unbind( 'calendar.clickdate.plugin' );
        $( window ).bind( 'calendar.clickdate.plugin', function( e, params ){
            //trigger first automated click only
            setCalendarDate( params );

        } );

        $( window ).unbind( 'calendar.beforedatelist.plugin' );
        $( window ).bind( 'calendar.beforedatelist.plugin', function( e, params ){
            emptyPerformanceList( [] );
        } );

        $( window ).unbind( 'calendar.show.plugin' );
        $( window ).bind( 'calendar.show.plugin', function( e, params ){
            $( opts.selector.datepicker ).find( '.ui-state-highlight' ).removeClass( 'ui-state-highlight ui-state-active' );
            $( opts.selector.datepicker ).find( '.ui-datepicker-days-cell-over' ).removeClass( 'ui-datepicker-days-cell-over ui-datepicker-current-day ui-datepicker-today' );
        } );

        $( window ).unbind( 'calendar.performancesdrawn.plugin' );
        $( window ).bind( 'calendar.performancesdrawn.plugin', function( e, params ){

            if( params.performances.length > 1 ) {
                $( opts.perf.boxSelector ).show();
            }else if( !(opts.event.eventConfig.showSinglePerformance) || params.performances[0]['perfTime'] === "06:00" ) {
                $( opts.perf.boxSelector ).hide();
            }else {
                $( opts.perf.boxSelector ).show();
            }

            if( params.performances.length > 0 ) {
                setTimeAvailability();
                refreshPerformanceTip();
            }

            //bind click single perf
            var linkList = $( opts.perf.clickSelector );

            if( opts.perf.hastabs ) {
                $( opts.perf.tabSelector ).on( 'toggled', function( event, tab ){
                    var $perf = tab.children( 'a' );
                    var performanceId = $perf.data( 'performanceid' );

                    var selectedPerformance = null;

                    for( var i = 0; i < params.performances.length; i++ ) {

                        if( params.performances[i].performanceId === performanceId ) {
                            selectedPerformance = params.performances[i];
                            break;
                        }
                    }

                    $( window ).trigger( 'calendar.performanceselect', {
                        "date"          : params.selectedDate,
                        performanceData : selectedPerformance
                    } );

                    return false;
                } );
            }else {
                linkList.off( 'click' );
                linkList.on( 'click', function(){
                    var $this = $( this );

                    linkList.removeClass( 'selected' );
                    linkList.parent().removeClass( 'selected' );
                    $this.addClass( 'selected' );
                    $this.parent().addClass( 'selected' );

                    var performanceId = $this.data( 'performanceid' );

                    var selectedPerformance = null;

                    for( var i = 0; i < params.performances.length; i++ ) {

                        if( params.performances[i].performanceId === performanceId ) {
                            selectedPerformance = params.performances[i];
                            break;
                        }
                    }

                    $( window ).trigger( 'calendar.performanceselect', {
                        "date"          : params.selectedDate,
                        performanceData : selectedPerformance
                    } );

                    return false;
                } );
            }

            $( window ).trigger( 'calendar.performanceready', {
                "opts" : params.opts
            } );

        } );

        var queryMonth = moment().month();
        var queryYear = moment().year();
        if( isUrlDateValid ) {
            queryMonth = urlDate.month();
            queryYear = urlDate.year();
        }

        initCalendarDates( queryYear, queryMonth + 1 );

    }

    function setCalendarDate( params ){

        data.firstclick = false;
        var toClick = false;
        if( opts.event.eventConfig.showDefaultDateTicket === true ) {
            toClick = true;
        }
        if( params.isFirstAvailable === false && opts.event.eventConfig.showDefaultDateTicket === false ) {
            toClick = true;
        }
        if( toClick ) {

            if( params.date ) {
                $( opts.selector.datepicker ).datepicker( "setDate", params.date );
                //we have click control!!
                $( ".ui-datepicker-current-day a" ).trigger( 'click' );
            }

            $( window ).trigger( 'calendar.aftersetdate', params );
        }
    }

    function isDateValid( date ){

        var performances = data.performances || null;
        var availability = data.availabilityObj || null;
        var performanceId = "";
        var perf = "";

        if( !performances ) {
            return [false, ''];
        }else {
            var formattedDate = $.datepicker.formatDate( 'yy-mm-dd', date );
            if( performances[formattedDate] ) {

                perf = performances[formattedDate];
                performanceId = perf[0].performanceId;

                if( !availability[performanceId] ) {
                    return [true, ''];
                }else {
                    return getDayAvailability( formattedDate );
                }

            }else {
                return [false, ''];
            }
        }

    }

    /*
     * Return the CSS class to show availability information on the calendar
     * The information is an average on all the day's performances
     */
    function getDayAvailability( formattedDate ){
        if( data.discountUICodes[formattedDate] ) {
            return [true, "discount_" + data.discountUICodes[formattedDate]];
        }
        if( opts.event.eventConfig.unlimitedCapacity === true ) {
            return [true, ""];
        }
        
        var perf = data.performances[formattedDate];
        var dayPercent;
        var dayAvailable = 0;
        var dayTotal = 0;
        var percAvailable = 0;
        if( perf.length > 0 ) {
            for( var i = 0; i < perf.length; i++ ) {
                var perfAvailability = Handlebars.helpers['calendar.getPerformanceAvailibility'].apply( this, [perf[i].performanceId] );
                dayAvailable += perfAvailability.available;
                dayTotal += perfAvailability.total;
                percAvailable = (dayAvailable / dayTotal) * 100;
                //percAvailable between 0 and 1, ie there is at least a ticket still available
                if( percAvailable < 1 && percAvailable >0 ) {
                    percAvailable = 1;
                }
                dayPercent = dayAvailable === 0 ? 0 : parseInt( percAvailable );
            }
            return [true, opts.tooltipHook + " " + Handlebars.helpers['calendar.getPerformanceRange'].apply( this, [dayPercent] ).style];
        }else {
            return [false, ''];
        }
    }

    var getPerformanceAvailibility = function( performanceId, seatCategoryLink ){

        if( performanceId ) {
            var availability = data.availabilityObj || null;
            var perfAvailability = availability[performanceId];
            var available = perfAvailability.available;
            var total = perfAvailability.total;

            if( seatCategoryLink ) {
                for( var i = 0; i < perfAvailability.seatCategoryList.length; i++ ) {
                    if( perfAvailability.seatCategoryList[i].productLink === seatCategoryLink ) {
                        available = perfAvailability.seatCategoryList[i].available;
                        total = perfAvailability.seatCategoryList[i].total;
                        break;
                    }

                }
            }

            if( opts.unavailableAfterFirst ) {
                if( available !== total ) {
                    available = 0;
                }
            }

            /* To fix negative capacities: when available > total we use available as total */
            if( available > total ) {
                total = available;
            }

            var unlimited = opts.event.eventConfig.unlimitedCapacity;
            var percAvailable = (available / total) * 100;
            //percAvailable between 0 and 1, ie there is at least a ticket still available
            if( percAvailable < 1 && percAvailable >0 ) {
                percAvailable = 1;
            }

            var percent = available === 0 ? 0 : parseInt( (available / total) * 100 );

            return {
                "total"         : total, "available" : available, "percent" : percent, "unlimited" : unlimited,
                "performanceId" : performanceId, "seatCategoryLink" : seatCategoryLink
            };
        }else {
            return "";
        }
    };

    Handlebars.registerHelper( 'calendar.getPerformanceAvailibility', getPerformanceAvailibility );

    var getSeatCategory = function( performanceId, seatCategoryLink ){
        var availability = data.availabilityObj || null;
        var perfAvailability = availability[performanceId];
        var defaultResult = {
            "envelopeId"       : 0,
            "productLink"      : 0,
            "seatCategoryCode" : "",
            "total"            : 0,
            "seatCategoryId"   : 0,
            "available"        : 0
        };

        if( seatCategoryLink ) {
            for( var i = 0; i < perfAvailability.seatCategoryList.length; i++ ) {
                if( perfAvailability.seatCategoryList[i].productLink === seatCategoryLink ) {
                    return perfAvailability.seatCategoryList[i];
                }

            }
        }

        return defaultResult;
    };

    Handlebars.registerHelper( 'calendar.getSeatCategory', getSeatCategory );

    var getPerformanceRange = function( percentage ){
        var range = opts.availabilityRange;
        var result;

        for( var i = 0; i < range.length; i++ ) {
            if( percentage <= range[i].max && percentage >= range[i].min ) {
                result = range[i];
            }
        }

        return result;
    };

    Handlebars.registerHelper( 'calendar.getPerformanceRange', getPerformanceRange );

    function initCalendarDates( year, month ){

        $( window ).trigger( 'calendar.beforedatelist', {
            "event" : opts.event,
            "month" : month,
            "year"  : year
        } );

        //year and month paramers are the "dateFrom"
        $( opts.spinner.selector ).spin( opts.spinner.size, opts.spinner.color );
        $.remotingService.execute( {
            'eventName' : opts.listEvent,
            'params'    : [
                {
                    "year"      : year,
                    "month"     : month,
                    "group"     : opts.group,
                    "eventCode" : opts.event.eventInfo.eventCode
                }
            ],
            'onSuccess' : function( dates ){

                var dp = $( opts.selector.datepicker );

                var matchDate = false;

                var calendarYear = dp.data( "year" );
                var calendarMonth = dp.data( "month" );
                if( calendarYear && calendarMonth ) {
                    if( dates.year === calendarYear && dates.month === calendarMonth ) {
                        matchDate = true;
                    }
                }else {
                    matchDate = true;
                }

                if( matchDate ) {

                    //Store performances and refresh datepicker
                    var performances = {};
                    var discountUICodes = {};
                    var rollingDiscountListUI = [];
                    var firstAvailableDate = "";

                    var showCalendar = dates.showCalendar;
                    if( dates.dateList !== undefined ) {
                        if( dates.dateList.length > 0 ) {
                            firstAvailableDate = dates.dateList[0].date;
                        }

                        for( var dateIndex in  dates.dateList ) {
                            var currentDate = dates.dateList[dateIndex];
                            var perfIds = (currentDate.performanceListIds + "").split( "," );
                            var perfArray = [];
                            for( var perfIndex in perfIds ) {
                                perfArray.push( dates.performanceList[perfIds[perfIndex]] );
                            }
                            currentDate.performanceList = perfArray;
                            dates.dateList[dateIndex] = currentDate;
                        }
                        data.dateList = dates.dateList;
                    }

                    if( dates.capacity !== undefined ) {
                        data.capacity = dates.capacity;
                    }

                    for( var i = 0; i < data.dateList.length; i++ ) {
                        performances[data.dateList[i].date] = data.dateList[i].performanceList;
                        if( data.dateList[i].discountUICode ) {
                            discountUICodes[data.dateList[i].date] = data.dateList[i].discountUICode;
                            if( $.inArray( data.dateList[i].discountUICode, rollingDiscountListUI ) == -1 ) {
                                rollingDiscountListUI.push( data.dateList[i].discountUICode );
                            }
                        }
                    }
                    data.rollingDiscountListUI = rollingDiscountListUI;

                    //Populate the availabilti object
                    for( var acapacity in data.capacity ) {
                        data.availabilityObj[acapacity] = data.capacity[acapacity];
                    }
                    data.performances = performances;
                    data.discountUICodes = discountUICodes;

                    dp.datepicker( "refresh" );

                    //if has discount we always show calendar
                    for( var i = 0; i < data.dateList.length; i++ ) {
                        if( data.dateList[i].discountUICode != undefined ) {
                            showCalendar = true;
                            break;
                        }
                    }
                    if( showCalendar ) {
                        $( opts.selector.calendar ).show();
                    }else {
                        $( opts.selector.calendar ).hide();
                    }

                    $( window ).trigger( 'calendar.show', {
                        "show" : showCalendar,
                        "data" : data,
                        "opts" : opts
                    } );

                    //choose date to preselect
                    var preselectDate = firstAvailableDate;
                    if( !showCalendar ) {
                        //if the calendar is hidden we always select the first available
                        preselectDate = firstAvailableDate;

                    }else {
                        /* priority:
                         1) url date (if event matches current event)
                         2) cart date (if cart last event matches current event)
                         3) first date available
                         */
                        if( opts.url.eventCode && opts.url.eventDate && opts.url.eventCode === opts.event.eventInfo.eventCode &&
                                moment( opts.url.eventDate ).isSame( moment( firstAvailableDate ), 'month' ) ) {
                            preselectDate = opts.url.eventDate;
                        }else {
                            if( opts.cart.lastEvent && opts.cart.lastPerfDate && opts.cart.lastEvent === opts.event.eventInfo.eventCode ) {
                                if( moment( firstAvailableDate ).isSame( opts.cart.lastPerfDate, 'month' ) ) {
                                    preselectDate = opts.cart.lastPerfDate;
                                }

                            }
                        }

                    }

                    $( window ).trigger( 'calendar.clickdate', {
                        "date"             : preselectDate,
                        "isFirstAvailable" : firstAvailableDate === preselectDate
                    } );

                }
                $( opts.spinner.selector ).spin( false );
                $( ".cal-icon" ).spin( false );
            },
            'onError'   : function( error ){
                $( opts.spinner.selector ).spin( false );
                $( window ).trigger( 'show.error', ['', error] );
            }
        } );
    }

    /*
     * Build list of available show for selected date
     */
    function refreshPerformanceList(){

        var selectedDate = $.datepicker.formatDate( $.datepicker.ISO_8601, $( opts.selector.datepicker ).datepicker( "getDate" ) );
        var $performanceList = $( opts.perf.listSelector );

        //Get performance data for current day
        loadPerformancei18nList( selectedDate );
        var performances = [];

        if( opts.dateListFull ) {
            /* to take all performances returned into date.list call */
            performances = [];

            $.each( data.performances, function( key, value ){
                performances = performances.concat( value );
            } );
        }else {
            performances = data.performances[selectedDate];
        }

        if( performances.length > 0 ) {

            //Build the list
            $performanceList.html( Handlebars.renderTemplate( 'calendar-perflist', performances, opts.i18n, opts.context, opts.modifiers.perflist ) );

        }else {

            emptyPerformanceList( performances );

        }

        $( window ).trigger( 'calendar.performancesdrawn', {
            "data"         : data,
            "opts"         : opts,
            "selectedDate" : selectedDate,
            "performances" : performances
        } );

    }

    function emptyPerformanceList( performances ){
        $( opts.perf.listSelector ).html( Handlebars.renderTemplate( 'calendar-perflistempty', performances, opts.i18n, opts.context, opts.modifiers.perflistempty ) );
    }

    function loadPerformancei18nList( selectedDate ){

        var performanceList = data.performances[selectedDate];
        if( performanceList ) {
            if( performanceList.length > 0 ) {

                var performanceIds = [];
                var indexes = [];
                for( var i = 0; i < performanceList.length; i++ ) {

                    if( jQuery.isEmptyObject( performanceList[i].i18n ) ) {
                        performanceIds.push( performanceList[i].performanceId );
                        indexes.push( i );
                    }

                }

                if( performanceIds.length > 0 ) {
                    $.remotingService.executeSync( {
                        'eventName' : "performance.read",
                        'async'     : false,
                        'params'    : [
                            {
                                "performanceId" : performanceIds.join( "," ),
                                "selectedDate"  : selectedDate,
                                "index"         : indexes.join( "," ),
                                "eventCode"     : opts.event.eventInfo.eventCode
                            }
                        ],
                        'onSuccess' : function( result ){
                            var returnInd = [result.index];
                            if( !$.isNumeric( result.index ) ) {
                                returnInd = result.index.split( "," );
                            }
                            for( var z = 0; z < result.performanceList.length; z++ ) {
                                data.performances[result.selectedDate][returnInd[z]] = result.performanceList[z];
                            }

                        },
                        'onError'   : function( result ){
                            $( window ).trigger( 'show.error', ['', result] );
                        }
                    } );
                }
            }
        }
    }

    /*
     * Set the date availability collection by performance (performanceId is the key)
     */
    function setTimeAvailability(){

        //Set date/time availability

        $( opts.perf.clickSelector ).each( function(){
            var perfAvailability = Handlebars.helpers['calendar.getPerformanceAvailibility'].apply( this, [$( this ).data( 'performanceid' )] );
            var perfAvailabilityStyle = Handlebars.helpers['calendar.getPerformanceRange'].apply( this, [perfAvailability.percent] ).style;
            if( perfAvailability.available === 0 ) {
                $( this ).addClass( 'disabled' );

            }
            $( this ).addClass( perfAvailabilityStyle );
        } );

    }

    function refreshPerformanceTip(){
        //TODO update logic for async i18n
        var performances = data.performances;
        var $performanceTipList = $( opts.perf.tipSelector );
        var arr = [];

        // the template is inspected to get the visualization style (flat list or group by i18n param)
        var group = opts.context.groupby;
        var lang = opts.context.locale;

        //Get performance data for current day
        if( $performanceTipList.length > 0 ) {
            //Build the list
            if( group == undefined || group === "" ) {

                // if group is null, the list of performances is flat, order by time
                for( var i in performances ) {
                    arr.push( {date : i, perfList : performances[i]} );
                }

                $( $performanceTipList ).html( "" );
                $( $performanceTipList ).append( Handlebars.renderTemplate( 'calendar-perftips', arr, opts.i18n, opts.context, opts.event.eventConfig.tooltipTemplate ) );

            }else {
                var hasI18n = false;

                for( var i in performances ) {
                    if( performances[i][0]["i18n"] !== undefined ) {
                        hasI18n = true;
                        break;
                    }
                }

                if( hasI18n && lang != undefined ) {
                    // if group is not null, the performances has to be grouped by the i18n param
                    // and shown properly

                    var index, item, dates;
                    var list = {};

                    for( var i in performances ) {
                        item = "";
                        dates = performances[i];
                        list[i] = {};

                        for( var j = 0; j < dates.length; j++ ) {
                            index = dates[j].i18n[lang][group];

                            if( list[i][index] == undefined ) {
                                list[i][index] = {basePeformance : dates[j], relatedPerformance : []};
                            }

                            list[i][index]["relatedPerformance"].push( dates[j] );
                        }

                    }

                    for( var i in list ) {
                        arr.push( {date : i, groupList : list[i]} );
                    }

                    $( $performanceTipList ).html( "" );
                    $( $performanceTipList ).append( Handlebars.renderTemplate( 'calendar-perftips', arr, opts.i18n, opts.context, opts.event.eventConfig.tooltipTemplate ) );

                }else {

                    // by default, flat visualization ()back compatibility if i18n is not defined
                    for( var i in performances ) {
                        arr.push( {date : i, perfList : performances[i]} );
                    }

                    $( $performanceTipList ).html( "" );
                    $( $performanceTipList ).append( Handlebars.renderTemplate( 'calendar-perftips', arr, opts.i18n, opts.context, opts.event.eventConfig.tooltipTemplate ) );

                }
            }

        }

    }

// End of plugin.
})
( jQuery );