import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-chatbar',
  templateUrl: './chatbar.component.html',
  styleUrls: ['./chatbar.component.css']
})
export class ChatbarComponent implements OnInit {

  constructor() { }

  chatmessage:string = '';
  postings = '';
  newline = "\n";

  ngOnInit() {
  }

  get usermsg(): string{
    return this.chatmessage;
  }
  @Output()
  usermsgchange = new EventEmitter<string>();

  @Input ()
  set usermsg(value) {
    this.chatmessage = value;
    this.usermsgchange.emit(this.chatmessage);
  }
  
  sendMessage() {
      this.postings=this.postings+this.chatmessage+this.newline;
      alert('Nachricht erfolgreich versendet! '+this.usermsg);
      this.usermsg = this.postings;
  }
}