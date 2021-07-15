import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FeaturesComponent } from './features/features.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'}),
    BrowserModule,
    RouterModule.forRoot([
      {path: 'home', component: DashboardComponent},
      {path: 'features', component: FeaturesComponent},
      {path: 'blog', component: BlogComponent},
      {path: 'contact', component: ContactComponent},
      {path: '', redirectTo: '/home', pathMatch: 'full'},
      {path: '**', component: PageNotFoundComponent}
    ]),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
