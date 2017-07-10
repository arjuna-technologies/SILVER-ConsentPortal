import { ConstraintOptionModel } from './constraint-option-model';

export class ConstraintModel
{
    public id:      string;
    public text:    string;
    public value:   string;
    public state:   string;
    public options: ConstraintOptionModel[];

    public constructor()
    {
        this.id      = null;
        this.text    = null;
        this.value   = null;
        this.state   = null;
        this.options = [];
    }
}
