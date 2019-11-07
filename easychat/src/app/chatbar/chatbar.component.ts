import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PersonService} from '../person.service';

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

  @Output() msgEvent = new EventEmitter<string>();

  sendMsg(): void{
    this.pService.nickname = this.username;
    this.msgEvent.emit(this.chatMsg);
    alert("Your message :   " + this.chatMsg);
    this.chatMsg = '';
    this.chatMsg = this.chatMsg.trim();
    this.chatMsg.match("/\s/");
  }
}