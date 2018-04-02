import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'duration',
})
export class DurationPipe implements PipeTransform {
    public transform(value: number): string {
        switch (value) {
            case 1: return 'Half hour';
            case 2: return 'One hour';
            case 3: return 'Half hour';
            case 4: return 'Full hour';
            default: return value.toString();
        }
    }
}
