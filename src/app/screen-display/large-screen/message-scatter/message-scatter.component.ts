import { Component, OnInit } from '@angular/core';
declare var echarts: any;
declare var Date: any;
@Component({
  selector: 'app-message-scatter',
  templateUrl: './message-scatter.component.html',
  styleUrls: ['./message-scatter.component.css']
})
export class MessageScatterComponent implements OnInit {

  private  option: any;
  private  data = [
    [ ['2018/08/19 10:38:08','鞍山',2,'鞍山','一般事件'],
      ['2018/08/19 12:38:08','本溪',2,'本溪','一般事件'],
      ['2018/08/19 16:18:18','沈阳',4,'沈阳','一般事件'],
      ['2018/08/19 19:18:18','大连',2,'大连','一般事件'],
      ['2018/08/20 9:18:18','抚顺',3,'抚顺','一般事件'],
      ['2018/08/20 02:38:08','葫芦岛',2,'葫芦岛','一般事件'],
      ['2018/08/20 04:38:08','锦州',2,'锦州','一般事件'],
      ['2018/08/19 18:18:18','朝阳',4,'朝阳','一般事件'],
      ['2018/08/19 19:18:18','阜新',2,'阜新','一般事件'],
      ['2018/08/20 9:18:18','盘锦',3,'盘锦','一般事件'],
    ],
    [ ['2018/08/19 10:00:00','沈阳',3,'沈阳','紧急事件'],
      ['2018/08/20 10:00:00','大连',4,'大连','紧急事件'],
      ['2018/08/20 01:18:18','辽阳',3,'辽阳','一般事件']

    ]
  ];

  constructor() { }

  ngOnInit() {
    this.option = {
      backgroundColor: new echarts.graphic.RadialGradient(0, 0, 0, [{
        offset: 0,
        color: '#f7f8fa'
      }, {
        offset: 1,
        color: '#cdd0d5'
      }]),
      title: {
        text: '紧急情况报告',
        textStyle: {
          color: 'white',
          fontSize: 20
        },
        x: 'center'
      },
      legend: {
        right: 10,
        data: ['紧急事件', '一般事件'],
        textStyle: {
          color: 'white'
        },
      },
      xAxis: {
        splitNumber: 24,
        type: 'time',
        // max: function() {
        //   const Dates = new Date();
        //   const Months: any = ( Dates.getMonth() + 1 ) < 10  ?  '0' + (Dates.getMonth() + 1) : ( Dates.getMonth() + 1);
        //   const Day: any = Dates.getDate() < 10 ? '0' + Dates.getDate() : Dates.getDate();
        //   const Hours = Dates.getHours() < 10 ? '0' + Dates.getHours() : Dates.getHours();
        //   console.log(Months + '-' + Day + '-' + Hours);
        //   return Months + '-' + Day + '-' + Hours;
        // },
        // min: function() {
        //   const Dates = new Date();
        //   const Months: any = ( Dates.getMonth() + 1 ) < 10  ?  '0' + (Dates.getMonth() + 1) : ( Dates.getMonth() + 1);
        //   const Day: any = Dates.getDate() < 10 ? '0' + (Dates.getDate() - 1) : (Dates.getDate() - 1);
        //   const Hours = Dates.getHours() < 10 ? '0' + (Dates.getHours() + 1) : (Dates.getHours() + 1);
        //   console.log(Day, Hours);
        //   return Months + '-' + Day + '-' + Hours;
        // },
        splitLine: {
          show: true,
          lineStyle: {
            color: '#034079',
          }
        },
        axisLine: {
          lineStyle: {
            color: '#034079'
          }
        },
      },
      yAxis: {
        type: 'category',
        data: ['沈阳','大连','鞍山','抚顺','本溪','丹东','锦州','营口','阜新','辽阳','盘锦','铁岭','朝阳','葫芦岛'],
        splitLine: {
          show: true,
          lineStyle: {
            color: '#034079'
          }
        },
        axisLine: {
          lineStyle: {
            color: '#034079'
          }
        },
        scale: true
      },
      series: [{
        name: '紧急事件',
        data: this.data[1],
        type: 'scatter',
        symbolSize: function (data) {
          return data[2] * 8;
        },
        label: {
          emphasis: {
            show: true,
            formatter: function (param) {
              return param.data[3];
            },
            position: 'top'
          }
        },
        itemStyle: {
          normal: {
            shadowBlur: 10,
            shadowColor: 'rgba(120, 36, 50, 0.5)',
            shadowOffsetY: 5,
            color: {
              type: 'radial',
              x: 0.5,
              y: 0.5,
              r: 0.5,
              colorStops: [{
                offset: 0,
                color: '#ae0876' // 0% 处的颜色
              }, {
                offset: 0.5,
                color: '#cd0a8b' // 50% 处的颜色
              }, {
                offset: 1,
                color: '#f505a4' // 100% 处的颜色
              }],
              globalCoord: false // 缺省为 false
            }
          }
        }
      }, {
        name: '一般事件',
        data: this.data[0],
        type: 'scatter',
        symbolSize: function (data) {
          return (data[2]) * 8;
        },
        label: {
          emphasis: {
            show: true,
            formatter: function (param) {
              return param.data[3];
            },
            position: 'top'
          }
        },
        itemStyle: {
          normal: {
            shadowBlur: 10,
            shadowColor: 'rgba(25, 100, 150, 0.5)',
            shadowOffsetY: 5,
            // color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
            //   offset: 0,
            //   color: 'rgb(129, 227, 238)'
            // }, {
            //   offset: 1,
            //   color: 'rgb(25, 183, 207)'
            // }])
            color: {
              type: 'radial',
              x: 0.5,
              y: 0.5,
              r: 0.5,
              colorStops: [{
                offset: 0,
                color: '#a7ac0e' // 0% 处的颜色
              }, {
                offset: 0.5,
                color: '#babc0c' // 50% 处的颜色
              }, {
                offset: 1,
                color: '#f6f701' // 100% 处的颜色
              }],
              globalCoord: false // 缺省为 false
            }
          }
        }
      }]
    };
  }

}
