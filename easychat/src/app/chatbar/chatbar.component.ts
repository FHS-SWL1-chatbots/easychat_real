import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-chatbar',
  templateUrl: './chatbar.component.html',
  styleUrls: ['./chatbar.component.css']
})
export class ChatbarComponent implements OnInit {

  constructor() { }

  chatmassage:string = '';
  postings = '';
  newline = "\n";

  ngOnInit() {
  }

  get usermsg(): string{
    return this.chatmassage;
  }
  @Output()
  usermsgchange = new EventEmitter<string>();

  @Input ()
  set usermsg(value) {
    this.chatmassage = value;
    this.usermsgchange.emit(this.chatmassage);
  
  sendChat() {
      this.postings=this.postings+this.chatmassage+this.newline;
      alert('Nachricht erfolgreich versendet! '+this.usermsg);
      this.usermsg = this.postings;
  }
}}