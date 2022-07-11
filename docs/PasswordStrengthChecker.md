# Password Strength Checker

The `<blui-password-strength-checker>` component pairs with an input field and accepts a list of criteria that needs to be enforced.


<div style="text-align:center; margin-bottom:20px">
    <img width="100%" style="max-width: 600px" alt="Sample input field with basic requirements" src="./images/paswordStrengthChecker.png">
</div>

## Usage



```typescript
// app.module.ts
import { PasswordStrengthCheckerModule } from '@blui-lab/angular';
...
imports: [
    PasswordStrengthCheckerModule
],
```

```html
// your-component.html
<mat-form-field appearance="fill">
    <mat-label>Password</mat-label>
    <input
        matInput
        name="password"
        autocomplete="off"
        type="text"
        [formControl]="passwordFormControl"
    />
</mat-form-field>

<blui-password-strength-checker
    [(meetsRequirements)]="passesStrengthCheck"
    [formValue]="passwordFormControl?.value"
    [requirements]="passwordRequirements"
></blui-password-strength-checker>
```


```typescript
// your-component.ts
import { PasswordRequirement } from '@blui-lab/angular';
import { FormControl } from '@angular/forms';

passesStrengthCheck = false;
passwordFormControl: FormControl;
passwordRequirements: PasswordRequirement[] = [];

ngOnInit(): void {
    this.passwordFormControl = new FormControl('');
    passwordRequirements.push({
        description: 'Must be between 8 and 16 characters',
        regex: /^.{8,16}$/,
    });
    passwordRequirements.push({
        description: 'Must have one number',
        regex: /[0-9]/,
    });
    passwordRequirements.push({
        description: 'Must have uppercase Letter',
        regex: /[A-Z]/,
    });
}
```

## API

Parent element (`<blui-password-strength-checker>`) attributes:

<div style="overflow: auto;">

| @Input            | Description                                                | Type                    | Required | Default |
|-------------------|------------------------------------------------------------|-------------------------|---------|---------|
| meetsRequirements | Equals `true` if the requirements input are all met        | `boolean`               | yes     |         |
| formValue         | The input value which the requirements are checked against | `string`                | yes     |         |
| requirements      | An array of requirements to be met.                        | `PasswordRequirement[]` | yes     |         |

</div>

### Classes

Each Brightlayer UI component has classes which can be used to override component styles:

| Name                                         | Description                                  |
|----------------------------------------------|----------------------------------------------|
| blui-password-strength-checker               | Styles applied to the tag                    |
| blui-password-strength-checker-content       | Styles applied to the root element           |
| blui-password-strength-check                 | Styles applied to a requirements tag         |
| blui-password-requirement-content            | Styles applied to a requirements content     |
| blui-password-requirement-icon               | Styles applied to a requirements icon        |
| blui-password-requirement-validation-message | Styles applied to a requirements description |              
