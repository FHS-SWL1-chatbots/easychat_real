import { Component, OnInit, Input } from '@angular/core';
import { PersonService } from '../person.service';
import { ChatService } from '../chat.service';
import { Message } from '../message';
import { Username } from '../username';
import { Observable, ObjectUnsubscribedError } from 'rxjs';

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

  public username: String = "";
  public messages: Message[];
  public msgs: Object[];
  public colorLi: Object;
  private alert: string;
  private historysize: Object = null;

  saveMsg(value: string) {
    this.username = this.pService.nickname;
    if (this.pService.statusNickname == true) {

      //Ändert den Nickname im Array
      console.log({ "usernameold": this.pService.oldNickname, "username": this.pService.nickname });
      this.chatService.changeUsername({ "usernameold": this.pService.oldNickname, "username": this.pService.nickname }).subscribe(
        (response: Object) => {
          console.log('REST server gave back ' + response);
        }
      )
      //Fügt die Nachricht Benutzername geändert hinzu. 
      this.alert = "User " + this.pService.oldNickname + " hat seinen Namen in " + this.pService.nickname + " geändert.";
      this.chatService.addToHistory(new Message(this.pService.nickname, this.alert, new Date(), this.pService.colorName)).subscribe(
        (response: Message) => {
          console.log('REST server gave back ' + response);
        }
      );
      this.pService.statusNickname = false;
    }
    this.chatService.addToHistory(new Message(this.pService.nickname, value, new Date(), this.pService.colorName)).subscribe(
      (response: Message) => {
        console.log('REST server gave back ' + response);
      }
    )
  }

  x = setInterval(() => {
    this.chatService.getHistoryLength().subscribe((response: Object) => {
      this.historysize = response;
    })

    if (JSON.stringify(this.historysize) === JSON.stringify(this.chatService.localhistorylength)) {
    }else{
      this.chatService.getHistory().subscribe((response: Message[]) => {
        this.messages = response;
        if (this.messages.length > 16) {
          this.messages.splice(0, this.messages.length - 15);
        }
      })
      this.chatService.localhistorylength = this.historysize;
    }

  }, 2000);
}
