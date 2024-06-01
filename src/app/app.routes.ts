import { Routes } from '@angular/router';
import { WebScrapingInegiComponent } from './views/web-scraping-inegi/web-scraping-inegi.component';
import { HomeComponent } from './views/home/home.component';

export const routes: Routes = [
    // { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '', component: HomeComponent },
    { path: 'web-scraping-inegi', component: WebScrapingInegiComponent }
    // { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
    // { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
    // { path: 'contact', loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule) },
    // { path: '**', redirectTo: 'home', pathMatch: 'full' },
];
