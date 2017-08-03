import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment'

@Injectable()
export class DatasourcesConfigService
{

    public listConsentContextDefLoaderBaseURL: string;
    public getConsentContextDefLoaderBaseURL: string;
    public setConsentContextDefLoaderBaseURL: string;

    public listConsentDefLoaderBaseURL: string;
    public getConsentDefLoaderBaseURL: string;
    public setConsentDefLoaderBaseURL: string;

    public listConsentRendererDefLoaderBaseURL: string;
    public getConsentRendererDefLoaderBaseURL: string;
    public setConsentRendererDefLoaderBaseURL: string;

    public loadDetailsBaseURL: string;

    public loadPurposesBaseURL: string;

    constructor()
    {
        if (environment.standalone)
        {
            this.listConsentContextDefLoaderBaseURL = 'assets/consentcontexts';
            this.getConsentContextDefLoaderBaseURL  = 'assets/consentcontext';
            this.setConsentContextDefLoaderBaseURL  = 'assets/consentcontext';

            this.listConsentDefLoaderBaseURL = 'assets/consents';
            this.getConsentDefLoaderBaseURL  = 'assets/consent';
            this.setConsentDefLoaderBaseURL  = 'assets/consent';

            this.listConsentRendererDefLoaderBaseURL = 'assets/consentrenderers';
            this.getConsentRendererDefLoaderBaseURL  = 'assets/consentrenderer';
            this.setConsentRendererDefLoaderBaseURL  = 'assets/consentrenderer';

            this.loadDetailsBaseURL = 'assets/details.json';

            this.loadPurposesBaseURL = 'assets/purposes.json';
        }
        else
        {
            this.listConsentContextDefLoaderBaseURL = 'http://10.1.20.248:8080/consentengine/ws/consentcontextdef/consentcontexts';
            this.getConsentContextDefLoaderBaseURL  = 'http://10.1.20.248:8080/consentengine/ws/consentcontextdef/consentcontext';
            this.setConsentContextDefLoaderBaseURL  = 'http://10.1.20.248:8080/consentengine/ws/consentcontextdef/consentcontext';

            this.listConsentDefLoaderBaseURL = 'http://10.1.20.248:8080/consentengine/ws/consentdef/consents';
            this.getConsentDefLoaderBaseURL  = 'http://10.1.20.248:8080/consentengine/ws/consentdef/consent';
            this.setConsentDefLoaderBaseURL  = 'http://10.1.20.248:8080/consentengine/ws/consentdef/consent';

            this.listConsentRendererDefLoaderBaseURL = 'http://10.1.20.248:8080/consentengine/ws/consentrendererdef/consentrenderers';
            this.getConsentRendererDefLoaderBaseURL  = 'http://10.1.20.248:8080/consentengine/ws/consentrendererdef/consentrenderer';
            this.setConsentRendererDefLoaderBaseURL  = 'http://10.1.20.248:8080/consentengine/ws/consentrendererdef/consentrenderer';

            this.loadDetailsBaseURL = 'http://10.1.20.248:8080/api/details';

            this.loadPurposesBaseURL = 'http://10.1.20.248:8080/api/purposes';
        }
    }
}
