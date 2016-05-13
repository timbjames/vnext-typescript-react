export enum AjaxInfoStatusCodes {
   
    //Commented out HTTP codes are not being used in BOSSK yet.
    //When enabling a HTTP code update BOSSK docs with details of the specific use cases.

    NoRequestSent = 0,
    AwaitingReturn = 1,
    //HttpContinue = 100,
    //HttpSwitchingProtocols = 101,
    HttpOK = 200,
    HttpCreated = 201,
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
    HttpBadRequest = 400,
    HttpUnauthorized = 401,
    //HttpPaymentRequired = 402,
    HttpForbidden = 403,
    HttpNotFound = 404,
    //HttpMethodNotAllowed = 405,
    //HttpNotAcceptable = 406,
    //HttpProxyAuthenticationRequired = 407,
    //HttpRequestTimeout = 408,
    HttpConflict = 409,
    //HttpGone = 410,
    //HttpLengthRequired = 411,
    //HttpPreconditionFailed = 412,
    //HttpRequestEntityTooLarge = 413,
    //HttpRequestUriTooLong = 414,
    //HttpUnsupportedMediaType = 415,
    //HttpRequestedRangeNotSatisfiable = 416,
    //HttpExpectationFailed = 417,
    HttpUnprocessableEntity = 422,
    //HttpUpgradeRequired = 426,
    HttpInternalServerError = 500,
    //HttpNotImplemented = 501,
    //HttpBadGateway = 502,
    //HttpServiceUnavailable = 503,
    //HttpGatewayTimeout = 504,
    //HttpHttpVersionNotSupported = 505
}

/**
 * TODOxXX: Deprecated. Use AjaxExtendedHttpCodes.
 */
export enum AjaxStatus {
    Unstarted = 0,
    Ongoing,
    Fetched,
    Empty,
    Failed
}
