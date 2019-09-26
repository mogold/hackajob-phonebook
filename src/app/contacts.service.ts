import { Injectable } from '@angular/core';
import { Contact } from './contact';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  contacts: Contact[];

  constructor(private http: HttpClient) { }

  getContacts(): Observable<Contact[]>{
    return this.http.get<Contact[]>('http://www.mocky.io/v2/581335f71000004204abaf83');
  }

  editContact(contact: Contact) {
    //const contactIndex = JSON.parse(localStorage.getItem(this.localStorageKey)).map();
  }

  deleteContact(phone_number: string) {

  }
}
