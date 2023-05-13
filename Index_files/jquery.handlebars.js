(function( $ ){
    'use strict';

    var defaultSettings = {
        templatePath      : '',
        templateExtension : 'handlebars',
        partialPath       : '',
        partialExtension  : 'partial'
    };
    var settings = $.extend( {}, defaultSettings );

    $.handlebars = function( options ){
        settings = $.extend( defaultSettings, options );

        //get and return html with data only
        Handlebars.renderDataTemplate = function( name, data, modifier ){
            return Handlebars.renderI18nTemplate( name, data, {}, modifier );
        };

        //get and return html with data and i18n struct
        Handlebars.renderI18nTemplate = function( name, data, i18n, modifier ){
            return Handlebars.renderTemplate( name, data, i18n, {}, modifier );
        };

        //we render the named template with an optional modifier added to the path
        //we divide the data passed to handlbars in three parts:
        // data (the dinamic data) - usually return by another ajax call
        // ctx or staticdata  - data required by the template that changes only between differente pages
        // locale or i18n - i18n data from the website, not available in the main data
        Handlebars.renderTemplate = function( name, data, i18n, staticData, modifier ){
            if( modifier === "empty" ) {
                return "";
            }
            return Handlebars.getTemplate( name, modifier )( {"data" : data, "ctx" : staticData, "locale" : i18n} );
        };

        Handlebars.getTemplate = function( name, modifier ){
            var remoteTemplateName = name;
            if( modifier ) {
                remoteTemplateName = name + '_' + modifier;
            }
            if( Handlebars.templates === undefined || Handlebars.templates[remoteTemplateName] === undefined ) {
                $.ajax( {
                    url      : settings.templatePath + remoteTemplateName + '.' + settings.templateExtension,
                    success  : function( data ){
                        if( Handlebars.templates === undefined ) {
                            Handlebars.templates = {};
                        }
                        Handlebars.templates[remoteTemplateName] = Handlebars.compile( data );
                    },
                    dataType : "html",
                    mimeType : "text/plain; charset=x-user-defined",
                    async    : false
                } );
            }

            //try to return without modifier if with modifier is not found
            if( modifier ) {
                if( Handlebars.templates === undefined || Handlebars.templates[remoteTemplateName] === undefined ) {
                    return Handlebars.getTemplate( name, "" );
                }
            }

            return Handlebars.templates[remoteTemplateName];
        };

    };
}( jQuery ));