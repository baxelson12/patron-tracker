import { Directive } from '@angular/core';
import { BaseDirective } from '../base.directive';

@Directive({
  selector: '[card-content]'
})
export class CardContentDirective extends BaseDirective {
  elClasses = [
    'flex',
    'flex-col',
    'items-center',
    'px-4',
    'py-2'
  ]
}
