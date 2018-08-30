import { Component, OnInit } from '@angular/core';
import * as SocketIO from "socket.io-client";
import {HttpClient} from "@angular/common/http";
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {isUndefined} from "util";
import {WarningDetailComponent} from '../warning-detail/warning-detail.component';
declare var echarts:any;
import {  trigger,  state,  style,  animate,  transition} from '@angular/animations';

@Component({
  selector: 'app-system-map',
  templateUrl: './system-map.component.html',
  styleUrls: ['./system-map.component.css'],
  animations: [
    trigger('flyInOut', [
      state('in', style({transform: 'translateY(0)', opacity: 1})),
      state('out', style({transform: 'translateY(0)', opacity: 0})),
      transition('out => in', [
        style({transform: 'translateY(100%)'}),
        animate(200)
      ]),
      transition('in => out', [
        animate(200, style({transform: 'translateY(-100%)'}))
      ])
    ])
  ]
})
export class SystemMapComponent implements OnInit {
  private initdata=[
    {name: '大连', value: 1},
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
  private pindata=[{value:[121.62,38.92,"因道路施工，将于下午1点至3点区间停电"],visualMap: false,}];
  private chartOption:any={};
  private echartsIntance:any;
  private socket = SocketIO('127.0.0.1:5000/LargeScreen');
  private socket_test = SocketIO('127.0.0.1:5000/test');
  private  scatter_option: any = {};
  private  data = [
    [ ['2018/08/19 10:38:08','鞍山',2,'一般事件'],
      ['2018/08/19 12:38:08','本溪',2,'一般事件'],
      ['2018/08/19 16:18:18','沈阳',4,'一般事件'],
      ['2018/08/19 19:18:18','大连',2,'一般事件'],
      ['2018/08/20 9:18:18','抚顺',3,'一般事件'],
      ['2018/08/20 02:38:08','葫芦岛',2,'一般事件'],
      ['2018/08/20 04:38:08','锦州',2,'一般事件'],
      ['2018/08/19 18:18:18','朝阳',4,'一般事件'],
      ['2018/08/19 19:18:18','阜新',2,'一般事件'],
      ['2018/08/20 9:18:18','盘锦',3,'一般事件'],
    ],
    [ ['2018/08/19 10:00:00','沈阳',3,'紧急事件'],
      ['2018/08/20 10:00:00','大连',4,'紧急事件'],
      ['2018/08/20 01:18:18','辽阳',3,'一般事件']

    ]
  ];
  private num = [
    {name: 'num1', state: 'in', value: 1},
    {name: 'num2', state: 'in', value: 1},
    {name: 'num3', state: 'in', value: 0},
    {name: 'num4', state: 'in', value: 1},
  ];
  click_tset(): any {
    if (this.num[3].value === 9) {
      if (this.num[2].value === 9) {
        if (this.num[1].value === 9) {            // 后三位都是9
          for (let i = 0; i < 4; i++) {
            this.num [i].state = 'void';
          }
          for (let i = 0; i < 3; i++) {
            this.num [i + 1].value = 0;
          }
          this.num[0].value += 1;
          for (let i = 0; i < 4; i++) {
            this.num [i].state = '*';
          }
        } else {                                    // 百位不是9
          for (let i = 0; i < 3; i++) {
            this.num [i + 1].state = 'void';
          }
          setTimeout(() => {
            this.num[2].value = 0;
            this.num[3].value = 0;
            this.num[1].value += 1;
            for (let i = 0; i < 3; i++) {
              this.num [i + 1].state = '*';
            }
          }, 500);
        }
      } else {                                      // 十位不是9
        this.num[2].state = 'out';
        this.num[3].state = 'out';
        setTimeout(() => {
          this.num[2].value += 1;
          this.num[3].value = 0;
          this.num[2].state = '*';
          this.num[3].state = '*';
        }, 500);
      }
    } else {
      this.num[3].state = 'out';
      setTimeout(() => {
        this.num[3].value += 1;
        this.num[3].state = 'in'; }, 500);
    }
  }
  constructor(private http: HttpClient, private modalService: NgbModal) { }

  ngOnInit() {
    this.http.get('assets/json/210000.json').subscribe(geoJson=>{
      echarts.registerMap('辽宁',geoJson)
      this.chartOption={
        title: {
          text: '预警状态',
          textAlign: 'center',
          left: '50%',
          top: '20',
          textStyle: {
            color: '#FFF',
            fontWeight: 'normal',
            fontSize: 36,
          }
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

        geo: {
          show: false,
          map: '辽宁',
          label: {
            normal: {
              show: false
            },
            emphasis: {
              show: false,
            }
          },
          roam: false,
          itemStyle: {
            normal: {
              areaColor: '#031525',
              borderColor: '#097bba',
            },
            emphasis: {
              areaColor: '#2B91B7',
            }
          }
        },
        tooltip:{
          show:true
        },
        series: [
          {
            name: '预警分布',
            type: 'map',
            mapType: '辽宁', // 自定义扩展图表类型
            top:100,
            zoom:1,
            tooltip: {
              formatter: '{b}<br/>预警数量：{c}'
            },
            itemStyle:{
              normal:{label:{show:true}},
              emphasis:{label:{show:true}}
            },
            data:this.initdata,
            // markPoint : {//数据全是markPoint
            //   symbolSize: 50,       // 标注大小，半宽（半径）参数，当图形为方向或菱形则总宽度为symbolSize * 2
            //   itemStyle: {
            //     normal: {
            //       borderColor: '#87cefa',
            //       borderWidth: 1,            // 标注边线线宽，单位px，默认为1
            //       label: {
            //         show: false
            //       }
            //     },
            //     emphasis: {
            //       borderColor: '#1e90ff',
            //       borderWidth: 5,
            //       label: {
            //         show: false
            //       }
            //     }
            //   },
            //   effect : {
            //     show: true,
            //     shadowBlur : 0
            //   },
            //   data : [
            //     {name:'',coord:[121.62,38.92,12]}
            //   ],
            // },//end markPoint
          },
          {
            name: '气泡',
            type: 'scatter',
            coordinateSystem: 'geo',
            symbol: 'pin', //气泡
            data: this.pindata,
            symbolSize: 50,
            label: {
              normal: {
                formatter: '{b}',
                position: 'right',
                show: true
              },
            },
            itemStyle: {
              normal: {
                color:'#F62157',
                borderColor: '#F62157',
                borderWidth: 1,            // 标注边线线宽，单位px，默认为1
                label: {
                  show: false
                }
              },
              emphasis: {
                borderColor: '#F62157',
                borderWidth: 5,
                label: {
                  show: false
                }
              }
            },
            tooltip:{
              formatter: function (params, ticket, callback) {
                if(!isUndefined(params.data ))
                  return '最新预警信息'+'</br>预警地点：'+params.data.value[0]+','+params.data.value[1]+'</br>预警内容：'+params.data.value[2]
              }
            }
          }
        ]
      }
      this.showTooltip()
    })
    this.socket.on('my_response',e=>console.log(e.data))
    this.socket_test.on('my_response',e=>console.log(e.data, e.count))
    this.socket.on('update_option_system_map',e=>{
      for (const i in this.initdata){
        if(this.initdata[i].name==e.name){
          this.initdata[i].value=this.initdata[i].value+50
        }
      }
      this.pindata.push({"value":e.coord.concat(e.value),visualMap:false});
      this.chartOption={
        title: {
          text: '预警状态',
          textAlign: 'center',
          left: '50%',
          top: '20',
          textStyle: {
            color: '#FFF',
            fontWeight: 'normal',
            fontSize: 36,
          }
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

        geo: {
          show: false,
          map: '辽宁',
          label: {
            normal: {
              show: false
            },
            emphasis: {
              show: false,
            }
          },
          roam: false,
          itemStyle: {
            normal: {
              areaColor: '#031525',
              borderColor: '#097bba',
            },
            emphasis: {
              areaColor: '#2B91B7',
            }
          }
        },
        tooltip:{
          show:true
        },
        series: [
          {
            name: '预警分布',
            type: 'map',
            mapType: '辽宁', // 自定义扩展图表类型
            top:100,
            zoom:1,
            tooltip: {
              formatter: '{b}<br/>预警数量：{c}'
            },
            itemStyle:{
              normal:{label:{show:true}},
              emphasis:{label:{show:true}}
            },
            data:this.initdata,
            // markPoint : {//数据全是markPoint
            //   symbolSize: 50,       // 标注大小，半宽（半径）参数，当图形为方向或菱形则总宽度为symbolSize * 2
            //   itemStyle: {
            //     normal: {
            //       borderColor: '#87cefa',
            //       borderWidth: 1,            // 标注边线线宽，单位px，默认为1
            //       label: {
            //         show: false
            //       }
            //     },
            //     emphasis: {
            //       borderColor: '#1e90ff',
            //       borderWidth: 5,
            //       label: {
            //         show: false
            //       }
            //     }
            //   },
            //   effect : {
            //     show: true,
            //     shadowBlur : 0
            //   },
            //   data : [
            //     {name:'',coord:[121.62,38.92,12]}
            //   ],
            // },//end markPoint
          },
          {
            name: '气泡',
            type: 'scatter',
            coordinateSystem: 'geo',
            symbol: 'pin', //气泡
            data: this.pindata,
            symbolSize: 50,
            label: {
              normal: {
                formatter: '{b}',
                position: 'right',
                show: true
              },
            },
            itemStyle: {
              normal: {
                color:'#F62157',
                borderColor: '#F62157',
                borderWidth: 1,            // 标注边线线宽，单位px，默认为1
                label: {
                  show: false
                }
              },
              emphasis: {
                borderColor: '#F62157',
                borderWidth: 5,
                label: {
                  show: false
                }
              }
            },
            tooltip:{
              formatter: function (params, ticket, callback) {
                if(!isUndefined(params.data ))
                  return '最新预警信息'+'</br>预警地点：'+params.data.value[0]+','+params.data.value[1]+'</br>预警内容：'+params.data.value[2]
              }
            }
          }
        ]
      };
      this.showTooltip();
    });
    this.scatter_option = {
      backgroundColor: new echarts.graphic.RadialGradient(0, 0, 0, [{
        offset: 0,
        color: '#f7f8fa'
      }, {
        offset: 1,
        color: '#cdd0d5'
      }]),
      title: {
        text: '预警情况报告',
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
        data: ['沈阳','大连','鞍山','抚顺','本溪','丹东','锦州','营口','阜新','辽阳','盘锦','铁岭','朝阳','葫芦岛'],
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
              return param.data[1];
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
              return param.data[1];
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
  onChartInit(ec) {
    this.echartsIntance = ec;
  }
  onChartClick(params){

    if(params.seriesName=='气泡'){
      // this.chartOption.series[1].data.splice(params.dataIndex,1)
      this.pindata.splice(params.dataIndex,1)
      this.chartOption={
        title: {
          text: '预警状态',
          textAlign: 'center',
          left: '50%',
          top: '20',
          textStyle: {
            color: '#FFF',
            fontWeight: 'normal',
            fontSize: 36,
          }
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

        geo: {
          show: false,
          map: '辽宁',
          label: {
            normal: {
              show: false
            },
            emphasis: {
              show: false,
            }
          },
          roam: false,
          itemStyle: {
            normal: {
              areaColor: '#031525',
              borderColor: '#097bba',
            },
            emphasis: {
              areaColor: '#2B91B7',
            }
          }
        },
        tooltip:{
          show:true
        },
        series: [
          {
            name: '预警分布',
            type: 'map',
            mapType: '辽宁', // 自定义扩展图表类型
            top:100,
            zoom:1,
            tooltip: {
              formatter: '{b}<br/>预警数量：{c}'
            },
            itemStyle:{
              normal:{label:{show:true}},
              emphasis:{label:{show:true}}
            },
            data:this.initdata,
            // markPoint : {//数据全是markPoint
            //   symbolSize: 50,       // 标注大小，半宽（半径）参数，当图形为方向或菱形则总宽度为symbolSize * 2
            //   itemStyle: {
            //     normal: {
            //       borderColor: '#87cefa',
            //       borderWidth: 1,            // 标注边线线宽，单位px，默认为1
            //       label: {
            //         show: false
            //       }
            //     },
            //     emphasis: {
            //       borderColor: '#1e90ff',
            //       borderWidth: 5,
            //       label: {
            //         show: false
            //       }
            //     }
            //   },
            //   effect : {
            //     show: true,
            //     shadowBlur : 0
            //   },
            //   data : [
            //     {name:'',coord:[121.62,38.92,12]}
            //   ],
            // },//end markPoint
          },
          {
            name: '气泡',
            type: 'scatter',
            coordinateSystem: 'geo',
            symbol: 'pin', //气泡
            data: this.pindata,
            symbolSize: 50,
            label: {
              normal: {
                formatter: '{b}',
                position: 'right',
                show: true
              },
            },
            itemStyle: {
              normal: {
                color:'#F62157',
                borderColor: '#F62157',
                borderWidth: 1,            // 标注边线线宽，单位px，默认为1
                label: {
                  show: false
                }
              },
              emphasis: {
                borderColor: '#F62157',
                borderWidth: 5,
                label: {
                  show: false
                }
              }
            },
            tooltip:{
              formatter: function (params, ticket, callback) {
                if(!isUndefined(params.data ))
                return '最新预警信息'+'</br>预警地点：'+params.data.value[0]+','+params.data.value[1]+'</br>预警内容：'+params.data.value[2]
              }
            }
          }
        ]
      }
    }

  }
  click(event) {
    console.log(event);
    const modalRef = this.modalService.open(WarningDetailComponent, {windowClass: 'WarningModalClass'});
  }
  showTooltip(){
    const cur_index=this.pindata.length-1
    setTimeout(()=> {
      this.echartsIntance.dispatchAction({
        type: 'showTip',
        seriesIndex:1 ,//第几条series
        dataIndex: cur_index,//第几个tooltip
      });
    },500);
  }

}
