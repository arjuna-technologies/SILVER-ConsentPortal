//
// Copyright (c) 2017, Arjuna Technologies Limited, Newcastle upon Tyne, England,
//                     Open Lab, Newcastle University, Newcastle upon Tyne, England,
//                     Institute of Health and Society, Newcastle University, Newcastle upon Tyne, England.
//                     All rights reserved.
//

import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { trigger } from '@angular/animations';
import { state } from '@angular/animations';
import { style } from '@angular/animations';
import { animate } from '@angular/animations';
import { transition } from '@angular/animations';

import { ConsentModel } from '../model/consent-model';
import { ConsentRendererModel } from '../model/consent-renderer-model';
import { ComponentModel } from '../model/component-model';
import { ConstraintModel } from '../model/constraint-model';
import { ConstraintOptionModel } from '../model/constraint-option-model';

import { ConsentDef } from '../../datasources/consent-def';
import { ConsentContextDef } from '../../datasources/consent-context-def';
import { ConstraintDef } from '../../datasources/constraint-def';
import { ConsentRendererDef } from '../../datasources/consent-renderer-def';
import { ComponentRendererDef } from '../../datasources/component-renderer-def';
import { TextComponentRendererDef } from '../../datasources/text-component-renderer-def';
import { ConstraintComponentRendererDef } from '../../datasources/constraint-component-renderer-def';

import { ConsentDefLoaderService } from '../../datasources/consent-def-loader.service';
import { ConsentContextDefLoaderService } from '../../datasources/consent-context-def-loader.service';
import { ConsentRendererDefLoaderService } from '../../datasources/consent-renderer-def-loader.service';
import { DetailsLoaderService } from '../../datasources/details-loader.service';
import { PurposesLoaderService } from '../../datasources/purposes-loader.service';

@Component
({
    selector:    'silver-declaration',
    templateUrl: './declaration.component.html',
    styleUrls:   ['./declaration.component.scss'],
    animations:
    [
        trigger('changingState',
        [
            state('none', style({ color: '#222222' })),
            state('underway', style({ color: 'gold' })),
            transition('none => underway', animate('1000ms ease-out')),
            transition('underway => none', animate('1000ms ease-out'))
        ]),
        trigger('highlightState',
        [
            state('none', style({ backgroundColor: '#ffffff' })),
            state('highlight', style({ backgroundColor: 'gold' })),
            transition('none => highlight', animate('1000ms ease-out')),
            transition('highlight => none', animate('1000ms ease-out'))
        ])
    ]
})
export class DeclarationComponent
{
    public consentContextId: string;
    public consentId:        string;
    public consentTypeId:    string;
    public newConsentName:   string;
    public newConsentTypeId: string;
    public newConsenterName: string;
    public components:       ComponentModel[];
    public constraints:      ConstraintModel[];
    public detailsLoading:   boolean;
    public detailsText:      string;
    public purposesLoading:  boolean;
    public purposesText:     string;

    public constructor(private router: Router, private route: ActivatedRoute, private consentContextDefLoaderService: ConsentContextDefLoaderService,
                       private consentDefLoaderService: ConsentDefLoaderService, private consentRendererDefLoaderService: ConsentRendererDefLoaderService,
                       private detailsLoaderService: DetailsLoaderService, private purposesLoaderService: PurposesLoaderService)
    {
        if (route.snapshot.params.consentcontextid)
            this.consentContextId = route.snapshot.params.consentcontextid;
        else
            this.consentContextId = '';
        this.consentId = '';
        if (route.snapshot.params.consenttypeid)
            this.consentTypeId = route.snapshot.params.consenttypeid;
        else
            this.consentTypeId = '';
        if (route.snapshot.params.newconsentname)
            this.newConsentName = route.snapshot.params.newconsentname;
        else
            this.newConsentName = '';
        if (route.snapshot.params.newconsenttypeid)
            this.newConsentTypeId = route.snapshot.params.newconsenttypeid;
        else
            this.newConsentTypeId = '';
        if (route.snapshot.params.newconsentername)
            this.newConsenterName = route.snapshot.params.newconsentername;
        else
            this.newConsenterName = '';
        this.components      = [];
        this.constraints     = [];
        this.detailsLoading  = false;
        this.detailsText     = '';
        this.purposesLoading = false;
        this.purposesText    = '';

        if (this.consentContextId !== '')
            this.loadConsentContextDef(this.consentContextId);
        else
            this.loadConsentTypeNewConsentDef(this.newConsentTypeId);
    }

    public doCreateConsent(): void
    {
        const consentDef: ConsentDef = new ConsentDef();

        consentDef.id             = (1000000000 *  Math.random()).toString(16);
        consentDef.typeId         = this.consentTypeId;
        consentDef.constraintDefs = [];
        for (const constraint of this.constraints)
        {
            const constraintDef: ConstraintDef = new ConstraintDef();

            constraintDef.id    = constraint.id;
            constraintDef.value = constraint.value;

            consentDef.constraintDefs.push(constraintDef);
        }

        const consentContextDef: ConsentContextDef = new ConsentContextDef();

        consentContextDef.id               = (1000000000 *  Math.random()).toString(16);
        consentContextDef.consentId        = consentDef.id;
        consentContextDef.consenterId      = this.newConsenterName;
        consentContextDef.name             = this.newConsentName;
        consentContextDef.createdDate      = new Date();
        consentContextDef.lastModifiedDate = consentContextDef.createdDate;

        this.consentDefLoaderService.postConsentDef(consentDef.id, consentDef);
        this.consentContextDefLoaderService.setConsentContextDef(consentContextDef.id, consentContextDef);

        this.router.navigate(['/']);
    }

    public doUpdateConsent(): void
    {
        const consentDef: ConsentDef = new ConsentDef();

        consentDef.id             = this.consentId;
        consentDef.typeId         = this.consentTypeId;
        consentDef.constraintDefs = [];
        for (const constraint of this.constraints)
        {
            const constraintDef: ConstraintDef = new ConstraintDef();

            constraintDef.id    = constraint.id;
            constraintDef.value = constraint.value;

            consentDef.constraintDefs.push(constraintDef);
        }

        this.consentDefLoaderService.putConsentDef(consentDef.id, consentDef);

        this.router.navigate(['/']);
    }

    public doRemoveConsent(): void
    {
        this.consentDefLoaderService.deleteConsentDef(this.consentId);
        this.consentContextDefLoaderService.removeConsentContextDef(this.consentContextId);

        this.router.navigate(['/']);
    }

    private loadConsentContextDef(consentContextId: string): void
    {
        this.consentContextDefLoaderService.getConsentContextDef(consentContextId)
            .then((consentContextDef) => { this.processConsentContextDef(consentContextDef) })
            .catch(() => { this.updateModel(null, null) } );
    }

    private loadConsentTypeNewConsentDef(consentTypeId: string): void
    {
        this.consentRendererDefLoaderService.getConsentRendererDefByType(consentTypeId, 'StyleA')
            .then
            (
                (consentRendererDef) =>
                {
                    const consentDef: ConsentDef = new ConsentDef();

                    consentDef.typeId         = this.newConsentTypeId;
                    consentDef.constraintDefs = [];

                    for (const componentRendererDef of consentRendererDef.componentRendererDefs)
                        if (componentRendererDef instanceof ConstraintComponentRendererDef)
                        {
                            const constraintComponentRendererDef = componentRendererDef as ConstraintComponentRendererDef;
                            const constraintDef = new ConstraintDef();

                            constraintDef.id    = constraintComponentRendererDef.id;
                            constraintDef.value = constraintComponentRendererDef.valueConstraintComponentRendererDefs[0].id;

                            consentDef.constraintDefs.push(constraintDef);
                        }

                    this.updateModel(consentDef, consentRendererDef)
                }
            )
            .catch(() => { this.updateModel(null, null) } );
    }

    private processConsentContextDef(consentContextDef: ConsentContextDef): void
    {
        this.consentDefLoaderService.getConsentDef(consentContextDef.consentId)
            .then((consentDef) => { this.processConsentRendererDef(consentDef) })
            .catch(() => { this.updateModel(null, null) } );
    }

    private processConsentRendererDef(consentDef: ConsentDef): void
    {
        this.consentRendererDefLoaderService.getConsentRendererDefByType(consentDef.typeId, 'StyleA')
            .then((consentRendererDef) => { this.updateModel(consentDef, consentRendererDef) })
            .catch(() => { this.updateModel(consentDef, null) });
    }

    private updateModel(consentDef: ConsentDef, consentRendererDef: ConsentRendererDef): void
    {
        this.consentId     = consentDef.id;
        this.consentTypeId = consentDef.typeId;
        this.components    = [];
        this.constraints   = [];
        if ((consentDef != null) && (consentRendererDef != null))
        {
            for (const componentRendererDef of consentRendererDef.componentRendererDefs)
            {
                const component = new ComponentModel();

                if (componentRendererDef instanceof TextComponentRendererDef)
                {
                    const textComponentRendererDef = componentRendererDef as TextComponentRendererDef;

                    component.id     = null;
                    component.text   = textComponentRendererDef.valueTextComponentRendererDefs[0].text;
                    component.colour = '#aaaaaa';
                    component.state  = 'passive';
                }
                else if (componentRendererDef instanceof ConstraintComponentRendererDef)
                {
                    const constraintComponentRendererDef = componentRendererDef as ConstraintComponentRendererDef;

                    component.id     = constraintComponentRendererDef.id;
                    component.text   = null;
                    component.colour = '#777777';
                    component.state  = 'none';

                    const constraint = new ConstraintModel();

                    constraint.id      = constraintComponentRendererDef.id;
                    constraint.text    = constraintComponentRendererDef.descriptionRendererDefs[0].text;

                    for (const constraintDef of consentDef.constraintDefs)
                        if (component.id === constraintDef.id)
                            constraint.value = constraintDef.value;

                    constraint.options = [];
                    for (const valueConstraintComponentRendererDef of constraintComponentRendererDef.valueConstraintComponentRendererDefs)
                    {
                        const constraintOption = new ConstraintOptionModel();

                        constraintOption.id    = valueConstraintComponentRendererDef.id;
                        constraintOption.label = valueConstraintComponentRendererDef.descriptionRendererDefs[0].text;

                        if (constraint.value === constraintOption.id)
                            component.text = constraintOption.label;

                        constraint.options.push(constraintOption);
                    }

                    this.constraints.push(constraint);
                }
                else
                {
                    component.id     = 'Error';
                    component.text   = 'Other';
                    component.colour = '#dd2222';
                    component.state  = 'passive';
                }

                this.components.push(component);
            }
        }

        this.detailsLoading = true;
        this.detailsText = '';
        this.detailsLoaderService.getDetailsText()
            .then((detailsText) => { this.detailsText = detailsText; this.detailsLoading = false })
            .catch(() => { this.detailsLoading = false } );

        this.purposesLoading = true;
        this.purposesText = '';
        this.purposesLoaderService.getPurposesText()
            .then((purposesText) => { this.purposesText = purposesText; this.purposesLoading = false })
            .catch(() => { this.purposesLoading = false } );
    }

    public componentEnter(component: ComponentModel): void
    {
        for (const constraint of this.constraints)
            if (component.id === constraint.id)
                constraint.state = 'highlight';
    }

    public componentLeave(component: ComponentModel): void
    {
        for (const constraint of this.constraints)
            if (component.id === constraint.id)
                constraint.state = 'none';
    }

    public constraintEnter(constraint: ConstraintModel): void
    {
        for (const component of this.components)
            if (constraint.id === component.id)
                component.state = 'underway';
    }

    public constraintLeave(constraint: ConstraintModel): void
    {
        for (const component of this.components)
            if (constraint.id === component.id)
                component.state = 'none';
    }

    public constraintChange(constraint: ConstraintModel): void
    {
        for (const component of this.components)
            if (constraint.id === component.id)
                for (const constraintOption of constraint.options)
                    if (constraint.value === constraintOption.id)
                        component.text = constraintOption.label;

        this.detailsLoading = true;
        this.detailsText = '';
        this.detailsLoaderService.getDetailsText()
            .then((detailsText) => { this.detailsText = detailsText; this.detailsLoading = false })
            .catch(() => { this.detailsLoading = false } );

        this.purposesLoading = true;
        this.purposesText = '';
        this.purposesLoaderService.getPurposesText()
            .then((purposesText) => { this.purposesText = purposesText; this.purposesLoading = false })
            .catch(() => { this.purposesLoading = false } );
    }
}
