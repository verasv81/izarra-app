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
  @Input() tags;

  constructor() { }

  ngOnInit(): void {
  }
}
