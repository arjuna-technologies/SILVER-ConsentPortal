//
// Copyright (c) 2017, Arjuna Technologies Limited, Newcastle upon Tyne, England,
//                     Open Lab, Newcastle University, Newcastle upon Tyne, England,
//                     Institute of Health and Society, Newcastle University, Newcastle upon Tyne, England.
//                     All rights reserved.
//

import { IOObject } from './io-object';

export class ConsentContextDef implements IOObject
{
    public id:               string;
    public consentId:        string;
    public consenterId:      string;
    public name:             string;
    public createdDate:      Date;
    public lastModifiedDate: Date;

    public fromObject(object: any): boolean
    {
        this.id               = object.id;
        this.consentId        = object.consent_id;
        this.consenterId      = object.consenter_id;
        this.name             = object.name;
        this.createdDate      = object.created_date;
        this.lastModifiedDate = object.last_modified_date;

        return true;
    }

    public toObject(): any
    {
        const consentConsentDefObject: any = { };

        consentConsentDefObject.id                 = this.id;
        consentConsentDefObject.consent_id         = this.consentId;
        consentConsentDefObject.consenter_id       = this.consenterId;
        consentConsentDefObject.name               = this.name;
        consentConsentDefObject.created_date       = this.createdDate;
        consentConsentDefObject.last_modified_date = this.lastModifiedDate;

        return consentConsentDefObject;
    }
}
