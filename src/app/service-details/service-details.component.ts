import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-details',
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.scss']
})
export class ServiceDetailsComponent implements OnInit {
  tags = ["Decor", "Pre-payment", "Superb 9+"]
  constructor() { }

  ngOnInit(): void {
  }

}
