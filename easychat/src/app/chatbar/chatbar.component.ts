import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-chatbar',
  templateUrl: './chatbar.component.html',
  styleUrls: ['./chatbar.component.css']
})
export class ChatbarComponent implements OnInit {
  ngOnInit() {
  }
  constructor(public pService: PersonService) {


  }
  public chatMsg: string;
  public username: string;
  public inputDisabled: boolean = false;

  @Output() msgEvent = new EventEmitter<string>();

  sendMsg(): void {

    //"^([a-z]|[A-Z]|[ä,ö,ü,Ä,Ö,Ü,ç,è,é,à]|[0-9])#%&*$"
    if (this.username.match("^[a-zA-Z0-9._\-]{3,12}$")) {
      if(this.inputDisabled != true){
        this.pService.colorName = this.getRandomColor()
      }
      if (this.username != null) {
        this.inputDisabled = true;
        this.pService.nickname = this.username;
      }
      this.msgEvent.emit(this.chatMsg);
      this.chatMsg = '';
      this.chatMsg = this.chatMsg.trim();
      this.chatMsg.match("/\s/");
    } else {
      alert("Dieser Nutzername ist nicht erlaubt!");
    }

  }
  getRandomColor() {
    var color = Math.floor(0x1000000 * Math.random()).toString(16);
    return '#' + ('000000' + color).slice(-6);
  }
}