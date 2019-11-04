import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-chatbar',
  templateUrl: './chatbar.component.html',
  styleUrls: ['./chatbar.component.css']
})
export class ChatbarComponent implements OnInit {
  ngOnInit() {
  }
  constructor() { }
  public chatMsg: string;

  @Output() msgEvent = new EventEmitter<string>();

  sendMsg(): void{
    this.msgEvent.emit(this.chatMsg);
    alert("Your message :   " + this.chatMsg);
    this.chatMsg = '';
  }
}