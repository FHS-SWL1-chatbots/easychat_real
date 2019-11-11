import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor() { }

  private myNickname: string = '';
  private nicknameColor: string = '';


  public get nickname(): string{
    return this.myNickname;
  }
  public set nickname(value: string){
    this.myNickname = value;
  }
  public get color(): string{
    return this.nicknameColor;
  }
  public set color(value: string){
    this.nicknameColor = value;
  }

}
