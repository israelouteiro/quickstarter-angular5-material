import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatProgressSpinnerModule, MatDialogModule } from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatProgressSpinnerModule, MatDialogModule],
  exports: [MatButtonModule, MatProgressSpinnerModule, MatDialogModule],
})
export class MaterialModule { }