import { Component, OnInit } from '@angular/core';
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
    {name: '大连', value: 0},
    {name: '锦州', value: 0},
    {name: '葫芦岛', value: 0},
    {name: '丹东', value: 0},
    {name: '抚顺', value: 0},
    {name: '沈阳', value: 0},
    {name: '辽阳', value: 0},
    {name: '铁岭', value: 0},
    {name: '鞍山', value: 0},
    {name: '盘锦', value: 0},
    {name: '朝阳', value: 0},
    {name: '营口', value: 0},
    {name: '阜新', value: 0},
    {name: '本溪', value: 0},
  ];
  private chartOption={};
  private socket=SocketIO('127.0.0.1:5000/LargeScreen');
  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.http.get('assets/json/210000.json').subscribe(geoJson=>{
      echarts.registerMap('辽宁',geoJson)
      this.chartOption={
        title: {
          text: '舆情分布状态',
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
            top:100,
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
          text: '舆情分布状态',
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
