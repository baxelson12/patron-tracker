import { Directive } from '@angular/core';
import { BaseDirective } from '../base.directive';

@Directive({
  selector: '[card-info]'
})
export class CardInfoDirective extends BaseDirective {
  elClasses = [
    'flex',
    'self-start',
    'text-gray-600',
    'leading-relaxed'
  ]
}
