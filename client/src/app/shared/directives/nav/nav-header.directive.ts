import { Directive } from '@angular/core';
import { BaseDirective } from '../base.directive';

@Directive({
  selector: '[nav-header]'
})
export class NavHeaderDirective extends BaseDirective {
  elClasses = [
    'text-xl'
  ]
}
