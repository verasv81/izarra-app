import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-service-card',
  templateUrl: './service-card.component.html',
  styleUrls: ['./service-card.component.scss']
})
export class ServiceCardComponent implements OnInit {
  @Input() id;
  @Input() title;
  @Input() content;
  @Input() image;
  @Input() tags: string;
  tagList = [];

  constructor() {
  }

  ngOnInit(): void {
    if (this.tags.includes(',')) {
      console.log(this.tags);
      this.tagList.push(...this.tags.split(','));
    } else {
      this.tagList.push(this.tags);
    }
  }
}
