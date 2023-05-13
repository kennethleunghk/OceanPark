Handlebars.templates = Handlebars.templates || {};


// template --- upsell-loading ---
Handlebars.templates['upsell-loading'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"list-body\" id=\"product-list\">\n    <div class=\"product-item\">\n        <div class=\"col text-center empty\">\n            <div class=\"head\">"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (data && data.root)) && stack1.locale)) && stack1.upsell)) && stack1.loadingupsell_title), depth0))
    + "</div>\n            <div>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (data && data.root)) && stack1.locale)) && stack1.upsell)) && stack1.loadingupsell_info), depth0))
    + "</div>\n        </div>\n    </div>\n</div>";
},"useData":true}
);

// template --- calendar-perftips ---
Handlebars.templates['calendar-perftips'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "";
},"useData":true}
);

// template --- basket-subtotal ---
Handlebars.templates['basket-subtotal'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return container.escapeExpression((helpers.currency || (depth0 && depth0.currency) || helpers.helperMissing).call(depth0 != null ? depth0 : {},((stack1 = ((stack1 = (data && data.root)) && stack1.data)) && stack1.subtotal),{"name":"currency","hash":{},"data":data}));
},"useData":true}
);

// template --- basket-package ---
Handlebars.templates['basket-package'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "";
},"useData":true}
);

// template --- productlist-empty_nosale ---
Handlebars.templates['productlist-empty_nosale'] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                <div class=\"head\">"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (data && data.root)) && stack1.locale)) && stack1["no-event"])) && stack1.saleend_title), depth0))
    + "</div>\n                <div>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (data && data.root)) && stack1.locale)) && stack1["no-event"])) && stack1.saleend), depth0))
    + " "
    + container.escapeExpression((helpers.moment || (depth0 && depth0.moment) || helpers.helperMissing).call(depth0 != null ? depth0 : {},((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.startDate : stack1),"LL",{"name":"moment","hash":{},"data":data}))
    + " "
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (data && data.root)) && stack1.locale)) && stack1["no-event"])) && stack1.to), depth0))
    + " "
    + container.escapeExpression((helpers.moment || (depth0 && depth0.moment) || helpers.helperMissing).call(depth0 != null ? depth0 : {},((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.endDate : stack1),"LL",{"name":"moment","hash":{},"data":data}))
    + ".<br>\n"
    + ((stack1 = (helpers.is || (depth0 && depth0.is) || helpers.helperMissing).call(depth0 != null ? depth0 : {},((stack1 = ((stack1 = (data && data.root)) && stack1.ctx)) && stack1.eventHandler),"===","youngexplorerclub",{"name":"is","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                </div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                        "
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (data && data.root)) && stack1.locale)) && stack1["no-event"])) && stack1.saleend_note), depth0))
    + " <a href=\""
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (data && data.root)) && stack1.ctx)) && stack1["yec-href"]), depth0))
    + "\" class=\"homepage\">"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (data && data.root)) && stack1.locale)) && stack1["no-event"])) && stack1.yec_landing), depth0))
    + "</a>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                <div class=\"head\">"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (data && data.root)) && stack1.locale)) && stack1["no-event"])) && stack1.saletostart_title), depth0))
    + "</div>\n                <div>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (data && data.root)) && stack1.locale)) && stack1["no-event"])) && stack1.saletostart), depth0))
    + " "
    + container.escapeExpression((helpers.moment || (depth0 && depth0.moment) || helpers.helperMissing).call(depth0 != null ? depth0 : {},((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.startDate : stack1),"LL",{"name":"moment","hash":{},"data":data}))
    + " "
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (data && data.root)) && stack1.locale)) && stack1["no-event"])) && stack1.to), depth0))
    + " "
    + container.escapeExpression((helpers.moment || (depth0 && depth0.moment) || helpers.helperMissing).call(depth0 != null ? depth0 : {},((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.endDate : stack1),"LL",{"name":"moment","hash":{},"data":data}))
    + ".<br>\n"
    + ((stack1 = (helpers.is || (depth0 && depth0.is) || helpers.helperMissing).call(depth0 != null ? depth0 : {},((stack1 = ((stack1 = (data && data.root)) && stack1.ctx)) && stack1.eventHandler),"===","youngexplorerclub",{"name":"is","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                </div>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                        "
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (data && data.root)) && stack1.locale)) && stack1["no-event"])) && stack1.saletostart_note), depth0))
    + " <a href=\""
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (data && data.root)) && stack1.ctx)) && stack1["yec-href"]), depth0))
    + "\" class=\"homepage\">"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (data && data.root)) && stack1.locale)) && stack1["no-event"])) && stack1.yec_landing), depth0))
    + "</a>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"list-body\" id=\"product-list\">\n    <div class=\"product-item\">\n        <div class=\"col text-center empty\">\n"
    + ((stack1 = (helpers.is || (depth0 && depth0.is) || helpers.helperMissing).call(depth0 != null ? depth0 : {},((stack1 = ((stack1 = (data && data.root)) && stack1.ctx)) && stack1.errorCode),"===","event_pastdate",{"name":"is","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = (helpers.is || (depth0 && depth0.is) || helpers.helperMissing).call(depth0 != null ? depth0 : {},((stack1 = ((stack1 = (data && data.root)) && stack1.ctx)) && stack1.errorCode),"===","event_futuredate",{"name":"is","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </div>\n    </div>\n</div>";
},"useData":true}
);

// template --- modalerror ---
Handlebars.templates['modalerror'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"errorPanel\">\n    <ul class=\"list\">\n        <li class=\"item\">\n            "
    + ((stack1 = container.lambda(((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.message : stack1), depth0)) != null ? stack1 : "")
    + "\n        </li>\n    </ul>\n</div>";
},"useData":true}
);

// template --- basket-row_pay ---
Handlebars.templates['basket-row_pay'] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "            "
    + container.escapeExpression((helpers.i18n || (depth0 && depth0.i18n) || helpers.helperMissing).call(depth0 != null ? depth0 : {},((stack1 = ((stack1 = (data && data.root)) && stack1.data)) && stack1.event),"mainTitle",{"name":"i18n","hash":{},"data":data}))
    + "\n"
    + ((stack1 = (helpers.hasLocale || (depth0 && depth0.hasLocale) || helpers.helperMissing).call(depth0 != null ? depth0 : {},((stack1 = (data && data.root)) && stack1.locale),(helpers.join || (depth0 && depth0.join) || helpers.helperMissing).call(depth0 != null ? depth0 : {},"ticketCategories_",(helpers.i18n || (depth0 && depth0.i18n) || helpers.helperMissing).call(depth0 != null ? depth0 : {},((stack1 = ((stack1 = (data && data.root)) && stack1.data)) && stack1.event),"eventHandler",{"name":"i18n","hash":{},"data":data}),{"name":"join","hash":{},"data":data}),(helpers.join || (depth0 && depth0.join) || helpers.helperMissing).call(depth0 != null ? depth0 : {},"title_",((stack1 = ((stack1 = ((stack1 = (data && data.root)) && stack1.data)) && stack1.product)) && stack1.categoryCode),{"name":"join","hash":{},"data":data}),{"name":"hasLocale","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "             - "
    + container.escapeExpression((helpers.getLocale || (depth0 && depth0.getLocale) || helpers.helperMissing).call(depth0 != null ? depth0 : {},((stack1 = (data && data.root)) && stack1.locale),(helpers.join || (depth0 && depth0.join) || helpers.helperMissing).call(depth0 != null ? depth0 : {},"ticketCategories_",(helpers.i18n || (depth0 && depth0.i18n) || helpers.helperMissing).call(depth0 != null ? depth0 : {},((stack1 = ((stack1 = (data && data.root)) && stack1.data)) && stack1.event),"eventHandler",{"name":"i18n","hash":{},"data":data}),{"name":"join","hash":{},"data":data}),(helpers.join || (depth0 && depth0.join) || helpers.helperMissing).call(depth0 != null ? depth0 : {},"title_",((stack1 = ((stack1 = ((stack1 = (data && data.root)) && stack1.data)) && stack1.product)) && stack1.categoryCode),{"name":"join","hash":{},"data":data}),{"name":"getLocale","hash":{},"data":data}))
    + "\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "            "
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (data && data.root)) && stack1.locale)) && stack1.basket)) && stack1.upsell), depth0))
    + "\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "            <span class=\"head hide-for-small-down\">\n                "
    + container.escapeExpression((helpers.i18n || (depth0 && depth0.i18n) || helpers.helperMissing).call(depth0 != null ? depth0 : {},((stack1 = ((stack1 = (data && data.root)) && stack1.data)) && stack1.event),"mainTitle",{"name":"i18n","hash":{},"data":data}))
    + "\n"
    + ((stack1 = (helpers.hasLocale || (depth0 && depth0.hasLocale) || helpers.helperMissing).call(depth0 != null ? depth0 : {},((stack1 = (data && data.root)) && stack1.locale),(helpers.join || (depth0 && depth0.join) || helpers.helperMissing).call(depth0 != null ? depth0 : {},"ticketCategories_",(helpers.i18n || (depth0 && depth0.i18n) || helpers.helperMissing).call(depth0 != null ? depth0 : {},((stack1 = ((stack1 = (data && data.root)) && stack1.data)) && stack1.event),"eventHandler",{"name":"i18n","hash":{},"data":data}),{"name":"join","hash":{},"data":data}),(helpers.join || (depth0 && depth0.join) || helpers.helperMissing).call(depth0 != null ? depth0 : {},"title_",((stack1 = ((stack1 = ((stack1 = (data && data.root)) && stack1.data)) && stack1.product)) && stack1.categoryCode),{"name":"join","hash":{},"data":data}),{"name":"hasLocale","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            </span>\n            <span>\n"
    + ((stack1 = (helpers.is || (depth0 && depth0.is) || helpers.helperMissing).call(depth0 != null ? depth0 : {},((stack1 = ((stack1 = ((stack1 = (data && data.root)) && stack1.data)) && stack1.product)) && stack1.productTypeCode),"in","SEASONPASS,RENEWPASS",{"name":"is","hash":{},"fn":container.program(9, data, 0),"inverse":container.program(11, data, 0),"data":data})) != null ? stack1 : "")
    + "            </span>\n";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                    - "
    + container.escapeExpression((helpers.getLocale || (depth0 && depth0.getLocale) || helpers.helperMissing).call(depth0 != null ? depth0 : {},((stack1 = (data && data.root)) && stack1.locale),(helpers.join || (depth0 && depth0.join) || helpers.helperMissing).call(depth0 != null ? depth0 : {},"ticketCategories_",(helpers.i18n || (depth0 && depth0.i18n) || helpers.helperMissing).call(depth0 != null ? depth0 : {},((stack1 = ((stack1 = (data && data.root)) && stack1.data)) && stack1.event),"eventHandler",{"name":"i18n","hash":{},"data":data}),{"name":"join","hash":{},"data":data}),(helpers.join || (depth0 && depth0.join) || helpers.helperMissing).call(depth0 != null ? depth0 : {},"title_",((stack1 = ((stack1 = ((stack1 = (data && data.root)) && stack1.data)) && stack1.product)) && stack1.categoryCode),{"name":"join","hash":{},"data":data}),{"name":"getLocale","hash":{},"data":data}))
    + "\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                    "
    + container.escapeExpression((helpers.i18n || (depth0 && depth0.i18n) || helpers.helperMissing).call(depth0 != null ? depth0 : {},((stack1 = ((stack1 = (data && data.root)) && stack1.data)) && stack1.product),"name",{"name":"i18n","hash":{},"data":data}))
    + "\n";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                    "
    + container.escapeExpression((helpers.i18n || (depth0 && depth0.i18n) || helpers.helperMissing).call(depth0 != null ? depth0 : {},((stack1 = ((stack1 = (data && data.root)) && stack1.data)) && stack1.product),"name",{"name":"i18n","hash":{},"data":data}))
    + " - "
    + container.escapeExpression((helpers.moment || (depth0 && depth0.moment) || helpers.helperMissing).call(depth0 != null ? depth0 : {},((stack1 = ((stack1 = ((stack1 = ((stack1 = (data && data.root)) && stack1.data)) && stack1.performanceList)) && stack1["0"])) && stack1.perfDate),"LL",{"name":"moment","hash":{},"data":data}))
    + "\n"
    + ((stack1 = (helpers.is || (depth0 && depth0.is) || helpers.helperMissing).call(depth0 != null ? depth0 : {},((stack1 = ((stack1 = ((stack1 = ((stack1 = (data && data.root)) && stack1.data)) && stack1.performanceList)) && stack1["0"])) && stack1.perfTime),"!==","06:00",{"name":"is","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"12":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.is || (depth0 && depth0.is) || helpers.helperMissing).call(depth0 != null ? depth0 : {},((stack1 = ((stack1 = ((stack1 = (data && data.root)) && stack1.data)) && stack1.data)) && stack1.event),"!==","OPCP01",{"name":"is","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"13":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                            "
    + container.escapeExpression((helpers.formatHours || (depth0 && depth0.formatHours) || helpers.helperMissing).call(depth0 != null ? depth0 : {},((stack1 = ((stack1 = ((stack1 = ((stack1 = (data && data.root)) && stack1.data)) && stack1.performanceList)) && stack1["0"])) && stack1.perfTime),{"name":"formatHours","hash":{},"data":data}))
    + "\n"
    + ((stack1 = (helpers.is || (depth0 && depth0.is) || helpers.helperMissing).call(depth0 != null ? depth0 : {},((stack1 = ((stack1 = ((stack1 = (data && data.root)) && stack1.data)) && stack1.event)) && stack1.eventCode),"in","HW001A,FASTRACK1",{"name":"is","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"14":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                                - "
    + container.escapeExpression((helpers.formatHoursFromDate || (depth0 && depth0.formatHoursFromDate) || helpers.helperMissing).call(depth0 != null ? depth0 : {},((stack1 = ((stack1 = ((stack1 = ((stack1 = (data && data.root)) && stack1.data)) && stack1.performanceList)) && stack1["0"])) && stack1.performanceEnd),{"name":"formatHoursFromDate","hash":{},"data":data}))
    + "\n";
},"16":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "            <span class=\"head hide-for-medium-down\">"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (data && data.root)) && stack1.locale)) && stack1.basket)) && stack1.upsell), depth0))
    + "</span>\n            <span>"
    + container.escapeExpression((helpers.i18n || (depth0 && depth0.i18n) || helpers.helperMissing).call(depth0 != null ? depth0 : {},((stack1 = ((stack1 = (data && data.root)) && stack1.data)) && stack1.product),"name",{"name":"i18n","hash":{},"data":data}))
    + "</span>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"jq-basket-item product-item\" data-uuid=\""
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (data && data.root)) && stack1.data)) && stack1.hashCode), depth0))
    + "\">\n    <div class=\"col tktevent show-for-small-down\">\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.performanceList : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(4, data, 0),"data":data})) != null ? stack1 : "")
    + "    </div>\n    <div class=\"col tktname\">\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.performanceList : stack1),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.program(16, data, 0),"data":data})) != null ? stack1 : "")
    + "    </div>\n    <div class=\"col tktdes text-center\">\n        <span title=\""
    + ((stack1 = (helpers.i18n || (depth0 && depth0.i18n) || helpers.helperMissing).call(depth0 != null ? depth0 : {},((stack1 = ((stack1 = (data && data.root)) && stack1.data)) && stack1.product),"descriptionLong",{"name":"i18n","hash":{},"data":data})) != null ? stack1 : "")
    + "\" data-tooltip=\"\" aria-haspopup=\"true\" class=\"info has-tip radius\">?</span>\n    </div>\n    <div class=\"col tktqty text-right\">\n        "
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (data && data.root)) && stack1.data)) && stack1.quantity), depth0))
    + "\n    </div>\n    <div class=\"col tktprice text-right \">"
    + container.escapeExpression((helpers.currency || (depth0 && depth0.currency) || helpers.helperMissing).call(depth0 != null ? depth0 : {},((stack1 = ((stack1 = ((stack1 = (data && data.root)) && stack1.data)) && stack1.product)) && stack1.price),{"name":"currency","hash":{},"data":data}))
    + "</div>\n</div>";
},"useData":true}
);

// template --- calendar-perflist_rangedate ---
Handlebars.templates['calendar-perflist_rangedate'] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "    <li>\n"
    + ((stack1 = (helpers.is || (depth0 && depth0.is) || helpers.helperMissing).call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.status : depth0),">","0",{"name":"is","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = (helpers.is || (depth0 && depth0.is) || helpers.helperMissing).call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.status : depth0),"===","0",{"name":"is","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </li>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper;

  return "            <a href=\"#\" data-performanceid=\""
    + container.escapeExpression(((helper = (helper = helpers.performanceId || (depth0 != null ? depth0.performanceId : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"performanceId","hash":{},"data":data}) : helper)))
    + "\" data-location=\""
    + container.escapeExpression(((helper = (helper = helpers.locationCode || (depth0 != null ? depth0.locationCode : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"locationCode","hash":{},"data":data}) : helper)))
    + "\"\n               data-status=\""
    + container.escapeExpression(((helper = (helper = helpers.status || (depth0 != null ? depth0.status : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"status","hash":{},"data":data}) : helper)))
    + "\">"
    + container.escapeExpression((helpers.formatHours || (depth0 && depth0.formatHours) || helpers.helperMissing).call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.perfTime : depth0),{"name":"formatHours","hash":{},"data":data}))
    + " - "
    + container.escapeExpression((helpers.formatHoursFromDate || (depth0 && depth0.formatHoursFromDate) || helpers.helperMissing).call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.performanceEnd : depth0),{"name":"formatHoursFromDate","hash":{},"data":data}))
    + "</a>\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "            <span>"
    + container.escapeExpression((helpers.formatHours || (depth0 && depth0.formatHours) || helpers.helperMissing).call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.perfTime : depth0),{"name":"formatHours","hash":{},"data":data}))
    + " - "
    + container.escapeExpression((helpers.formatHoursFromDate || (depth0 && depth0.formatHoursFromDate) || helpers.helperMissing).call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.performanceEnd : depth0),{"name":"formatHoursFromDate","hash":{},"data":data}))
    + "</span>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.data : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true}
);

// template --- floatbasket-bottom ---
Handlebars.templates['floatbasket-bottom'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<a class=\"jq-basket-float-resbtn right small-button\"\n   data-confirm='{\"body\":\""
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (data && data.root)) && stack1.locale)) && stack1.basket)) && stack1.confirmClearBasket), depth0))
    + "\"}'>\n    "
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (data && data.root)) && stack1.locale)) && stack1.basket)) && stack1.clear), depth0))
    + "\n</a>";
},"useData":true}
);

// template --- basket-bodyempty ---
Handlebars.templates['basket-bodyempty'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div  class=\"product-item\">\n    <div class=\"col text-center empty\">\n        <div class=\"head\">"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (data && data.root)) && stack1.locale)) && stack1.checkout)) && stack1.noticketselected), depth0))
    + "</div>\n        <div>\n            "
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (data && data.root)) && stack1.locale)) && stack1.checkout)) && stack1.redoselection), depth0))
    + "\n            <a href=\""
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (data && data.root)) && stack1.ctx)) && stack1.buttonHref), depth0))
    + "\">"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (data && data.root)) && stack1.locale)) && stack1.checkout)) && stack1.redoselection_link), depth0))
    + "</a>\n            "
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (data && data.root)) && stack1.locale)) && stack1.checkout)) && stack1.redoselection_end), depth0))
    + "\n        </div>\n    </div>\n</div>";
},"useData":true}
);

// template --- activebasket-empty ---
Handlebars.templates['activebasket-empty'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"product-item jq-basket-empty\">\n    <div class=\"col text-center empty\">\n        <div class=\"head\">"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (data && data.root)) && stack1.locale)) && stack1.basket)) && stack1.empty), depth0))
    + "</div>\n    </div>\n</div>";
},"useData":true}
);

// template --- activebasket-loading ---
Handlebars.templates['activebasket-loading'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"listItem\" >\n    <div class=\"product-item jq-basket-empty\">\n        <div class=\"col text-center empty\">\n            <div class=\"head\">"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (data && data.root)) && stack1.locale)) && stack1.basket)) && stack1.loading), depth0))
    + "</div>\n        </div>\n    </div>\n</div>";
},"useData":true}
);

// template --- basket-total ---
Handlebars.templates['basket-total'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return container.escapeExpression((helpers.currency || (depth0 && depth0.currency) || helpers.helperMissing).call(depth0 != null ? depth0 : {},((stack1 = ((stack1 = (data && data.root)) && stack1.data)) && stack1.total),{"name":"currency","hash":{},"data":data}));
},"useData":true}
);

// template --- upsell-item_productTypes ---
Handlebars.templates['upsell-item_productTypes'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "";
},"useData":true}
);

// template --- basket-discount ---
Handlebars.templates['basket-discount'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "";
},"useData":true}
);

// template --- activebasket-totals ---
Handlebars.templates['activebasket-totals'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"product-item\">\n    <div class=\"col tktname\">\n        <div class=\"head\">"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (data && data.root)) && stack1.locale)) && stack1.basket)) && stack1.total), depth0))
    + "</div>\n    </div>\n    <div class=\"col tktprice text-right\">\n        <div class=\"head\">"
    + container.escapeExpression((helpers.currency || (depth0 && depth0.currency) || helpers.helperMissing).call(depth0 != null ? depth0 : {},((stack1 = ((stack1 = ((stack1 = (data && data.root)) && stack1.data)) && stack1.counter)) && stack1.totalOrder),{"name":"currency","hash":{},"data":data}))
    + "</div>\n    </div>\n    <div class=\"col tktreset\">\n        <a class=\"js-ab-reset right small-button\" data-page=\""
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (data && data.root)) && stack1.ctx)) && stack1.currPage), depth0))
    + "\" data-back=\""
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (data && data.root)) && stack1.ctx)) && stack1.buttonBack), depth0))
    + "\"\n           data-confirm='{\"body\":\""
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (data && data.root)) && stack1.locale)) && stack1.basket)) && stack1.confirmClearBasket), depth0))
    + "\"}'>\n            "
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (data && data.root)) && stack1.locale)) && stack1.basket)) && stack1.clear), depth0))
    + "\n        </a>\n        <a class=\"left small-button js-ab-fwd\" data-page=\""
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (data && data.root)) && stack1.ctx)) && stack1.currPage), depth0))
    + "\" data-url=\""
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (data && data.root)) && stack1.ctx)) && stack1.buttonHref), depth0))
    + "\" data-fwd=\""
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (data && data.root)) && stack1.ctx)) && stack1.buttonFwd), depth0))
    + "\"\n           href=\"javascript:void(0);\">\n            "
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (data && data.root)) && stack1.locale)) && stack1.basket)) && stack1.nextbutton), depth0))
    + "\n        </a>\n    </div>\n</div>\n";
},"useData":true}
);

// template --- floatbasket-totals ---
Handlebars.templates['floatbasket-totals'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"product-item\">\n    <div class=\"col tktname\">\n        <div class=\"head\">\n            "
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (data && data.root)) && stack1.locale)) && stack1.basket)) && stack1.total), depth0))
    + "\n        </div>\n    </div>\n    <div class=\"col tktprice text-right\">\n        <div>"
    + container.escapeExpression((helpers.currency || (depth0 && depth0.currency) || helpers.helperMissing).call(depth0 != null ? depth0 : {},((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.totalOrder : stack1),{"name":"currency","hash":{},"data":data}))
    + "</div>\n    </div>\n    <div class=\"col tktqty text-right\">\n        <div>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (data && data.root)) && stack1.data)) && stack1.totalTicket), depth0))
    + "</div>\n    </div>\n</div>";
},"useData":true}
);

// template --- productlist-item_multieventcategory ---
Handlebars.templates['productlist-item_multieventcategory'] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "noavail";
},"3":function(container,depth0,helpers,partials,data) {
    return "withavail";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "            <div class=\"jq-basket-item product-item\" data-ticket=\""
    + container.escapeExpression(((helper = (helper = helpers.productId || (depth0 != null ? depth0.productId : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"productId","hash":{},"data":data}) : helper)))
    + "\" data-performanceid=\""
    + container.escapeExpression(((helper = (helper = helpers.performanceId || (depth0 != null ? depth0.performanceId : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"performanceId","hash":{},"data":data}) : helper)))
    + "\"\n                 data-producttype=\""
    + container.escapeExpression(((helper = (helper = helpers.productTypeCode || (depth0 != null ? depth0.productTypeCode : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"productTypeCode","hash":{},"data":data}) : helper)))
    + "\" data-groupby=\""
    + container.escapeExpression(((helper = (helper = helpers.groupBy || (depth0 != null ? depth0.groupBy : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"groupBy","hash":{},"data":data}) : helper)))
    + "\">\n                <div class=\"col tktname "
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},((stack1 = ((stack1 = (data && data.root)) && stack1.ctx)) && stack1.unlimitedcapacity),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\n                    <span>"
    + container.escapeExpression((helpers.i18n || (depth0 && depth0.i18n) || helpers.helperMissing).call(depth0 != null ? depth0 : {},depth0,"name",{"name":"i18n","hash":{},"data":data}))
    + "</span>\n                    <span class=\"show-for-small-only descr\">"
    + ((stack1 = (helpers.i18n || (depth0 && depth0.i18n) || helpers.helperMissing).call(depth0 != null ? depth0 : {},depth0,"descriptionLong",{"name":"i18n","hash":{},"data":data})) != null ? stack1 : "")
    + "</span>\n                </div>\n                <div class=\"col tktdes text-center hide-for-small-only\">\n                    <span title=\""
    + ((stack1 = (helpers.i18n || (depth0 && depth0.i18n) || helpers.helperMissing).call(depth0 != null ? depth0 : {},depth0,"descriptionLong",{"name":"i18n","hash":{},"data":data})) != null ? stack1 : "")
    + "\" data-tooltip=\"\" aria-haspopup=\"true\" class=\"info has-tip radius\">?</span>\n                </div>\n"
    + ((stack1 = helpers.unless.call(depth0 != null ? depth0 : {},((stack1 = ((stack1 = (data && data.root)) && stack1.ctx)) && stack1.unlimitedcapacity),{"name":"unless","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                <div class=\"col tktprice text-right "
    + ((stack1 = helpers.unless.call(depth0 != null ? depth0 : {},((stack1 = ((stack1 = (data && data.root)) && stack1.ctx)) && stack1.unlimitedcapacity),{"name":"unless","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\n                    "
    + container.escapeExpression((helpers.currency || (depth0 && depth0.currency) || helpers.helperMissing).call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.price : depth0),{"name":"currency","hash":{},"data":data}))
    + "\n                </div>\n                <div class=\"col tktqty text-right js-basket-item-sel\">\n"
    + ((stack1 = (helpers.isPerfAvailable || (depth0 && depth0.isPerfAvailable) || helpers.helperMissing).call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.performanceId : depth0),depth0,{"name":"isPerfAvailable","hash":{},"fn":container.program(8, data, 0),"inverse":container.program(10, data, 0),"data":data})) != null ? stack1 : "")
    + "                </div>\n            </div>\n";
},"6":function(container,depth0,helpers,partials,data) {
    return "                    <div class=\"col tktdes\">\n                        <span class=\"avail has-tip radius "
    + container.escapeExpression((helpers.getAvailableTooltipStyle || (depth0 && depth0.getAvailableTooltipStyle) || helpers.helperMissing).call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.performanceId : depth0),depth0,{"name":"getAvailableTooltipStyle","hash":{},"data":data}))
    + "\" title=\""
    + container.escapeExpression((helpers.getAvailableTooltipProd || (depth0 && depth0.getAvailableTooltipProd) || helpers.helperMissing).call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.performanceId : depth0),depth0,{"name":"getAvailableTooltipProd","hash":{},"data":data}))
    + "\" data-tooltip=\"\" aria-haspopup=\"true\" >&nbsp;</span>\n                        <span class=\"descr "
    + container.escapeExpression((helpers.getAvailableTooltipStyle || (depth0 && depth0.getAvailableTooltipStyle) || helpers.helperMissing).call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.performanceId : depth0),depth0,{"name":"getAvailableTooltipStyle","hash":{},"data":data}))
    + "\">"
    + container.escapeExpression((helpers.getAvailableTooltipProd || (depth0 && depth0.getAvailableTooltipProd) || helpers.helperMissing).call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.performanceId : depth0),depth0,{"name":"getAvailableTooltipProd","hash":{},"data":data}))
    + "</span>\n                    </div>\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "                        <a class=\"jq-basket-item-change-add-confirm hide\"\n                           data-confirm='{\"body\":\""
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (data && data.root)) && stack1.locale)) && stack1.basket)) && stack1.confirmRemove), depth0))
    + "\"}'>&nbsp;</a>\n                        <select class=\"jq-basket-item-quantity jq-basket-item-change-add\" name=\"quantity\" data-value=\""
    + container.escapeExpression(((helper = (helper = helpers.quantity || (depth0 != null ? depth0.quantity : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"quantity","hash":{},"data":data}) : helper)))
    + "\">\n                            "
    + ((stack1 = (helpers.quatityUpsell || (depth0 && depth0.quatityUpsell) || helpers.helperMissing).call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.quantity : depth0),(depth0 != null ? depth0.performanceId : depth0),depth0,{"name":"quatityUpsell","hash":{},"data":data})) != null ? stack1 : "")
    + "\n                        </select>\n";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                        <span>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (data && data.root)) && stack1.locale)) && stack1.basket)) && stack1.soldout), depth0))
    + "</span>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"article clearfix\">\n    <div class=\"article-title\">\n        <div class=\"head\">"
    + container.escapeExpression((helpers.getLocale || (depth0 && depth0.getLocale) || helpers.helperMissing).call(depth0 != null ? depth0 : {},((stack1 = (data && data.root)) && stack1.locale),(helpers.join || (depth0 && depth0.join) || helpers.helperMissing).call(depth0 != null ? depth0 : {},"ticketCategories_",((stack1 = ((stack1 = (data && data.root)) && stack1.ctx)) && stack1.eventPage),{"name":"join","hash":{},"data":data}),(helpers.join || (depth0 && depth0.join) || helpers.helperMissing).call(depth0 != null ? depth0 : {},"title_",((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.items : stack1)) != null ? stack1["0"] : stack1)) != null ? stack1.categoryCode : stack1),{"name":"join","hash":{},"data":data}),{"name":"getLocale","hash":{},"data":data}))
    + "</div>\n        <div>"
    + ((stack1 = (helpers.getLocale || (depth0 && depth0.getLocale) || helpers.helperMissing).call(depth0 != null ? depth0 : {},((stack1 = (data && data.root)) && stack1.locale),(helpers.join || (depth0 && depth0.join) || helpers.helperMissing).call(depth0 != null ? depth0 : {},"ticketCategories_",((stack1 = ((stack1 = (data && data.root)) && stack1.ctx)) && stack1.eventPage),{"name":"join","hash":{},"data":data}),(helpers.join || (depth0 && depth0.join) || helpers.helperMissing).call(depth0 != null ? depth0 : {},"description_",((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.items : stack1)) != null ? stack1["0"] : stack1)) != null ? stack1.categoryCode : stack1),{"name":"join","hash":{},"data":data}),{"name":"getLocale","hash":{},"data":data})) != null ? stack1 : "")
    + "</div>\n    </div>\n    <div class=\"article-body\" id=\"product-list\">\n        <div class=\"listheader product-item\">\n            <div class=\"col tktname "
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},((stack1 = ((stack1 = (data && data.root)) && stack1.ctx)) && stack1.unlimitedcapacity),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\n                "
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (data && data.root)) && stack1.locale)) && stack1.tickets)) && stack1.product), depth0))
    + "\n            </div>\n            <div class=\"col tktprice text-right "
    + ((stack1 = helpers.unless.call(depth0 != null ? depth0 : {},((stack1 = ((stack1 = (data && data.root)) && stack1.ctx)) && stack1.unlimitedcapacity),{"name":"unless","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\n                "
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (data && data.root)) && stack1.locale)) && stack1.tickets)) && stack1.price), depth0))
    + "\n            </div>\n            <div class=\"col tktqty text-right\">\n                "
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (data && data.root)) && stack1.locale)) && stack1.tickets)) && stack1.quantity), depth0))
    + "\n            </div>\n        </div>\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},((stack1 = ((stack1 = (data && data.root)) && stack1.data)) && stack1.items),{"name":"each","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\n</div>";
},"useData":true}
);

// template --- basket-bodyempty_availability ---
Handlebars.templates['basket-bodyempty_availability'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "";
},"useData":true}
);

// template --- upsell-item_events ---
Handlebars.templates['upsell-item_events'] = Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1;

  return "    <div class=\"article clearfix\" id=\""
    + container.escapeExpression(container.lambda(blockParams[0][1], depth0))
    + "\">\n        <div class=\"article-title\">\n            <div class=\"head\">"
    + container.escapeExpression((helpers.getLocale || (depth0 && depth0.getLocale) || helpers.helperMissing).call(depth0 != null ? depth0 : {},((stack1 = (data && data.root)) && stack1.locale),"upsell",(helpers.join || (depth0 && depth0.join) || helpers.helperMissing).call(depth0 != null ? depth0 : {},blockParams[0][1],"_title",{"name":"join","hash":{},"data":data,"blockParams":blockParams}),{"name":"getLocale","hash":{},"data":data,"blockParams":blockParams}))
    + "</div>\n            <div>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (data && data.root)) && stack1.locale)) && stack1.upsell)) && stack1.cat_descr), depth0))
    + "</div>\n        </div>\n        <div class=\"article-body\" id=\"product-list\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},blockParams[0][0],{"name":"each","hash":{},"fn":container.program(2, data, 2, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
    + "        </div>\n    </div>\n";
},"2":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},blockParams[0][0],{"name":"each","hash":{},"fn":container.program(3, data, 2, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "");
},"3":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},((stack1 = blockParams[0][0]) != null ? stack1.siblingList : stack1),{"name":"each","hash":{},"fn":container.program(4, data, 0, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1, helper;

  return "                        <div class=\"jq-basket-item product-item\" data-producttype=\""
    + container.escapeExpression(container.lambda(((stack1 = blockParams[1][0]) != null ? stack1.productTypeCode : stack1), depth0))
    + "\" data-productid=\""
    + container.escapeExpression(((helper = (helper = helpers.productId || (depth0 != null ? depth0.productId : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"productId","hash":{},"data":data,"blockParams":blockParams}) : helper)))
    + "\"\n                             data-ticket=\""
    + container.escapeExpression(((helper = (helper = helpers.productId || (depth0 != null ? depth0.productId : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"productId","hash":{},"data":data,"blockParams":blockParams}) : helper)))
    + "\" data-performanceid=\"0\"\n                             data-groupby=\""
    + container.escapeExpression(container.lambda(((stack1 = blockParams[1][0]) != null ? stack1.groupBy : stack1), depth0))
    + "\">\n                            <div class=\"col tktname noavail\">\n                                <span>"
    + container.escapeExpression((helpers.i18n || (depth0 && depth0.i18n) || helpers.helperMissing).call(depth0 != null ? depth0 : {},depth0,"name",{"name":"i18n","hash":{},"data":data,"blockParams":blockParams}))
    + "</span>\n                            </div>\n                            <div class=\"col tktdes text-center\">\n                                <span title=\""
    + ((stack1 = (helpers.i18n || (depth0 && depth0.i18n) || helpers.helperMissing).call(depth0 != null ? depth0 : {},depth0,"descriptionLong",{"name":"i18n","hash":{},"data":data,"blockParams":blockParams})) != null ? stack1 : "")
    + "\" data-tooltip=\"\" aria-haspopup=\"true\" class=\"info has-tip radius\">?</span>\n                            </div>\n                            <div class=\"col tktprice text-right\">\n                                "
    + container.escapeExpression((helpers.currency || (depth0 && depth0.currency) || helpers.helperMissing).call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.price : depth0),{"name":"currency","hash":{},"data":data,"blockParams":blockParams}))
    + "\n                            </div>\n                            <div class=\"col tktqty text-right js-basket-item-sel\">\n                                <a class=\"jq-basket-item-change-add-confirm hide\"\n                                   data-confirm='{\"body\":\""
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (data && data.root)) && stack1.locale)) && stack1.basket)) && stack1.confirmRemove), depth0))
    + "\"}'>\n                                    &nbsp;</a>\n                                <select class=\"jq-basket-item-quantity jq-basket-item-change-add\" name=\"quantity\" data-value=\""
    + container.escapeExpression(((helper = (helper = helpers.quantity || (depth0 != null ? depth0.quantity : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"quantity","hash":{},"data":data,"blockParams":blockParams}) : helper)))
    + "\">\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.maxItemByPerf : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0, blockParams),"inverse":container.program(7, data, 0, blockParams),"data":data,"blockParams":blockParams})) != null ? stack1 : "")
    + "                                </select>\n                            </div>\n                        </div>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                                        "
    + ((stack1 = (helpers.buildQuantityCombo || (depth0 && depth0.buildQuantityCombo) || helpers.helperMissing).call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.maxItemByPerf : depth0),((stack1 = ((stack1 = (data && data.root)) && stack1.data)) && stack1.cartItems),0,(depth0 != null ? depth0.productId : depth0),{"name":"buildQuantityCombo","hash":{},"data":data})) != null ? stack1 : "")
    + "\n";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                                        "
    + ((stack1 = (helpers.buildQuantityCombo || (depth0 && depth0.buildQuantityCombo) || helpers.helperMissing).call(depth0 != null ? depth0 : {},10,((stack1 = ((stack1 = (data && data.root)) && stack1.data)) && stack1.cartItems),0,(depth0 != null ? depth0.productId : depth0),{"name":"buildQuantityCombo","hash":{},"data":data})) != null ? stack1 : "")
    + "\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.upsellItem : stack1),{"name":"each","hash":{},"fn":container.program(1, data, 2, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
    + "\n";
},"useData":true,"useBlockParams":true}
);

// template --- activebasket-totalsempty ---
Handlebars.templates['activebasket-totalsempty'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"product-item empty\">\n    <div class=\"col tktname\">\n        <div class=\"head\">"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (data && data.root)) && stack1.locale)) && stack1.basket)) && stack1.total), depth0))
    + "</div>\n    </div>\n    <div class=\"col tktprice text-right\">\n        <div class=\"head\">"
    + container.escapeExpression((helpers.currency || (depth0 && depth0.currency) || helpers.helperMissing).call(depth0 != null ? depth0 : {},((stack1 = ((stack1 = ((stack1 = (data && data.root)) && stack1.data)) && stack1.counter)) && stack1.totalOrder),{"name":"currency","hash":{},"data":data}))
    + "</div>\n    </div>\n</div>\n\n";
},"useData":true}
);

// template --- floatbasket-item ---
Handlebars.templates['floatbasket-item'] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "            <div class=\"head\">\n                "
    + container.escapeExpression((helpers.i18n || (depth0 && depth0.i18n) || helpers.helperMissing).call(depth0 != null ? depth0 : {},((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.event : stack1),"mainTitle",{"name":"i18n","hash":{},"data":data}))
    + "\n"
    + ((stack1 = (helpers.hasLocale || (depth0 && depth0.hasLocale) || helpers.helperMissing).call(depth0 != null ? depth0 : {},((stack1 = (data && data.root)) && stack1.locale),(helpers.join || (depth0 && depth0.join) || helpers.helperMissing).call(depth0 != null ? depth0 : {},"ticketCategories_",(helpers.i18n || (depth0 && depth0.i18n) || helpers.helperMissing).call(depth0 != null ? depth0 : {},((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.event : stack1),"eventHandler",{"name":"i18n","hash":{},"data":data}),{"name":"join","hash":{},"data":data}),(helpers.join || (depth0 && depth0.join) || helpers.helperMissing).call(depth0 != null ? depth0 : {},"title_",((stack1 = ((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.product : stack1)) != null ? stack1.categoryCode : stack1),{"name":"join","hash":{},"data":data}),{"name":"hasLocale","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            </div>\n            <div>\n"
    + ((stack1 = (helpers.is || (depth0 && depth0.is) || helpers.helperMissing).call(depth0 != null ? depth0 : {},((stack1 = ((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.product : stack1)) != null ? stack1.productTypeCode : stack1),"in","SEASONPASS,RENEWPASS",{"name":"is","hash":{},"fn":container.program(4, data, 0),"inverse":container.program(6, data, 0),"data":data})) != null ? stack1 : "")
    + "            </div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                    - "
    + container.escapeExpression((helpers.getLocale || (depth0 && depth0.getLocale) || helpers.helperMissing).call(depth0 != null ? depth0 : {},((stack1 = (data && data.root)) && stack1.locale),(helpers.join || (depth0 && depth0.join) || helpers.helperMissing).call(depth0 != null ? depth0 : {},"ticketCategories_",(helpers.i18n || (depth0 && depth0.i18n) || helpers.helperMissing).call(depth0 != null ? depth0 : {},((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.event : stack1),"eventHandler",{"name":"i18n","hash":{},"data":data}),{"name":"join","hash":{},"data":data}),(helpers.join || (depth0 && depth0.join) || helpers.helperMissing).call(depth0 != null ? depth0 : {},"title_",((stack1 = ((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.product : stack1)) != null ? stack1.categoryCode : stack1),{"name":"join","hash":{},"data":data}),{"name":"getLocale","hash":{},"data":data}))
    + "\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                    "
    + container.escapeExpression((helpers.i18n || (depth0 && depth0.i18n) || helpers.helperMissing).call(depth0 != null ? depth0 : {},((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.product : stack1),"name",{"name":"i18n","hash":{},"data":data}))
    + "\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                    "
    + container.escapeExpression((helpers.i18n || (depth0 && depth0.i18n) || helpers.helperMissing).call(depth0 != null ? depth0 : {},((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.product : stack1),"name",{"name":"i18n","hash":{},"data":data}))
    + " - "
    + container.escapeExpression((helpers.moment || (depth0 && depth0.moment) || helpers.helperMissing).call(depth0 != null ? depth0 : {},((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.performanceList : stack1)) != null ? stack1["0"] : stack1)) != null ? stack1.perfDate : stack1),"LL",{"name":"moment","hash":{},"data":data}))
    + "\n"
    + ((stack1 = (helpers.is || (depth0 && depth0.is) || helpers.helperMissing).call(depth0 != null ? depth0 : {},((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.performanceList : stack1)) != null ? stack1["0"] : stack1)) != null ? stack1.perfTime : stack1),"!==","06:00",{"name":"is","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"7":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.is || (depth0 && depth0.is) || helpers.helperMissing).call(depth0 != null ? depth0 : {},((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.event : stack1),"!==","OPCP01",{"name":"is","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"8":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                            "
    + container.escapeExpression((helpers.formatHours || (depth0 && depth0.formatHours) || helpers.helperMissing).call(depth0 != null ? depth0 : {},((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.performanceList : stack1)) != null ? stack1["0"] : stack1)) != null ? stack1.perfTime : stack1),{"name":"formatHours","hash":{},"data":data}))
    + "\n"
    + ((stack1 = (helpers.is || (depth0 && depth0.is) || helpers.helperMissing).call(depth0 != null ? depth0 : {},((stack1 = ((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.event : stack1)) != null ? stack1.eventCode : stack1),"in","HW001A,FASTRACK1",{"name":"is","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"9":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                                - "
    + container.escapeExpression((helpers.formatHoursFromDate || (depth0 && depth0.formatHoursFromDate) || helpers.helperMissing).call(depth0 != null ? depth0 : {},((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.performanceList : stack1)) != null ? stack1["0"] : stack1)) != null ? stack1.performanceEnd : stack1),{"name":"formatHoursFromDate","hash":{},"data":data}))
    + "\n";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "            <div class=\"head\">"
    + container.escapeExpression((helpers.i18n || (depth0 && depth0.i18n) || helpers.helperMissing).call(depth0 != null ? depth0 : {},((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.product : stack1),"name",{"name":"i18n","hash":{},"data":data}))
    + "</div>\n            <div>"
    + container.escapeExpression((helpers.i18n || (depth0 && depth0.i18n) || helpers.helperMissing).call(depth0 != null ? depth0 : {},((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.product : stack1),"nameLong",{"name":"i18n","hash":{},"data":data}))
    + "</div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"jq-basket-float-item product-item\">\n    <div class=\"col tktname\">\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.performanceList : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(11, data, 0),"data":data})) != null ? stack1 : "")
    + "    </div>\n    <div class=\"col tktprice text-right\">\n        <div class=\"head\">"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (data && data.root)) && stack1.locale)) && stack1.basket)) && stack1.price), depth0))
    + "</div>\n        <div>"
    + container.escapeExpression((helpers.currency || (depth0 && depth0.currency) || helpers.helperMissing).call(depth0 != null ? depth0 : {},((stack1 = ((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.product : stack1)) != null ? stack1.price : stack1),{"name":"currency","hash":{},"data":data}))
    + "</div>\n    </div>\n    <div class=\"col tktqty text-right\">\n        <div class=\"head\">"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (data && data.root)) && stack1.locale)) && stack1.basket)) && stack1.qty), depth0))
    + "</div>\n        <div>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (data && data.root)) && stack1.data)) && stack1.quantity), depth0))
    + "</div>\n    </div>\n</div>";
},"useData":true}
);

// template --- productlist-empty_nodate ---
Handlebars.templates['productlist-empty_nodate'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"list-body\" id=\"product-list\">\n    <div class=\"product-item\">\n        <div class=\"col text-center empty\">\n            <div class=\"head\">"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (data && data.root)) && stack1.locale)) && stack1.tickets)) && stack1.nodate_title), depth0))
    + "</div>\n            <div>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (data && data.root)) && stack1.locale)) && stack1.tickets)) && stack1.nodate_info), depth0))
    + "</div>\n        </div>\n    </div>\n</div>";
},"useData":true}
);

// template --- basket-totalnofee ---
Handlebars.templates['basket-totalnofee'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "";
},"useData":true}
);

// template --- calendar-perflist ---
Handlebars.templates['calendar-perflist'] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "    <li>\n"
    + ((stack1 = (helpers.is || (depth0 && depth0.is) || helpers.helperMissing).call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.status : depth0),">","0",{"name":"is","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = (helpers.is || (depth0 && depth0.is) || helpers.helperMissing).call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.status : depth0),"===","0",{"name":"is","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </li>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper;

  return "            <a href=\"#\" data-performanceid=\""
    + container.escapeExpression(((helper = (helper = helpers.performanceId || (depth0 != null ? depth0.performanceId : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"performanceId","hash":{},"data":data}) : helper)))
    + "\" data-location=\""
    + container.escapeExpression(((helper = (helper = helpers.locationCode || (depth0 != null ? depth0.locationCode : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"locationCode","hash":{},"data":data}) : helper)))
    + "\"\n               data-status=\""
    + container.escapeExpression(((helper = (helper = helpers.status || (depth0 != null ? depth0.status : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"status","hash":{},"data":data}) : helper)))
    + "\">"
    + container.escapeExpression((helpers.formatHours || (depth0 && depth0.formatHours) || helpers.helperMissing).call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.perfTime : depth0),{"name":"formatHours","hash":{},"data":data}))
    + "</a>\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "            <span>"
    + container.escapeExpression((helpers.formatHours || (depth0 && depth0.formatHours) || helpers.helperMissing).call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.perfTime : depth0),{"name":"formatHours","hash":{},"data":data}))
    + "</span>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.data : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true}
);

// template --- floatbasket-empty ---
Handlebars.templates['floatbasket-empty'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"product-item\">\n    <div class=\"col text-center empty\">\n        <div class=\"head\">"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (data && data.root)) && stack1.locale)) && stack1.basket)) && stack1.empty), depth0))
    + "</div>\n    </div>\n</div>";
},"useData":true}
);

// template --- productlist-item_multievent ---
Handlebars.templates['productlist-item_multievent'] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "noavail";
},"3":function(container,depth0,helpers,partials,data) {
    return "withavail";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "    <div class=\"jq-basket-item product-item\" data-ticket=\""
    + container.escapeExpression(((helper = (helper = helpers.productId || (depth0 != null ? depth0.productId : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"productId","hash":{},"data":data}) : helper)))
    + "\" data-performanceid=\""
    + container.escapeExpression(((helper = (helper = helpers.performanceId || (depth0 != null ? depth0.performanceId : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"performanceId","hash":{},"data":data}) : helper)))
    + "\"\n         data-producttype=\""
    + container.escapeExpression(((helper = (helper = helpers.productTypeCode || (depth0 != null ? depth0.productTypeCode : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"productTypeCode","hash":{},"data":data}) : helper)))
    + "\" data-groupby=\""
    + container.escapeExpression(((helper = (helper = helpers.groupBy || (depth0 != null ? depth0.groupBy : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"groupBy","hash":{},"data":data}) : helper)))
    + "\">\n        <div class=\"col tktname "
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},((stack1 = ((stack1 = (data && data.root)) && stack1.ctx)) && stack1.unlimitedcapacity),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\n            <span>"
    + container.escapeExpression((helpers.i18n || (depth0 && depth0.i18n) || helpers.helperMissing).call(depth0 != null ? depth0 : {},depth0,"name",{"name":"i18n","hash":{},"data":data}))
    + "</span>\n            <span class=\"show-for-small-only descr\">"
    + ((stack1 = (helpers.i18n || (depth0 && depth0.i18n) || helpers.helperMissing).call(depth0 != null ? depth0 : {},depth0,"descriptionLong",{"name":"i18n","hash":{},"data":data})) != null ? stack1 : "")
    + "</span>\n        </div>\n        <div class=\"col tktdes text-center hide-for-small-only\">\n            <span title=\""
    + ((stack1 = (helpers.i18n || (depth0 && depth0.i18n) || helpers.helperMissing).call(depth0 != null ? depth0 : {},depth0,"descriptionLong",{"name":"i18n","hash":{},"data":data})) != null ? stack1 : "")
    + "\" data-tooltip=\"\" aria-haspopup=\"true\" class=\"info has-tip radius\">?</span>\n        </div>\n"
    + ((stack1 = helpers.unless.call(depth0 != null ? depth0 : {},((stack1 = ((stack1 = (data && data.root)) && stack1.ctx)) && stack1.unlimitedcapacity),{"name":"unless","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        <div class=\"col tktprice text-right "
    + ((stack1 = helpers.unless.call(depth0 != null ? depth0 : {},((stack1 = ((stack1 = (data && data.root)) && stack1.ctx)) && stack1.unlimitedcapacity),{"name":"unless","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\n            "
    + container.escapeExpression((helpers.currency || (depth0 && depth0.currency) || helpers.helperMissing).call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.price : depth0),{"name":"currency","hash":{},"data":data}))
    + "\n        </div>\n        <div class=\"col tktqty text-right js-basket-item-sel\">\n"
    + ((stack1 = (helpers.isPerfAvailable || (depth0 && depth0.isPerfAvailable) || helpers.helperMissing).call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.performanceId : depth0),depth0,{"name":"isPerfAvailable","hash":{},"fn":container.program(8, data, 0),"inverse":container.program(10, data, 0),"data":data})) != null ? stack1 : "")
    + "        </div>\n    </div>\n";
},"6":function(container,depth0,helpers,partials,data) {
    return "            <div class=\"col tktdes\">\n                <span class=\"avail has-tip radius "
    + container.escapeExpression((helpers.getAvailableTooltipStyle || (depth0 && depth0.getAvailableTooltipStyle) || helpers.helperMissing).call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.performanceId : depth0),depth0,{"name":"getAvailableTooltipStyle","hash":{},"data":data}))
    + "\" title=\""
    + container.escapeExpression((helpers.getAvailableTooltipProd || (depth0 && depth0.getAvailableTooltipProd) || helpers.helperMissing).call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.performanceId : depth0),depth0,{"name":"getAvailableTooltipProd","hash":{},"data":data}))
    + "\" data-tooltip=\"\" aria-haspopup=\"true\" >&nbsp;</span>\n                <span class=\"descr "
    + container.escapeExpression((helpers.getAvailableTooltipStyle || (depth0 && depth0.getAvailableTooltipStyle) || helpers.helperMissing).call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.performanceId : depth0),depth0,{"name":"getAvailableTooltipStyle","hash":{},"data":data}))
    + "\">"
    + container.escapeExpression((helpers.getAvailableTooltipProd || (depth0 && depth0.getAvailableTooltipProd) || helpers.helperMissing).call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.performanceId : depth0),depth0,{"name":"getAvailableTooltipProd","hash":{},"data":data}))
    + "</span>\n            </div>\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "                <a class=\"jq-basket-item-change-add-confirm hide\"\n                   data-confirm='{\"body\":\""
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (data && data.root)) && stack1.locale)) && stack1.basket)) && stack1.confirmRemove), depth0))
    + "\"}'>&nbsp;</a>\n                <select class=\"jq-basket-item-quantity jq-basket-item-change-add\" name=\"quantity\" data-value=\""
    + container.escapeExpression(((helper = (helper = helpers.quantity || (depth0 != null ? depth0.quantity : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"quantity","hash":{},"data":data}) : helper)))
    + "\">\n                    "
    + ((stack1 = (helpers.quatityUpsell || (depth0 && depth0.quatityUpsell) || helpers.helperMissing).call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.quantity : depth0),(depth0 != null ? depth0.performanceId : depth0),depth0,{"name":"quatityUpsell","hash":{},"data":data})) != null ? stack1 : "")
    + "\n                </select>\n";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                <span>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (data && data.root)) && stack1.locale)) && stack1.basket)) && stack1.soldout), depth0))
    + "</span>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"list-body\" id=\"product-list\">\n    <div class=\"listheader product-item\">\n        <div class=\"col tktname "
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},((stack1 = ((stack1 = (data && data.root)) && stack1.ctx)) && stack1.unlimitedcapacity),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\n            "
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (data && data.root)) && stack1.locale)) && stack1.tickets)) && stack1.product), depth0))
    + "\n        </div>\n        <div class=\"col tktprice text-right "
    + ((stack1 = helpers.unless.call(depth0 != null ? depth0 : {},((stack1 = ((stack1 = (data && data.root)) && stack1.ctx)) && stack1.unlimitedcapacity),{"name":"unless","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\n            "
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (data && data.root)) && stack1.locale)) && stack1.tickets)) && stack1.price), depth0))
    + "\n        </div>\n        <div class=\"col tktqty text-right\">\n            "
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (data && data.root)) && stack1.locale)) && stack1.tickets)) && stack1.quantity), depth0))
    + "\n        </div>\n    </div>\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},((stack1 = ((stack1 = (data && data.root)) && stack1.data)) && stack1.items),{"name":"each","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>";
},"useData":true}
);

// template --- basket-row ---
Handlebars.templates['basket-row'] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "            "
    + container.escapeExpression((helpers.i18n || (depth0 && depth0.i18n) || helpers.helperMissing).call(depth0 != null ? depth0 : {},((stack1 = ((stack1 = (data && data.root)) && stack1.data)) && stack1.event),"mainTitle",{"name":"i18n","hash":{},"data":data}))
    + "\n"
    + ((stack1 = (helpers.hasLocale || (depth0 && depth0.hasLocale) || helpers.helperMissing).call(depth0 != null ? depth0 : {},((stack1 = (data && data.root)) && stack1.locale),(helpers.join || (depth0 && depth0.join) || helpers.helperMissing).call(depth0 != null ? depth0 : {},"ticketCategories_",(helpers.i18n || (depth0 && depth0.i18n) || helpers.helperMissing).call(depth0 != null ? depth0 : {},((stack1 = ((stack1 = (data && data.root)) && stack1.data)) && stack1.event),"eventHandler",{"name":"i18n","hash":{},"data":data}),{"name":"join","hash":{},"data":data}),(helpers.join || (depth0 && depth0.join) || helpers.helperMissing).call(depth0 != null ? depth0 : {},"title_",((stack1 = ((stack1 = ((stack1 = (data && data.root)) && stack1.data)) && stack1.product)) && stack1.categoryCode),{"name":"join","hash":{},"data":data}),{"name":"hasLocale","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "             - "
    + container.escapeExpression((helpers.getLocale || (depth0 && depth0.getLocale) || helpers.helperMissing).call(depth0 != null ? depth0 : {},((stack1 = (data && data.root)) && stack1.locale),(helpers.join || (depth0 && depth0.join) || helpers.helperMissing).call(depth0 != null ? depth0 : {},"ticketCategories_",(helpers.i18n || (depth0 && depth0.i18n) || helpers.helperMissing).call(depth0 != null ? depth0 : {},((stack1 = ((stack1 = (data && data.root)) && stack1.data)) && stack1.event),"eventHandler",{"name":"i18n","hash":{},"data":data}),{"name":"join","hash":{},"data":data}),(helpers.join || (depth0 && depth0.join) || helpers.helperMissing).call(depth0 != null ? depth0 : {},"title_",((stack1 = ((stack1 = ((stack1 = (data && data.root)) && stack1.data)) && stack1.product)) && stack1.categoryCode),{"name":"join","hash":{},"data":data}),{"name":"getLocale","hash":{},"data":data}))
    + "\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "            "
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (data && data.root)) && stack1.locale)) && stack1.basket)) && stack1.upsell), depth0))
    + "\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "            <span class=\"head hide-for-small-down\">\n                "
    + container.escapeExpression((helpers.i18n || (depth0 && depth0.i18n) || helpers.helperMissing).call(depth0 != null ? depth0 : {},((stack1 = ((stack1 = (data && data.root)) && stack1.data)) && stack1.event),"mainTitle",{"name":"i18n","hash":{},"data":data}))
    + "\n"
    + ((stack1 = (helpers.hasLocale || (depth0 && depth0.hasLocale) || helpers.helperMissing).call(depth0 != null ? depth0 : {},((stack1 = (data && data.root)) && stack1.locale),(helpers.join || (depth0 && depth0.join) || helpers.helperMissing).call(depth0 != null ? depth0 : {},"ticketCategories_",(helpers.i18n || (depth0 && depth0.i18n) || helpers.helperMissing).call(depth0 != null ? depth0 : {},((stack1 = ((stack1 = (data && data.root)) && stack1.data)) && stack1.event),"eventHandler",{"name":"i18n","hash":{},"data":data}),{"name":"join","hash":{},"data":data}),(helpers.join || (depth0 && depth0.join) || helpers.helperMissing).call(depth0 != null ? depth0 : {},"title_",((stack1 = ((stack1 = ((stack1 = (data && data.root)) && stack1.data)) && stack1.product)) && stack1.categoryCode),{"name":"join","hash":{},"data":data}),{"name":"hasLocale","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            </span>\n            <span>\n"
    + ((stack1 = (helpers.is || (depth0 && depth0.is) || helpers.helperMissing).call(depth0 != null ? depth0 : {},((stack1 = ((stack1 = ((stack1 = (data && data.root)) && stack1.data)) && stack1.product)) && stack1.productTypeCode),"in","SEASONPASS,RENEWPASS",{"name":"is","hash":{},"fn":container.program(9, data, 0),"inverse":container.program(11, data, 0),"data":data})) != null ? stack1 : "")
    + "            </span>\n";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                    - "
    + container.escapeExpression((helpers.getLocale || (depth0 && depth0.getLocale) || helpers.helperMissing).call(depth0 != null ? depth0 : {},((stack1 = (data && data.root)) && stack1.locale),(helpers.join || (depth0 && depth0.join) || helpers.helperMissing).call(depth0 != null ? depth0 : {},"ticketCategories_",(helpers.i18n || (depth0 && depth0.i18n) || helpers.helperMissing).call(depth0 != null ? depth0 : {},((stack1 = ((stack1 = (data && data.root)) && stack1.data)) && stack1.event),"eventHandler",{"name":"i18n","hash":{},"data":data}),{"name":"join","hash":{},"data":data}),(helpers.join || (depth0 && depth0.join) || helpers.helperMissing).call(depth0 != null ? depth0 : {},"title_",((stack1 = ((stack1 = ((stack1 = (data && data.root)) && stack1.data)) && stack1.product)) && stack1.categoryCode),{"name":"join","hash":{},"data":data}),{"name":"getLocale","hash":{},"data":data}))
    + "\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                    "
    + container.escapeExpression((helpers.i18n || (depth0 && depth0.i18n) || helpers.helperMissing).call(depth0 != null ? depth0 : {},((stack1 = ((stack1 = (data && data.root)) && stack1.data)) && stack1.product),"name",{"name":"i18n","hash":{},"data":data}))
    + "\n";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                    "
    + container.escapeExpression((helpers.i18n || (depth0 && depth0.i18n) || helpers.helperMissing).call(depth0 != null ? depth0 : {},((stack1 = ((stack1 = (data && data.root)) && stack1.data)) && stack1.product),"name",{"name":"i18n","hash":{},"data":data}))
    + " - "
    + container.escapeExpression((helpers.moment || (depth0 && depth0.moment) || helpers.helperMissing).call(depth0 != null ? depth0 : {},((stack1 = ((stack1 = ((stack1 = ((stack1 = (data && data.root)) && stack1.data)) && stack1.performanceList)) && stack1["0"])) && stack1.perfDate),"LL",{"name":"moment","hash":{},"data":data}))
    + "\n"
    + ((stack1 = (helpers.is || (depth0 && depth0.is) || helpers.helperMissing).call(depth0 != null ? depth0 : {},((stack1 = ((stack1 = ((stack1 = ((stack1 = (data && data.root)) && stack1.data)) && stack1.performanceList)) && stack1["0"])) && stack1.perfTime),"!==","06:00",{"name":"is","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"12":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.is || (depth0 && depth0.is) || helpers.helperMissing).call(depth0 != null ? depth0 : {},((stack1 = ((stack1 = ((stack1 = (data && data.root)) && stack1.data)) && stack1.data)) && stack1.event),"!==","OPCP01",{"name":"is","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"13":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                            "
    + container.escapeExpression((helpers.formatHours || (depth0 && depth0.formatHours) || helpers.helperMissing).call(depth0 != null ? depth0 : {},((stack1 = ((stack1 = ((stack1 = ((stack1 = (data && data.root)) && stack1.data)) && stack1.performanceList)) && stack1["0"])) && stack1.perfTime),{"name":"formatHours","hash":{},"data":data}))
    + "\n"
    + ((stack1 = (helpers.is || (depth0 && depth0.is) || helpers.helperMissing).call(depth0 != null ? depth0 : {},((stack1 = ((stack1 = ((stack1 = (data && data.root)) && stack1.data)) && stack1.event)) && stack1.eventCode),"in","HW001A,FASTRACK1",{"name":"is","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"14":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                                - "
    + container.escapeExpression((helpers.formatHoursFromDate || (depth0 && depth0.formatHoursFromDate) || helpers.helperMissing).call(depth0 != null ? depth0 : {},((stack1 = ((stack1 = ((stack1 = ((stack1 = (data && data.root)) && stack1.data)) && stack1.performanceList)) && stack1["0"])) && stack1.performanceEnd),{"name":"formatHoursFromDate","hash":{},"data":data}))
    + "\n";
},"16":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "            <span class=\"head hide-for-medium-down\">"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (data && data.root)) && stack1.locale)) && stack1.basket)) && stack1.upsell), depth0))
    + "</span>\n            <span>"
    + container.escapeExpression((helpers.i18n || (depth0 && depth0.i18n) || helpers.helperMissing).call(depth0 != null ? depth0 : {},((stack1 = ((stack1 = (data && data.root)) && stack1.data)) && stack1.product),"name",{"name":"i18n","hash":{},"data":data}))
    + "</span>\n";
},"18":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                "
    + ((stack1 = (helpers.buildQuantityCombo || (depth0 && depth0.buildQuantityCombo) || helpers.helperMissing).call(depth0 != null ? depth0 : {},((stack1 = ((stack1 = ((stack1 = (data && data.root)) && stack1.data)) && stack1.product)) && stack1.maxItemByPerf),((stack1 = ((stack1 = (data && data.root)) && stack1.data)) && stack1.quantity),0,{"name":"buildQuantityCombo","hash":{},"data":data})) != null ? stack1 : "")
    + "\n";
},"20":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},((stack1 = ((stack1 = ((stack1 = (data && data.root)) && stack1.data)) && stack1.product)) && stack1.maxItemByType),{"name":"if","hash":{},"fn":container.program(21, data, 0),"inverse":container.program(23, data, 0),"data":data})) != null ? stack1 : "");
},"21":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                    "
    + ((stack1 = (helpers.buildQuantityCombo || (depth0 && depth0.buildQuantityCombo) || helpers.helperMissing).call(depth0 != null ? depth0 : {},((stack1 = ((stack1 = ((stack1 = (data && data.root)) && stack1.data)) && stack1.product)) && stack1.maxItemByType),((stack1 = ((stack1 = (data && data.root)) && stack1.data)) && stack1.quantity),0,{"name":"buildQuantityCombo","hash":{},"data":data})) != null ? stack1 : "")
    + "\n";
},"23":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                    "
    + ((stack1 = (helpers.buildQuantityCombo || (depth0 && depth0.buildQuantityCombo) || helpers.helperMissing).call(depth0 != null ? depth0 : {},10,((stack1 = ((stack1 = (data && data.root)) && stack1.data)) && stack1.quantity),0,{"name":"buildQuantityCombo","hash":{},"data":data})) != null ? stack1 : "")
    + "\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"jq-basket-item product-item\" data-uuid=\""
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (data && data.root)) && stack1.data)) && stack1.hashCode), depth0))
    + "\">\n    <div class=\"col tktevent show-for-small-down\">\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.performanceList : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(4, data, 0),"data":data})) != null ? stack1 : "")
    + "    </div>\n    <div class=\"col tktname\">\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.performanceList : stack1),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.program(16, data, 0),"data":data})) != null ? stack1 : "")
    + "    </div>\n    <div class=\"col tktdes text-center\">\n        <span title=\""
    + ((stack1 = (helpers.i18n || (depth0 && depth0.i18n) || helpers.helperMissing).call(depth0 != null ? depth0 : {},((stack1 = ((stack1 = (data && data.root)) && stack1.data)) && stack1.product),"descriptionLong",{"name":"i18n","hash":{},"data":data})) != null ? stack1 : "")
    + "\" data-tooltip=\"\" aria-haspopup=\"true\" class=\"info has-tip radius\">?</span>\n    </div>\n    <div class=\"col tktqty text-right js-basket-item-sel\">\n        <a class=\"jq-basket-item-change-confirm hide\" data-confirm='{\"body\":\""
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (data && data.root)) && stack1.locale)) && stack1.basket)) && stack1.confirmRemove), depth0))
    + "\"}'>&nbsp;</a>\n        <select class=\"jq-basket-item-quantity jq-basket-item-change\" name=\"quantity\" data-value=\""
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (data && data.root)) && stack1.data)) && stack1.quantity), depth0))
    + "\">\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},((stack1 = ((stack1 = ((stack1 = (data && data.root)) && stack1.data)) && stack1.product)) && stack1.maxItemByPerf),{"name":"if","hash":{},"fn":container.program(18, data, 0),"inverse":container.program(20, data, 0),"data":data})) != null ? stack1 : "")
    + "        </select>\n    </div>\n    <div class=\"col tktprice text-right \">"
    + container.escapeExpression((helpers.currency || (depth0 && depth0.currency) || helpers.helperMissing).call(depth0 != null ? depth0 : {},((stack1 = ((stack1 = ((stack1 = (data && data.root)) && stack1.data)) && stack1.product)) && stack1.price),{"name":"currency","hash":{},"data":data}))
    + "</div>\n</div>";
},"useData":true}
);

// template --- multibuy-empty ---
Handlebars.templates['multibuy-empty'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<li class=\"accordion-navigation empty active\">\n    <div class=\"content active\">\n        <div class=\"product-list\">\n            <div id=\"elements\">\n                <div class=\"list-body\" id=\"product-list\">\n                    <div class=\"product-item\">\n                        <div class=\"col text-center empty\">\n                            <div class=\"head\">"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (data && data.root)) && stack1.locale)) && stack1.tickets)) && stack1.notickets_title), depth0))
    + "</div>\n                            <div>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (data && data.root)) && stack1.locale)) && stack1.tickets)) && stack1.notickets_info), depth0))
    + "</div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</li>";
},"useData":true}
);

// template --- calendar-perflist_tabs ---
Handlebars.templates['calendar-perflist_tabs'] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "        <li class=\"tab-title\">\n            <a href=\"#panel"
    + container.escapeExpression(((helper = (helper = helpers.performanceId || (depth0 != null ? depth0.performanceId : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"performanceId","hash":{},"data":data}) : helper)))
    + "\" data-performanceid=\""
    + container.escapeExpression(((helper = (helper = helpers.performanceId || (depth0 != null ? depth0.performanceId : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"performanceId","hash":{},"data":data}) : helper)))
    + "\" data-location=\""
    + container.escapeExpression(((helper = (helper = helpers.locationCode || (depth0 != null ? depth0.locationCode : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"locationCode","hash":{},"data":data}) : helper)))
    + "\" data-status=\""
    + container.escapeExpression(((helper = (helper = helpers.status || (depth0 != null ? depth0.status : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"status","hash":{},"data":data}) : helper)))
    + "\">\n                "
    + container.escapeExpression((helpers.formatHours || (depth0 && depth0.formatHours) || helpers.helperMissing).call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.perfTime : depth0),{"name":"formatHours","hash":{},"data":data}))
    + "\n            </a>\n        </li>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "        <div class=\"content\" id=\"panel"
    + container.escapeExpression(((helper = (helper = helpers.performanceId || (depth0 != null ? depth0.performanceId : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"performanceId","hash":{},"data":data}) : helper)))
    + "\">\n            <h1>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (data && data.root)) && stack1.locale)) && stack1["camps-perf"])) && stack1.title), depth0))
    + "</h1>\n            <div class=\"col\">\n                <strong>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (data && data.root)) && stack1.locale)) && stack1["camps-perf"])) && stack1.hour), depth0))
    + "</strong>\n                <span>"
    + container.escapeExpression((helpers.formatHours || (depth0 && depth0.formatHours) || helpers.helperMissing).call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.perfTime : depth0),{"name":"formatHours","hash":{},"data":data}))
    + "</span>\n            </div>\n            <div class=\"col\">\n                <strong>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (data && data.root)) && stack1.locale)) && stack1["camps-perf"])) && stack1.availability), depth0))
    + "</strong>\n                <span>"
    + container.escapeExpression((helpers.getAvailableTooltip || (depth0 && depth0.getAvailableTooltip) || helpers.helperMissing).call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.performanceId : depth0),{"name":"getAvailableTooltip","hash":{},"data":data}))
    + "</span>\n            </div>\n            <div class=\"col\">\n                <strong>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (data && data.root)) && stack1.locale)) && stack1["camps-perf"])) && stack1["class"]), depth0))
    + "</strong>\n                <span>"
    + container.escapeExpression((helpers.i18n || (depth0 && depth0.i18n) || helpers.helperMissing).call(depth0 != null ? depth0 : {},depth0,"Class",{"name":"i18n","hash":{},"data":data}))
    + "</span>\n            </div>\n            <div class=\"col smallTip\">\n                <strong>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (data && data.root)) && stack1.locale)) && stack1["camps-perf"])) && stack1.lang), depth0))
    + "</strong>\n                <span>"
    + container.escapeExpression((helpers.i18n || (depth0 && depth0.i18n) || helpers.helperMissing).call(depth0 != null ? depth0 : {},depth0,"Language",{"name":"i18n","hash":{},"data":data}))
    + "</span>\n            </div>\n            <div class=\"col half smallTip\">\n                <strong>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (data && data.root)) && stack1.locale)) && stack1["camps-perf"])) && stack1.dates), depth0))
    + "</strong>\n                <span>"
    + container.escapeExpression((helpers.i18n || (depth0 && depth0.i18n) || helpers.helperMissing).call(depth0 != null ? depth0 : {},depth0,"LessonPeriod",{"name":"i18n","hash":{},"data":data}))
    + "</span>\n            </div>\n            <div class=\"col note smallTip\">\n                <strong>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (data && data.root)) && stack1.locale)) && stack1["camps-perf"])) && stack1.notes), depth0))
    + "</strong>\n                <span>"
    + ((stack1 = (helpers.i18n || (depth0 && depth0.i18n) || helpers.helperMissing).call(depth0 != null ? depth0 : {},depth0,"Remarks",{"name":"i18n","hash":{},"data":data})) != null ? stack1 : "")
    + "</span>\n            </div>\n        </div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<ul class=\"tabs vertical\" data-tab>\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.data : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</ul>\n<div class=\"tabs-content\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.data : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>\n";
},"useData":true}
);

// template --- upsell-empty ---
Handlebars.templates['upsell-empty'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"list-body\" id=\"product-list\">\n    <div class=\"product-item\">\n        <div class=\"col text-center empty\">\n            <div class=\"head\">"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (data && data.root)) && stack1.locale)) && stack1.upsell)) && stack1.noupsell_title), depth0))
    + "</div>\n            <div>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (data && data.root)) && stack1.locale)) && stack1.upsell)) && stack1.noupsell_info), depth0))
    + "</div>\n        </div>\n    </div>\n</div>";
},"useData":true}
);

// template --- productlist-header_osb ---
Handlebars.templates['productlist-header_osb'] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "        <span class=\"date\">"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (data && data.root)) && stack1.locale)) && stack1.tickets)) && stack1.header_date), depth0))
    + "<strong id=\"selected-date\"></strong></span>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"widget-header\">\n    <span>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (data && data.root)) && stack1.locale)) && stack1.tickets)) && stack1.header_title), depth0))
    + "</span>\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},((stack1 = ((stack1 = (data && data.root)) && stack1.ctx)) && stack1.selectedDate),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>\n<div class=\"widget-subheader\">\n    "
    + ((stack1 = container.lambda(((stack1 = ((stack1 = ((stack1 = (data && data.root)) && stack1.locale)) && stack1.tickets)) && stack1.info_osb), depth0)) != null ? stack1 : "")
    + "\n</div>";
},"useData":true}
);

// template --- productlist-item ---
Handlebars.templates['productlist-item'] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "noavail";
},"3":function(container,depth0,helpers,partials,data) {
    return "withavail";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "    <div class=\"jq-basket-item product-item\" data-ticket=\""
    + container.escapeExpression(((helper = (helper = helpers.productId || (depth0 != null ? depth0.productId : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"productId","hash":{},"data":data}) : helper)))
    + "\" data-performanceid=\""
    + container.escapeExpression(((helper = (helper = helpers.performanceId || (depth0 != null ? depth0.performanceId : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"performanceId","hash":{},"data":data}) : helper)))
    + "\"\n         data-producttype=\""
    + container.escapeExpression(((helper = (helper = helpers.productTypeCode || (depth0 != null ? depth0.productTypeCode : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"productTypeCode","hash":{},"data":data}) : helper)))
    + "\" data-groupby=\""
    + container.escapeExpression(((helper = (helper = helpers.groupBy || (depth0 != null ? depth0.groupBy : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"groupBy","hash":{},"data":data}) : helper)))
    + "\">\n        <div class=\"col tktname "
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},((stack1 = ((stack1 = (data && data.root)) && stack1.ctx)) && stack1.unlimitedcapacity),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\n            <span>"
    + container.escapeExpression((helpers.i18n || (depth0 && depth0.i18n) || helpers.helperMissing).call(depth0 != null ? depth0 : {},depth0,"name",{"name":"i18n","hash":{},"data":data}))
    + "</span>\n        </div>\n        <div class=\"col tktdes text-center\">\n            <span title=\""
    + ((stack1 = (helpers.i18n || (depth0 && depth0.i18n) || helpers.helperMissing).call(depth0 != null ? depth0 : {},depth0,"descriptionLong",{"name":"i18n","hash":{},"data":data})) != null ? stack1 : "")
    + "\" data-tooltip=\"\" aria-haspopup=\"true\" class=\"info has-tip radius\">?</span>\n        </div>\n"
    + ((stack1 = helpers.unless.call(depth0 != null ? depth0 : {},((stack1 = ((stack1 = (data && data.root)) && stack1.ctx)) && stack1.unlimitedcapacity),{"name":"unless","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        <div class=\"col tktprice text-right "
    + ((stack1 = helpers.unless.call(depth0 != null ? depth0 : {},((stack1 = ((stack1 = (data && data.root)) && stack1.ctx)) && stack1.unlimitedcapacity),{"name":"unless","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\n            "
    + container.escapeExpression((helpers.currency || (depth0 && depth0.currency) || helpers.helperMissing).call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.price : depth0),{"name":"currency","hash":{},"data":data}))
    + "\n        </div>\n        <div class=\"col tktqty text-right js-basket-item-sel\">\n"
    + ((stack1 = (helpers.isPerfAvailable || (depth0 && depth0.isPerfAvailable) || helpers.helperMissing).call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.performanceId : depth0),depth0,{"name":"isPerfAvailable","hash":{},"fn":container.program(8, data, 0),"inverse":container.program(16, data, 0),"data":data})) != null ? stack1 : "")
    + "        </div>\n    </div>\n";
},"6":function(container,depth0,helpers,partials,data) {
    return "            <div class=\"col tktdes\">\n                <span class=\"avail has-tip radius "
    + container.escapeExpression((helpers.getAvailableTooltipStyle || (depth0 && depth0.getAvailableTooltipStyle) || helpers.helperMissing).call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.performanceId : depth0),depth0,{"name":"getAvailableTooltipStyle","hash":{},"data":data}))
    + "\" title=\""
    + container.escapeExpression((helpers.getAvailableTooltipProd || (depth0 && depth0.getAvailableTooltipProd) || helpers.helperMissing).call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.performanceId : depth0),depth0,{"name":"getAvailableTooltipProd","hash":{},"data":data}))
    + "\" data-tooltip=\"\" aria-haspopup=\"true\" >&nbsp;</span>\n            </div>\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "                <a class=\"jq-basket-item-change-add-confirm hide\"\n                   data-confirm='{\"body\":\""
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (data && data.root)) && stack1.locale)) && stack1.basket)) && stack1.confirmRemove), depth0))
    + "\"}'>&nbsp;</a>\n                <select class=\"jq-basket-item-quantity jq-basket-item-change-add\" name=\"quantity\" data-value=\""
    + container.escapeExpression(((helper = (helper = helpers.quantity || (depth0 != null ? depth0.quantity : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"quantity","hash":{},"data":data}) : helper)))
    + "\">\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.maxItemByPerf : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.program(11, data, 0),"data":data})) != null ? stack1 : "")
    + "                </select>\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                        "
    + ((stack1 = (helpers.buildQuantityCombo || (depth0 && depth0.buildQuantityCombo) || helpers.helperMissing).call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.maxItemByPerf : depth0),(depth0 != null ? depth0.quantity : depth0),0,(depth0 != null ? depth0.siblingList : depth0),(depth0 != null ? depth0.performanceId : depth0),depth0,{"name":"buildQuantityCombo","hash":{},"data":data})) != null ? stack1 : "")
    + "\n";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.maxItemByType : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.program(14, data, 0),"data":data})) != null ? stack1 : "");
},"12":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                            "
    + ((stack1 = (helpers.buildQuantityCombo || (depth0 && depth0.buildQuantityCombo) || helpers.helperMissing).call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.maxItemByType : depth0),(depth0 != null ? depth0.quantity : depth0),0,(depth0 != null ? depth0.siblingList : depth0),(depth0 != null ? depth0.performanceId : depth0),depth0,{"name":"buildQuantityCombo","hash":{},"data":data})) != null ? stack1 : "")
    + "\n";
},"14":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                            "
    + ((stack1 = (helpers.buildQuantityCombo || (depth0 && depth0.buildQuantityCombo) || helpers.helperMissing).call(depth0 != null ? depth0 : {},10,(depth0 != null ? depth0.quantity : depth0),0,(depth0 != null ? depth0.siblingList : depth0),(depth0 != null ? depth0.performanceId : depth0),depth0,{"name":"buildQuantityCombo","hash":{},"data":data})) != null ? stack1 : "")
    + "\n";
},"16":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                <span>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (data && data.root)) && stack1.locale)) && stack1.basket)) && stack1.soldout), depth0))
    + "</span>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"list-body\" id=\"product-list\">\n    <div class=\"listheader product-item\">\n        <div class=\"col tktname "
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},((stack1 = ((stack1 = (data && data.root)) && stack1.ctx)) && stack1.unlimitedcapacity),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\n            "
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (data && data.root)) && stack1.locale)) && stack1.tickets)) && stack1.product), depth0))
    + "\n        </div>\n        <div class=\"col tktprice text-right "
    + ((stack1 = helpers.unless.call(depth0 != null ? depth0 : {},((stack1 = ((stack1 = (data && data.root)) && stack1.ctx)) && stack1.unlimitedcapacity),{"name":"unless","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\n            "
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (data && data.root)) && stack1.locale)) && stack1.tickets)) && stack1.price), depth0))
    + "\n        </div>\n        <div class=\"col tktqty text-right\">\n            "
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (data && data.root)) && stack1.locale)) && stack1.tickets)) && stack1.quantity), depth0))
    + "\n        </div>\n    </div>\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},((stack1 = ((stack1 = (data && data.root)) && stack1.data)) && stack1.items),{"name":"each","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>";
},"useData":true}
);

// template --- basket-row_package ---
Handlebars.templates['basket-row_package'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "";
},"useData":true}
);

// template --- activebasket-row ---
Handlebars.templates['activebasket-row'] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                "
    + container.escapeExpression((helpers.i18n || (depth0 && depth0.i18n) || helpers.helperMissing).call(depth0 != null ? depth0 : {},((stack1 = ((stack1 = (data && data.root)) && stack1.data)) && stack1.event),"mainTitle",{"name":"i18n","hash":{},"data":data}))
    + "\n"
    + ((stack1 = (helpers.hasLocale || (depth0 && depth0.hasLocale) || helpers.helperMissing).call(depth0 != null ? depth0 : {},((stack1 = (data && data.root)) && stack1.locale),(helpers.join || (depth0 && depth0.join) || helpers.helperMissing).call(depth0 != null ? depth0 : {},"ticketCategories_",(helpers.i18n || (depth0 && depth0.i18n) || helpers.helperMissing).call(depth0 != null ? depth0 : {},((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.event : stack1),"eventHandler",{"name":"i18n","hash":{},"data":data}),{"name":"join","hash":{},"data":data}),(helpers.join || (depth0 && depth0.join) || helpers.helperMissing).call(depth0 != null ? depth0 : {},"title_",((stack1 = ((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.product : stack1)) != null ? stack1.categoryCode : stack1),{"name":"join","hash":{},"data":data}),{"name":"hasLocale","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                    - "
    + container.escapeExpression((helpers.getLocale || (depth0 && depth0.getLocale) || helpers.helperMissing).call(depth0 != null ? depth0 : {},((stack1 = (data && data.root)) && stack1.locale),(helpers.join || (depth0 && depth0.join) || helpers.helperMissing).call(depth0 != null ? depth0 : {},"ticketCategories_",(helpers.i18n || (depth0 && depth0.i18n) || helpers.helperMissing).call(depth0 != null ? depth0 : {},((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.event : stack1),"eventHandler",{"name":"i18n","hash":{},"data":data}),{"name":"join","hash":{},"data":data}),(helpers.join || (depth0 && depth0.join) || helpers.helperMissing).call(depth0 != null ? depth0 : {},"title_",((stack1 = ((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.product : stack1)) != null ? stack1.categoryCode : stack1),{"name":"join","hash":{},"data":data}),{"name":"getLocale","hash":{},"data":data}))
    + "\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                "
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (data && data.root)) && stack1.locale)) && stack1.basket)) && stack1.upsell), depth0))
    + "\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "            <div>\n"
    + ((stack1 = (helpers.is || (depth0 && depth0.is) || helpers.helperMissing).call(depth0 != null ? depth0 : {},((stack1 = ((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.product : stack1)) != null ? stack1.productTypeCode : stack1),"in","SEASONPASS,RENEWPASS",{"name":"is","hash":{},"fn":container.program(7, data, 0),"inverse":container.program(9, data, 0),"data":data})) != null ? stack1 : "")
    + "            </div>\n";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                    "
    + container.escapeExpression((helpers.i18n || (depth0 && depth0.i18n) || helpers.helperMissing).call(depth0 != null ? depth0 : {},((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.product : stack1),"name",{"name":"i18n","hash":{},"data":data}))
    + "\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                    "
    + container.escapeExpression((helpers.i18n || (depth0 && depth0.i18n) || helpers.helperMissing).call(depth0 != null ? depth0 : {},((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.product : stack1),"name",{"name":"i18n","hash":{},"data":data}))
    + "\n                    <span>"
    + container.escapeExpression((helpers.moment || (depth0 && depth0.moment) || helpers.helperMissing).call(depth0 != null ? depth0 : {},((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.performanceList : stack1)) != null ? stack1["0"] : stack1)) != null ? stack1.perfDate : stack1),"LL",{"name":"moment","hash":{},"data":data}))
    + "\n"
    + ((stack1 = (helpers.is || (depth0 && depth0.is) || helpers.helperMissing).call(depth0 != null ? depth0 : {},((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.performanceList : stack1)) != null ? stack1["0"] : stack1)) != null ? stack1.perfTime : stack1),"!==","06:00",{"name":"is","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</span>\n";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.is || (depth0 && depth0.is) || helpers.helperMissing).call(depth0 != null ? depth0 : {},((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.event : stack1),"!==","OPCP01",{"name":"is","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                    ";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                            "
    + container.escapeExpression((helpers.formatHours || (depth0 && depth0.formatHours) || helpers.helperMissing).call(depth0 != null ? depth0 : {},((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.performanceList : stack1)) != null ? stack1["0"] : stack1)) != null ? stack1.perfTime : stack1),{"name":"formatHours","hash":{},"data":data}))
    + "\n"
    + ((stack1 = (helpers.is || (depth0 && depth0.is) || helpers.helperMissing).call(depth0 != null ? depth0 : {},((stack1 = ((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.event : stack1)) != null ? stack1.eventCode : stack1),"in","HW001A,FASTRACK1",{"name":"is","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"12":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                                - "
    + container.escapeExpression((helpers.formatHoursFromDate || (depth0 && depth0.formatHoursFromDate) || helpers.helperMissing).call(depth0 != null ? depth0 : {},((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.performanceList : stack1)) != null ? stack1["0"] : stack1)) != null ? stack1.performanceEnd : stack1),{"name":"formatHoursFromDate","hash":{},"data":data}))
    + "\n";
},"14":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "            <div>"
    + container.escapeExpression((helpers.i18n || (depth0 && depth0.i18n) || helpers.helperMissing).call(depth0 != null ? depth0 : {},((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.product : stack1),"name",{"name":"i18n","hash":{},"data":data}))
    + "</div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"jq-ba-item product-item\"\n     data-ticket=\""
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (data && data.root)) && stack1.data)) && stack1.product)) && stack1.productId), depth0))
    + "\" data-performanceid=\""
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = ((stack1 = (data && data.root)) && stack1.data)) && stack1.performanceList)) && stack1["0"])) && stack1.performanceId), depth0))
    + "\"\n     data-producttype=\""
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (data && data.root)) && stack1.data)) && stack1.product)) && stack1.productTypeCode), depth0))
    + "\" data-uuid=\""
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (data && data.root)) && stack1.data)) && stack1.hashCode), depth0))
    + "\">\n    <div class=\"col tktevent\">\n        <div class=\"head\">\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.performanceList : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(4, data, 0),"data":data})) != null ? stack1 : "")
    + "        </div>\n    </div>\n    <div class=\"col tktname\">\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.performanceList : stack1),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.program(14, data, 0),"data":data})) != null ? stack1 : "")
    + "    </div>\n    <div class=\"col tktprice text-right\">\n        <div>"
    + container.escapeExpression((helpers.currency || (depth0 && depth0.currency) || helpers.helperMissing).call(depth0 != null ? depth0 : {},((stack1 = ((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.product : stack1)) != null ? stack1.price : stack1),{"name":"currency","hash":{},"data":data}))
    + "</div>\n    </div>\n    <div class=\"col tktqty text-right\">\n        <div>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (data && data.root)) && stack1.data)) && stack1.quantity), depth0))
    + "</div>\n    </div>\n</div>";
},"useData":true}
);

// template --- basket-delivery ---
Handlebars.templates['basket-delivery'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return container.escapeExpression((helpers.currency || (depth0 && depth0.currency) || helpers.helperMissing).call(depth0 != null ? depth0 : {},((stack1 = ((stack1 = (data && data.root)) && stack1.data)) && stack1.delivery),{"name":"currency","hash":{},"data":data}));
},"useData":true}
);

// template --- floatbasket-loading ---
Handlebars.templates['floatbasket-loading'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"basketFloat-list\">\n    <div class=\"product-item\">\n        <div class=\"col text-center empty\">\n            <div class=\"head\">"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (data && data.root)) && stack1.locale)) && stack1.basket)) && stack1.loading), depth0))
    + "</div>\n        </div>\n    </div>\n</div>";
},"useData":true}
);

// template --- productlist-item_category ---
Handlebars.templates['productlist-item_category'] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "noavail";
},"3":function(container,depth0,helpers,partials,data) {
    return "withavail";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "            <div class=\"jq-basket-item product-item\" data-ticket=\""
    + container.escapeExpression(((helper = (helper = helpers.productId || (depth0 != null ? depth0.productId : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"productId","hash":{},"data":data}) : helper)))
    + "\" data-performanceid=\""
    + container.escapeExpression(((helper = (helper = helpers.performanceId || (depth0 != null ? depth0.performanceId : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"performanceId","hash":{},"data":data}) : helper)))
    + "\"\n                 data-producttype=\""
    + container.escapeExpression(((helper = (helper = helpers.productTypeCode || (depth0 != null ? depth0.productTypeCode : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"productTypeCode","hash":{},"data":data}) : helper)))
    + "\" data-groupby=\""
    + container.escapeExpression(((helper = (helper = helpers.groupBy || (depth0 != null ? depth0.groupBy : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"groupBy","hash":{},"data":data}) : helper)))
    + "\">\n                <div class=\"col tktname "
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},((stack1 = ((stack1 = (data && data.root)) && stack1.ctx)) && stack1.unlimitedcapacity),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\n                    <span>"
    + container.escapeExpression((helpers.i18n || (depth0 && depth0.i18n) || helpers.helperMissing).call(depth0 != null ? depth0 : {},depth0,"name",{"name":"i18n","hash":{},"data":data}))
    + "</span>\n                </div>\n                <div class=\"col tktdes text-center\">\n                    <span title=\""
    + ((stack1 = (helpers.i18n || (depth0 && depth0.i18n) || helpers.helperMissing).call(depth0 != null ? depth0 : {},depth0,"descriptionLong",{"name":"i18n","hash":{},"data":data})) != null ? stack1 : "")
    + "\" data-tooltip=\"\" aria-haspopup=\"true\" class=\"info has-tip radius\">?</span>\n                </div>\n"
    + ((stack1 = helpers.unless.call(depth0 != null ? depth0 : {},((stack1 = ((stack1 = (data && data.root)) && stack1.ctx)) && stack1.unlimitedcapacity),{"name":"unless","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                <div class=\"col tktprice text-right "
    + ((stack1 = helpers.unless.call(depth0 != null ? depth0 : {},((stack1 = ((stack1 = (data && data.root)) && stack1.ctx)) && stack1.unlimitedcapacity),{"name":"unless","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\n                    "
    + container.escapeExpression((helpers.currency || (depth0 && depth0.currency) || helpers.helperMissing).call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.price : depth0),{"name":"currency","hash":{},"data":data}))
    + "\n                </div>\n                <div class=\"col tktqty text-right js-basket-item-sel\">\n"
    + ((stack1 = (helpers.isPerfAvailable || (depth0 && depth0.isPerfAvailable) || helpers.helperMissing).call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.performanceId : depth0),depth0,{"name":"isPerfAvailable","hash":{},"fn":container.program(8, data, 0),"inverse":container.program(16, data, 0),"data":data})) != null ? stack1 : "")
    + "                </div>\n            </div>\n";
},"6":function(container,depth0,helpers,partials,data) {
    return "                    <div class=\"col tktdes\">\n                        <span class=\"avail has-tip radius "
    + container.escapeExpression((helpers.getAvailableTooltipStyle || (depth0 && depth0.getAvailableTooltipStyle) || helpers.helperMissing).call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.performanceId : depth0),depth0,{"name":"getAvailableTooltipStyle","hash":{},"data":data}))
    + "\" title=\""
    + container.escapeExpression((helpers.getAvailableTooltipProd || (depth0 && depth0.getAvailableTooltipProd) || helpers.helperMissing).call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.performanceId : depth0),depth0,{"name":"getAvailableTooltipProd","hash":{},"data":data}))
    + "\" data-tooltip=\"\" aria-haspopup=\"true\" >&nbsp;</span>\n                    </div>\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "                        <a class=\"jq-basket-item-change-add-confirm hide\"\n                           data-confirm='{\"body\":\""
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (data && data.root)) && stack1.locale)) && stack1.basket)) && stack1.confirmRemove), depth0))
    + "\"}'>&nbsp;</a>\n                        <select class=\"jq-basket-item-quantity jq-basket-item-change-add\" name=\"quantity\" data-value=\""
    + container.escapeExpression(((helper = (helper = helpers.quantity || (depth0 != null ? depth0.quantity : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"quantity","hash":{},"data":data}) : helper)))
    + "\">\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.maxItemByPerf : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.program(11, data, 0),"data":data})) != null ? stack1 : "")
    + "                        </select>\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                                "
    + ((stack1 = (helpers.buildQuantityCombo || (depth0 && depth0.buildQuantityCombo) || helpers.helperMissing).call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.maxItemByPerf : depth0),(depth0 != null ? depth0.quantity : depth0),0,(depth0 != null ? depth0.siblingList : depth0),(depth0 != null ? depth0.performanceId : depth0),depth0,{"name":"buildQuantityCombo","hash":{},"data":data})) != null ? stack1 : "")
    + "\n";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.maxItemByType : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.program(14, data, 0),"data":data})) != null ? stack1 : "");
},"12":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                                    "
    + ((stack1 = (helpers.buildQuantityCombo || (depth0 && depth0.buildQuantityCombo) || helpers.helperMissing).call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.maxItemByType : depth0),(depth0 != null ? depth0.quantity : depth0),0,(depth0 != null ? depth0.siblingList : depth0),(depth0 != null ? depth0.performanceId : depth0),depth0,{"name":"buildQuantityCombo","hash":{},"data":data})) != null ? stack1 : "")
    + "\n";
},"14":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                                    "
    + ((stack1 = (helpers.buildQuantityCombo || (depth0 && depth0.buildQuantityCombo) || helpers.helperMissing).call(depth0 != null ? depth0 : {},10,(depth0 != null ? depth0.quantity : depth0),0,(depth0 != null ? depth0.siblingList : depth0),(depth0 != null ? depth0.performanceId : depth0),depth0,{"name":"buildQuantityCombo","hash":{},"data":data})) != null ? stack1 : "")
    + "\n";
},"16":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                        <span>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (data && data.root)) && stack1.locale)) && stack1.basket)) && stack1.soldout), depth0))
    + "</span>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"article clearfix\">\n    <div class=\"article-title\">\n        <div class=\"head\">"
    + container.escapeExpression((helpers.getLocale || (depth0 && depth0.getLocale) || helpers.helperMissing).call(depth0 != null ? depth0 : {},((stack1 = (data && data.root)) && stack1.locale),(helpers.join || (depth0 && depth0.join) || helpers.helperMissing).call(depth0 != null ? depth0 : {},"ticketCategories_",((stack1 = ((stack1 = (data && data.root)) && stack1.ctx)) && stack1.eventPage),{"name":"join","hash":{},"data":data}),(helpers.join || (depth0 && depth0.join) || helpers.helperMissing).call(depth0 != null ? depth0 : {},"title_",((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.items : stack1)) != null ? stack1["0"] : stack1)) != null ? stack1.categoryCode : stack1),{"name":"join","hash":{},"data":data}),{"name":"getLocale","hash":{},"data":data}))
    + "</div>\n        <div>"
    + ((stack1 = (helpers.getLocale || (depth0 && depth0.getLocale) || helpers.helperMissing).call(depth0 != null ? depth0 : {},((stack1 = (data && data.root)) && stack1.locale),(helpers.join || (depth0 && depth0.join) || helpers.helperMissing).call(depth0 != null ? depth0 : {},"ticketCategories_",((stack1 = ((stack1 = (data && data.root)) && stack1.ctx)) && stack1.eventPage),{"name":"join","hash":{},"data":data}),(helpers.join || (depth0 && depth0.join) || helpers.helperMissing).call(depth0 != null ? depth0 : {},"description_",((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.items : stack1)) != null ? stack1["0"] : stack1)) != null ? stack1.categoryCode : stack1),{"name":"join","hash":{},"data":data}),{"name":"getLocale","hash":{},"data":data})) != null ? stack1 : "")
    + "</div>\n    </div>\n    <div class=\"article-body\" id=\"product-list\">\n        <div class=\"listheader product-item\">\n            <div class=\"col tktname "
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},((stack1 = ((stack1 = (data && data.root)) && stack1.ctx)) && stack1.unlimitedcapacity),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\n                "
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (data && data.root)) && stack1.locale)) && stack1.tickets)) && stack1.product), depth0))
    + "\n            </div>\n            <div class=\"col tktprice text-right "
    + ((stack1 = helpers.unless.call(depth0 != null ? depth0 : {},((stack1 = ((stack1 = (data && data.root)) && stack1.ctx)) && stack1.unlimitedcapacity),{"name":"unless","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\n                "
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (data && data.root)) && stack1.locale)) && stack1.tickets)) && stack1.price), depth0))
    + "\n            </div>\n            <div class=\"col tktqty text-right\">\n                "
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (data && data.root)) && stack1.locale)) && stack1.tickets)) && stack1.quantity), depth0))
    + "\n            </div>\n        </div>\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},((stack1 = ((stack1 = (data && data.root)) && stack1.data)) && stack1.items),{"name":"each","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\n</div>";
},"useData":true}
);

// template --- delivery-row ---
Handlebars.templates['delivery-row'] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "        "
    + container.escapeExpression((helpers.i18n || (depth0 && depth0.i18n) || helpers.helperMissing).call(depth0 != null ? depth0 : {},((stack1 = (data && data.root)) && stack1.data),"descriptionLong",{"name":"i18n","hash":{},"data":data}))
    + "\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "        "
    + container.escapeExpression((helpers.i18n || (depth0 && depth0.i18n) || helpers.helperMissing).call(depth0 != null ? depth0 : {},((stack1 = (data && data.root)) && stack1.data),"name",{"name":"i18n","hash":{},"data":data}))
    + "\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<option value=\""
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (data && data.root)) && stack1.data)) && stack1.productId), depth0))
    + "\">\n"
    + ((stack1 = (helpers.hasi18n || (depth0 && depth0.hasi18n) || helpers.helperMissing).call(depth0 != null ? depth0 : {},((stack1 = (data && data.root)) && stack1.data),"descriptionLong",{"name":"hasi18n","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "</option>";
},"useData":true}
);

// template --- upsell-item ---
Handlebars.templates['upsell-item'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "";
},"useData":true}
);

// template --- calendar-perflistempty ---
Handlebars.templates['calendar-perflistempty'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "";
},"useData":true}
);

// template --- productlist-empty ---
Handlebars.templates['productlist-empty'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"list-body\" id=\"product-list\">\n    <div class=\"product-item\">\n        <div class=\"col text-center empty\">\n            <div class=\"head\">"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (data && data.root)) && stack1.locale)) && stack1.tickets)) && stack1.notickets_title), depth0))
    + "</div>\n            <div>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (data && data.root)) && stack1.locale)) && stack1.tickets)) && stack1.notickets_info), depth0))
    + "</div>\n        </div>\n    </div>\n</div>";
},"useData":true}
);

// template --- multibuy-perfrow ---
Handlebars.templates['multibuy-perfrow'] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.isEventEq || (depth0 && depth0.isEventEq) || helpers.helperMissing).call(depth0 != null ? depth0 : {},(helpers.getPerformanceEvent || (depth0 && depth0.getPerformanceEvent) || helpers.helperMissing).call(depth0 != null ? depth0 : {},depth0,{"name":"getPerformanceEvent","hash":{},"data":data}),{"name":"isEventEq","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "        <li class=\"accordion-navigation "
    + container.escapeExpression((helpers.showEvent || (depth0 && depth0.showEvent) || helpers.helperMissing).call(depth0 != null ? depth0 : {},(helpers.getPerformanceEvent || (depth0 && depth0.getPerformanceEvent) || helpers.helperMissing).call(depth0 != null ? depth0 : {},depth0,{"name":"getPerformanceEvent","hash":{},"data":data}),((stack1 = (data && data.root)) && stack1.data),{"name":"showEvent","hash":{},"data":data}))
    + "\">\n            <a class=\"open_panel_link\" href=\"#panel_"
    + container.escapeExpression((helpers.getPerformanceEvent || (depth0 && depth0.getPerformanceEvent) || helpers.helperMissing).call(depth0 != null ? depth0 : {},depth0,{"name":"getPerformanceEvent","hash":{},"data":data}))
    + "\"><span>"
    + container.escapeExpression((helpers.i18n || (depth0 && depth0.i18n) || helpers.helperMissing).call(depth0 != null ? depth0 : {},depth0,"mainTitle",{"name":"i18n","hash":{},"data":data}))
    + "</span><span class=\"icon\"></span></a>\n"
    + ((stack1 = (helpers.hasLocale || (depth0 && depth0.hasLocale) || helpers.helperMissing).call(depth0 != null ? depth0 : {},((stack1 = (data && data.root)) && stack1.locale),"b2cupsell",(helpers.join || (depth0 && depth0.join) || helpers.helperMissing).call(depth0 != null ? depth0 : {},"descr_",(helpers.getPerformanceEvent || (depth0 && depth0.getPerformanceEvent) || helpers.helperMissing).call(depth0 != null ? depth0 : {},depth0,{"name":"getPerformanceEvent","hash":{},"data":data}),{"name":"join","hash":{},"data":data}),{"name":"hasLocale","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            <div id=\"panel_"
    + container.escapeExpression((helpers.getPerformanceEvent || (depth0 && depth0.getPerformanceEvent) || helpers.helperMissing).call(depth0 != null ? depth0 : {},depth0,{"name":"getPerformanceEvent","hash":{},"data":data}))
    + "\" class=\"content\" data-event=\""
    + container.escapeExpression((helpers.getPerformanceEvent || (depth0 && depth0.getPerformanceEvent) || helpers.helperMissing).call(depth0 != null ? depth0 : {},depth0,{"name":"getPerformanceEvent","hash":{},"data":data}))
    + "\">\n                <div class=\"perfContainer\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},((stack1 = (data && data.root)) && stack1.data),{"name":"each","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                </div>\n                <div class=\"product-list\" id=\"product_"
    + container.escapeExpression((helpers.getPerformanceEvent || (depth0 && depth0.getPerformanceEvent) || helpers.helperMissing).call(depth0 != null ? depth0 : {},depth0,{"name":"getPerformanceEvent","hash":{},"data":data}))
    + "\">\n                    <div id=\"elements\"></div>\n                </div>\n"
    + ((stack1 = (helpers.hasLocale || (depth0 && depth0.hasLocale) || helpers.helperMissing).call(depth0 != null ? depth0 : {},((stack1 = (data && data.root)) && stack1.locale),"b2cupsell",(helpers.join || (depth0 && depth0.join) || helpers.helperMissing).call(depth0 != null ? depth0 : {},"pleasenote_",(helpers.getPerformanceEvent || (depth0 && depth0.getPerformanceEvent) || helpers.helperMissing).call(depth0 != null ? depth0 : {},depth0,{"name":"getPerformanceEvent","hash":{},"data":data}),{"name":"join","hash":{},"data":data}),{"name":"hasLocale","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            </div>\n        </li>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                <div class=\"note\">"
    + ((stack1 = (helpers.getLocale || (depth0 && depth0.getLocale) || helpers.helperMissing).call(depth0 != null ? depth0 : {},((stack1 = (data && data.root)) && stack1.locale),"b2cupsell",(helpers.join || (depth0 && depth0.join) || helpers.helperMissing).call(depth0 != null ? depth0 : {},"descr_",(helpers.getPerformanceEvent || (depth0 && depth0.getPerformanceEvent) || helpers.helperMissing).call(depth0 != null ? depth0 : {},depth0,{"name":"getPerformanceEvent","hash":{},"data":data}),{"name":"join","hash":{},"data":data}),{"name":"getLocale","hash":{},"data":data})) != null ? stack1 : "")
    + "</div>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.is || (depth0 && depth0.is) || helpers.helperMissing).call(depth0 != null ? depth0 : {},(helpers.getLastPerfEvent || (depth0 && depth0.getLastPerfEvent) || helpers.helperMissing).call(depth0 != null ? depth0 : {},{"name":"getLastPerfEvent","hash":{},"data":data}),"===",(helpers.getPerformanceEvent || (depth0 && depth0.getPerformanceEvent) || helpers.helperMissing).call(depth0 != null ? depth0 : {},depth0,{"name":"getPerformanceEvent","hash":{},"data":data}),{"name":"is","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "                            <div class=\"performance\" data-time=\""
    + container.escapeExpression(((helper = (helper = helpers.perfTime || (depth0 != null ? depth0.perfTime : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"perfTime","hash":{},"data":data}) : helper)))
    + "\">\n"
    + ((stack1 = (helpers.is || (depth0 && depth0.is) || helpers.helperMissing).call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.status : depth0),">","0",{"name":"is","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = (helpers.is || (depth0 && depth0.is) || helpers.helperMissing).call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.status : depth0),"===",0,{"name":"is","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                            </div>\n";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "                                    <a href=\"javascript:void(0);\" data-performanceid=\""
    + container.escapeExpression(((helper = (helper = helpers.performanceId || (depth0 != null ? depth0.performanceId : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"performanceId","hash":{},"data":data}) : helper)))
    + "\" data-location=\""
    + container.escapeExpression(((helper = (helper = helpers.locationCode || (depth0 != null ? depth0.locationCode : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"locationCode","hash":{},"data":data}) : helper)))
    + "\"\n                                       data-eventcode = "
    + container.escapeExpression(((helper = (helper = helpers.eventCode || (depth0 != null ? depth0.eventCode : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"eventCode","hash":{},"data":data}) : helper)))
    + "  data-pricetableid=\""
    + container.escapeExpression(((helper = (helper = helpers.priceTableId || (depth0 != null ? depth0.priceTableId : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"priceTableId","hash":{},"data":data}) : helper)))
    + "\"\n                                       class=\""
    + container.escapeExpression((helpers.getAvailableTooltipStyle || (depth0 && depth0.getAvailableTooltipStyle) || helpers.helperMissing).call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.performanceId : depth0),{"name":"getAvailableTooltipStyle","hash":{},"data":data}))
    + " js-perf-select\">\n                                        "
    + container.escapeExpression((helpers.formatHours || (depth0 && depth0.formatHours) || helpers.helperMissing).call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.perfTime : depth0),{"name":"formatHours","hash":{},"data":data}))
    + "\n\n\n\n\n"
    + ((stack1 = (helpers.is || (depth0 && depth0.is) || helpers.helperMissing).call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.eventCode : depth0),"in","FASTRACK1",{"name":"is","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n\n                                    </a>\n";
},"8":function(container,depth0,helpers,partials,data) {
    return "                                                - "
    + container.escapeExpression((helpers.formatHoursFromDate || (depth0 && depth0.formatHoursFromDate) || helpers.helperMissing).call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.performanceEnd : depth0),{"name":"formatHoursFromDate","hash":{},"data":data}))
    + "\n";
},"10":function(container,depth0,helpers,partials,data) {
    var helper;

  return "                                    <span data-performanceid=\""
    + container.escapeExpression(((helper = (helper = helpers.performanceId || (depth0 != null ? depth0.performanceId : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"performanceId","hash":{},"data":data}) : helper)))
    + "\" data-eventcode =\""
    + container.escapeExpression(((helper = (helper = helpers.eventCode || (depth0 != null ? depth0.eventCode : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"eventCode","hash":{},"data":data}) : helper)))
    + "\"  data-pricetableid=\""
    + container.escapeExpression(((helper = (helper = helpers.priceTableId || (depth0 != null ? depth0.priceTableId : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"priceTableId","hash":{},"data":data}) : helper)))
    + "\"\n                                          data-location=\""
    + container.escapeExpression(((helper = (helper = helpers.locationCode || (depth0 != null ? depth0.locationCode : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"locationCode","hash":{},"data":data}) : helper)))
    + "\">\n                                        "
    + container.escapeExpression((helpers.formatHours || (depth0 && depth0.formatHours) || helpers.helperMissing).call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.perfTime : depth0),{"name":"formatHours","hash":{},"data":data}))
    + "\n                                    </span>\n";
},"12":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                    <div class=\"pleasenote\" id=\"pleasenote_"
    + container.escapeExpression((helpers.getPerformanceEvent || (depth0 && depth0.getPerformanceEvent) || helpers.helperMissing).call(depth0 != null ? depth0 : {},depth0,{"name":"getPerformanceEvent","hash":{},"data":data}))
    + "\">\n                        "
    + ((stack1 = (helpers.getLocale || (depth0 && depth0.getLocale) || helpers.helperMissing).call(depth0 != null ? depth0 : {},((stack1 = (data && data.root)) && stack1.locale),"b2cupsell",(helpers.join || (depth0 && depth0.join) || helpers.helperMissing).call(depth0 != null ? depth0 : {},"pleasenote_",(helpers.getPerformanceEvent || (depth0 && depth0.getPerformanceEvent) || helpers.helperMissing).call(depth0 != null ? depth0 : {},depth0,{"name":"getPerformanceEvent","hash":{},"data":data}),{"name":"join","hash":{},"data":data}),{"name":"getLocale","hash":{},"data":data})) != null ? stack1 : "")
    + "\n                    </div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.data : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true}
);

// template --- activebasket-head ---
Handlebars.templates['activebasket-head'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "";
},"useData":true}
);

// template --- basket-total_anchor ---
Handlebars.templates['basket-total_anchor'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.locale : depth0)) != null ? stack1.breadcrumb : stack1)) != null ? stack1.yourcart : stack1), depth0))
    + " (<strong>"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.subcount : stack1), depth0))
    + "</strong>)";
},"useData":true}
);

// template --- activebasket-title ---
Handlebars.templates['activebasket-title'] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (data && data.root)) && stack1.locale)) && stack1.basket)) && stack1.title), depth0))
    + " ("
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (data && data.root)) && stack1.data)) && stack1.counter)) && stack1.totalTicket), depth0))
    + " "
    + ((stack1 = container.lambda(((stack1 = ((stack1 = ((stack1 = (data && data.root)) && stack1.locale)) && stack1.basket)) && stack1.items), depth0)) != null ? stack1 : "")
    + ")\n";
},"useData":true}
);

// template --- productlist-header ---
Handlebars.templates['productlist-header'] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "        <span class=\"date\">"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (data && data.root)) && stack1.locale)) && stack1.tickets)) && stack1.header_date), depth0))
    + "<strong id=\"selected-date\"></strong></span>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "    <div class=\"widget-subheader\" style=\"\">\n        "
    + ((stack1 = (helpers.getLocale || (depth0 && depth0.getLocale) || helpers.helperMissing).call(depth0 != null ? depth0 : {},((stack1 = (data && data.root)) && stack1.locale),"tickets",(helpers.join || (depth0 && depth0.join) || helpers.helperMissing).call(depth0 != null ? depth0 : {},"info_",((stack1 = ((stack1 = (data && data.root)) && stack1.ctx)) && stack1.ticketInfo),{"name":"join","hash":{},"data":data}),{"name":"getLocale","hash":{},"data":data})) != null ? stack1 : "")
    + "\n    </div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"widget-header\">\n    <span>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (data && data.root)) && stack1.locale)) && stack1.tickets)) && stack1.header_title), depth0))
    + "</span>\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},((stack1 = ((stack1 = (data && data.root)) && stack1.ctx)) && stack1.selectedDate),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>\n"
    + ((stack1 = (helpers.hasLocale || (depth0 && depth0.hasLocale) || helpers.helperMissing).call(depth0 != null ? depth0 : {},((stack1 = (data && data.root)) && stack1.locale),"tickets",(helpers.join || (depth0 && depth0.join) || helpers.helperMissing).call(depth0 != null ? depth0 : {},"info_",((stack1 = ((stack1 = (data && data.root)) && stack1.ctx)) && stack1.ticketInfo),{"name":"join","hash":{},"data":data}),{"name":"hasLocale","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true}
);
