import { Component, OnInit, Input } from '@angular/core';
import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-chatbar',
  templateUrl: './chatbar.component.html',
  styleUrls: ['./chatbar.component.css']
})
export class ChatbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Output()
  usermsgchange = new EventEmitter<string>();
  @Input ()
  usermsg: string;

}