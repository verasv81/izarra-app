import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from './services/analytics.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'izarra';

  constructor(
    private readonly analyticsService: AnalyticsService,
    private readonly router: Router
  ) { }

  ngOnInit() {
    this.analyticsService.init();

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        (window as any).ga('set', 'page', event.urlAfterRedirects);
        (window as any).ga('send', 'pageview');
      }
    });
  }
}
