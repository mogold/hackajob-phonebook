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
    addressLine1: new FormControl(this.data.index_line1),
    postcode: new FormControl(this.data.index_post_code),
    city: new FormControl(this.data.index_city),
    country: new FormControl(this.data.index_country),
    phone_number: new FormControl(this.data.phone_number)
  });

  ngOnInit() {
  }

  update() {

    let form = this.contactUpdateForm;

    let contact: Contact = {
      name: form.controls.name.value,
      phone_number: form.controls.phone_number.value,
      index_city: form.controls.city.value,
      index_line1: form.controls.addressLine1.value,
      index_country: form.controls.country.value,
      index_post_code: form.controls.postcode.value,
      address: `${form.controls.addressLine1.value}, ${form.controls.city.value} ${form.controls.postcode.value}, ${form.controls.country.value}`,
      id: this.data.id
    };

    this.contactService.editContact(contact);
    this.dialogRef.close();
  }

  close() {
    this.dialogRef.close();
  }

}
