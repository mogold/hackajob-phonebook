import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MaterialImportsModule } from './material.import';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactTableComponent } from './contact-table/contact-table.component';
import { ContactEditComponent } from './contact-edit/contact-edit.component';
import { ContactAddComponent } from './contact-add/contact-add.component';
import { ContactDeleteComponent } from './contact-delete/contact-delete.component';
import { DeleteErrorBottomSheetSheet } from './contact-delete/contact-delete.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [
    AppComponent,
    ContactTableComponent,
    ContactEditComponent,
    ContactAddComponent,
    ContactDeleteComponent,
    DeleteErrorBottomSheetSheet
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MaterialImportsModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    ContactEditComponent,
    ContactAddComponent,
    ContactDeleteComponent,
    DeleteErrorBottomSheetSheet
  ],
  providers: [
    ContactTableComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
