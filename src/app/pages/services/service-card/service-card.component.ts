import { Component, OnInit, Input } from '@angular/core';

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


  constructor() { }

  ngOnInit(): void {
  }

}
