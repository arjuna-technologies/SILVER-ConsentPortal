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
            this.listConsentContextDefLoaderBaseURL   = 'http://' + this.consentServiceHostPort + '/consentengine/ws/consentcontextdef/consentcontexts';
            this.getConsentContextDefLoaderBaseURL    = 'http://' + this.consentServiceHostPort + '/consentengine/ws/consentcontextdef/consentcontext';
            this.setConsentContextDefLoaderBaseURL    = 'http://' + this.consentServiceHostPort + '/consentengine/ws/consentcontextdef/consentcontext';
            this.deleteConsentContextDefLoaderBaseURL = 'http://' + this.consentServiceHostPort + '/consentengine/ws/consentcontextdef/consentcontext';

            this.listConsentDefLoaderBaseURL   = 'http://' + this.consentServiceHostPort + '/consentengine/ws/consentdef/consents';
            this.postConsentDefLoaderBaseURL   = 'http://' + this.consentServiceHostPort + '/consentengine/ws/consentdef/consent';
            this.getConsentDefLoaderBaseURL    = 'http://' + this.consentServiceHostPort + '/consentengine/ws/consentdef/consent';
            this.putConsentDefLoaderBaseURL    = 'http://' + this.consentServiceHostPort + '/consentengine/ws/consentdef/consent';
            this.deleteConsentDefLoaderBaseURL = 'http://' + this.consentServiceHostPort + '/consentengine/ws/consentdef/consent';

            this.listConsentTypeDefLoaderBaseURL = 'http://' + this.consentServiceHostPort + '/consentengine/ws/consenttypedef/consenttypes';
            this.getConsentTypeDefLoaderBaseURL  = 'http://' + this.consentServiceHostPort + '/consentengine/ws/consenttypedef/consenttype';
            this.setConsentTypeDefLoaderBaseURL  = 'http://' + this.consentServiceHostPort + '/consentengine/ws/consenttypedef/consenttype';

            this.getConsentHistoryDefLoaderBaseURL = 'http://' + this.consentServiceHostPort + '/consentengine/ws/consenthistorydef/consenthistory';

            this.listConsentRendererDefLoaderBaseURL       = 'http://' + this.consentServiceHostPort + '/consentengine/ws/consentrendererdef/consentrenderers';
            this.getConsentRendererDefLoaderBaseURL        = 'http://' + this.consentServiceHostPort + '/consentengine/ws/consentrendererdef/consentrenderer';
            this.setConsentRendererDefLoaderBaseURL        = 'http://' + this.consentServiceHostPort + '/consentengine/ws/consentrendererdef/consentrenderer';
            this.getConsentRendererDefByTypesLoaderBaseURL = 'http://' + this.consentServiceHostPort + '/consentengine/ws/consentrendererdef/consentrenderer';

//            this.loadDetailsBaseURL = 'http://' + this.consentServiceHostPort + '/api/details';
            this.loadDetailsBaseURL = 'assets/details.json';

//            this.loadPurposesBaseURL = 'http://' + this.consentServiceHostPort + '/api/purposes';
            this.loadPurposesBaseURL = 'assets/purposes.json';
        }
    }
}
