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

  public msgs: String[] = [];
  public benutzername: String[] = [];
  public username: String ="";
  public colorLi: Object;

  saveMsg(value: String){
    this.username = this.pService.nickname;
    if(this.pService.statusNickname==true){
      this.msgs.push("User "+this.pService.oldNickname+ " hat seinen Namen in "+this.pService.nickname+" geändert.")
      this.benutzername.push(this.pService.nickname);
      this.pService.statusNickname=false;
    }

    this.msgs.push(value);
    this.benutzername.push(this.pService.nickname);
    this.colorLi = {"color": this.pService.colorName};
  }
  
}
