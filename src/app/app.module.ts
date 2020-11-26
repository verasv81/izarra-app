import { BrowserModule, Meta } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { InputTextModule } from 'primeng/inputtext';
import { ListboxModule } from 'primeng/listbox';
import { HomeComponent } from './pages/home/home.component';
import { TopNavComponent } from './pages/shared/top-nav/top-nav.component';
import { HeroComponent } from './pages/home/hero/hero.component';
import { SearchComponent } from './pages/home/search/search.component';
import { ExperienceComponent } from './pages/home/experience/experience.component';
import { FeatureCardComponent } from './pages/home/feature-card/feature-card.component';
import { FooterComponent } from './pages/shared/footer/footer.component';
import { SpecialistsComponent } from './pages/home/specialists/specialists.component';
import { SpecialistsCardComponent } from './pages/home/specialists/specialists-card/specialists-card.component';
import { PartnersComponent } from './pages/shared/partners/partners.component';
import { FooterHeroComponent } from './pages/shared/footer-hero/footer-hero.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { AboutComponent } from './pages/about/about.component';
import { CatalogComponent } from './pages/services/catalog/catalog.component';
import { FilterComponent } from './pages/services/filter/filter.component';
import { BlogComponent } from './pages/bolg/blog.component';
import { BlogCardComponent } from './pages/bolg/blog-card/blog-card.component';
import { PaginationComponent } from './pages/shared/pagination/pagination.component';
import { ServiceCardComponent } from './pages/services/service-card/service-card.component';
import { ServiceSearchComponent } from './pages/services/service-search/service-search.component';
import { BlogPreviewComponent } from './pages/bolg/blog-2/blog-preview.component';
import { ArticleContentComponent } from './pages/bolg/blog-1/article-content.component';
import { ServiceDetailsComponent } from './pages/services/service-details/service-details.component';
import { ReviewCardComponent } from './pages/services/review-card/review-card.component';
import { SharedModule } from './shared/shared.module';
import { FilterMenuComponent } from './pages/services/filter-menu/filter-menu.component';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { BackComponent } from './pages/shared/back/back.component';
import { SearchPipe } from 'src/pipes/search.pipe';
import { CheckboxModule } from 'primeng/checkbox';
import { JoinComponent } from './pages/join/join.component';
import { DialogModule } from 'primeng/dialog';
import { FilterPipe } from 'src/pipes/filter.pipe';
import { NgxGoogleAnalyticsModule, NgxGoogleAnalyticsRouterModule } from 'ngx-google-analytics';

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
    ServiceDetailsComponent,
    ReviewCardComponent,
    FilterMenuComponent,
    BackComponent,
    SearchPipe,
    JoinComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    CardModule,
    ButtonModule,
    SharedModule.forRoot(),
    FormsModule,
    CarouselModule,
    OverlayPanelModule,
    BrowserAnimationsModule,
    InputTextModule,
    CheckboxModule,
    ListboxModule,
    DialogModule,
    NgxGoogleAnalyticsModule.forRoot('G-MP7Z0TZZXG'),
    NgxGoogleAnalyticsRouterModule,
    ReactiveFormsModule
  ],
  providers: [Meta],
  bootstrap: [AppComponent]
})
export class AppModule { }
