import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  patronForm = new FormGroup({
    name: new FormControl({ value: '' }),
    phone: new FormControl({ value: '' })
  })
}
