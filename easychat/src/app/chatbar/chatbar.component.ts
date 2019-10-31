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

  chatText:string = '';
  postings = '';
  newline = "\n";

 

  get chatMessage(): string {
    return this.chatText;
  }

  @Output()
  chatMessageChange = new EventEmitter<string>();

  @Input()
  set chatMessage(value) {
    this.chatText = value;
    this.chatMessageChange.emit(this.chatText);
  }

  mirror_text() {
    // console.log("typed \n");
    // Diese Funktion scheint es nicht zu brauchen. Das Spiegeln macht ngModel selbst
  }

  sendChat() {
    this.postings=this.postings+this.chatText+this.newline;
    alert('Nachricht erfolgreich versendet! '+this.chatMessage);
    this.chatMessage = this.postings;
    this.chatText = ''; // Hat keine Wirkung mehr
  }
}