import { Injectable } from '@angular/core';

import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { ConsentDef } from './consent-def';

@Injectable()
export class ConsentDefLoaderService
{
//    private listBaseURL = 'http://10.1.20.172:3000/api/consents';
//    private loadBaseURL = 'http://10.1.20.172:3000/api/consent';
//    private listBaseURL = 'http://10.1.20.172:8080/consentengine/ws/consentdef/consents';
//    private loadBaseURL = 'http://10.1.20.172:8080/consentengine/ws/consentdef/consent';
    private listBaseURL = 'assets/consents.json';
    private loadBaseURL = 'assets/consent';

    constructor(private http: Http)
    {
    }

    public getConsentDefs(): Promise<ConsentDef[]>
    {
        return this.http.get(this.listBaseURL)
               .toPromise()
               .then((response) => Promise.resolve(this.getConsentDefsSuccessHandler(response)))
               .catch((response) => Promise.resolve(this.getConsentDefsErrorHandler(response)));
    }

    public getConsentDef(id: string): Promise<ConsentDef>
    {
        return this.http.get(this.loadBaseURL + '/' + id + '.json')
               .toPromise()
               .then((response) => Promise.resolve(this.getConsentDefSuccessHandler(response)))
               .catch((response) => Promise.resolve(this.getConsentDefErrorHandler(response)));
    }

    private getConsentDefsSuccessHandler(response: Response): ConsentDef[]
    {
        const consentDefs: ConsentDef[] = [];

        for (const consentDefObject of response.json())
        {
            const consentDef = new ConsentDef();

            consentDef.fromObject(consentDefObject);
            consentDefs.push(consentDef);
        }

        return consentDefs;
    }

    private getConsentDefsErrorHandler(error: Response | any): ConsentDef[]
    {
        console.log('Error while loading Consents: ' + (error.message || error));

        return [];
    }

    private getConsentDefSuccessHandler(response: Response): ConsentDef
    {
        const consentDef = new ConsentDef();

        consentDef.fromObject(response.json());

        return consentDef;
    }

    private getConsentDefErrorHandler(error: Response | any): ConsentDef
    {
        console.log('Error while loading Consent: ' + (error.message || error));

        return null;
    }
}
