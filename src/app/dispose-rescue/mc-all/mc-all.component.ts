import { Component, OnInit } from '@angular/core';
import {EventEmitterService} from '../../screen-display/large-screen/event-emitter.service';
import { Http } from '@angular/http';
import { Urls} from '../../shared/model/model.url';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
declare var echarts: any;

@Component({
  selector: 'app-mc-all',
  templateUrl: './mc-all.component.html',
  styleUrls: ['./mc-all.component.css']
})
export class McAllComponent implements OnInit {
  private bar_option: any;
  private current_city = null;
  private  urls = Urls;
  GetAllCityManager():  any {
    const data = this.http.get(this.urls.GetAllCityManager)
      .toPromise()
      .then(response => response.json());
    return data;
  }
  constructor(public emitService: EventEmitterService, private http: Http, private modalService: NgbModal) { }

  ngOnInit() {
    this.GetAllCityManager().then(r => {
      const data = r;
      this.bar_option = {
        tooltip : {
          trigger: 'axis',
          axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
          },
          formatter: function (params) {
            return params[0]['name'] + '市：' + '<br/>'  + params[0]['value'];
          }
        },
        // grid: {left: '20%'},
        xAxis: {
          type : 'category',
          splitLine: {show: false},
          data : data.city_list,
          nameTextStyle: {color: '#009DA0'},
          axisLabel: {
            color: '#009DA0',
            interval: 0
          },
          axisLine: {
            lineStyle: {
              color: '#009DA0'
            }
          },

        },
        yAxis: {
          name: '市基干队伍人数',
          type : 'value',
          nameTextStyle: {color: '#009DA0'},
          axisLabel: {
            color: '#009DA0',
          },
          splitLine: {
            show: false,
            lineStyle: {
              color: '#009DA0'
            }
          },
          axisLine: {
            lineStyle: {
              color: '#009DA0'
            }
          },
        },
        series: [
          {
            name: '人数',
            type: 'bar',
            stack: '总量',
            label: {
              normal: {
                show: false,
                position: 'top',
                color: '#009DA0'
              }
            },
            // barGap: 0.1,
            // barCategoryGap: 0.01,
            itemStyle: {
              normal: {
                color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [{
                    offset: 0,
                    color: '#00d386' // 0% 处的颜色
                  }, {
                    offset: 1,
                    color: '#0076fc' // 100% 处的颜色
                  }],
                  globalCoord: false // 缺省为 false
                },
                barBorderRadius: 10,
              }
            },
            barWidth: 20,
            data: data.value_list,
          }
        ]
      };
    });
  }

}
