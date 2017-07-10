import { ComponentRendererDef } from './component-renderer-def';
import { ValueTextComponentRendererDef } from './value-text-component-renderer-def';

export class TextComponentRendererDef implements ComponentRendererDef
{
    public valueTextComponentRendererDefs: ValueTextComponentRendererDef[];

    public constructor()
    {
        this.valueTextComponentRendererDefs = [];
    }

    public fromObject(object: any): boolean
    {
        this.valueTextComponentRendererDefs = [];
        for (const valueTextComponentRendererDefObject of object.values)
        {
            const valueTextComponentRendererDef = new ValueTextComponentRendererDef();

            valueTextComponentRendererDef.fromObject(valueTextComponentRendererDefObject);
            this.valueTextComponentRendererDefs.push(valueTextComponentRendererDef);
        }

        return true;
    }

    public toObject(): any
    {
        const textComponentRendererDefObject: any = { };

        textComponentRendererDefObject.values = [];
        for (const valueTextComponentRendererDef of this.valueTextComponentRendererDefs)
            textComponentRendererDefObject.values.push(valueTextComponentRendererDef.toObject());

        return textComponentRendererDefObject;
    }
}
