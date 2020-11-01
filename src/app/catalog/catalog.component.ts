import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  tags = ['Decor', 'Pre-Payment', 'Superb 9+'];
  constructor() { }

  ngOnInit(): void {
  }

}
