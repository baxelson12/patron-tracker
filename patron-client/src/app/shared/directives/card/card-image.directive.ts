import { Directive } from '@angular/core';
import { BaseDirective } from '../base.directive';

@Directive({
  selector: '[card-image]'
})
export class CardImageDirective extends BaseDirective {
  elClasses = [
    'mb-4',
    'h-40',
    'w-full',
    'object-cover',
    'object-top'
  ]
}
