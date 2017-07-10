import { Component } from '@angular/core';
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

import { ConsentDef } from '../datasource/consent-def';
import { ConsentRendererDef } from '../datasource/consent-renderer-def';
import { ComponentRendererDef } from '../datasource/component-renderer-def';
import { TextComponentRendererDef } from '../datasource/text-component-renderer-def';
import { ConstraintComponentRendererDef } from '../datasource/constraint-component-renderer-def';

import { ConsentDefLoaderService } from '../datasource/consent-def-loader.service';
import { ConsentRendererDefLoaderService } from '../datasource/consent-renderer-def-loader.service';
import { DetailsLoaderService } from '../datasource/details-loader.service';
import { PurposesLoaderService } from '../datasource/purposes-loader.service';

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
    public consents:         ConsentModel[];
    public consentRenderers: ConsentRendererModel[];
    public components:       ComponentModel[];
    public constraints:      ConstraintModel[];
    public detailsLoading:   boolean;
    public detailsText:      string;
    public purposesLoading:  boolean;
    public purposesText:     string;

    private consentDef:          ConsentDef;
    private consentDefs:         ConsentDef[];
    private consentRendererDef:  ConsentRendererDef;
    private consentRendererDefs: ConsentRendererDef[];

    public constructor(private consentDefLoaderService: ConsentDefLoaderService, private consentRendererDefLoaderService: ConsentRendererDefLoaderService,
                       private detailsLoaderService: DetailsLoaderService, private purposesLoaderService: PurposesLoaderService)
    {
        this.consents         = [];
        this.consentRenderers = [];
        this.components       = [];
        this.constraints      = [];
        this.detailsLoading   = false;
        this.detailsText      = '';
        this.purposesLoading  = false;
        this.purposesText     = '';

        this.consentDef          = null;
        this.consentDefs         = [];
        this.consentRendererDef  = null;
        this.consentRendererDefs = [];

        this.loadConsentDefs();
        this.loadConsentRendererDefs();
    }

    public doSelectConsent(consent: ConsentModel): void
    {
        this.consentDef = null;
        for (const consentDef of this.consentDefs)
            if (consent.id === consentDef.id)
                this.consentDef = consentDef;

        this.consentRendererDef = null;
        for (const consentRendererDef of this.consentRendererDefs)
            if (this.consentDef.typeId === consentRendererDef.id)
                this.consentRendererDef = consentRendererDef;

        this.updateModel();
    }

    private loadConsentRendererDefs()
    {
        this.consentRendererDefLoaderService.getConsentRendererDefs()
            .then((consentRendererDefs) => { this.consentRendererDefs = consentRendererDefs; this.updateModel() })
            .catch(() => { this.consentRendererDefs = []; this.updateModel() } );
    }

    private loadConsentDefs()
    {
        this.consentDefLoaderService.getConsentDefs()
            .then((consentDefs) => { this.consentDefs = consentDefs; this.updateModel() })
            .catch(() => { this.consentDefs = []; this.updateModel() } );
    }

    private updateModel(): void
    {
        if (this.consentDef == null)
            this.consentRendererDef = null;
        else if ((this.consentRendererDef !== null) && (this.consentDef.typeId !== this.consentRendererDef.id))
            this.consentRendererDef = null;

        if (this.consentRendererDefs.length === 0)
            this.consentRendererDef = null;
        if (this.consentRendererDefs.length === 1)
            this.consentRendererDef = this.consentRendererDefs[0];

        this.consents = [];
        for (const consentDef of this.consentDefs)
        {
            const consent = new ConsentModel(consentDef.id, consentDef.id);

            this.consents.push(consent);
        }

        this.consentRenderers = [];
        for (const consentRendererDef of this.consentRendererDefs)
        {
            const consentRenderer = new ConsentRendererModel(consentRendererDef.id, consentRendererDef.id);

            this.consentRenderers.push(consentRenderer);
        }

        this.components  = [];
        this.constraints = [];
        if ((this.consentDef != null) && (this.consentRendererDef != null))
        {
            for (const componentRendererDef of this.consentRendererDef.componentRendererDefs)
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

                    for (const constraintDef of this.consentDef.constraintDefs)
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

    public componentEnter(component: ComponentModel)
    {
        for (const constraint of this.constraints)
            if (component.id === constraint.id)
                constraint.state = 'highlight';
    }

    public componentLeave(component: ComponentModel)
    {
        for (const constraint of this.constraints)
            if (component.id === constraint.id)
                constraint.state = 'none';
    }

    public constraintEnter(constraint: ConstraintModel)
    {
        for (const component of this.components)
            if (constraint.id === component.id)
                component.state = 'underway';
    }

    public constraintLeave(constraint: ConstraintModel)
    {
        for (const component of this.components)
            if (constraint.id === component.id)
                component.state = 'none';
    }

    public constraintChange(constraint: ConstraintModel)
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
