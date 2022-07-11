import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PasswordRequirementComponent } from './password-strength-checker.component';
import { PasswordStrengthCheckerModule } from './password-strength-checker.module';

describe('PasswordStrengthCheckerComponent', () => {
    let component: PasswordRequirementComponent;
    let fixture: ComponentFixture<PasswordRequirementComponent>;

    beforeEach(() => {
        void TestBed.configureTestingModule({
            imports: [PasswordStrengthCheckerModule, RouterTestingModule],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(PasswordRequirementComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        void expect(component).toBeTruthy();
    });
});
