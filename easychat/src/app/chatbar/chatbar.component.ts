import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-chatbar',
  templateUrl: './chatbar.component.html',
  styleUrls: ['./chatbar.component.css']
})
export class ChatbarComponent implements OnInit {

  constructor() { }

  message: string='';

  get usermsg(): string{
    return this.message;
  }

  ngOnInit() {
  }

  @Output()
  usermsgchange = new EventEmitter<string>();
  @Input ()
  set usermsg(value) {
    this.message = value;
    this.usermsgchange.emit(this.message);
  }

}