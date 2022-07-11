import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';

export type PasswordRequirement = {
    description: string;
    regex: RegExp;
    success?: boolean;
    icon?: string;
};

@Component({
    selector: 'blui-password-requirement',
    styleUrls: ['password-strength-checker.component.scss'],
    host: {
        class: 'blui-password-requirement',
    },
    template: `
        <mat-list-item class="blui-password-requirement-content">
            <mat-icon class="blui-password-requirement-icon" [color]="success ? 'primary' : undefined">{{ icon }}</mat-icon>
            <span class="blui-password-requirement-validation-message mat-subheading-1" [class.success]="success">
                {{ validationMessage }}
            </span>
        </mat-list-item>
    `,
})
export class PasswordRequirementComponent {
    @Input() icon = 'done';
    @Input() validationMessage: string;
    @Input() success = false;
}

@Component({
    selector: 'blui-password-strength-checker',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['password-strength-checker.component.scss'],
    host: {
        class: 'blui-password-requirement',
    },
    template: `
        <mat-list class="blui-password-strength-checker-content">
            <blui-password-requirement *ngFor="let requirement of requirements"
                [success]="requirement.success"
                [icon]="requirement.icon || 'done'"
                [validationMessage]="requirement.description"
            >
            </blui-password-requirement>
        </mat-list>
    `,
})
export class PasswordStrengthCheckerComponent {
    @Input() requirements: PasswordRequirement[] = [];
    @Input() formValue: string;
    @Input() meetsRequirements: boolean;
    @Output() meetsRequirementsChange: EventEmitter<boolean> = new EventEmitter<boolean>();

    ngOnChanges(): void {
        let passwordMeetsRequirements = true;
        for (const requirement of this.requirements) {
            requirement.success = requirement.regex.test(this.formValue);
            passwordMeetsRequirements = passwordMeetsRequirements && requirement.success;
        }
        setTimeout(() => {
            this.meetsRequirementsChange.emit(passwordMeetsRequirements);
        });
    }
}
