import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  gotoCatalog() {
    this.router.navigate(['/catalog']);
  }
}
