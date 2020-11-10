import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-service-card',
  templateUrl: './service-card.component.html',
  styleUrls: ['./service-card.component.scss']
})
export class ServiceCardComponent implements OnInit {
  @Input() title;
  @Input() content;
  @Input() image;
  @Input() tags;
  @Output() loadDetails = new EventEmitter<Event>();

  constructor() { }

  ngOnInit(): void {
  }

  load(event) {
    this.loadDetails.emit(event);
  }

}
