import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';

@Injectable()
export class DatasourcesConfigService
{
    private consentServiceProtocol: string;
    private consentServiceHostPort: string;

    public listConsentContextDefLoaderBaseURL: string;
    public getConsentContextDefLoaderBaseURL: string;
    public setConsentContextDefLoaderBaseURL: string;
    public deleteConsentContextDefLoaderBaseURL: string;

    public listConsentDefLoaderBaseURL: string;
    public postConsentDefLoaderBaseURL: string;
    public getConsentDefLoaderBaseURL: string;
    public putConsentDefLoaderBaseURL: string;
    public deleteConsentDefLoaderBaseURL: string;

    public listConsentTypeDefLoaderBaseURL: string;
    public getConsentTypeDefLoaderBaseURL: string;
    public setConsentTypeDefLoaderBaseURL: string;

    public getConsentHistoryDefLoaderBaseURL: string;

    public listConsentRendererDefLoaderBaseURL: string;
    public getConsentRendererDefLoaderBaseURL: string;
    public setConsentRendererDefLoaderBaseURL: string;
    public getConsentRendererDefByTypesLoaderBaseURL: string;

    public getConsentTypeDetailsLoaderBaseURL: string;
    public setConsentTypeDetailsLoaderBaseURL: string;
    public getConsentTypePurposesLoaderBaseURL: string;
    public setConsentTypePurposesLoaderBaseURL: string;

    constructor()
    {
        this.consentServiceProtocol = 'http://';

        this.consentServiceHostPort = 'consentservice.silver.arjuna.com';
//        this.consentServiceHostPort = 'localhost:8080';

        if (environment.standalone)
        {
            this.listConsentContextDefLoaderBaseURL   = 'assets/consentcontexts';
            this.getConsentContextDefLoaderBaseURL    = 'assets/consentcontext';
            this.setConsentContextDefLoaderBaseURL    = 'assets/consentcontext';
            this.deleteConsentContextDefLoaderBaseURL = 'assets/consentcontext';

            this.listConsentDefLoaderBaseURL   = 'assets/consents';
            this.postConsentDefLoaderBaseURL   = 'assets/consent';
            this.getConsentDefLoaderBaseURL    = 'assets/consent';
            this.putConsentDefLoaderBaseURL    = 'assets/consent';
            this.deleteConsentDefLoaderBaseURL = 'assets/consent';

            this.listConsentTypeDefLoaderBaseURL = 'assets/consenttypes';
            this.getConsentTypeDefLoaderBaseURL  = 'assets/consenttype';
            this.setConsentTypeDefLoaderBaseURL  = 'assets/consenttype';

            this.getConsentHistoryDefLoaderBaseURL = 'assets/consenthistory';

            this.listConsentRendererDefLoaderBaseURL       = 'assets/consentrenderers';
            this.getConsentRendererDefLoaderBaseURL        = 'assets/consentrenderer';
            this.setConsentRendererDefLoaderBaseURL        = 'assets/consentrenderer';
            this.getConsentRendererDefByTypesLoaderBaseURL = 'assets/consentrenderer';

            this.getConsentTypeDetailsLoaderBaseURL  = 'assets/consenttypedetails';
            this.setConsentTypeDetailsLoaderBaseURL  = 'assets/consenttypedetails';
            this.getConsentTypePurposesLoaderBaseURL = 'assets/consenttypepurposes';
            this.setConsentTypePurposesLoaderBaseURL = 'assets/consenttypepurposes';
        }
        else
        {
            this.listConsentContextDefLoaderBaseURL   = this.consentServiceProtocol + this.consentServiceHostPort + '/consentengine/ws/consentcontextdef/consentcontexts';
            this.getConsentContextDefLoaderBaseURL    = this.consentServiceProtocol + this.consentServiceHostPort + '/consentengine/ws/consentcontextdef/consentcontext';
            this.setConsentContextDefLoaderBaseURL    = this.consentServiceProtocol + this.consentServiceHostPort + '/consentengine/ws/consentcontextdef/consentcontext';
            this.deleteConsentContextDefLoaderBaseURL = this.consentServiceProtocol + this.consentServiceHostPort + '/consentengine/ws/consentcontextdef/consentcontext';

            this.listConsentDefLoaderBaseURL   = this.consentServiceProtocol + this.consentServiceHostPort + '/consentengine/ws/consentdef/consents';
            this.postConsentDefLoaderBaseURL   = this.consentServiceProtocol + this.consentServiceHostPort + '/consentengine/ws/consentdef/consent';
            this.getConsentDefLoaderBaseURL    = this.consentServiceProtocol + this.consentServiceHostPort + '/consentengine/ws/consentdef/consent';
            this.putConsentDefLoaderBaseURL    = this.consentServiceProtocol + this.consentServiceHostPort + '/consentengine/ws/consentdef/consent';
            this.deleteConsentDefLoaderBaseURL = this.consentServiceProtocol + this.consentServiceHostPort + '/consentengine/ws/consentdef/consent';

            this.listConsentTypeDefLoaderBaseURL = this.consentServiceProtocol + this.consentServiceHostPort + '/consentengine/ws/consenttypedef/consenttypes';
            this.getConsentTypeDefLoaderBaseURL  = this.consentServiceProtocol + this.consentServiceHostPort + '/consentengine/ws/consenttypedef/consenttype';
            this.setConsentTypeDefLoaderBaseURL  = this.consentServiceProtocol + this.consentServiceHostPort + '/consentengine/ws/consenttypedef/consenttype';

            this.getConsentHistoryDefLoaderBaseURL = this.consentServiceProtocol + this.consentServiceHostPort + '/consentengine/ws/consenthistorydef/consenthistory';

            this.listConsentRendererDefLoaderBaseURL       = this.consentServiceProtocol + this.consentServiceHostPort + '/consentengine/ws/consentrendererdef/consentrenderers';
            this.getConsentRendererDefLoaderBaseURL        = this.consentServiceProtocol + this.consentServiceHostPort + '/consentengine/ws/consentrendererdef/consentrenderer';
            this.setConsentRendererDefLoaderBaseURL        = this.consentServiceProtocol + this.consentServiceHostPort + '/consentengine/ws/consentrendererdef/consentrenderer';
            this.getConsentRendererDefByTypesLoaderBaseURL = this.consentServiceProtocol + this.consentServiceHostPort + '/consentengine/ws/consentrendererdef/consentrenderer';

            this.getConsentTypeDetailsLoaderBaseURL  = this.consentServiceProtocol + this.consentServiceHostPort + '/consentengine/ws/consenttypedetailsdef';
            this.setConsentTypeDetailsLoaderBaseURL  = this.consentServiceProtocol + this.consentServiceHostPort + '/consentengine/ws/consenttypedetailsdef';
            this.getConsentTypePurposesLoaderBaseURL = this.consentServiceProtocol + this.consentServiceHostPort + '/consentengine/ws/consenttypepurposesdef';
            this.setConsentTypePurposesLoaderBaseURL = this.consentServiceProtocol + this.consentServiceHostPort + '/consentengine/ws/consenttypepurposesdef';
        }
    }
}
