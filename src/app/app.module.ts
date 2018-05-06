import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmailsEditorComponent } from './emails-editor/emails-editor.component';
import {FormsModule} from '@angular/forms';
import { EmailItemComponent } from './email-item/email-item.component';

@NgModule({
  declarations: [
    AppComponent,
    EmailsEditorComponent,
    EmailItemComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
