import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PersonService } from '../person.service';
import { ChatService } from '../chat.service';
import { Message } from '../message';

@Component({
  selector: 'app-chatbar',
  templateUrl: './chatbar.component.html',
  styleUrls: ['./chatbar.component.css']
})
export class ChatbarComponent implements OnInit {
  ngOnInit() {
  }
  constructor(public pService: PersonService, public chatService: ChatService) {


  }
  public chatMsg: string;
  public username: string;
  public inputColor: boolean = false;
  public alert:string;
  @Output() msgEvent = new EventEmitter<string>();

  sendMsg(): void {

    //"^([a-z]|[A-Z]|[ä,ö,ü,Ä,Ö,Ü,ç,è,é,à]|[0-9])#%&*$"
    if (this.username.match("^[a-zA-Z0-9]{2,12}[._-|&|%|\S]{1,2}")) {
      if(this.inputColor != true){
        this.pService.colorName = this.getRandomColor()
        this.inputColor = true;
      }
      if (this.username != this.pService.nickname) {
        if(this.pService.nickname != ""){
          this.pService.oldNickname = this.pService.nickname
          this.pService.statusNickname = true;
        }
        else{
          this.alert="ist dem Chatroom beigetreten.";
          this.chatService.addToHistory(new Message(this.username,this.alert, new Date(), this.pService.colorName));
        }
        this.pService.nickname = this.username;
      }
      this.msgEvent.emit(this.chatMsg);
      this.chatMsg = '';
    } else {
      alert("Dieser Nutzername ist nicht erlaubt! Sonderzeichen bitte mit normalen Buchstaben ergänzen. Spaces sind im Nutzernamen sind nicht");
    }

  }
  getRandomColor() {
    var color = Math.floor(0x1000000 * Math.random()).toString(16);
    return '#' + ('000000' + color).slice(-6);
  }
}