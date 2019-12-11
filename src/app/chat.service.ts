import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Message } from './message';
import { Username} from './username';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  constructor(private http: HttpClient) { }

  actionUrl = 'https://group4easychatapi.herokuapp.com/api/history';
  actionUrlUsername = 'https://group4easychatapi.herokuapp.com/api/usernames';
  private localHistoryLength: Object;

  public get localhistorylength(): Object{
    return this.localHistoryLength;
  }
  public set localhistorylength(value: Object){
    this.localHistoryLength = value;
  }

  public addToHistory(message: Message): Observable<Message> {
    const options = {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
    };

    return this.http.post<Message>(this.actionUrl, message, options);
  }
  public getHistory(): Observable<Array<Message>> {
    return this.http.get<Array<Message>>(this.actionUrl);
  }
  public addUsername(username: Username): Observable<Username> {
    const options = {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
    };
    return this.http.post<Username>(this.actionUrlUsername, username, options);
  }
  public changeUsername(changeusername: Object): Observable<Object> {
    const options = {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
    };
    return this.http.post<Object>('https://group4easychatapi.herokuapp.com/api/changeusername', changeusername, options );
  }
  public getUsernames(): Observable<Array<Username>> {
    return this.http.get<Array<Username>>(this.actionUrlUsername);
  }
  public getHistoryLength(): Observable<Object>{
    return this.http.get<Object>('https://group4easychatapi.herokuapp.com/api/historylength');
  }
}
