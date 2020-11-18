import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  @Output() check: EventEmitter<any> = new EventEmitter();
  selectedValues: any[] = [];

  marketing = [
    { label: 'SEO', value: 'seo' },
    { label: 'Email Marketing', value: 'email marketing' },
    { label: 'Printing', value: 'printing' },
    { label: 'Branding', value: 'branding' },
    { label: 'PR', value: 'pr' },
    { label: 'Media', value: 'media' },
    { label: 'Decor', value: 'decor' },
    { label: 'Accounting', value: 'accounting' },
    { label: 'Consulting', value: 'consulting' },
    { label: 'Investment', value: 'investment' }
  ];

  rating = [
    { label: 'Super 9+', value: '9' },
    { label: 'Very good 8+', value: '8' },
    { label: 'Good 7+', value: '7' },
    { label: 'Pleasant 6+', value: '6' },
  ];

  payment = [
    { label: 'Pre-payment', value: 'pre' },
    { label: 'Post-payment', value: 'post' },
    { label: 'Free Consultation', value: 'free' },
    { label: 'After Delivery', value: 'after' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  filter() {
    this.check.emit(this.selectedValues);
  }
}
