import { Component, OnInit } from '@angular/core';
import { PersonService } from '../person.service';
import { ChatService } from '../chat.service';
import { Message } from '../message';
import { Username } from '../username';

@Component({
  selector: 'app-usernamehistory',
  templateUrl: './usernamehistory.component.html',
  styleUrls: ['./usernamehistory.component.css']
})
export class UsernamehistoryComponent implements OnInit {

  public usernames: Username[];
  constructor(public pService: PersonService, public chatService: ChatService) { }

  ngOnInit() {
  }
  x = setInterval(() => {
    this.chatService.getUsernames().subscribe((response: Username[]) => {
      this.usernames = response;
      if (this.usernames.length > 11) {
        this.usernames.splice(0, this.usernames.length - 10);
      }
    })
  }, 2000);
}
