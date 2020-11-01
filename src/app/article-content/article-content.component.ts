import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-article-content',
  templateUrl: './article-content.component.html',
  styleUrls: ['./article-content.component.scss']
})
export class ArticleContentComponent implements OnInit {
  @Input() title;
  @Input() image;
  @Input() content;
  @Input() date;

  constructor() { }

  ngOnInit(): void {
  }

}
