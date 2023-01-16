import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TruncateStringComponent } from './truncate-string/truncate-string.component';

@NgModule({
  declarations: [
    AppComponent,
    TruncateStringComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
