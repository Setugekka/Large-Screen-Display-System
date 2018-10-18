import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Urls} from '../../shared/model/model.url';
declare var echarts: any;

@Component({
  selector: 'app-mv-all',
  templateUrl: './mv-all.component.html',
  styleUrls: ['./mv-all.component.css']
})
export class MvAllComponent implements OnInit {

  private bar_option: any;
  private  urls = Urls;
  GetAllVillageManager():  any {
    const data = this.http.get(this.urls.GetAllVillageManager)
      .toPromise()
      .then(response => response.json());
    return data;
  }
  constructor(private http: Http) { }

  ngOnInit() {
    this.GetAllVillageManager().then(r => {
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
          name: '县基干队伍人数',
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
