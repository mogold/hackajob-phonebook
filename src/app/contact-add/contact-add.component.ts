import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef} from '@angular/material/dialog';
import { Contact } from '../contact';
import { ContactsService } from '../contacts.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-contact-add',
  templateUrl: './contact-add.component.html',
  styleUrls: ['./contact-add.component.css']
})
export class ContactAddComponent implements OnInit {

  constructor(public contactService: ContactsService, public dialogRef: MatDialogRef<ContactAddComponent>) { }
  
  contactAddForm = new FormGroup ({
    name: new FormControl(''),
    address: new FormControl(''),
    phone_number: new FormControl('')
  });

  ngOnInit() {
  }

  add() {

    let contact: Contact = {
      name: this.contactAddForm.controls.name.value,
      phone_number: this.contactAddForm.controls.phone_number.value,
      address: this.contactAddForm.controls.address.value,
      id: 0
    };

    this.contactService.addContact(contact);
    this.dialogRef.close();
  }

  close() {
    this.dialogRef.close();
  }

}
