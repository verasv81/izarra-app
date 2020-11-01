import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-preview',
  templateUrl: './blog-preview.component.html',
  styleUrls: ['./blog-preview.component.scss']
})
export class BlogPreviewComponent implements OnInit {
  content = [
    `As of 2020, there are somewhere between 12 and 24 million ecommerce stores operating on the net, 
  spread out across the best ecommerce platforms. Anything you want, you can get online…
  but what if what you want is to become an ecommerce entrepreneur yourself?`,

    `There are lots of different reasons to start an online shop.Maybe you’re planning a new business venture to 
  replace your sole source of income.Maybe the plan is to start a side hustle with room to grow into your full - 
  time source of income.Maybe you want to keep your day job, but use the ecommerce business as a hobby.Or maybe you 
  already run a brick - and - mortar business and ecommerce is just another expansion, like opening up a second store, 
  except online.`,

    `How to choose the best ecommerce platform for your online store`,

    `Shop around to find the best ecommerce platform for your online store.Illustration by OrangeCrush
As you learn about different ecommerce platforms and their capabilities, think about how you’ll 
need(or not need) these capabilities as you grow your business.Your store’s current and future needs will 
drive its design, as will the technical specs and limits of the platform you’ve chosen.To help you make the right call,
 we took a close look at ten of the best ecommerce platforms on the internet.`];
  constructor() { }

  ngOnInit(): void {
  }

}
