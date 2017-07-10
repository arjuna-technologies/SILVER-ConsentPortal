export interface IOObject
{
    fromObject(object: any): boolean;

    toObject(): any;
}
