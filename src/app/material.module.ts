import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule
       , MatProgressSpinnerModule
       , MatDialogModule
       , MatSidenavModule
       , MatToolbarModule
       , MatIconModule
       , MatListModule
       , MatCardModule
       , MatInputModule
       , MatSelectModule
       , MatDatepickerModule
       , MatNativeDateModule
       , MatButtonToggleModule
       , MatSlideToggleModule
} from '@angular/material';

@NgModule({
  imports: [ MatButtonModule
    , MatProgressSpinnerModule
    , MatDialogModule
    , MatSidenavModule
    , MatToolbarModule
    , MatIconModule
    , MatListModule
    , MatCardModule
    , MatInputModule
    , MatSelectModule
    , MatDatepickerModule
    , MatNativeDateModule
    , MatButtonToggleModule
    , MatSlideToggleModule
  ],

  exports: [ MatButtonModule
    , MatProgressSpinnerModule
    , MatDialogModule
    , MatSidenavModule
    , MatToolbarModule
    , MatIconModule
    , MatListModule
    , MatCardModule
    , MatInputModule
    , MatSelectModule
    , MatDatepickerModule
    , MatNativeDateModule
    , MatButtonToggleModule
    , MatSlideToggleModule
  ],
})
export class MaterialModule { }
