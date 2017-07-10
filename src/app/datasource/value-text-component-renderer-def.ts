import { IOObject } from './io-object';
import { DescriptionRendererDef } from './description-renderer-def';

export class ValueTextComponentRendererDef implements IOObject
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
        const valueTextComponentRendererDefObject: any = { };

        valueTextComponentRendererDefObject.selector = this.selector;
        valueTextComponentRendererDefObject.text     = this.text;

        return valueTextComponentRendererDefObject;
    }
}
