//
// Copyright (c) 2017, Arjuna Technologies Limited, Newcastle upon Tyne, England,
//                     Open Lab, Newcastle University, Newcastle upon Tyne, England,
//                     Institute of Health and Society, Newcastle University, Newcastle upon Tyne, England.
//                     All rights reserved.
//

import { IOObject } from './io-object';

export class ConstraintDef implements IOObject
{
    id:    string;
    value: string;

    public constructor()
    {
        this.id    = null;
        this.value = null;
    }

    public fromObject(object: any): boolean
    {
        this.id    = object.id;
        this.value = object.value;

        return true;
    }

    public toObject(): any
    {
        const constraintDefObject: any = { };

        constraintDefObject.id    = this.id;
        constraintDefObject.value = this.value;

        return constraintDefObject;
    }
}
