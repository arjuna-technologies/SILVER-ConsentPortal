//
// Copyright (c) 2017, Arjuna Technologies Limited, Newcastle upon Tyne, England,
//                     Open Lab, Newcastle University, Newcastle upon Tyne, England,
//                     Institute of Health and Society, Newcastle University, Newcastle upon Tyne, England.
//                     All rights reserved.
//

import { IOObject } from './io-object';
import { ConstraintDef } from './constraint-def';

export class InhealthcareConsentDef implements IOObject
{
    public id:             string;
    public userId:         string;
    public password:       string;
    public typeId:         string;
    public constraintDefs: ConstraintDef[];

    public constructor()
    {
        this.id             = null;
        this.userId         = null;
        this.password       = null;
        this.typeId         = null;
        this.constraintDefs = [];
    }

    public changeConstraint(id: string, value: string): void
    {
        for (const constraintDef of this.constraintDefs)
            if (constraintDef.id === id)
                constraintDef.value = value;
    }

    public fromObject(object: any): boolean
    {
        this.id       = object.id;
        this.userId   = object.userId;
        this.password = object.password;
        this.typeId   = object.type_id;

        this.constraintDefs = [];
        for (const constraintDefObject of object.constraints)
        {
            const constraintDef = new ConstraintDef();

            constraintDef.fromObject(constraintDefObject);
            this.constraintDefs.push(constraintDef);
        }

        return true;
    }

    public toObject(): any
    {
        const consentDefObject: any = { };

        consentDefObject.id       = this.id;
        consentDefObject.userId   = this.userId;
        consentDefObject.password = this.password;
        consentDefObject.type_id  = this.typeId;

        consentDefObject.constraints = [];
        for (const constraintDef of this.constraintDefs)
            consentDefObject.constraints.push(constraintDef.toObject());

        return consentDefObject;
    }
}
