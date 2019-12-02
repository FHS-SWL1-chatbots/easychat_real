import { Component, Input, ViewChild } from '@angular/core';
import { ChatHistoryComponent } from './chat-history/chat-history.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(ChatHistoryComponent, {static:false})
  private chatHistory: ChatHistoryComponent;

  public recieveMsg($event){
      this.chatHistory.saveMsg($event);
      
  }
  title = 'easychat';
}
