import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgxMaskModule } from 'ngx-mask';
import { QrCodeModule } from 'ng-qrcode';
import { PatronComponent } from './patron.component';
import { PatronRoutingModule } from './patron-routing.module';
import { SharedModule } from '../shared/shared.module';




@NgModule({
  declarations: [PatronComponent],
  imports: [
    CommonModule,
    QrCodeModule,
    PatronRoutingModule,
    ReactiveFormsModule,
    NgxMaskModule.forChild(),
    SharedModule
  ]
})
export class PatronModule { }
