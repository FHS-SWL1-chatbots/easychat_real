import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor() { }

  private myNickname: string = '';
  private myOldNickname: string = '';
  private statusNicknameChange: boolean = false;
  private nicknameColor: string = '';
  private messages: object[] =[];


  public get nickname(): string{
    return this.myNickname;
  }
  public set nickname(value: string){
    this.myNickname = value;
  }
  public get oldNickname(): string{
    return this.myOldNickname;
  }
  public set oldNickname(value: string){
    this.myOldNickname = value;
  }
  public get statusNickname(): boolean{
    return this.statusNicknameChange;
  }
  public set statusNickname(value: boolean){
    this.statusNicknameChange = value;
  }

  public get colorName(): string{
    return this.nicknameColor;
  }
  public set colorName(value: string){
    this.nicknameColor = value;
  }

  public get messagesArray(): object[]{
    return this.messages;
  }


  public createMessage(username: string, msg: string) {
      this.messages.push({
          "color": this.colorName,
          "username": username,
          "message": msg,
          "date":Math.floor(Date.now())
      });
      
  }
}
