import { Component, OnInit } from '@angular/core';
import { CompaniesApi } from 'src/app/services';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-service-details',
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.scss']
})
export class ServiceDetailsComponent implements OnInit {
  tags = ["Decor", "Pre-payment", "Superb 9+"]
  id;
  company;
  facebook = false;
  linkedin = false;
  instagram = false;
  constructor(private companiesApi: CompaniesApi, private route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.getCompany();
  }

  getCompany() {
    this.companiesApi.companyGet(this.id).subscribe(res => {
      this.company = res as any;
      this.facebook = this.company?.facebookUrl?.length > 0;
      this.linkedin = this.company?.linkedinUrl?.length > 0;
      this.instagram = this.company?.instagramUrl?.length > 0;
      console.log(this.company);
    });
  }

}
