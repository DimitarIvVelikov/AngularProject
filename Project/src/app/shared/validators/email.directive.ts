import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
  ValidatorFn,
} from '@angular/forms';
import { emailValidator } from '../utils/email-validator';
@Directive({
  selector: '[appEmail]',
  providers: [
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: EmailDirective,
    },
  ],
})
export class EmailDirective implements Validator, OnChanges {
  @Input() appEmail: string[] = [];
  constructor() {}

  validator: ValidatorFn = () => null;

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    return this.validator(control);
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['appEmail'].currentValue.length) {
      this.validator = emailValidator(changes['appEmail'].currentValue);
    }
  }
}
