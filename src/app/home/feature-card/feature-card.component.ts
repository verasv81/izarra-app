import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-feature-card',
  templateUrl: './feature-card.component.html',
  styleUrls: ['./feature-card.component.scss']
})
export class FeatureCardComponent implements OnInit {
  @Input() imageSrc;
  @Input() title;
  @Input() description;
  @Input() btnTitle;
  @Input() btnColor;

  constructor() { }

  ngOnInit(): void {
  }

}
