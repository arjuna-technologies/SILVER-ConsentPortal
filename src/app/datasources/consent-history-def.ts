//
// Copyright (c) 2017, Arjuna Technologies Limited, Newcastle upon Tyne, England,
//                     Open Lab, Newcastle University, Newcastle upon Tyne, England,
//                     Institute of Health and Society, Newcastle University, Newcastle upon Tyne, England.
//                     All rights reserved.
//

import { IOObject } from './io-object';

export class ConsentHistoryDef implements IOObject
{
    id:        string;
    timestamp: string;
    events:    any[];

    public constructor()
    {
        this.id        = null;
        this.timestamp = '';
        this.events    = [];
    }

    public fromObject(object: any): boolean
    {
        this.id        = object.id;
        this.timestamp = object.timestamp;
        this.events    = object.events;

        return true;
    }

    public toObject(): any
    {
        const consentHistoryDefObject: any = { };

        consentHistoryDefObject.id        = this.id;
        consentHistoryDefObject.timestamp = this.timestamp;
        consentHistoryDefObject.events    = this.events;

        return consentHistoryDefObject;
    }
}
