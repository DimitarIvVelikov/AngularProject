import { ValidatorFn } from '@angular/forms';

export function imageValidator(expression: string): ValidatorFn {
  const regExp = new RegExp(`${expression}`);

  return (control) => {
    const isInvalidImage = control.value == '' || regExp.test(control.value);
    return isInvalidImage ? null : { imageValidator: true };
  };
}
