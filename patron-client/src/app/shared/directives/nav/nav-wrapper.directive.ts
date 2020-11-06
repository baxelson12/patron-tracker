import { Directive } from '@angular/core';
import { BaseDirective } from '../base.directive';

@Directive({
  selector: '[nav-wrapper]'
})
export class NavWrapperDirective extends BaseDirective{
  elClasses = [
    'flex',
    'flex-col',
    '-mx-3',
    'bg-white',
    'px-3',
    'pt-2',
    'mb-12',
    'shadow'
  ]
}
