/*
 MIT License

 Copyright (c) 2019 Temainfo Software

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:
 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.
 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.
 */
import {
  Component, AfterViewInit, Output, Input, EventEmitter, ViewChild, ElementRef, OnDestroy, SimpleChanges, OnChanges,
  LOCALE_ID
} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ChatContact } from '../interfaces/chat-contact.interface';
import { ChatMessage } from '../interfaces/chat-message.interface';
import { Subscription } from 'rxjs';
import { ChatStatus } from '../interfaces/chat-status.interface';
import { ChatService } from '../services/chat.service';
import { message } from '../../input/core/validate';
import { ReverseFormatDate } from '../../core/helper/reverseformatdate';
import { DatePipe } from '@angular/common';

@Component( {
  selector: 'tl-chat-content',
  templateUrl: './chat-content.html',
  styleUrls: [ './chat-content.scss' ],
} )
export class TlChatContent implements AfterViewInit, OnDestroy, OnChanges {

  @Input() maxHeight = '450px';

  @Input() partner: ChatContact;

  @Input() user: ChatContact;

  @Input() messages: ChatMessage[] = [];

  @Input() chatStatus: ChatStatus = {
    busy: '#ffc019',
    online: '#66cc99',
    offline: '#ff3100'
  };

  @Output() message: EventEmitter<{ value: string, time: Date }> = new EventEmitter();

  @ViewChild('input') input: ElementRef;

  @ViewChild('messageContent') messageContent: ElementRef;

  private opened = false;

  public control = new FormControl(null, Validators.required);

  public groupMessages = [];

  public datePipe = new DatePipe('en-US');

  private subscription = new Subscription();

  constructor() {
    this.opened = true;
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.setViewedMessages();
      this.setInputFocus();
    });
  }

  setViewedMessages() {
    this.messages.forEach((item: ChatMessage, index, array) => item.viewed = true );
  }

  filterMessages() {
    this.messages = this.messages.filter((item: ChatMessage, index, array) =>
      (item.from.id === this.user.id) && (item.to.id === this.partner.id) ||
      (item.from.id === this.partner.id) && (item.to.id === this.user.id)
    );
    this.sortMessages();
    this.handleGroupMessages();
    this.setScrollBottom();
  }

  currentDate( date ) {
    const yesterday = new Date(new Date().setDate((new Date().getDate() - 1)));
    if ( this.getDate(date) === this.getDate() ) {
      return 'HOJE';
    } else if ( (this.getDate(yesterday) === this.getDate(date)) ) {
      return 'ONTEM';
    } else {
       return this.datePipe.transform( new Date(date), 'longDate' );
    }
  }

  getDate( date = new Date() ) {
    const newDate = new Date( date );
    return new Date(newDate.getFullYear(), newDate.getMonth(), newDate.getDate(), 0, 0, 0, 0).getTime();
  }

  setScrollBottom() {
    setTimeout(() => {
      this.messageContent.nativeElement.scrollTop =
        (this.messageContent.nativeElement.scrollHeight - this.messageContent.nativeElement.clientHeight);
    });
  }

  setInputFocus() {
    this.input.nativeElement.focus();
  }

  sendMessage() {
    if (this.control.value) {
      this.message.emit({ value: this.control.value, time: new Date() });
      this.control.setValue(null);
    }
  }

  handleGroupMessages() {
    this.groupMessages = [];
    this.messages.forEach((value) => {
      if ( !this.hasDateGroup( value.time ) ) {
        this.groupMessages.push({
          date: this.formatDate( value.time ),
          messages: [value]
        });
      } else {
        const index = this.findIndexByDate( this.formatDate( value.time ) );
        console.log('index', index);
        this.groupMessages[index].messages = [ ...this.groupMessages[index].messages, value ];
      }
    });
    console.log('messages handle', this.groupMessages);

  }

  sortMessages() {
    this.messages = this.messages.sort((a, b) => {
      return new Date(a.time).getTime() - new Date(b.time).getTime();
    });
  }

  findIndexByDate( date: number ) {
    return this.groupMessages.findIndex((value, index, obj) => value.date === date);
  }

  formatDate( date: Date ) {
    return new Date( date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0, 0).getTime();
  }

  hasDateGroup( date: Date) {
    if (this.groupMessages.length === 0) {
      return false;
    }
    return this.groupMessages.filter((value, index, array) =>
      this.formatDate( new Date(value.date)) === this.formatDate(date)).length > 0;
  }

  ngOnChanges( { messages }: SimpleChanges ) {
    if (messages && messages['currentValue'].length > 0) {
      console.log('messages', messages);
      this.filterMessages();

    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}

