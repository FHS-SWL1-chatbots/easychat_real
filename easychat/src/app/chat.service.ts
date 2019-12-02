import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Message } from './message';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  constructor(private http: HttpClient) { }

  actionUrl = 'https://group4easychatapi.herokuapp.com/api/history';

  public addToHistory(message: Message): Observable<Message> {
    const options = {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
    };

    return this.http.post<Message>(this.actionUrl, message, options);
  }

  public getHistory(): Observable<Array<Message>> {
    return this.http.get<Array<Message>>(this.actionUrl);
  }
}
