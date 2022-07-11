import {
    PasswordStrengthCheckComponent,
    PasswordStrengthCheckerComponent,
} from './password-strength-checker.component';
import { NgModule } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatCommonModule } from '@angular/material/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    declarations: [PasswordStrengthCheckComponent, PasswordStrengthCheckerComponent],
    imports: [MatListModule, MatCommonModule, BrowserModule, MatIconModule],
    exports: [PasswordStrengthCheckComponent, PasswordStrengthCheckerComponent],
})
export class PasswordStrengthCheckerModule {}
