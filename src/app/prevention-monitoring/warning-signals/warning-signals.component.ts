import { Component, OnInit } from '@angular/core';
import {  trigger,  state,  style,  animate,  transition} from '@angular/animations';

@Component({
  selector: 'app-warning-signals',
  templateUrl: './warning-signals.component.html',
  styleUrls: ['./warning-signals.component.css'],
  animations: [
    trigger('flyInOut', [
      state('in', style({transform: 'translateY(0)', opacity: 1})),
      state('out', style({transform: 'translateY(0)', opacity: 0})),
      transition('out => in', [
        style({transform: 'translateY(100%)'}),
        animate(200)
      ]),
      transition('in => out', [
        animate(200, style({transform: 'translateY(-100%)'}))
      ])
    ])
  ]
})
export class WarningSignalsComponent implements OnInit {
  private num = [
    {name: 'num1', state: 'in', value: 1},
    {name: 'num2', state: 'in', value: 1},
    {name: 'num3', state: 'in', value: 0},
    {name: 'num4', state: 'in', value: 1},
  ];

click(): any {
  if (this.num[3].value === 9) {
    if (this.num[2].value === 9) {
      if (this.num[1].value === 9) {            // 后三位都是9
        for (let i = 0; i < 4; i++) {
          this.num [i].state = 'void';
        }
        for (let i = 0; i < 3; i++) {
          this.num [i + 1].value = 0;
        }
        this.num[0].value += 1;
        for (let i = 0; i < 4; i++) {
          this.num [i].state = '*';
        }
      } else {                                    // 百位不是9
        for (let i = 0; i < 3; i++) {
          this.num [i + 1].state = 'void';
        }
        setTimeout(() => {
          this.num[2].value = 0;
          this.num[3].value = 0;
          this.num[1].value += 1;
          for (let i = 0; i < 3; i++) {
            this.num [i + 1].state = '*';
          }
        }, 500);
      }
    } else {                                      // 十位不是9
      this.num[2].state = 'out';
      this.num[3].state = 'out';
      setTimeout(() => {
        this.num[2].value += 1;
        this.num[3].value = 0;
        this.num[2].state = '*';
        this.num[3].state = '*';
      }, 500);
    }
  } else {
    this.num[3].state = 'out';
    setTimeout(() => {
      this.num[3].value += 1;
      this.num[3].state = 'in'; }, 500);
  }
}


  constructor() { }

  ngOnInit() {
}
}
