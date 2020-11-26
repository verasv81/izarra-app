import { Component, OnInit } from '@angular/core';
// import { AnalyticsService } from './services/analytics.service';
import { Router, NavigationEnd } from '@angular/router';
import { CompaniesApi } from './services';
import { GoogleAnalyticsService } from 'ngx-google-analytics';

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
    protected $gaService: GoogleAnalyticsService,
  ) { }

  ngOnInit() {
    this.$gaService.pageView('/blog', 'Blog Page');
    this.$gaService.pageView('/catalog', 'Catalog Page');
    this.$gaService.pageView('/contacts', 'Contact Page');
    this.$gaService.pageView('/about', 'About Page');
    this.$gaService.pageView('/join', 'Join Page');
  }
}
