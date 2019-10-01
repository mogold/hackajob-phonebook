import { Injectable } from '@angular/core';
import { Contact } from './contact';
import { Observable, of, from } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  contacts: Contact[] = [];
  originalContacts: Contact[] = [];
  
  constructor(private http: HttpClient) { }

  getContacts(): Observable<Contact[]>{
    return of(this.contacts);
  }

  getContactsFromServer(){
    return new Promise((resolve, reject) => {
      this.http.get('http://www.mocky.io/v2/581335f71000004204abaf83').subscribe(contacts => {

        let contactIndex = 0;
      
        contacts.contacts.forEach((contact: Contact) => {

          const addressArray = contact.address.split(',');
          let line1;
          let cityAndPostalCode;
          let city;
          let postal_code;
          let country;
          
          if(addressArray.length == 3) {
            line1 = addressArray[0];
            cityAndPostalCode = addressArray[1].split(" ");
            city = cityAndPostalCode[1];
            postal_code = `${cityAndPostalCode[2]}  ${cityAndPostalCode[3] == undefined ? '' : cityAndPostalCode[3]}`
            country = addressArray[2];
          } else {
            line1 = `${addressArray[0]}, ${addressArray[1]}`;
            cityAndPostalCode = addressArray[2].split(" ");
            city = cityAndPostalCode[1];
            postal_code = `${cityAndPostalCode[2]}  ${cityAndPostalCode[3] == undefined ? '' : cityAndPostalCode[3]}`
            country = addressArray[3];
          }

          contact.index_city = city;
          contact.index_country = country;
          contact.index_post_code = postal_code;
          contact.index_line1 = line1;
          contact.index_full_string = `${contact.name.toLowerCase()} ${contact.address.toLowerCase()} ${contact.phone_number.toLowerCase()}`;

          contact.id = contactIndex;
          this.contacts.push(contact);
          contactIndex ++;
        });
        
        resolve(this.contacts);
      });
    });
  }

  filterContacts(term: string) {
    return new Promise((resolve, reject) => {
      if(this.originalContacts.length == 0) {
        this.contacts.forEach(contact => this.originalContacts.push(contact));
      }
      this.contacts = [];
  
      this.originalContacts.forEach(contact => {
        if(contact.index_full_string.includes(term.toLowerCase())) {
          this.contacts.push(contact);
        }
      });
      resolve();
    })  
  }

  addContact(contact: Contact) {
    contact.id = this.contacts.length ++;
    this.contacts[contact.id] = contact;
  } 

  editContact(contact: Contact) {
    this.contacts[contact.id] = contact;
  }

  deleteContact(id: number) {
    this.contacts.splice(id, 1);
  }
}
