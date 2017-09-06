import { Component, OnInit } from '@angular/core';

@Component
({
    selector:    'silver-consent-renderer-upload',
    templateUrl: './consent-renderer-upload.component.html',
    styleUrls:   ['./consent-renderer-upload.component.scss']
})
export class ConsentRendererUploadComponent implements OnInit
{
    constructor()
    {
    }

    ngOnInit()
    {
    }

    public fileChangeEvent(fileInput: any)
    {
        console.log('File Change Event');
    }
}
