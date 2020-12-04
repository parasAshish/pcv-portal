import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClarityModule, ClrIconModule } from '@clr/angular';
import '@clr/icons';
import '@clr/icons/shapes/all-shapes';

@NgModule({
  declarations: [
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    ClarityModule,
    CommonModule,
    ClrIconModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ClarityModule,
    ClrIconModule
  ]
})
export class SharedModule { }
