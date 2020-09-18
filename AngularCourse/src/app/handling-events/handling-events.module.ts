import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BindingsComponent } from './bindings/bindings.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [BindingsComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    BindingsComponent
  ]
})
export class HandlingEventsModule { }
