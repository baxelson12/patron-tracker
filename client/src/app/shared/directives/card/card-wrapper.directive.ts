import { Directive } from '@angular/core';
import { BaseDirective } from '../base.directive';

@Directive({
  selector: '[card-wrapper]'
})
export class CardWrapperDirective extends BaseDirective {
  elClasses = [
    'flex',
    'justify-center'
  ]
}
