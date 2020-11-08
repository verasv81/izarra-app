import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { HeroComponent } from './home/hero/hero.component';
import { SearchComponent } from './home/search/search.component';
import { ExperienceComponent } from './home/experience/experience.component';
import { FeatureCardComponent } from './home/feature-card/feature-card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './footer/footer.component';
import { SpecialistsComponent } from './home/specialists/specialists.component';
import { SpecialistsCardComponent } from './home/specialists/specialists-card/specialists-card.component';
import { PartnersComponent } from './home/partners/partners.component';
import { FooterHeroComponent } from './footer-hero/footer-hero.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AboutComponent } from './about/about.component';
import { CatalogComponent } from './catalog/catalog.component';
import { FilterComponent } from './filter/filter.component';
import { AccordionModule } from 'primeng/accordion';
import { BlogComponent } from './blog/blog.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { BlogCardComponent } from './blog/blog-card/blog-card.component';
import { PaginationComponent } from './pagination/pagination.component';
import { ServiceCardComponent } from './service-card/service-card.component';
import { ServiceSearchComponent } from './service-search/service-search.component';
import { BlogPreviewComponent } from './blog-preview/blog-preview.component';
import { ArticleContentComponent } from './article-content/article-content.component';
import { ServiceDetailsComponent } from './service-details/service-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopNavComponent,
    HeroComponent,
    SearchComponent,
    ExperienceComponent,
    FeatureCardComponent,
    FooterComponent,
    SpecialistsComponent,
    SpecialistsCardComponent,
    PartnersComponent,
    FooterHeroComponent,
    ContactsComponent,
    AboutComponent,
    CatalogComponent,
    FilterComponent,
    BlogComponent,
    BlogCardComponent,
    PaginationComponent,
    ServiceCardComponent,
    ServiceSearchComponent,
    BlogPreviewComponent,
    ArticleContentComponent,
    ServiceDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    AccordionModule,
    CardModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
