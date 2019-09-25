import { Injectable } from '@angular/core';
import { Contact } from './contact';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {


  contacts: Contact[] = [];

  constructor(private http: HttpClient) { }

  getContacts()  {
    this.http.get<Contact[]>('http://www.mocky.io/v2/581335f71000004204abaf83').subscribe(contacts => {
      contacts.map(contact => this.contacts.push(contact));
    });
    return this.contacts;
  }

  editContact(contact: Contact) {
    this.contacts.
  }

  deleteContact(phone_number: string) {

  }
}
