import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';

@Injectable()
export class DatasourcesConfigService
{
    private consentServiceProtocol: string;
    private consentServiceHostPort: string;

    public getConsentRendererDefByCampaignIdLoaderBaseURL: string;

    public getConsentTypeDetailsLoaderBaseURL: string;
    public getConsentTypePurposesLoaderBaseURL: string;

    public postInhealthcareLoaderBaseURL: string;

    constructor()
    {
        this.consentServiceProtocol = 'http://';

        if (environment.standalone)
            this.consentServiceHostPort = 'localhost:8080';
        else
            this.consentServiceHostPort = 'consentservice-c4c.silver.arjuna.com';

        this.getConsentRendererDefByCampaignIdLoaderBaseURL = this.consentServiceProtocol + this.consentServiceHostPort + '/inhealthcare/ws/consentrendererdef/consentrenderer_by_campaignid';

        this.getConsentTypeDetailsLoaderBaseURL  = this.consentServiceProtocol + this.consentServiceHostPort + '/inhealthcare/ws/consenttypedetailsdef';
        this.getConsentTypePurposesLoaderBaseURL = this.consentServiceProtocol + this.consentServiceHostPort + '/inhealthcare/ws/consenttypepurposesdef';

        this.postInhealthcareLoaderBaseURL = this.consentServiceProtocol + this.consentServiceHostPort + '/inhealthcare/ws/consentaccesstoken';
    }
}
