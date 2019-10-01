import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef} from '@angular/material/dialog';
import { Contact } from '../contact';
import { ContactsService } from '../contacts.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-add',
  templateUrl: './contact-add.component.html',
  styleUrls: ['./contact-add.component.css']
})
export class ContactAddComponent implements OnInit {

  constructor(public contactService: ContactsService, public dialogRef: MatDialogRef<ContactAddComponent>) { }
  
  contactAddForm = new FormGroup ({
    name: new FormControl('', Validators.required),
    addressLine1: new FormControl('', Validators.required),
    postcode: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    country: new FormControl('', Validators.required),
    phone_number: new FormControl('', Validators.required)
  });

  ngOnInit() {
  }

  add() {
    let form = this.contactAddForm;

    let contact: Contact = {
      name: form.controls.name.value,
      phone_number: form.controls.phone_number.value,
      index_city: form.controls.city.value,
      index_line1: form.controls.addressLine1.value,
      index_country: form.controls.country.value,
      index_post_code: form.controls.postcode.value,
      address: `${form.controls.addressLine1.value}, ${form.controls.city.value} ${form.controls.postcode.value}, ${form.controls.country.value}`,
      index_full_string: `${form.controls.name.value} ${form.controls.phone_number.value} ${form.controls.addressLine1.value} ${form.controls.city.value} ${form.controls.postcode.value} ${form.controls.country.value}`,
      id: 0
    };

    this.contactService.addContact(contact);
    this.dialogRef.close();
  }

  close() {
    this.dialogRef.close();
  }

}
