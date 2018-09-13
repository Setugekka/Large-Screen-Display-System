import { Component, OnInit } from '@angular/core';
import {EventEmitterService} from "../../screen-display/large-screen/event-emitter.service";
declare var echarts:any;
@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
  private last=null;
  private option = {
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
        interval:0,
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
      data: [20, 50, 80, 58, 83, 68, 57, 80, 42, 66,36,78,25,44],
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
            color: 'red'
          }, {
            offset: 1,
            color: 'red'
          }]),
          opacity: 1,
        }
      }
    }]
  };
  private ecinstance:any;
  constructor(public emitService: EventEmitterService) { }
  ngOnInit() {
    this.emitService.eventEmit.subscribe((value: any) => {
      // if(value == "userList") {
      //   // 这里就可以调取接口，刷新userList列表数据
      //   alert("收到了，我立马刷新列表");
      // }
      if(this.last!=null){
        this.ecinstance.dispatchAction({
          type: 'downplay',
          // 可选，系列 index，可以是一个数组指定多个系列
          seriesIndex:0,
          name:this.last
        })}
      this.last=value
      this.ecinstance.dispatchAction({
        type: 'highlight',
        // 可选，系列 index，可以是一个数组指定多个系列
        seriesIndex:0,
        name:value
      })
    });
  }
  onChartInit(ec) {
    this.ecinstance = ec;
  }

}
