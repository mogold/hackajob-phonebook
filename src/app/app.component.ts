import { Component, OnInit, ViewChild } from '@angular/core';
import { ContactsService } from './contacts.service';
import { MatDialog } from '@angular/material/dialog';
import { ContactAddComponent } from './contact-add/contact-add.component';
import { ContactTableComponent } from './contact-table/contact-table.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private contactService: ContactsService, public dialog: MatDialog,) {}
  isLoadingResults = true;

  @ViewChild(ContactTableComponent, {static: false}) contactTableComponent: ContactTableComponent;

  ngOnInit() {
    this.contactService.getContactsFromServer().then(contacts => {
      this.isLoadingResults = false;
    })
  }

  addContact() {
    const addDialog = this.dialog.open(ContactAddComponent);
    addDialog.afterClosed().subscribe( event => {
      this.contactTableComponent.refreshData();
    })
  }
}
