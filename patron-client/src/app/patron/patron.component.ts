import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-patron',
  templateUrl: './patron.component.html',
  styleUrls: ['./patron.component.scss']
})
export class PatronComponent implements OnInit {
  nameEnable = false;
  phoneEnable = false;
  test: string = "hello";
  patronForm = new FormGroup({
    name: new FormControl({ value: '', disabled: this.nameEnable }),
    phone: new FormControl({ value: '', disabled: this.phoneEnable })
  })


  constructor() { }

  ngOnInit(): void {
  
  }

}
