import { Component, OnInit } from '@angular/core';
import { CompaniesApi } from 'src/app/services';
import { Router, ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  // tags = ['Decor', 'Pre-Payment', 'Superb 9+'];
  companies;
  searchText = '';
  selectedTags = [];

  constructor(
    private companyApi: CompaniesApi,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.queryParams.pipe(filter(params => params.search)).subscribe(params => {
      this.searchText = params.search;
    });

    this.companyApi.companiesGet().subscribe(res => this.companies = res as any);
  }


  loadDetails(id) {
    this.router.navigate([`catalog/${id}`]);
  }

  filter(e) {
    this.selectedTags = e;
  }
}
