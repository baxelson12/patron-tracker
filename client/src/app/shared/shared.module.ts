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
import { NavWrapperDirective } from './directives/nav/nav-wrapper.directive';
import { NavHeaderDirective } from './directives/nav/nav-header.directive';
import { NavSubheaderDirective } from './directives/nav/nav-subheader.directive';
import { NavComponent } from './components/nav/nav.component';



@NgModule({
  declarations: [CardWrapperDirective, CardInnerDirective, CardImageDirective, CardContentDirective, CardInfoDirective, CardComponent, InputLabelDirective, InputWrapperDirective, InputControlDirective, InputComponent, NavWrapperDirective, NavHeaderDirective, NavSubheaderDirective, NavComponent],
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
    InputComponent,
    NavHeaderDirective,
    NavSubheaderDirective,
    NavWrapperDirective,
    NavComponent
  ]
})
export class SharedModule { }
