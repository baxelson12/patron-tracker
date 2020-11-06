import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardWrapperDirective } from './directives/card/card-wrapper.directive';
import { CardInnerDirective } from './directives/card/card-inner.directive';
import { CardImageDirective } from './directives/card/card-image.directive';
import { CardContentDirective } from './directives/card/card-content.directive';
import { CardInfoDirective } from './directives/card/card-info.directive';
import { CardComponent } from './components/card/card.component';
import { InputLabelDirective } from './directives/input/input-label.directive';
import { InputWrapperDirective } from './directives/input/input-wrapper.directive';
import { InputControlDirective } from './directives/input/input-control.directive';
import { InputComponent } from './components/input/input.component';



@NgModule({
  declarations: [CardWrapperDirective, CardInnerDirective, CardImageDirective, CardContentDirective, CardInfoDirective, CardComponent, InputLabelDirective, InputWrapperDirective, InputControlDirective, InputComponent],
  imports: [CommonModule],
  exports: [
    CardWrapperDirective,
    CardInnerDirective,
    CardImageDirective,
    CardContentDirective,
    CardInfoDirective,
    CardComponent,
    InputControlDirective,
    InputLabelDirective,
    InputWrapperDirective,
    InputComponent
  ]
})
export class SharedModule { }
