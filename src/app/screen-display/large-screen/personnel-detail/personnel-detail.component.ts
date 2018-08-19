import { Component, OnInit } from '@angular/core';
import {ScreenDisplayService} from '../../screen-display.service';
import {EventEmitterService} from "../event-emitter.service";

declare var echarts: any;
@Component({
  selector: 'app-personnel-detail',
  templateUrl: './personnel-detail.component.html',
  styleUrls: ['./personnel-detail.component.css']
})
export class PersonnelDetailComponent implements OnInit {
  private p_expert = 0;
  private p_repair = 0;
  private p_manager = 0;
  private current_city = null;
  private baroption={};
  constructor(private service: ScreenDisplayService,public emitService: EventEmitterService) { }

  ngOnInit() {
    this.emitService.eventEmit.subscribe((value: any) => {
      // if(value == "userList") {
      //   // 这里就可以调取接口，刷新userList列表数据
      //   alert("收到了，我立马刷新列表");
      // }
      this.current_city=value;
      this.service.CountExpert(this.current_city).then(r => {
        this.p_expert = r.data;
        this.service.CountRepair(this.current_city).then(r => {
          this.p_repair = r.data;
          this.service.CountManager(this.current_city).then(r => {
            this.p_manager = r.data;
            this.baroption={
              tooltip: {
                trigger: 'axis',
                axisPointer: {
                  type: 'shadow'
                }
              },
              grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
              },
              xAxis: {
                type: 'value',
                boundaryGap: [0, 0.01],
                nameTextStyle:{color:'#95ffff'},
                axisLabel:{color:'#95ffff'},
                splitLine: {
                  show: true,
                  lineStyle: {
                    color: '#95ffff'
                  }
                },
                axisLine: {
                  lineStyle: {
                    color: '#95ffff'
                  }
                },
              },
              yAxis: {
                type: 'category',
                nameTextStyle:{color:'#95ffff'},
                axisLabel:{color:'#95ffff'},
                axisLine: {
                  lineStyle: {
                    color: '#95ffff'
                  }
                },
                data: ['应急专家队伍','应急抢修队伍','应急基干分队']
              },
              series: [
                {
                  type: 'bar',
                  label: {
                    normal: {
                      show: true,
                      position: 'right',
                      color:'#95ffff'
                    }
                  },
                  itemStyle: {
                    normal: {
                      barBorderRadius: 5,
                      color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                          {offset: 0, color: '#14c8d4'},
                          {offset: 1, color: '#43eec6'}
                        ]
                      )
                    },
                    emphasis: {
                      color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                          {offset: 0, color: '#43eec6'},
                          {offset: 0.7, color: '#13c9d5'},
                          {offset: 1, color: '#14c8d4'}
                        ]
                      )
                    }
                  },
                  data: [this.p_expert, this.p_repair, this.p_manager]
                }
              ]
            };
          });
        });
      });
    });
    this.service.CountExpert(this.current_city).then(r => {
      this.p_expert = r.data;
      this.service.CountRepair(this.current_city).then(r => {
        this.p_repair = r.data;
        this.service.CountManager(this.current_city).then(r => {
          this.p_manager = r.data;
          this.baroption={
            tooltip: {
              trigger: 'axis',
              axisPointer: {
                type: 'shadow'
              }
            },
            grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
            },
            xAxis: {
              type: 'value',
              boundaryGap: [0, 0.01],
              nameTextStyle:{color:'#95ffff'},
              axisLabel:{color:'#95ffff'},
              splitLine: {
                show: true,
                lineStyle: {
                  color: '#95ffff'
                }
              },
              axisLine: {
                lineStyle: {
                  color: '#95ffff'
                }
              },
            },
            yAxis: {
              type: 'category',
              nameTextStyle:{color:'#95ffff'},
              axisLabel:{color:'#95ffff'},
              axisLine: {
                lineStyle: {
                  color: '#95ffff'
                }
              },
              data: ['应急专家队伍','应急抢修队伍','应急基干分队']
            },
            series: [
              {
                type: 'bar',
                itemStyle: {
                  normal: {
                    barBorderRadius: 5,
                    color: new echarts.graphic.LinearGradient(
                      0, 0, 0, 1,
                      [
                        {offset: 0, color: '#14c8d4'},
                        {offset: 1, color: '#43eec6'}
                      ]
                    )
                  },
                  emphasis: {
                    color: new echarts.graphic.LinearGradient(
                      0, 0, 0, 1,
                      [
                        {offset: 0, color: '#43eec6'},
                        {offset: 0.7, color: '#13c9d5'},
                        {offset: 1, color: '#14c8d4'}
                      ]
                    )
                  }
                },
                label: {
                  normal: {
                    show: true,
                    position: 'right',
                    color:'#95ffff'
                  }
                },
                data: [this.p_expert, this.p_repair, this.p_manager]
              }
            ]
          };
        });
      });
    });


  }

}
