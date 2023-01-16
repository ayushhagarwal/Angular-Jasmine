import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TruncateStringComponent } from './truncate-string/truncate-string.component';
import { MultiplyTestComponent } from './multiply-test/multiply-test.component';
import { FormsModule } from '@angular/forms';
import { BooleanTestComponent } from './boolean-test/boolean-test.component';

@NgModule({
  declarations: [
    AppComponent,
    TruncateStringComponent,
    MultiplyTestComponent,
    BooleanTestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
