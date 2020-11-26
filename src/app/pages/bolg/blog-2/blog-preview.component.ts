import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-blog-preview',
  templateUrl: './blog-preview.component.html',
  styleUrls: ['./blog-preview.component.scss']
})
export class BlogPreviewComponent implements OnInit {

  constructor(
    private readonly meta: Meta
  ) { }

  ngOnInit(): void {
    this.meta.addTags([
      { name: 'og:type', content: 'article' },
      {
        name: 'og:title', content: 'Cum și de ce să faci parte din comunitatea Izarra'
      },
      {
        name: 'og:description', content: 'Pe lângă micile victorii ale femeilor pe scena economică și politicile încurajatoare ale statului, antreprenoriatul'
      },
      { name: 'og:url', content: 'https://izarra.co/blog2' },
      { name: 'og:image', content: 'https://storage.googleapis.com/company-images-izarra/Izzara-03.png' },
      { name: 'og:image:width', content: '300' },
      { name: 'og:image:height', content: '300' },
      { name: 'og:site_name', content: 'Izarra' }
    ]);
  }
}
