import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { TableContactDataSource } from './table-contact-datasource';
import { Contact } from '../contact'; 
import { ContactsService } from '../contacts.service';
import { MatDialog } from '@angular/material/dialog';
import { ContactEditComponent } from '../contact-edit/contact-edit.component';
import { ContactDeleteComponent } from '../contact-delete/contact-delete.component';

@Component({
  selector: 'app-contact-table',
  templateUrl: './contact-table.component.html',
  styleUrls: ['./contact-table.component.css']
})
export class ContactTableComponent implements AfterViewInit, OnInit {
  
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatTable, {static: false}) table: MatTable<Contact>;
  dataSource: TableContactDataSource;

  displayedColumns = ['name', 'phone_number', 'addressLine1', 'postcode', 'city', 'country', 'actions'];

  ngOnInit() {
    this.dataSource = new TableContactDataSource(this.contactSerivce);
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  editContact(contact: Contact) {
    const editDialog = this.dialog.open(ContactEditComponent, {data: contact});
    editDialog.afterClosed().subscribe(result => {
      this.refreshData();
    })
  }

  deleteContact(contact: Contact) {
    const deleteDialog = this.dialog.open(ContactDeleteComponent, {data: contact});
    deleteDialog.afterClosed().subscribe(result => {
      this.refreshData();
    })
  }

  refreshData() {
    this.dataSource = new TableContactDataSource(this.contactSerivce);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  constructor(public contactSerivce: ContactsService, public dialog: MatDialog) {}


}
