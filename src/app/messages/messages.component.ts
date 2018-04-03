import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  // Angular only binds to PUBLIC component properties
  constructor(public messageService: MessageService) { } // public because it will be binded to messages.component.html template

  ngOnInit() {
  }

}
