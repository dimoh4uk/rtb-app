import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-emails-editor',
  templateUrl: './emails-editor.component.html',
  styleUrls: ['./emails-editor.component.scss']
})
export class EmailsEditorComponent implements OnInit {
  @Input()
  public emails: Array<string>;
  @Output()
  public changes: EventEmitter<any> = new EventEmitter();
  private _currentEmail: string;

  private isPossibleRemove = true;

  constructor() {
  }

  ngOnInit() {
  }

  get currentEmail(): string {
    return this._currentEmail;
  }

  set currentEmail(value: string) {
    const char = value && value.charCodeAt(value.length - 1);
    this.isPossibleRemove = false;
    if (value.length && char === 44) {
      this.addEmail();
      return;
    }
    this._currentEmail = value.replace(/\s/g, '');
  }

  remove(email) {
    const index = this.emails.indexOf(email);
    index >= 0 && this.emails.splice(index, 1);
  }

  keyUp(event) {
    if (event.keyCode === 13) {
      this.addEmail();
      return;
    }
    if (event.keyCode === 8 && this.isPossibleRemove) {
      !this.currentEmail.length && this.emails.pop();
    } else {
      this.isPossibleRemove = true;
    }
  }

  pasteEmail() {
    setTimeout(() => this.addEmail(), 0);
  }

  pushEmail() {
    this.addEmail();
  }

  private addEmail() {
    this.currentEmail && this.emails.push(this.replaceEmail()) && (this.isPossibleRemove = true);
  }

  private replaceEmail(): string {
    const tmp: string = this._currentEmail;
    this._currentEmail = '';
    return tmp;
  }

  setFocus(event, input) {
    const target = event.target;
    if (target.classList.contains('scroll-block') || target.classList.contains('email-editor-body')) {
      input.focus();
    }
  }
}
