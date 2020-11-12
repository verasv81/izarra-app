import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from './services/analytics.service';
import { Router, NavigationEnd } from '@angular/router';
import { CompaniesApi } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'izarra';
  responsiveOptions;
  companies;

  constructor(
    private readonly analyticsService: AnalyticsService,
    private readonly companyApi: CompaniesApi,
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
