import { PasswordStrengthCheckComponent } from './password-strength-checker.component';
import { BluiPasswordStrengthCheckerComponent } from './blui-password-strength-checker.component';
import { NgModule } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatCommonModule } from '@angular/material/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    declarations: [PasswordStrengthCheckComponent, BluiPasswordStrengthCheckerComponent],
    imports: [MatListModule, MatCommonModule, BrowserModule, MatIconModule],
    exports: [PasswordStrengthCheckComponent, BluiPasswordStrengthCheckerComponent],
})
export class PasswordStrengthCheckerModule {}
