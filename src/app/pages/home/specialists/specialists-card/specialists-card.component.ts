import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-specialists-card',
  templateUrl: './specialists-card.component.html',
  styleUrls: ['./specialists-card.component.scss']
})
export class SpecialistsCardComponent implements OnInit {
  @Input() title;
  @Input() domain;
  @Input() description;
  @Input() logo;
  @Input() image;

  constructor() { }

  ngOnInit(): void {
  }

}
