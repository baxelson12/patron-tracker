import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PatronService } from './patron.service';

@Component({
  selector: 'app-patron',
  templateUrl: './patron.component.html',
  styleUrls: ['./patron.component.scss']
})
export class PatronComponent implements OnInit {
  QRGenerated = false;
  test: string = "hello";
  patronForm = new FormGroup({
    name: new FormControl({ value: '', disabled: false }),
    phone: new FormControl({ value: '', disabled: false })
  })

  get patronName() { return this.patronForm.get('name') }
  get patronPhone() { return this.patronForm.get('phone') }

  constructor(private ps: PatronService) { }

  ngOnInit(): void {
    this.patronForm.patchValue({
      name: this.ps.getName() || '',
      phone: this.ps.getPhone() || ''
    });
    this.QRGenerated = !!this.patronName.value.length && !!this.patronPhone.value.length
    console.log(this.QRGenerated)
  }

  generateQR() {
    this.ps.storeData(this.patronForm.value);
    this.QRGenerated = true;
  }
}
