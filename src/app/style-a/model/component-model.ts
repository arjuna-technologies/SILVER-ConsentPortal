export class ComponentModel
{
    public id:     string;
    public text:   string;
    public colour: string;
    public state:  string;

    public constructor()
    {
        this.id     = null;
        this.text   = '';
        this.colour = '#000000';
        this.state  = 'none';
    }
}
