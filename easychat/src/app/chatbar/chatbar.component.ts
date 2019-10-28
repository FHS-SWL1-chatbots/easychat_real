import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chatbar',
  templateUrl: './chatbar.component.html',
  styleUrls: ['./chatbar.component.css']
})
export class ChatbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
@Input ()
usermsg: string;


