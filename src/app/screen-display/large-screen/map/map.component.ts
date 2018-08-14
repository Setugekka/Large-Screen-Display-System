import { Component, OnInit } from '@angular/core';
import { EventEmitterService} from '../event-emitter.service';

declare var $: any;
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  constructor(public emitService: EventEmitterService) { }

  ngOnInit() {
    $.getScript('./assets/js/overview_test.js');
  }
  onclicktest(): void {
    console.log('test success');
    this.emitFun();
  }
  emitFun() {
    // 如果组件中，修改了某些数据，需要刷新用用户列表，用户列表在其他组件中，那么就可以发射一个字符串过去，那边接收到这个字符串比对一下，刷新列表。
    this.emitService.eventEmit.emit("沈阳");
  }

}
