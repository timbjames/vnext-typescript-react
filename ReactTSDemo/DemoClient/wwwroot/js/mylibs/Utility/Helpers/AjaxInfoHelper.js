System.register(['jquery', '../Enums/AjaxEnums'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var $, AjaxEnums_1;
    function isResolvableHttpStatusCode(statusCode) {
        return statusCode === AjaxEnums_1.AjaxInfoStatusCodes.HttpOK || statusCode === AjaxEnums_1.AjaxInfoStatusCodes.HttpCreated;
    }
    function realAjaxCaller(apiRouteMethod, query) {
        return new Promise(function (resolve, reject) {
            var requestData = $.extend({}, query);
            var requestDataAsJson = JSON.stringify(requestData);
            $.ajax({
                url: apiRouteMethod.Url,
                method: apiRouteMethod.Method,
                contentType: 'application/json',
                data: requestDataAsJson,
                processData: false,
                success: (function (data, textStatus, jqxhr) {
                    resolve({ statusCode: jqxhr.status, dataReturned: data });
                }),
                error: (function (jqxhr) {
                    reject({ statusCode: jqxhr.status, dataReturned: jqxhr.responseJSON });
                })
            });
        });
    }
    exports_1("realAjaxCaller", realAjaxCaller);
    return {
        setters:[
            function ($_1) {
                $ = $_1;
            },
            function (AjaxEnums_1_1) {
                AjaxEnums_1 = AjaxEnums_1_1;
            }],
        execute: function() {
        }
    }
});

//# sourceMappingURL=../../../maps/Utility/Helpers/AjaxInfoHelper.js.map
