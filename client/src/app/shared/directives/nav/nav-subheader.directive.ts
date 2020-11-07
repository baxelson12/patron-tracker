import { Directive } from '@angular/core';
import { BaseDirective } from '../base.directive';

@Directive({
  selector: '[nav-subheader]'
})
export class NavSubheaderDirective extends BaseDirective {
  elClasses = [
    'font-bold',
    'py-4'
  ]
}
