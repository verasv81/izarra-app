import { Component, OnInit } from '@angular/core';
import { CompaniesApi } from '../../services';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.scss']
})
export class JoinComponent implements OnInit {
  logoFile: File;
  imageFile: File;
  EMAIL_REGEX = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
  PHONE_REGEX = /^\+373\s*[\s\./0-9]*$/;
  URL_REGEX = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;
  companyData = new FormGroup({
    name: new FormControl('', [
      Validators.required,
    ]),
    phone: new FormControl('', [
      Validators.required,
      Validators.pattern(this.PHONE_REGEX),
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern(this.EMAIL_REGEX),
    ]),
    description: new FormControl('', [
      Validators.required,
    ]),
    company: new FormControl('', [
      Validators.required,
    ]),
    domain: new FormControl('', [
      Validators.required,
      Validators.pattern(this.URL_REGEX)
    ]),
    offer: new FormControl('', [
      Validators.required,
    ]),
    fbUrl: new FormControl(''),
    instaUrl: new FormControl(''),
    liUrl: new FormControl(''),
  });

  logoVisual;
  imgVisual;
  display = false;
  active = false;

  constructor(
    private readonly companyApi: CompaniesApi,
    private readonly router: Router,
  ) { }

  ngOnInit(): void {
  }

  get email() {
    return this.companyData.get('email');
  }

  get name() {
    return this.companyData.get('name');
  }

  get phone() {
    return this.companyData.get('phone');
  }

  get description() {
    return this.companyData.get('description');
  }

  get company() {
    return this.companyData.get('company');
  }

  get domain() {
    return this.companyData.get('domain');
  }

  get offer() {
    return this.companyData.get('offer');
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
      full_description: this.description.value,
      description: this.offer.value,
      phone: this.phone.value,
      email: this.email.value,
      facebookUrl: this.companyData.get('fbUrl').value,
      instagramUrl: this.companyData.get('instaUrl').value,
      linkedinUrl: this.companyData.get('liUrl').value,
      domain: this.domain.value,
      owner: this.name.value,
      name: this.company.value,
    };

    if (!this.email.valid
      || !this.domain.valid
      || !this.description.valid
      || !this.name.valid
      || !this.offer.valid
      || !this.phone.valid
      || !this.domain.valid
    ) {
      this.email.markAllAsTouched();
      this.name.markAllAsTouched();
      this.description.markAllAsTouched();
      this.offer.markAllAsTouched();
      this.phone.markAllAsTouched();
      this.domain.markAllAsTouched();
    } else {
      this.companyApi.join(data).subscribe(res => {
        this.display = true;
      });
    }
  }

  hide() {
    this.router.navigate(['/']);
    this.display = false;
  }

  uploadLogo() {
    const file = new FormData();
    file.append('logo', this.logoFile, this.logoFile.name);

    this.companyApi.uploadLogo(file).subscribe(res => console.log(res));
  }

}
