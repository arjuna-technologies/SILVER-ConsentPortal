import { Injectable } from '@angular/core';

@Injectable()
export class DatasourcesConfigService
{
    public listConsentContextDefLoaderBaseURL: string = 'http://10.1.20.248:8080/consentengine/ws/consentcontextdef/consentcontexts';
    public getConsentContextDefLoaderBaseURL: string  = 'http://10.1.20.248:8080/consentengine/ws/consentcontextdef/consentcontext';
    public setConsentContextDefLoaderBaseURL: string  = 'http://10.1.20.248:8080/consentengine/ws/consentcontextdef/consentcontext';

    public listConsentDefLoaderBaseURL: string = 'http://10.1.20.248:8080/consentengine/ws/consentdef/consents';
    public getConsentDefLoaderBaseURL: string  = 'http://10.1.20.248:8080/consentengine/ws/consentdef/consent';
    public setConsentDefLoaderBaseURL: string  = 'http://10.1.20.248:8080/consentengine/ws/consentdef/consent';
    //    public listConsentDefLoaderBaseURL: string = 'assets/consents';
    //    public getConsentDefLoaderBaseURL: string = 'assets/consent';
    //    public setConsentDefLoaderBaseURL: string = 'assets/consent';

    public listConsentRendererDefLoaderBaseURL: string = 'http://10.1.20.248:8080/consentengine/ws/consentrendererdef/consentrenderers';
    public getConsentRendererDefLoaderBaseURL: string = 'http://10.1.20.248:8080/consentengine/ws/consentrendererdef/consentrenderer';
    public setConsentRendererDefLoaderBaseURL: string = 'http://10.1.20.248:8080/consentengine/ws/consentrendererdef/consentrenderer';
    //    public listConsentRendererDefLoaderBaseURL: string = 'assets/consentrenderers';
    //    public getConsentRendererDefLoaderBaseURL: string = 'assets/consentrenderer';
    //    public setConsentRendererDefLoaderBaseURL: string = 'assets/consentrenderer';

    //    public loadDetailsBaseURL: string = 'http://10.1.20.248:8080/api/details';
    public loadDetailsBaseURL: string = 'assets/details.json';
    //    private loadPurposesBaseURL: string = 'http://10.1.20.248:8080/api/purposes';
    public loadPurposesBaseURL: string = 'assets/purposes.json';
}
