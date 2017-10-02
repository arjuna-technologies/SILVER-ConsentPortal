import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment'

@Injectable()
export class DatasourcesConfigService
{
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

    public loadDetailsBaseURL: string;

    public loadPurposesBaseURL: string;

    constructor()
    {
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

            this.loadDetailsBaseURL = 'assets/details.json';

            this.loadPurposesBaseURL = 'assets/purposes.json';
        }
        else
        {
            this.listConsentContextDefLoaderBaseURL   = 'https://' + this.consentServiceHostPort + '/consentengine/ws/consentcontextdef/consentcontexts';
            this.getConsentContextDefLoaderBaseURL    = 'https://' + this.consentServiceHostPort + '/consentengine/ws/consentcontextdef/consentcontext';
            this.setConsentContextDefLoaderBaseURL    = 'https://' + this.consentServiceHostPort + '/consentengine/ws/consentcontextdef/consentcontext';
            this.deleteConsentContextDefLoaderBaseURL = 'https://' + this.consentServiceHostPort + '/consentengine/ws/consentcontextdef/consentcontext';

            this.listConsentDefLoaderBaseURL   = 'https://' + this.consentServiceHostPort + '/consentengine/ws/consentdef/consents';
            this.postConsentDefLoaderBaseURL   = 'https://' + this.consentServiceHostPort + '/consentengine/ws/consentdef/consent';
            this.getConsentDefLoaderBaseURL    = 'https://' + this.consentServiceHostPort + '/consentengine/ws/consentdef/consent';
            this.putConsentDefLoaderBaseURL    = 'https://' + this.consentServiceHostPort + '/consentengine/ws/consentdef/consent';
            this.deleteConsentDefLoaderBaseURL = 'https://' + this.consentServiceHostPort + '/consentengine/ws/consentdef/consent';

            this.listConsentTypeDefLoaderBaseURL = 'https://' + this.consentServiceHostPort + '/consentengine/ws/consenttypedef/consenttypes';
            this.getConsentTypeDefLoaderBaseURL  = 'https://' + this.consentServiceHostPort + '/consentengine/ws/consenttypedef/consenttype';
            this.setConsentTypeDefLoaderBaseURL  = 'https://' + this.consentServiceHostPort + '/consentengine/ws/consenttypedef/consenttype';

            this.getConsentHistoryDefLoaderBaseURL = 'https://' + this.consentServiceHostPort + '/consentengine/ws/consenthistorydef/consenthistory';

            this.listConsentRendererDefLoaderBaseURL       = 'https://' + this.consentServiceHostPort + '/consentengine/ws/consentrendererdef/consentrenderers';
            this.getConsentRendererDefLoaderBaseURL        = 'https://' + this.consentServiceHostPort + '/consentengine/ws/consentrendererdef/consentrenderer';
            this.setConsentRendererDefLoaderBaseURL        = 'https://' + this.consentServiceHostPort + '/consentengine/ws/consentrendererdef/consentrenderer';
            this.getConsentRendererDefByTypesLoaderBaseURL = 'https://' + this.consentServiceHostPort + '/consentengine/ws/consentrendererdef/consentrenderer';

//            this.loadDetailsBaseURL = 'http://' + this.consentServiceHostPort + '/api/details';
            this.loadDetailsBaseURL = 'assets/details.json';

//            this.loadPurposesBaseURL = 'http://' + this.consentServiceHostPort + '/api/purposes';
            this.loadPurposesBaseURL = 'assets/purposes.json';
        }
    }
}
