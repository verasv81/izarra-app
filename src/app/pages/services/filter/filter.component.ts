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
    { label: 'Media', value: 'media' },
    { label: 'Decor', value: 'decor' },
    { label: 'Accounting', value: 'accounting' },
    { label: 'Financial', value: 'financial' },
    { label: 'Consulting', value: 'consulting' },
    { label: 'Investment', value: 'investment' },
    { label: 'Architecture', value: 'architecture' },
    { label: 'Kids', value: 'kids' },
    { label: 'Education', value: 'education' },
    { label: 'Catering', value: 'catering' },
    { label: 'HR', value: 'human resources' },
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
