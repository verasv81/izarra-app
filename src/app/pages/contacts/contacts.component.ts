import { Component, OnInit } from '@angular/core';
import { SupportApi } from 'src/app/services/SupportApi';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  name;
  email;
  text;
  sended = false;

  constructor(
    private readonly support: SupportApi,
  ) { }

  ngOnInit(): void {
  }

  send() {
    this.support.sendEmail({ name: this.name, from: this.email, text: this.text })
      .subscribe(res => {
        this.sended = true;
        this.name = '';
        this.email = '';
        this.text = '';
      });
  }
}
