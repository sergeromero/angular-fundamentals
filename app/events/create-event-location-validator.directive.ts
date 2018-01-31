import { Directive } from '@angular/core';
import { Validator, FormGroup, NG_VALIDATORS } from '@angular/forms';

@Directive({ 
    selector: '[validate-location]',
    providers: [{ provide: NG_VALIDATORS, useExisting: ValidateLocationDirective, multi: true}]
})
export class ValidateLocationDirective implements Validator {
    constructor() { };

    validate(formGroup: FormGroup): { [key: string]: any } {
        if(this.isAddressValid(formGroup) || this.isOnlineUrlValid(formGroup)){
            return null;
        }

        return { validateLocation: false };
    };

    isAddressValid(formGroup: FormGroup): boolean{
        let addressControl = formGroup.controls['address'];
        let cityControl = formGroup.controls['city'];
        let countryControl = formGroup.controls['country'];

        return addressControl && addressControl.value
            && cityControl && cityControl.value
            && countryControl && countryControl.value;
    };

    isOnlineUrlValid(formGroup: FormGroup): boolean{
        let onlineUrlControl = (<FormGroup>formGroup.root).controls['onlineUrl'];

        return onlineUrlControl && onlineUrlControl.value;
    };
};