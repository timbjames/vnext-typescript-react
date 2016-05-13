System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var AjaxInfoStatusCodes, AjaxStatus;
    return {
        setters:[],
        execute: function() {
            (function (AjaxInfoStatusCodes) {
                //Commented out HTTP codes are not being used in BOSSK yet.
                //When enabling a HTTP code update BOSSK docs with details of the specific use cases.
                AjaxInfoStatusCodes[AjaxInfoStatusCodes["NoRequestSent"] = 0] = "NoRequestSent";
                AjaxInfoStatusCodes[AjaxInfoStatusCodes["AwaitingReturn"] = 1] = "AwaitingReturn";
                //HttpContinue = 100,
                //HttpSwitchingProtocols = 101,
                AjaxInfoStatusCodes[AjaxInfoStatusCodes["HttpOK"] = 200] = "HttpOK";
                AjaxInfoStatusCodes[AjaxInfoStatusCodes["HttpCreated"] = 201] = "HttpCreated";
                //HttpAccepted = 202,
                //HttpNonAuthoritativeInformation = 203,
                //HttpNoContent = 204,
                //HttpResetContent = 205,
                //HttpPartialContent = 206,
                //HttpMultipleChoices = 300,
                //HttpAmbiguous = 300,
                //HttpMovedPermanently = 301,
                //HttpMoved = 301,
                //HttpFound = 302,
                //HttpRedirect = 302,
                //HttpSeeOther = 303,
                //HttpRedirectMethod = 303,
                //HttpNotModified = 304,
                //HttpUseProxy = 305,
                //HttpUnused = 306,
                //HttpTemporaryRedirect = 307,
                //HttpRedirectKeepVerb = 307,
                AjaxInfoStatusCodes[AjaxInfoStatusCodes["HttpBadRequest"] = 400] = "HttpBadRequest";
                AjaxInfoStatusCodes[AjaxInfoStatusCodes["HttpUnauthorized"] = 401] = "HttpUnauthorized";
                //HttpPaymentRequired = 402,
                AjaxInfoStatusCodes[AjaxInfoStatusCodes["HttpForbidden"] = 403] = "HttpForbidden";
                AjaxInfoStatusCodes[AjaxInfoStatusCodes["HttpNotFound"] = 404] = "HttpNotFound";
                //HttpMethodNotAllowed = 405,
                //HttpNotAcceptable = 406,
                //HttpProxyAuthenticationRequired = 407,
                //HttpRequestTimeout = 408,
                AjaxInfoStatusCodes[AjaxInfoStatusCodes["HttpConflict"] = 409] = "HttpConflict";
                //HttpGone = 410,
                //HttpLengthRequired = 411,
                //HttpPreconditionFailed = 412,
                //HttpRequestEntityTooLarge = 413,
                //HttpRequestUriTooLong = 414,
                //HttpUnsupportedMediaType = 415,
                //HttpRequestedRangeNotSatisfiable = 416,
                //HttpExpectationFailed = 417,
                AjaxInfoStatusCodes[AjaxInfoStatusCodes["HttpUnprocessableEntity"] = 422] = "HttpUnprocessableEntity";
                //HttpUpgradeRequired = 426,
                AjaxInfoStatusCodes[AjaxInfoStatusCodes["HttpInternalServerError"] = 500] = "HttpInternalServerError";
            })(AjaxInfoStatusCodes || (AjaxInfoStatusCodes = {}));
            exports_1("AjaxInfoStatusCodes", AjaxInfoStatusCodes);
            /**
             * TODOxXX: Deprecated. Use AjaxExtendedHttpCodes.
             */
            (function (AjaxStatus) {
                AjaxStatus[AjaxStatus["Unstarted"] = 0] = "Unstarted";
                AjaxStatus[AjaxStatus["Ongoing"] = 1] = "Ongoing";
                AjaxStatus[AjaxStatus["Fetched"] = 2] = "Fetched";
                AjaxStatus[AjaxStatus["Empty"] = 3] = "Empty";
                AjaxStatus[AjaxStatus["Failed"] = 4] = "Failed";
            })(AjaxStatus || (AjaxStatus = {}));
            exports_1("AjaxStatus", AjaxStatus);
        }
    }
});

//# sourceMappingURL=../../../maps/Utility/Enums/AjaxEnums.js.map
