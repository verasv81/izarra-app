import { Component, OnInit } from '@angular/core';
import { CompaniesApi } from '../services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.scss']
})
export class JoinComponent implements OnInit {
  logoFile: File;
  imageFile: File;
  logoVisual;
  imgVisual;
  description;
  email;
  phone;
  fbUrl;
  instaUrl;
  liUrl;
  domain;
  name;
  company;
  offer;
  display: boolean = false;

  constructor(
    private readonly companyApi: CompaniesApi,
    private readonly router: Router,
  ) { }

  ngOnInit(): void {
  }

  onLogoFileChanged(event) {
    this.logoFile = event.target.files[0];
    this.logoVisual = this.logoFile.name;
  }

  onFileChanged(event) {
    this.imageFile = event.target.files[0];
    this.imgVisual = this.imageFile.name;
  }

  join() {
    const data = {
      full_description: this.description,
      description: this.offer,
      phone: this.phone,
      email: this.email,
      facebookUrl: this.fbUrl || '',
      instagramUrl: this.instaUrl || '',
      domain: this.domain,
      owner: this.name,
      company: this.company,
      image: this.imageFile,
      logo: this.logoFile
    };

    if (!this.description || !this.offer || !this.name || !this.companyApi) {
      return;
    }

    this.companyApi.join(data).subscribe(res => {
      console.log(res);
      this.display = true;
    });
  }

  hide() {
    this.router.navigate(['/']);
    this.display = false;
  }

}
