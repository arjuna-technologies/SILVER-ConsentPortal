import { IOObject } from './io-object';
import { DescriptionRendererDef } from './description-renderer-def';

export class ValueConstraintComponentRendererDef implements IOObject
{
    public id:                      string;
    public descriptionRendererDefs: DescriptionRendererDef[];

    public constructor()
    {
        this.id                      = null;
        this.descriptionRendererDefs = [];
    }

    public fromObject(object: any): boolean
    {
        this.id = object.id;

        this.descriptionRendererDefs = [];
        for (const descriptionRendererDefObject of object.descriptions)
        {
            const descriptionRendererDef = new DescriptionRendererDef();

            descriptionRendererDef.fromObject(descriptionRendererDefObject);
            this.descriptionRendererDefs.push(descriptionRendererDef);
        }

        return true;
    }

    public toObject(): any
    {
        const valueConstraintRendererDefObject: any = { };

        valueConstraintRendererDefObject.id = this.id;

        valueConstraintRendererDefObject.descriptions = [];
        for (const descriptionRendererDef of this.descriptionRendererDefs)
            valueConstraintRendererDefObject.descriptions.push(descriptionRendererDef.toObject());

        return valueConstraintRendererDefObject;
    }
}
