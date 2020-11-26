import { Component, OnInit, Input } from '@angular/core';
import { Meta } from '@angular/platform-browser';

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

  constructor(
    private readonly meta: Meta
  ) { }

  ngOnInit(): void {
    // this.meta.addTags([
    //   { property: 'og:type', content: 'article' },
    //   {
    //     property: 'og:title', content: 'REFLECȚIE // Olga Graur: „De ce am decis să fondez o platformă online a femeilor antreprenoare din Republica Moldova”'
    //   },
    //   {
    //     property: 'og:description', content: 'Când mediul în care te afli validează vădit sau subtil inegalitățile pe bază de gen, discriminarea e următorul pas.'
    //   },
    //   { property: 'og:url', content: 'https://izarra.co/blog1' },
    //   { property: 'og:image', content: 'https://storage.googleapis.com/company-images-izarra/Izzara-03.png' },
    //   { property: 'og:image:width', content: '300' },
    //   { property: 'og:image:height', content: '300' },
    //   { property: 'og:site_name', content: 'Izarra' }
    // ]);
  }

}
