import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.scss']
})
export class JoinComponent implements OnInit {
  logoFile: File;

  constructor() { }

  ngOnInit(): void {
  }

  onFileChanged(event) {
    this.logoFile = event.target.files[0];
  }
}
