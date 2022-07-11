import { Component } from '@angular/core';
import * as Colors from '@brightlayer-ui/colors';
import { ViewportService } from '../../services/viewport.service';
import { PasswordRequirement, SampleService} from '@blui-lab/angular';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
    colors = Colors;

    passesStrengthCheck = false;
    passwordFormControl: FormControl;
    passwordRequirements: PasswordRequirement[];

    constructor(private readonly _viewportService: ViewportService, private readonly _sampleService: SampleService) {}

    ngOnInit(): void {
        this.passwordRequirements = this.createPasswordRequirements();
        this.passwordFormControl = new FormControl('');
        this._sampleService.testFunction();
    }

    isSmall(): boolean {
        return this._viewportService.isSmall();
    }

    createPasswordRequirements(): PasswordRequirement[] {
        const req: PasswordRequirement[] = [];
        req.push({
            description: 'Must be between 8 and 16 characters',
            regex: /^.{8,16}$/,
        });
        req.push({
            description: 'Must have one number',
            regex: /[0-9]/,
        });
        req.push({
            description: 'Must have uppercase Letter',
            regex: /[A-Z]/,
        });

        return req;
    }
}
