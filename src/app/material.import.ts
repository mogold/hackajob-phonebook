import { MatCardModule, MatCheckboxModule, MatListModule, MatIconModule, MatFormFieldModule, MatToolbarModule, MatButtonModule, MatInputModule, MatTooltipModule, MatStepperModule, MatAutocompleteModule, MatProgressSpinnerModule, MatMenuModule, MatDialogModule, MatBottomSheetModule} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [MatCardModule, MatCheckboxModule, MatListModule, MatIconModule, MatFormFieldModule, MatToolbarModule, MatButtonModule, MatInputModule, MatTooltipModule, MatStepperModule, MatAutocompleteModule, MatProgressSpinnerModule, MatMenuModule, MatDialogModule, MatBottomSheetModule],
    exports: [MatCardModule, MatCheckboxModule, MatListModule, MatIconModule, MatFormFieldModule, MatToolbarModule, MatButtonModule, MatInputModule, MatTooltipModule, MatStepperModule, MatAutocompleteModule, MatProgressSpinnerModule, MatMenuModule, MatDialogModule, MatBottomSheetModule],
})

export class MaterialImportsModule {}