import { Directive } from '@angular/core';
import { BaseDirective } from '../base.directive';

@Directive({
  selector: '[card-inner]'
})
export class CardInnerDirective extends BaseDirective {
  elClasses = [
    'max-w-sm',
    'rounded',
    'overflow-hidden',
    'bg-white shadow'
  ]
}
