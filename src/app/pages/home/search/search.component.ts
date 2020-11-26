import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchValue;
  constructor(
    private readonly router: Router,
  ) { }

  ngOnInit(): void {
  }

  search(e) {
    // if (e.code === 'Enter') {
    this.router.navigate([`/catalog`], { queryParams: { search: e.target.value } });
    // }
  }
}
