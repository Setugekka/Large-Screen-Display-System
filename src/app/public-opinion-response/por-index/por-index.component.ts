import { Component, OnInit,ElementRef } from '@angular/core';
import {Router} from "@angular/router";
import {EventEmitterService} from "../../screen-display/large-screen/event-emitter.service";

@Component({
  selector: 'app-por-index',
  templateUrl: './por-index.component.html',
  styleUrls: ['./por-index.component.css']
})
export class PorIndexComponent implements OnInit {
  private detaildata=" 热点识别能力　可以根据转载量、评论数量、回复量、危机程度等参数，识别出给定时间段内的热门话题。\n" +
    "l 倾向性分析与统计　对信息的阐述的观点、主旨进行倾向性分析。以提供参考分析依据。分析的依据可根据信息的转载量、评论的回言信息时间密集度。来判别信息的发展倾向。\n" ;
  private a="辽阳电力公司";
  private b="李xx";
  private c="17210001";
  private d="2018年9月13日 09：10：48";
  private e="网上舆情的主题极为宽泛，话题的确定往往是自发、随意的。从舆情主体的范围来看，网民分布于社会各阶层和各个领域；从舆情的话题来看，涉及政治、经济、文化、军事、外交以及社会生活的各个方面";
  constructor(private elRef:ElementRef,private router:Router,public emitService: EventEmitterService) { }

  ngOnInit() {
    this.emitService.eventEmit.subscribe((value: any) => {
      // if(value == "userList") {
      //   // 这里就可以调取接口，刷新userList列表数据
      //   alert("收到了，我立马刷新列表");
      // }
      this.clicktest()
    });
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
    this.a="xxx电力公司"
    this.b="王xx"
    this.c="192168001"
    this.d="2018年9月1日 12：30：28"
    this.e="舆情是“舆论情况”的简称，是指在一定的社会空间内，围绕中介性社会事件的发生、发展和变化，作为主体的民众对作为客体的社会管理者、企业、个人及其他各类组织及其政治、社会、道德等方面的取向产生和持有的社会态度。"
    this.detaildata="方案"+(Math.random()*10).toFixed(0)+"号"+"            "+"现场处置方案是针对具体的装置、场所或设施、岗位所制定的应急处置措施。现场处置方案应具体、简单、针对性强，现场处置方案应当包括危险性分析、可能发生的事故特征、应急处置程序、应急处置要点和注意事项等内容。现场处置方案应根据风险评估及危险性控制措施逐一编制，做到事故相关人员应知应会，熟练掌握，并通过应急演练，做到迅速反应、正确处置。"
  }
  clicktest(){
    this.router.navigate(["/PublicOpinionResponse/Status"])
  }

}
