import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input('img-src') imgSrc: string;
  @Input('img-alt') imgAlt: string;
}
