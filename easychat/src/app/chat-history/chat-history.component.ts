import { Component, OnInit, Input } from '@angular/core';
import { PersonService} from '../person.service';
import { ChatService} from '../chat.service';
import { Message } from '../message';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-chat-history',
  templateUrl: './chat-history.component.html',
  styleUrls: ['./chat-history.component.css']
})
export class ChatHistoryComponent implements OnInit {

  constructor(public pService: PersonService, public chatService: ChatService) {


  }
  ngOnInit() {
  }

  public username: String ="";
  public messages: Message[];
  public msgs: Object[];
  public colorLi: Object;

  saveMsg(value: string){
    this.username = this.pService.nickname;
    if(this.pService.statusNickname==true){
      this.pService.createMessage(this.pService.nickname,"User "+this.pService.oldNickname+ " hat seinen Namen in "+this.pService.nickname+" geändert.")
      this.pService.statusNickname=false;
    }
    this.chatService.addToHistory(new Message(this.pService.nickname,value, new Date())).subscribe(
      (response:Message) => {
        console.log('REST server gave back ' + response);
      }
    )
    this.pService.createMessage(this.pService.nickname, value);
    console.log(this.chatService.getHistory());
    this.msgs = this.pService.messagesArray;
    this.chatService.getHistory().subscribe((response: Message[]) => {
      this.messages =response;
    });

    this.colorLi = {"color": this.pService.colorName};
  }
  
}
