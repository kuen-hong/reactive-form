import { Pipe, PipeTransform } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

/**
 * https://stackoverflow.com/questions/67834802/template-error-type-abstractcontrol-is-not-assignable-to-type-formcontrol
 */
@Pipe({
  name: 'formControl',
})
export class FormControlPipe implements PipeTransform {
  transform(value: AbstractControl): FormControl {
    return value as FormControl;
  }
}