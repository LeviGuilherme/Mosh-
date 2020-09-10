import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FundamentalsModule } from './fundamentals/fundamentals.module';
import { HandlingEventsModule } from './handling-events/handling-events.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FundamentalsModule,
    HandlingEventsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
