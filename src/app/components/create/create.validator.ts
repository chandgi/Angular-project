import { FormControl, FormGroupDirective, NgForm} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material';

export class UsernameValidator {
  static validUsername(fc: FormControl){
    if(fc.value.toLowerCase() === "abc123" || fc.value.toLowerCase() === "123abc"){
      return ({validUsername: true});
    } else {
      return (null);
    }
  }
}
export class ConfirmValidParentMatcher implements ErrorStateMatcher {
	isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
		return control.parent.invalid && control.touched;
	}
}
