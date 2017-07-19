//
// Copyright (c) 2017, Arjuna Technologies Limited, Newcastle upon Tyne, England,
//                     Open Lab, Newcastle University, Newcastle upon Tyne, England,
//                     Institute of Health and Society, Newcastle University, Newcastle upon Tyne, England.
//                     All rights reserved.
//

import { IOObject } from './io-object';

export class DescriptionRendererDef
{
    selector: string;
    text:     string;

    public constructor()
    {
        this.selector = null;
        this.text     = null;
    }

    public fromObject(object: any): boolean
    {
        this.selector = object.selector;
        this.text     = object.text;

        return true;
    }

    public toObject(): any
    {
        const descriptionRendererDefObject: any = { };

        descriptionRendererDefObject.selector = this.selector;
        descriptionRendererDefObject.text     = this.text;

        return descriptionRendererDefObject;
    }
}
