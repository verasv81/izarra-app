import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { BlogComponent } from './pages/bolg/blog.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { HomeComponent } from './pages/home/home.component';
import { ServiceDetailsComponent } from './pages/services/service-details/service-details.component';
import { CatalogComponent } from './pages/services/catalog/catalog.component';
import { JoinComponent } from './pages/join/join.component';
import { ArticleContentComponent } from './pages/bolg/blog-1/article-content.component';
import { BlogPreviewComponent } from './pages/bolg/blog-2/blog-preview.component';

const routes: Routes = [
  { path: 'contacts', component: ContactsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'catalog', component: CatalogComponent },
  { path: 'catalog/:id', component: ServiceDetailsComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'blog1', component: ArticleContentComponent },
  { path: 'blog2', component: BlogPreviewComponent },
  { path: 'join', component: JoinComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
