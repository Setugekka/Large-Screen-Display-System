import {Component, Input, OnInit} from '@angular/core';
@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})

export class MessageComponent  implements  OnInit {
  @Input() data;
  @Input() head;
  @Input() click;
  constructor() {
  }
  ngOnInit(): void {
  }
  edit() {
    this.click = false;
  }

}
