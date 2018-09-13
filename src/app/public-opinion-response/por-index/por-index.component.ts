import { Component, OnInit,ElementRef } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-por-index',
  templateUrl: './por-index.component.html',
  styleUrls: ['./por-index.component.css']
})
export class PorIndexComponent implements OnInit {
  private detaildata;
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
    this.detaildata="方案"+(Math.random()*10).toFixed(0)+"号"+"            "+"现场处置方案是针对具体的装置、场所或设施、岗位所制定的应急处置措施。现场处置方案应具体、简单、针对性强，现场处置方案应当包括危险性分析、可能发生的事故特征、应急处置程序、应急处置要点和注意事项等内容。现场处置方案应根据风险评估及危险性控制措施逐一编制，做到事故相关人员应知应会，熟练掌握，并通过应急演练，做到迅速反应、正确处置。"
  }
  clicktest(){
    this.router.navigate(["/PublicOpinionResponse/Status"])
  }

}
