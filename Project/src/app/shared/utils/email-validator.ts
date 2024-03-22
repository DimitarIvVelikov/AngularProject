import { ValidatorFn } from '@angular/forms';

export function emailValidator(domains: string[]): ValidatorFn {
  const regExp = new RegExp(`^[A-za-z0-9._-]{3,}@${domains.join('|')}$`);

  return (control) => {
    const isInvalidEmail = control.value == '' || regExp.test(control.value);
    return isInvalidEmail ? null : { emailValidator: true };
  };
}
