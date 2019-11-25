import { Component, OnInit, Input } from '@angular/core';
import { PersonService} from '../person.service';

@Component({
  selector: 'app-chat-history',
  templateUrl: './chat-history.component.html',
  styleUrls: ['./chat-history.component.css']
})
export class ChatHistoryComponent implements OnInit {

  constructor(public pService: PersonService) {


  }
  ngOnInit() {
  }

  public username: String ="";
  public messages: Object[];
  public colorLi: Object;

  saveMsg(value: string){
    this.username = this.pService.nickname;
    if(this.pService.statusNickname==true){
      this.pService.createMessage(this.pService.nickname,"User "+this.pService.oldNickname+ " hat seinen Namen in "+this.pService.nickname+" geändert.")
      this.pService.statusNickname=false;
    }
    this.pService.createMessage(this.pService.nickname, value);
    this.messages = this.pService.messagesArray;
    this.colorLi = {"color": this.pService.colorName};
  }
  
}
