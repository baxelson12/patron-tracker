import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardWrapperDirective } from './directives/card/card-wrapper.directive';
import { CardInnerDirective } from './directives/card/card-inner.directive';
import { CardImageDirective } from './directives/card/card-image.directive';
import { CardContentDirective } from './directives/card/card-content.directive';
import { CardInfoDirective } from './directives/card/card-info.directive';



@NgModule({
  declarations: [CardWrapperDirective, CardInnerDirective, CardImageDirective, CardContentDirective, CardInfoDirective],
  imports: [CommonModule],
  exports: [
    CardWrapperDirective,
    CardInnerDirective,
    CardImageDirective,
    CardContentDirective,
    CardInfoDirective
  ]
})
export class SharedModule { }
