//
// Copyright (c) 2017, Arjuna Technologies Limited, Newcastle upon Tyne, England,
//                     Open Lab, Newcastle University, Newcastle upon Tyne, England,
//                     Institute of Health and Society, Newcastle University, Newcastle upon Tyne, England.
//                     All rights reserved.
//

export class ConsentContextModel
{
    public id:               string;
    public consentId:        string;
    public consenterId:      string;
    public name:             string;
    public createdDate:      Date;
    public lastModifiedDate: Date;

    public constructor()
    {
        this.id               = '';
        this.consentId        = '';
        this.consenterId      = '';
        this.name             = '';
        this.createdDate      = new Date();
        this.lastModifiedDate = new Date();
    }
}
