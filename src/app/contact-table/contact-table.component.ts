import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { TableContactDataSource } from './table-contact-datasource';
import { Contact } from '../contact'; 
import { ContactsService } from '../contacts.service';

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

  displayedColumns = ['name', 'phone_number', 'address'];

  ngOnInit() {
    this.dataSource = new TableContactDataSource(this.contactSerivce);
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  constructor(public contactSerivce: ContactsService) { 
   
  }


}
