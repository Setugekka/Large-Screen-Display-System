import { Component, OnInit } from '@angular/core';
declare var echarts: any;
@Component({
  selector: 'app-province-training',
  templateUrl: './province-training.component.html',
  styleUrls: ['./province-training.component.css']
})
export class ProvinceTrainingComponent implements OnInit {
  color = ['#fb734e', '#e32f46', '#94d96c', '#0bbcb7', '#1a9bfc', '#7049f0'];
  dataStyle = {
    normal: {
      label: {
        show: false
      },
      labelLine: {
        show: false
      },
      shadowBlur: 40,
      borderWidth: 10,
      shadowColor: 'rgba(0, 0, 0, 0)' // 边框阴影
    }
  };
  placeHolderStyle = {
    normal: {
      color: '#393d50',
      label: {
        show: false
      },
      labelLine: {
        show: false
      }
    },
    emphasis: {
      color: '#393d50'
    }
  };
  option: any;
  constructor() { }
  ngOnInit() {
    this.option = {
      backgroundColor: '#142058',
      title: {
        text: '计划上交情况',
        x: 'center',
        y: 'center',
        textStyle: {
          fontWeight: 'normal',
          fontSize: 24,
          color: '#fff',
        }
      },
      tooltip: {
        trigger: 'item',
        show: true,
        formatter: '{b} : <br/>{d}%',
        backgroundColor: 'rgba(0,0,0,0.7)', // 背景
        padding: [8, 10], // 内边距
        extraCssText: 'box-shadow: 0 0 3px rgba(255, 255, 255, 0.4);', // 添加阴影
      },
      legend: {
        orient: 'vertical',
        // icon: 'circle',
        left: 'left',
        top: '20',
        itemGap: 20,
        data: ['省级', '地市级', '区县级', '04', '05', '06'],
        textStyle: {
          color: '#fft'
        }
      },
      series: [{
        name: 'Line 1',
        type: 'pie',
        clockWise: false,
        radius: [186, 200],
        center: ['50%', '50%'],
        itemStyle: this.dataStyle,
        hoverAnimation: false,
        startAngle: 90,
        label: {
          borderRadius: '10',
        },
        data: [{
          value: 28,
          name: '区县级',
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: this.color[0]
              }, {
                offset: 1,
                color: this.color[1]
              }])
            }
          }
        },
          {
            value: 26,
            name: '',
            tooltip: {
              show: false
            },
            itemStyle: this.placeHolderStyle
          },
        ]
      },
        {
          name: 'Line 2',
          type: 'pie',
          clockWise: false,
          radius: [146, 160],
          center: ['50%', '50%'],
          itemStyle: this.dataStyle,
          hoverAnimation: false,
          startAngle: 90,
          data: [{
            value: 9,
            name: '地市级',
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: this.color[2]
                }, {
                  offset: 1,
                  color: this.color[3]
                }])
              }
            }
          },
            {
              value: 6,
              name: '',
              tooltip: {
                show: false
              },
              itemStyle: this.placeHolderStyle
            },
          ]
        },
        {
          name: 'Line 3',
          type: 'pie',
          clockWise: false,
          radius: [106, 120],
          center: ['50%', '50%'],
          itemStyle: this.dataStyle,
          hoverAnimation: false,
          startAngle: 90,
          data: [{
            value: 1,
            name: '省级',
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: this.color[4]
                }, {
                  offset: 1,
                  color: this.color[5]
                }]),
              }
            }
          },
            {
              value: 0,
              name: '',
              tooltip: {
                show: false
              },
              itemStyle: this.placeHolderStyle
            },
          ]
        }
      ]
    };
  }
  click() {
    window.open('http://localhost:4200/src/assets/pdf/test.pdf');
  }
}
