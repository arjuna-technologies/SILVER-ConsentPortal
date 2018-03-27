//
// Copyright (c) 2017, Arjuna Technologies Limited, Newcastle upon Tyne, England,
//                     Open Lab, Newcastle University, Newcastle upon Tyne, England,
//                     Institute of Health and Society, Newcastle University, Newcastle upon Tyne, England.
//                     All rights reserved.
//

import { Injectable } from '@angular/core';

import { Headers, Http, Response, RequestMethod, RequestOptionsArgs } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { InhealthcareConsentDef } from './inhealthcare-consent-def';
import { DatasourcesConfigService } from '../config/datasources-config.service';

@Injectable()
export class InhealthcareDefLoaderService
{
    constructor(private http: Http, private datasourcesConfigService: DatasourcesConfigService)
    {
    }

    public getInhealthcareAccessToken(username: string, password: string): Promise<string>
    {
        return this.http.post(this.datasourcesConfigService.postInhealthcareConsentAccessTokenBaseURL + "?username=" + username + "&password=" + password, {})
                   .toPromise()
                   .then((response) => Promise.resolve(this.getInhealthcareAccessTokenSuccessHandler(response)))
                   .catch((response) => Promise.resolve(this.getInhealthcareAccessTokenErrorHandler(response)));
    }

    public getInhealthcarePatient(accessToken: string): Promise<string>
    {
        const headers = new Headers();
        headers.append('Authorization', 'Bearer ' + accessToken);

        return this.http.get(this.datasourcesConfigService.getInhealthcarePatientBaseURL, { headers: headers })
                   .toPromise()
                   .then((response) => Promise.resolve(this.getInhealthcarePatientSuccessHandler(response)))
                   .catch((response) => Promise.resolve(this.getInhealthcarePatientErrorHandler(response)));
    }

    public getInhealthcareTask(accessToken: string): Promise<string>
    {
        return this.http.get(this.datasourcesConfigService.getInhealthcareTaskBaseURL, {})
                   .toPromise()
                   .then((response) => Promise.resolve(this.getInhealthcareTaskSuccessHandler(response)))
                   .catch((response) => Promise.resolve(this.getInhealthcareTaskErrorHandler(response)));
    }

    public postInhealthcareConsent(accessToken: string): Promise<string>
    {
        return this.http.post(this.datasourcesConfigService.postInhealthcareConsentBaseURL, {})
                   .toPromise()
                   .then((response) => Promise.resolve(this.postInhealthcareConsentSuccessHandler(response)))
                   .catch((response) => Promise.resolve(this.postInhealthcareConsentErrorHandler(response)));
    }

    private getInhealthcareAccessTokenSuccessHandler(response: Response): string
    {
        console.log('getInhealthcareAccessTokenSuccessHandler: ' + JSON.stringify(response));

        return response.json().access_token;
    }

    private getInhealthcareAccessTokenErrorHandler(error: Response | any): string
    {
        console.log('Error while getting access token: ' + (error.message || error));

        return null;
    }

    private getInhealthcarePatientSuccessHandler(response: Response): string
    {
        console.log('getInhealthcarePatientSuccessHandler: ' + JSON.stringify(response));

        return response.json().access_token;
    }

    private getInhealthcarePatientErrorHandler(error: Response | any): string
    {
        console.log('Error while getting patient: ' + (error.message || error));

        return null;
    }

    private getInhealthcareTaskSuccessHandler(response: Response): string
    {
        console.log('getInhealthcareTaskSuccessHandler: ' + JSON.stringify(response));

        return response.json().access_token;
    }

    private getInhealthcareTaskErrorHandler(error: Response | any): string
    {
        console.log('Error while getting task: ' + (error.message || error));

        return null;
    }

    private postInhealthcareConsentSuccessHandler(response: Response): string
    {
        console.log('postInhealthcareConsentSuccessHandler: ' + JSON.stringify(response));

        return response.json().access_token;
    }

    private postInhealthcareConsentErrorHandler(error: Response | any): string
    {
        console.log('Error while posting consent: ' + (error.message || error));

        return null;
    }
}
