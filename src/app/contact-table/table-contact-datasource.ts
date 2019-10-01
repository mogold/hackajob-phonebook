import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import { Contact } from '../contact';
import { ContactsService } from '../contacts.service';


export class TableContactDataSource extends DataSource<Contact> {
  data: Contact[];
  paginator: MatPaginator;
  sort: MatSort;

  constructor(public contactService: ContactsService) {
    super();
    this.contactService.getContacts().subscribe(contacts => this.data = contacts);
  }

  
  connect(): Observable<Contact[]> {
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  disconnect() {}
  
  private getPagedData(data: Contact[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  
  private getSortedData(data: Contact[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'phone_number': return compare(+a.phone_number, +b.phone_number, isAsc);
        case 'addressLine1': return compare(a.index_line1, b.index_line1, isAsc);
        case 'city': return compare(a.index_city, b.index_city, isAsc);
        case 'postcode': return compare(a.index_post_code, b.index_post_code, isAsc);
        case 'country': return compare(a.index_country, b.index_country, isAsc);
        default: return 0;
      }
    });
  }
}


function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
