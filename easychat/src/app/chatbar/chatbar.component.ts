import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-chatbar',
  templateUrl: './chatbar.component.html',
  styleUrls: ['./chatbar.component.css']
})
export class ChatbarComponent implements OnInit {

  constructor() { }

  usermsg:string = '';
  postings = '';
  newline = "\n";

  ngOnInit() {
  }

  get chatMessage(): string{
    return this.usermsg;
  }
  @Output()
  chatMessageChange = new EventEmitter<string>();

  @Input ()
  set chatMessage(value) {
    this.usermsg = value;
    this.chatMessageChange.emit(this.usermsg);
  }
  
  sendMessage() {
      this.postings=this.postings+this.usermsg+this.newline;
      alert('Nachricht erfolgreich versendet! '+this.chatMessage);
      this.chatMessage = this.postings;
  }
}