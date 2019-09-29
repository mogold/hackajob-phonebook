import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Contact } from '../contact';
import { ContactsService } from '../contacts.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.css']
})
export class ContactEditComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: Contact, public contactService: ContactsService, public dialogRef: MatDialogRef<ContactEditComponent>) { }
  
  contactUpdateForm = new FormGroup ({
    name: new FormControl(this.data.name),
    address: new FormControl(this.data.address),
    phone_number: new FormControl(this.data.phone_number)
  });

  ngOnInit() {
  }

  update() {

    let contact: Contact = {
      name: this.contactUpdateForm.controls.name.value,
      phone_number: this.contactUpdateForm.controls.phone_number.value,
      address: this.contactUpdateForm.controls.address.value,
      id: this.data.id
    };

    this.contactService.editContact(contact);
    this.dialogRef.close();
  }

  close() {
    this.dialogRef.close();
  }

}
