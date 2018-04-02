import { Directive } from '@angular/core';
import { FormGroup, NG_VALIDATORS, Validator } from '@angular/forms';

@Directive({
    selector: '[validate-location]',
    providers: [{ provide: NG_VALIDATORS, useExisting: ValidateLocationDirective, multi: true}],
})
export class ValidateLocationDirective implements Validator {
    constructor() { }

    public validate(formGroup: FormGroup): { [key: string]: any } {
        if (this.isAddressValid(formGroup) || this.isOnlineUrlValid(formGroup)) {
            return null;
        }

        return { validateLocation: false };
    }

    public isAddressValid(formGroup: FormGroup): boolean {
        const addressControl = formGroup.controls.address;
        const cityControl = formGroup.controls.city;
        const countryControl = formGroup.controls.country;

        return addressControl && addressControl.value
            && cityControl && cityControl.value
            && countryControl && countryControl.value;
    }

    public isOnlineUrlValid(formGroup: FormGroup): boolean {
        const onlineUrlControl = (formGroup.root as FormGroup).controls.onlineUrl;

        return onlineUrlControl && onlineUrlControl.value;
    }
}
