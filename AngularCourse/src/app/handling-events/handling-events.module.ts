import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BindingsComponent } from './bindings/bindings.component';
import { FormsModule } from '@angular/forms';
import { PipeComponent } from './pipe/pipe.component';
import { SummaryPipe } from './summary.pipe';

@NgModule({
  declarations: [BindingsComponent, PipeComponent, SummaryPipe],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    BindingsComponent,
    PipeComponent
  ]
})
export class HandlingEventsModule { }
