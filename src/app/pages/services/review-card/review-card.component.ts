import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-review-card',
  templateUrl: './review-card.component.html',
  styleUrls: ['./review-card.component.scss']
})
export class ReviewCardComponent implements OnInit {
  @Input() text;
  @Input() author;
  @Input() image;
  @Input() company;


  constructor() { }

  ngOnInit(): void {
  }

}
