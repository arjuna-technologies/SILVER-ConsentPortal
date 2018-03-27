import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';

@Injectable()
export class DatasourcesConfigService
{
    private consentServiceProtocol: string;
    private consentServiceHostPort: string;

    private inhealthcareServiceProtocol: string;
    private inhealthcareServiceHostPort: string;

    public getConsentRendererDefByCampaignIdLoaderBaseURL: string;

    public getConsentTypeDetailsLoaderBaseURL:  string;
    public getConsentTypePurposesLoaderBaseURL: string;

    public postInhealthcareConsentAccessTokenBaseURL: string;

    public getInhealthcarePatientBaseURL:  string;
    public getInhealthcareTaskBaseURL:     string;
    public postInhealthcareConsentBaseURL: string;

    constructor()
    {
        this.consentServiceProtocol = 'http://';

        if (environment.standalone)
            this.consentServiceHostPort = 'localhost:8080';
        else
            this.consentServiceHostPort = 'consentservice-c4c.silver.arjuna.com';

        this.inhealthcareServiceProtocol = 'https://';

        if (environment.standalone)
            this.inhealthcareServiceHostPort = 'localhost:8080';
        else
            this.inhealthcareServiceHostPort = 'sandpit.inhealthcare.co.uk';

        this.getConsentRendererDefByCampaignIdLoaderBaseURL = this.consentServiceProtocol + this.consentServiceHostPort + '/inhealthcare/ws/consentrendererdef/consentrenderer_by_campaignid';

        this.getConsentTypeDetailsLoaderBaseURL  = this.consentServiceProtocol + this.consentServiceHostPort + '/inhealthcare/ws/consenttypedetailsdef';
        this.getConsentTypePurposesLoaderBaseURL = this.consentServiceProtocol + this.consentServiceHostPort + '/inhealthcare/ws/consenttypepurposesdef';

        this.postInhealthcareConsentAccessTokenBaseURL = this.consentServiceProtocol + this.consentServiceHostPort + '/inhealthcare/ws/consentaccesstoken';

        this.getInhealthcarePatientBaseURL  = this.inhealthcareServiceProtocol + this.inhealthcareServiceHostPort + '/api/oauthuser';
        this.getInhealthcareTaskBaseURL     = this.inhealthcareServiceProtocol + this.inhealthcareServiceHostPort + '/api/rest/v2/tasks';
        this.postInhealthcareConsentBaseURL = this.inhealthcareServiceProtocol + this.inhealthcareServiceHostPort + '/api/rest/v2/events/data_capture';
    }
}
