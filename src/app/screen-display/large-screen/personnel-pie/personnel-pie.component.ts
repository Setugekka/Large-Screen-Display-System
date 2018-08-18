import { Component, OnInit } from '@angular/core';
import {ScreenDisplayService} from '../../screen-display.service';
import {EventEmitterService} from '../event-emitter.service';

@Component({
  selector: 'app-personnel-pie',
  templateUrl: './personnel-pie.component.html',
  styleUrls: ['./personnel-pie.component.css']
})
export class PersonnelPieComponent implements OnInit {
  private p_expert = 0;
  private p_repair = 0;
  private p_manager = 0;
  private pie_option = {
    tooltip: {
      trigger: 'item',
      formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    // legend: {
    //   orient: 'horizontal',
    //   data:['专家','抢修队伍','基干分队'],
    //   textStyle:{color:'#95ffff'}
    // },
    series: [
      {
        name:'人员分布',
        type:'pie',
        selectedMode: 'single',
        radius: [0, '50%'],

        label: {
          normal: {
            show: false
          }
        },
        labelLine: {
          normal: {
            show: false
          }
        },
        data:[
          {value:this.p_expert, name:'专家',itemStyle:{color:'#f6f701'}},
          {value:this.p_repair, name:'抢修队伍',itemStyle:{color:'#09c2f6'}},
          {value:this.p_manager, name:'基干分队',itemStyle:{color:'#f505a4'}}
        ]
      },
    ]
  };
  private current_city = null;
  constructor(private service: ScreenDisplayService, public emitService: EventEmitterService) { }

  ngOnInit() {
    this.service.CountExpert(this.current_city).then(r => {
      this.p_expert = r.data;
      this.service.CountRepair(this.current_city).then(m => {
        this.p_repair = m.data;
        this.service.CountManager(this.current_city).then(n => {
          this.p_manager = n.data;
          this.pie_option={
            tooltip: {
              trigger: 'item',
              formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            // legend: {
            //   orient: 'horizontal',
            //   data:['专家','抢修队伍','基干分队'],
            //   textStyle:{color:'#95ffff'}
            // },
            series: [
              {
                name:'人员分布',
                type:'pie',
                selectedMode: 'single',
                radius: [0, '50%'],

                label: {
                  normal: {
                    show: false
                  }
                },
                labelLine: {
                  normal: {
                    show: false
                  }
                },
                data:[
                  {value:this.p_expert, name:'专家',itemStyle:{color:'#f6f701'}},
                  {value:this.p_repair, name:'抢修队伍',itemStyle:{color:'#09c2f6'}},
                  {value:this.p_manager, name:'基干分队',itemStyle:{color:'#f505a4'}}
                ]
              },
            ]
          };
        });
      });
    });
    this.emitService.eventEmit.subscribe((value: any) => {
      // if(value == "userList") {
      //   // 这里就可以调取接口，刷新userList列表数据
      //   alert("收到了，我立马刷新列表");
    // }
      console.log("person pie 收到消息 内容为  " + value);
    });
  }

}
