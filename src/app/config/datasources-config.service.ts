import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment'

@Injectable()
export class DatasourcesConfigService
{
    private consentServiceHostPort: string;

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
            this.consentServiceHostPort = 'consentservice.silver.arjuna.com';

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
            this.consentServiceHostPort = 'consentservice.silver.arjuna.com';

            this.listConsentContextDefLoaderBaseURL = 'http://' + this.consentServiceHostPort + '/consentengine/ws/consentcontextdef/consentcontexts';
            this.getConsentContextDefLoaderBaseURL  = 'http://' + this.consentServiceHostPort + '/consentengine/ws/consentcontextdef/consentcontext';
            this.setConsentContextDefLoaderBaseURL  = 'http://' + this.consentServiceHostPort + '/consentengine/ws/consentcontextdef/consentcontext';

            this.listConsentDefLoaderBaseURL = 'http://' + this.consentServiceHostPort + '/consentengine/ws/consentdef/consents';
            this.getConsentDefLoaderBaseURL  = 'http://' + this.consentServiceHostPort + '/consentengine/ws/consentdef/consent';
            this.setConsentDefLoaderBaseURL  = 'http://' + this.consentServiceHostPort + '/consentengine/ws/consentdef/consent';

            this.listConsentRendererDefLoaderBaseURL = 'http://' + this.consentServiceHostPort + '/consentengine/ws/consentrendererdef/consentrenderers';
            this.getConsentRendererDefLoaderBaseURL  = 'http://' + this.consentServiceHostPort + '/consentengine/ws/consentrendererdef/consentrenderer';
            this.setConsentRendererDefLoaderBaseURL  = 'http://' + this.consentServiceHostPort + '/consentengine/ws/consentrendererdef/consentrenderer';

//            this.loadDetailsBaseURL = 'http://' + this.consentServiceHostPort + '/api/details';
            this.loadDetailsBaseURL = 'assets/details.json';

//            this.loadPurposesBaseURL = 'http://' + this.consentServiceHostPort + '/api/purposes';
            this.loadPurposesBaseURL = 'assets/purposes.json';
        }
    }
}
