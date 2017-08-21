//
// Copyright (c) 2017, Arjuna Technologies Limited, Newcastle upon Tyne, England,
//                     Open Lab, Newcastle University, Newcastle upon Tyne, England,
//                     Institute of Health and Society, Newcastle University, Newcastle upon Tyne, England.
//                     All rights reserved.
//

import { IOObject } from './io-object';
import { ConstraintDef } from './constraint-def';

export class ConsentDef implements IOObject
{
    id:             string;
    typeId:         string;
    constraintDefs: ConstraintDef[];

    public constructor()
    {
        this.id             = null;
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
        this.id     = object.id;
        this.typeId = object.type_id;

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

        consentDefObject.id      = this.id;
        consentDefObject.type_id = this.typeId;

        consentDefObject.constraints = [];
        for (const constraintDef of this.constraintDefs)
            consentDefObject.constraints.push(constraintDef.toObject());

        return consentDefObject;
    }
}
