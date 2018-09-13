import { Component, OnInit,ElementRef } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import * as SocketIO from 'socket.io-client';
declare var echarts:any;
@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
  private initdata=[
    {name: '大连', value: 10},
    {name: '锦州', value: 8},
    {name: '葫芦岛', value: 13},
    {name: '丹东', value: 16},
    {name: '抚顺', value: 20},
    {name: '沈阳', value: 30},
    {name: '辽阳', value: 23},
    {name: '铁岭', value: 21},
    {name: '鞍山', value: 13},
    {name: '盘锦', value: 19},
    {name: '朝阳', value: 6},
    {name: '营口', value: 2},
    {name: '阜新', value: 1},
    {name: '本溪', value: 8},
  ];
  private chartOption={};
  private socket=SocketIO('127.0.0.1:5000/LargeScreen');
  private quxianoption={
    xAxis: {
      type: 'category',
      data:  ['沈阳',
        '大连',
        '鞍山',
        '铁岭',
        '抚顺',
        '本溪',
        '丹东',
        '辽阳',
        '营口',
        '盘锦 ',
        '阜新',
        '锦州' ,
        '朝阳',
        '葫芦岛',
      ],
      axisLine: {
        show: true,
        lineStyle: {
          color: "#063374",
          width: 1,
          type: "solid"
        }
      },
      axisTick: {
        show: true
      },
      axisLabel: {
        show: true,
        interval:0,
        textStyle: {
          color: "#00c7ff",
        }
      },
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        formatter: '{value}'
      },
      axisLine: {
        show: false,
        lineStyle: {
          color: "#00c7ff",
          width: 1,
          type: "solid"
        },
      },
      axisTick: {
        show: false
      },
      splitLine: {
        lineStyle: {
          color: "#063374",
        }
      }
    },
    series: [{
      data: [10,20,34,19,23,15,18,20,3,10,24,2,18,6],
      type: 'line',
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: '#00fcae'
          }, {
            offset: 1,
            color: '#006388'
          }]),
          opacity: 1,
        },
        emphasis:{
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: 'yellow'
          }, {
            offset: 1,
            color: '#66ccff'
          }]),
          opacity: 1,
        }
      }
    }]
  };
  private zhuoption={
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [{
      type: 'category',
      data: ['沈阳',
        '大连',
        '鞍山',
        '铁岭',
        '抚顺',
        '本溪',
        '丹东',
        '辽阳',
        '营口',
        '盘锦 ',
        '阜新',
        '锦州' ,
        '朝阳',
        '葫芦岛',
      ],
      axisLine: {
        show: true,
        lineStyle: {
          color: "#063374",
          width: 1,
          type: "solid"
        }
      },
      axisTick: {
        show: true
      },
      axisLabel: {
        show: true,
        textStyle: {
          color: "#00c7ff",
        }
      },
    }],
    yAxis: [{
      type: 'value',
      axisLabel: {
        formatter: '{value}'
      },
      axisLine: {
        show: false,
        lineStyle: {
          color: "#00c7ff",
          width: 1,
          type: "solid"
        },
      },
      axisTick: {
        show: false
      },
      splitLine: {
        lineStyle: {
          color: "#063374",
        }
      }
    }],
    series: [{
      type: 'bar',
      data: [10,20,34,19,23,15,18,20,3,10,24,2,18,6],
      //barWidth: 50, //柱子宽度
      //barGap: 1, //柱子之间间距
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: '#00fcae'
          }, {
            offset: 1,
            color: '#006388'
          }]),
          opacity: 1,
        },
        emphasis:{
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: 'yellow'
          }, {
            offset: 1,
            color: '#66ccff'
          }]),
          opacity: 1,
        }
      }
    }]
  };
  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.http.get('assets/json/210000.json').subscribe(geoJson=>{
      echarts.registerMap('辽宁',geoJson)
      this.chartOption={
        title: {
          text: '',
          textAlign: 'center',
          left: '50%',
          top: 0,
          textStyle: {
            color: '#FFF',
            fontWeight: 'normal',
            fontSize: 36,
          }
        },
        tooltip: {
          trigger: 'item',
            formatter: '{b}<br/>舆情数量：{c}'
        },
        toolbox: {
          show: true,
            orient: 'vertical',
            left: 'right',
            top: 'center',
            feature: {
            dataView: {readOnly: false},
            restore: {},
            saveAsImage: {}
          }
        },
        visualMap: {
          show:false,
          min: 0,
            max: 100,
            text:['High','Low'],
            realtime: false,
            calculable: true,
            inRange: {
            color: ['lightskyblue','yellow', 'orangered']
          }
        },
        series: [
          {
            name: '舆情分布',
            type: 'map',
            mapType: '辽宁', // 自定义扩展图表类型
            top:0,
            zoom:1,
            itemStyle:{
              normal:{label:{show:true}},
              emphasis:{label:{show:true}}
            },
            data:this.initdata,
          }
        ]
      }
    })

    this.socket.on('my_response',e=>console.log(e.data))
    this.socket.on('update_option_public_option_status',e=>{
      for (let i in this.initdata){
        if(this.initdata[i].name==e.name){
            this.initdata[i].value=e.value
        }
      }
      this.chartOption={
        title: {
          text: '',
          textAlign: 'center',
          left: '50%',
          top: '20',
          textStyle: {
            color: '#FFF',
            fontWeight: 'normal',
            fontSize: 36,
          }
        },
        tooltip: {
          trigger: 'item',
          formatter: '{b}<br/>舆情数量：{c}'
        },
        toolbox: {
          show: true,
          orient: 'vertical',
          left: 'right',
          top: 'center',
          feature: {
            dataView: {readOnly: false},
            restore: {},
            saveAsImage: {}
          }
        },
        visualMap: {
          show:false,
          min: 0,
          max: 100,
          text:['High','Low'],
          realtime: false,
          calculable: true,
          inRange: {
            color: ['lightskyblue','yellow', 'orangered']
          }
        },
        series: [
          {
            name: '舆情分布',
            type: 'map',
            mapType: '辽宁', // 自定义扩展图表类型
            itemStyle:{
              normal:{label:{show:true}},
              emphasis:{label:{show:true}}
            },
            data:this.initdata,
          }
        ]
      };
    })
  }


}
