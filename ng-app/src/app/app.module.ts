import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from './app.component';
import { CatListComponent } from './cat-list/cat-list.component';
import { CatSearchComponent } from './cat-search/cat-search.component';

let routes:Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full'},
  {path: 'list', component: CatListComponent },
  {path: 'search', component: CatSearchComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    CatListComponent,
    CatSearchComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
