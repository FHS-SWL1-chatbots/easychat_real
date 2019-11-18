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
  private msgs: string[] = [];
  private benutzername: string[] = [];
  private dates: number[] = [];


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
  public get msgsArray(): string[]{
    return this.msgs;
  }
  public get usernameArray(): string[]{
    return this.benutzername;
  }
  public get datesArray(): number[]{
    return this.dates;
  }


  /**
   * name
   */
  public createMessage(username: string, msg: string) {
      this.msgs.push(msg);
      this.benutzername.push(username);
      this.dates.push(Math.floor(Date.now()));  
  }
}
