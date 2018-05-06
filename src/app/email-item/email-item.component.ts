import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

export const EMAIL_PATTERN = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g;

@Component({
  selector: 'app-email-item',
  templateUrl: './email-item.component.html',
  styleUrls: ['./email-item.component.scss']
})
export class EmailItemComponent implements OnInit {
  @Input()
  email: string;
  @Output()
  remove: EventEmitter<string> = new EventEmitter();
  valid: boolean;

  constructor() {
  }

  ngOnInit() {
    this.valid = this.hasValid(this.email);
  }

  hasValid(email) {
    return EMAIL_PATTERN.test(email);
  }
}
