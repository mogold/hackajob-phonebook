import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Contact } from '../contact';
import { ContactsService } from '../contacts.service';
import { FormGroup, FormControl } from '@angular/forms';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-contact-delete',
  templateUrl: './contact-delete.component.html',
  styleUrls: ['./contact-delete.component.css']
})
export class ContactDeleteComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: Contact, public contactService: ContactsService, public dialogRef: MatDialogRef<ContactDeleteComponent>, public bottomSheet: MatBottomSheet) { }
  
  contactDeleteForm = new FormGroup ({
    name: new FormControl('')
  });

  ngOnInit() {
  }

  delete() {
    if(this.contactDeleteForm.controls.name.value == this.data.name) {
      this.contactService.deleteContact(this.data.id);
      this.dialogRef.close();
    } else {
      this.bottomSheet.open(DeleteErrorBottomSheetSheet);
    }
  }

  close() {
    this.dialogRef.close();
  }

}

@Component({
  selector: 'delete-error-bottom-sheet',
  templateUrl: 'delete-error-bottom-sheet.html',
})
export class DeleteErrorBottomSheetSheet {
  constructor(private _bottomSheetRef: MatBottomSheetRef<DeleteErrorBottomSheetSheet>) {}
}
