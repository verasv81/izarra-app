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
import { FooterHeroComponent } from './home/footer-hero/footer-hero.component';

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
    FooterHeroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
