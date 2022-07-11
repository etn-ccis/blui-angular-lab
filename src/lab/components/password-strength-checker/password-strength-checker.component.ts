import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';

export type PasswordRequirement = {
    description: string;
    regex: RegExp;
    success?: boolean;
    icon?: string;
};

@Component({
    selector: 'blui-app-password-strength-check',
    styleUrls: ['password-strength-checker.component.scss'],
    host: {
        class: 'blui-password-strength-check',
    },
    template: `
        <mat-list-item class="blui-auth-password-check">
            <mat-icon class="blui-check-icon" [color]="success ? 'primary' : undefined">{{ icon }}</mat-icon>
            <span class="blui-validation-message mat-subheading-1" [class.success]="success">
                {{ validationMessage }}
            </span>
        </mat-list-item>
    `,
})
export class PasswordStrengthCheckComponent {
    @Input() icon = 'done';
    @Input() validationMessage: string;
    @Input() success = false;
}
@Component({
    selector: 'blui-password-strength-checker',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['password-strength-checker.component.scss'],
    template: `
        <mat-list class="blui-password-strength-checker-content">
            <ng-container *ngFor="let requirement of requirements">
                <blui-app-password-strength-check
                    [success]="requirement.success"
                    [icon]="requirement.icon || 'done'"
                    [validationMessage]="requirement.description"
                >
                </blui-app-password-strength-check>
            </ng-container>
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
