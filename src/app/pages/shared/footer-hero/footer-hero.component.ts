import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer-hero',
  templateUrl: './footer-hero.component.html',
  styleUrls: ['./footer-hero.component.scss']
})
export class FooterHeroComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  gotoCatalog() {
    this.router.navigate(['/catalog']);
  }

}
