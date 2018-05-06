import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

export const EMAIL_PATTERN = '^(([^<>()\\[\\]\\\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$';

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
  error: boolean;

  constructor() {
  }

  ngOnInit() {
    this.error = !this.hasValid(this.email);
  }

  hasValid(email) {
    return new RegExp(EMAIL_PATTERN, 'g').test(email);
  }
}
