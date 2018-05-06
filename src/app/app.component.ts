import {Component} from '@angular/core';
import {functions} from '../helpers/functions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private emails: Array<string> = [];
  public title = 'app';

  emailsOnChange(event: any) {
    console.log('email on change !!', event);
  }

  addRandomEmail() {
    if (this.emails.length) {
      const index = functions.randomInteger(0, this.emails.length - 1);
      this.emails.push(this.emails[index]);
    }
  }

  alertEmailCount() {
    alert(`emails count = ${this.emails.length}`);
  }
}
