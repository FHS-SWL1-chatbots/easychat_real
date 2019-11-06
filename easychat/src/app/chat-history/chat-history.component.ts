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
  public benutzername: String = "";

  saveMsg(value: String){
    this.msgs.push(value);
    this.benutzername = this.pService.nickname;
  }

  
  
}
