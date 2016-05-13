// 3rd Party References
import * as $ from 'jquery'

// Utility references
import { AjaxInfoStatusCodes } from '../Enums/AjaxEnums';

function isResolvableHttpStatusCode(statusCode?: AjaxInfoStatusCodes): boolean {
    return statusCode === AjaxInfoStatusCodes.HttpOK || statusCode === AjaxInfoStatusCodes.HttpCreated;
}

export function realAjaxCaller(apiRouteMethod: any, query?: any): Promise<any> {
    
    return new Promise<any>((resolve: Function, reject: Function) => {

        var requestData = $.extend({}, query);
        var requestDataAsJson = JSON.stringify(requestData);
        
        $.ajax({
            url: apiRouteMethod.Url,
            method: apiRouteMethod.Method,
            contentType: 'application/json',
            data: requestDataAsJson,
            processData: false,
            success: ((data: any, textStatus: string, jqxhr: JQueryXHR) => {
                
                resolve({ statusCode: jqxhr.status, dataReturned: data });

            }),
            error: ((jqxhr: JQueryXHR) => {                
                reject({ statusCode: jqxhr.status, dataReturned: jqxhr.responseJSON });  
            })
        });

    });
}
