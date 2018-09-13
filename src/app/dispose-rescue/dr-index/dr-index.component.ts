import { Component, OnInit } from '@angular/core';
import { Router }                 from '@angular/router';
import {EventEmitterService} from "../../screen-display/large-screen/event-emitter.service";
@Component({
  selector: 'app-dr-index',
  templateUrl: './dr-index.component.html',
  styleUrls: ['./dr-index.component.css']
})
export class DrIndexComponent implements OnInit {

  constructor(private router:Router,public emitService: EventEmitterService) { }
  private p_worker="100";
  private p_news="100";
  private p_expert="100";
  private p_manager="100";
  private p_repair="100";
  private condition=false;
  ngOnInit() {
    this.emitService.eventEmit.subscribe((value: any) => {
      this.p_expert= (Math.random()*100).toFixed(0)
      this.p_manager= (Math.random()*100).toFixed(0)
      this.p_repair= (Math.random()*100).toFixed(0)
      this.p_worker= (Math.random()*100).toFixed(0)
      this.p_news= (Math.random()*100).toFixed(0)
      if(value==""){
        this.condition=false
      }else {
        this.condition=true
      }

    });
  }

}
