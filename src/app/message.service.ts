import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {
  messages: string[] =[];
  constructor() { }
  add(messageToAdd: string) :void {
    this.messages.push(messageToAdd)
  }

  clearMessages(){
    this.messages=[];
  }

}
