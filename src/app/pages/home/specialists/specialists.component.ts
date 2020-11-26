import { Component, OnInit } from '@angular/core';
import { CompaniesApi } from 'src/app/services';

@Component({
  selector: 'app-specialists',
  templateUrl: './specialists.component.html',
  styleUrls: ['./specialists.component.scss']
})
export class SpecialistsComponent implements OnInit {
  companies;
  responsiveOptions;

  constructor(
    private readonly companyApi: CompaniesApi,
  ) {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '768px',
        numVisible: 1,
        numScroll: 1
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 2
      }
    ];
  }

  ngOnInit(): void {
    this.companyApi.companiesGet().subscribe(res => {
      this.companies = res as any;
      this.companies.forEach(el => {
        el.description = this.getDescription(el.description);
      });
    });
  }

  getDescription(text: string) {
    return text.length > 70 ? `${text.slice(0, 70)}...` : text;
  }

}
