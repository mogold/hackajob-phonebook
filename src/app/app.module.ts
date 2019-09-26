import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactTableComponent } from './contact-table/contact-table.component';
import { ContactEditComponent } from './contact-edit/contact-edit.component';
import { ContactAddComponent } from './contact-add/contact-add.component';
import { ContactDeleteComponent } from './contact-delete/contact-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactTableComponent,
    ContactEditComponent,
    ContactAddComponent,
    ContactDeleteComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
