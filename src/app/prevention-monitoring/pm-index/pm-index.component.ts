import {Component, ElementRef, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {EventEmitterService} from "../../screen-display/large-screen/event-emitter.service";

@Component({
  selector: 'app-pm-index',
  templateUrl: './pm-index.component.html',
  styleUrls: ['./pm-index.component.css']
})
export class PmIndexComponent implements OnInit {

  private detaildata="预警是指在灾害或灾难以及其他需要提防的危险发生之前，根据以往的总结的规律或观测得到的可能性前兆，向相关部门发出紧急信号，报告危险情况，以避免危害在不知情或准备不足的的情况下发生，从而最大程度的减轻危害所造成的损失的行为。";
  constructor(private elRef:ElementRef,private router:Router) { }

  ngOnInit() {

  }
  SetActive(event, chatId: string) {

    var hElement: HTMLElement = this.elRef.nativeElement;
    //now you can simply get your elements with their class name
    var allAnchors = hElement.getElementsByClassName('list-group-item');
    //do something with selected elements
    [].forEach.call(allAnchors, function (item: HTMLElement) {
      item.setAttribute('class', 'list-group-item no-border');
    });
    //set active class for selected item
    event.currentTarget.setAttribute('class', 'list-group-item bg-blue-grey bg-lighten-5 border-right-primary border-right-2');
    this.detaildata="今年第23号台风“百里嘉”（热带风暴级）的中心今天（12日，下同）早晨5点钟位于广东省雷州市偏东方大约630公里的海面上，就是北纬20.5度、东经116.1度，中心附近最大风力有8级（20米/秒），中心最低气压为995百帕，七级风圈半径100-120公里。\n" +
      "\n"
  }
  clicktest(){
    this.router.navigate(["/PublicOpinionResponse/Status"])
  }

}
