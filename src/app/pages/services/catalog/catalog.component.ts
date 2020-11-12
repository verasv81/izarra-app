import { Component, OnInit } from '@angular/core';
import { CompaniesApi } from 'src/app/services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  tags = ['Decor', 'Pre-Payment', 'Superb 9+'];
  companies = [];
  constructor(
    private companyApi: CompaniesApi,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.companyApi.companiesGet().subscribe((res) => { this.companies = res as any; });
  }

  loadDetails(id) {
    this.router.navigate([`catalog/${id}`]);
  }

}
