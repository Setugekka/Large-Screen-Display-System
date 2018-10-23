import {Component, ElementRef, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {EventEmitterService} from "../../screen-display/large-screen/event-emitter.service";
import {WarningDetailComponent} from "../warning-detail/warning-detail.component";
import {HttpClient} from "@angular/common/http";
import {isUndefined} from "util";
import * as SocketIO from "socket.io-client";
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
declare var echarts:any;

@Component({
  selector: 'app-pm-index',
  templateUrl: './pm-index.component.html',
  styleUrls: ['./pm-index.component.css']
})
export class PmIndexComponent implements OnInit {

  private detaildata="预警是指在灾害或灾难以及其他需要提防的危险发生之前，根据以往的总结的规律或观测得到的可能性前兆，向相关部门发出紧急信号，报告危险情况，以避免危害在不知情或准备不足的的情况下发生，从而最大程度的减轻危害所造成的损失的行为。按照灾害性天气气候强度标准和重大气象灾害造成的人员伤亡和财产损失程度，重大气象灾害被确定四级预警,按照灾害性天气气候强度标准和重大气象灾害造成的人员伤亡和财产损失程度，重大气象灾害被确定四级预警,重大气象灾害被确定四级预警";
  constructor(private elRef:ElementRef,private router:Router,private http: HttpClient, private modalService: NgbModal) { }
  private initdata = [
    {name: '大连', value: 20},
    {name: '锦州', value: 30},
    {name: '葫芦岛', value: 25},
    {name: '丹东', value: 40},
    {name: '抚顺', value: 50},
    {name: '沈阳', value: 30},
    {name: '辽阳', value: 80},
    {name: '铁岭', value: 10},
    {name: '鞍山', value: 20},
    {name: '盘锦', value: 30},
    {name: '朝阳', value: 60},
    {name: '营口', value: 20},
    {name: '阜新', value: 10},
    {name: '本溪', value: 30},
  ];
  private topdata1 = [['2018/09/08 14:00:00','大连',4,'紧急事件']];
  private topdata=[{value:[121.62,38.92,"因道路施工，将于下午1点至3点区间停电"],visualMap: false,}];
  private pindata=[{value:[123.383,41.8,"因道路施工，将于下午1点至3点区间停电","沈阳"],visualMap: false,itemStyle: {
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
            color: 'red' // 0% 处的颜色
          }, {
            offset: 0.5,
            color: 'red' // 50% 处的颜色
          }, {
            offset: 1,
            color: 'red' // 100% 处的颜色
          }],
          globalCoord: false // 缺省为 false
        }
      }
    }},
    {value:[123.0,41.07,"因道路施工，将于下午1点至3点区间停电","鞍山"],visualMap: false,itemStyle: {
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
              color: 'orange' // 0% 处的颜色
            }, {
              offset: 0.5,
              color: 'orange' // 50% 处的颜色
            }, {
              offset: 1,
              color: 'orange' // 100% 处的颜色
            }],
            globalCoord: false // 缺省为 false
          }
        }
      }},
    {value:[120.51,40.45,"因道路施工，将于下午1点至3点区间停电","葫芦岛"],visualMap: false,itemStyle: {
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
              color: 'yellow' // 0% 处的颜色
            }, {
              offset: 0.5,
              color: 'yellow' // 50% 处的颜色
            }, {
              offset: 1,
              color: 'yellow' // 100% 处的颜色
            }],
            globalCoord: false // 缺省为 false
          }
        }
      }},
    {value:[121.09,41.07,"因道路施工，将于下午1点至3点区间停电","锦州"],visualMap: false,itemStyle: {
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
              color: 'blue' // 0% 处的颜色
            }, {
              offset: 0.5,
              color: 'blue' // 50% 处的颜色
            }, {
              offset: 1,
              color: 'blue' // 100% 处的颜色
            }],
            globalCoord: false // 缺省为 false
          }
        }
      }},
  ];
  private chartOption:any={};
  private echartsIntance:any;
  // private socket = SocketIO('127.0.0.1:5000/LargeScreen');
  private  scatter_option: any = {};
  private  data = [
    [ ['2018/09/07 18:38:08','鞍山',2,'一般事件'],
      ['2018/09/07 19:38:08','本溪',2,'一般事件'],
      ['2018/09/07 20:18:18','沈阳',4,'一般事件'],
      ['2018/09/07 22:18:18','大连',2,'一般事件'],
      ['2018/09/08 02:00:00','抚顺',3,'一般事件'],
      ['2018/09/07 14:00:00','葫芦岛',2,'一般事件'],
      ['2018/09/08 04:38:08','锦州',2,'一般事件'],
      ['2018/09/08 10:18:18','朝阳',4,'一般事件'],
      ['2018/09/07 19:18:18','阜新',2,'一般事件'],
      ['2018/09/08 9:18:18','盘锦',3,'一般事件'],
    ],
    [ ['2018/09/07 21:00:00','沈阳',3,'紧急事件'],
      ['2018/09/08 14:00:00','大连',4,'紧急事件'],
      ['2018/09/08 12:18:18','辽阳',3,'一般事件']
    ]
  ];
  private num: any = [
    {name: 'num1', state: 'in', value: 0},
    {name: 'num2', state: 'in', value: 1},
    {name: 'num3', state: 'in', value: 0},
    {name: 'num4', state: 'in', value: 1},
  ];
  ngOnInit() {
    this.http.get('assets/json/210000.json').subscribe(geoJson=>{
      echarts.registerMap('辽宁', geoJson)
      this.chartOption = {
        title: {
          text: '全省预警图',
          textAlign: 'center',
          left: '50%',
          top: '20',
          textStyle: {
            fontWeight: 'normal',
            fontSize: 36,
          }
        },

        toolbox: {
          show: false,
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
          show: true,
          calculable: true,
          min: 0,
          max: 100,
          text:['High','Low'],
          realtime: false,
          inRange: {
            color: ['#e0ffff', '#006edd']
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
            },
            tooltip:{
              backgroundColor:'rgba(50,50,50,0.95)',
              formatter: function (params, ticket, callback) {
                if(!isUndefined(params.data )) {
                  let strarray="";
                  let len = params.data.value[2].length;
                  for(let i=0;i<(params.data.value[2].length/11);i++)
                  {
                    let str = params.data.value[2].substring(params.data.value[2].length-(i+1)*11,params.data.value[2].length-i*11);
                    strarray= str+ '<br>'+ strarray;
                  }
                  // return '最新预警信息'+'</br>预警地点：'+params.data.value[0]+','+params.data.value[1]+'</br>预警内容：'+params.data.value[2]
                  const res = "<div class=\"card\" style=\"background-color: unset;width: 400px\">\n" +
                    "  <div style=\" ;\n" +
                    "  margin-left: 10px;\n" +
                    "  font-weight: bold;\n" +
                    "  font-size: 15px;\n" +
                    "  text-align: left;\">\n" +
                    "    最新预警信息\n" +
                    "  </div>\n" +
                    "  <div class=\"row\">\n" +
                    "    <div class=\"col-6 pl-3\" style=\"height: 200px;width: 200px\">\n" +
                    "      <img src=\"assets/image/lantianbaiyun.jpg\" style=\"width: 100%;height: 100%\">\n" +
                    "    </div>\n" +
                    "    <div class=\"col-6\">\n" +
                    "      <span>所在城市</span><br>\n" +
                    "      <span style = 'line-height:30px;font-size : 25px; font-weight:bold;'>"+params.data.value[3]+"</span><br>\n" +
                    "      <div>\n" +
                    "      <div style = 'float : left; padding-right:20px; border-bottom: solid 1px #4c4a4a;'>\n" +
                    "        <span >地理坐标</span><br>\n" +
                    "        <span style = 'color : red; '>("+params.data.value[0]+','+params.data.value[1]+")</span>\n" +
                    "        </div><br>\n" +
                    "      <div style = 'float : left;'>\n" +
                    "        <span style = 'width : 100px;'>预警内容：</span><br>\n" +
                    "        <div style='width: 100px;height:100%display:block;word-break: break-all;word-wrap: break-word;color:yellow'> "+strarray+"</div>\n" +
                    "        </div>\n" +
                    "      </div>\n" +
                    "\n" +
                    "    </div>\n" +
                    "  </div>\n" +
                    "</div>";
                  return res
                }
              }
            }
          },
        ]
      }
    })
    // this.socket.on('my_response',e=>console.log(e.data))
    // this.socket.on('update_option_system_map',e=>{
    //   for (const i in this.initdata){
    //     if(this.initdata[i].name==e.name){
    //       this.initdata[i].value=this.initdata[i].value+1
    //     }
    //   }
    //   this.pindata.push({"value":e.coord.concat([e.value,e.name]),visualMap:false});
    //   this.topdata[0]={"value":e.coord.concat(e.value),visualMap:false};
    //
    //   this.chartOption={
    //     title: {
    //       text: '预警状态',
    //       textAlign: 'center',
    //       left: '50%',
    //       top: '20',
    //       textStyle: {
    //         color: '#FFF',
    //         fontWeight: 'normal',
    //         fontSize: 36,
    //       }
    //     },
    //
    //     toolbox: {
    //       show: true,
    //       orient: 'vertical',
    //       left: 'right',
    //       top: 'center',
    //       feature: {
    //         dataView: {readOnly: false},
    //         restore: {},
    //         saveAsImage: {}
    //       }
    //     },
    //     visualMap: {
    //       min: 0,
    //       max: 100,
    //       text:['High','Low'],
    //       realtime: false,
    //       calculable: true,
    //       inRange: {
    //         color: ['#e0ffff', '#006edd']
    //       }
    //     },
    //
    //     geo: {
    //       show: false,
    //       map: '辽宁',
    //       label: {
    //         normal: {
    //           show: false
    //         },
    //         emphasis: {
    //           show: false,
    //         }
    //       },
    //       roam: false,
    //       itemStyle: {
    //         normal: {
    //           areaColor: '#031525',
    //           borderColor: '#097bba',
    //         },
    //         emphasis: {
    //           areaColor: '#2B91B7',
    //         }
    //       }
    //     },
    //     tooltip:{
    //       show:true
    //     },
    //     series: [
    //       {
    //         name: '预警分布',
    //         type: 'map',
    //         mapType: '辽宁', // 自定义扩展图表类型
    //         top:100,
    //         zoom:1,
    //         tooltip: {
    //           formatter: '{b}<br/>预警数量：{c}'
    //         },
    //         itemStyle:{
    //           normal:{label:{show:true}},
    //           emphasis:{label:{show:true}}
    //         },
    //         data:this.initdata,
    //         // markPoint : {//数据全是markPoint
    //         //   symbolSize: 50,       // 标注大小，半宽（半径）参数，当图形为方向或菱形则总宽度为symbolSize * 2
    //         //   itemStyle: {
    //         //     normal: {
    //         //       borderColor: '#87cefa',
    //         //       borderWidth: 1,            // 标注边线线宽，单位px，默认为1
    //         //       label: {
    //         //         show: false
    //         //       }
    //         //     },
    //         //     emphasis: {
    //         //       borderColor: '#1e90ff',
    //         //       borderWidth: 5,
    //         //       label: {
    //         //         show: false
    //         //       }
    //         //     }
    //         //   },
    //         //   effect : {
    //         //     show: true,
    //         //     shadowBlur : 0
    //         //   },
    //         //   data : [
    //         //     {name:'',coord:[121.62,38.92,12]}
    //         //   ],
    //         // },//end markPoint
    //       },
    //       {
    //         name: '气泡',
    //         type: 'scatter',
    //         coordinateSystem: 'geo',
    //         symbol: 'pin', //气泡
    //         data: this.pindata,
    //         symbolSize: 50,
    //         label: {
    //           normal: {
    //             formatter: '{b}',
    //             position: 'right',
    //             show: true
    //           },
    //         },
    //         itemStyle: {
    //           normal: {
    //             shadowBlur: 10,
    //             shadowColor: 'rgba(120, 36, 50, 0.5)',
    //             shadowOffsetY: 5,
    //             color: {
    //               type: 'radial',
    //               x: 0.5,
    //               y: 0.5,
    //               r: 0.5,
    //               colorStops: [{
    //                 offset: 0,
    //                 color: '#ae0876' // 0% 处的颜色
    //               }, {
    //                 offset: 0.5,
    //                 color: '#cd0a8b' // 50% 处的颜色
    //               }, {
    //                 offset: 1,
    //                 color: '#f505a4' // 100% 处的颜色
    //               }],
    //               globalCoord: false // 缺省为 false
    //             }
    //           }
    //         },
    //         tooltip:{
    //           backgroundColor:'rgba(50,50,50,0.95)',
    //           formatter: function (params, ticket, callback) {
    //             if(!isUndefined(params.data )) {
    //               let strarray="";
    //               let len = params.data.value[2].length;
    //               for(let i=0;i<(params.data.value[2].length/11);i++)
    //               {
    //                 let str = params.data.value[2].substring(params.data.value[2].length-(i+1)*11,params.data.value[2].length-i*11);
    //                 strarray= str+ '<br>'+ strarray;
    //               }
    //               // return '最新预警信息'+'</br>预警地点：'+params.data.value[0]+','+params.data.value[1]+'</br>预警内容：'+params.data.value[2]
    //               const res = "<div class=\"card\" style=\"background-color: unset;width: 400px\">\n" +
    //                 "  <div style=\" ;\n" +
    //                 "  margin-left: 10px;\n" +
    //                 "  font-weight: bold;\n" +
    //                 "  font-size: 15px;\n" +
    //                 "  text-align: left;\">\n" +
    //                 "    最新预警信息\n" +
    //                 "  </div>\n" +
    //                 "  <div class=\"row\">\n" +
    //                 "    <div class=\"col-6 pl-3\" style=\"height: 200px;width: 200px\">\n" +
    //                 "      <img src=\"assets/image/lantianbaiyun.jpg\" style=\"width: 100%;height: 100%\">\n" +
    //                 "    </div>\n" +
    //                 "    <div class=\"col-6\">\n" +
    //                 "      <span>所在城市</span><br>\n" +
    //                 "      <span style = 'line-height:30px;font-size : 25px; font-weight:bold;'>"+params.data.value[3]+"</span><br>\n" +
    //                 "      <div>\n" +
    //                 "      <div style = 'float : left; padding-right:20px; border-bottom: solid 1px #4c4a4a;'>\n" +
    //                 "        <span >地理坐标</span><br>\n" +
    //                 "        <span style = 'color : red; '>("+params.data.value[0]+','+params.data.value[1]+")</span>\n" +
    //                 "        </div><br>\n" +
    //                 "      <div style = 'float : left;'>\n" +
    //                 "        <span style = 'width : 100px;'>预警内容：</span><br>\n" +
    //                 "        <div style='width: 100px;height:100%display:block;word-break: break-all;word-wrap: break-word;color:yellow'> "+strarray+"</div>\n" +
    //                 "        </div>\n" +
    //                 "      </div>\n" +
    //                 "\n" +
    //                 "    </div>\n" +
    //                 "  </div>\n" +
    //                 "</div>";
    //               return res
    //             }
    //           }
    //         }
    //       },
    //       {
    //         name: 'Top',
    //         type: 'effectScatter',
    //         coordinateSystem: 'geo',
    //         data: [this.topdata[0]],
    //         symbolSize: 20,
    //         showEffectOn: 'render',
    //         rippleEffect: {
    //           brushType: 'stroke'
    //         },
    //         hoverAnimation: false,
    //         label: {
    //           normal: {
    //             formatter: '{b}',
    //             position: 'right',
    //             show: false
    //           }
    //         },
    //         itemStyle: {
    //           normal: {
    //             shadowBlur: 10,
    //             shadowColor: 'rgba(120, 36, 50, 0.5)',
    //             shadowOffsetY: 5,
    //             color: {
    //               type: 'radial',
    //               x: 0.5,
    //               y: 0.5,
    //               r: 0.5,
    //               colorStops: [{
    //                 offset: 0,
    //                 color: '#ae0876' // 0% 处的颜色
    //               }, {
    //                 offset: 0.5,
    //                 color: '#cd0a8b' // 50% 处的颜色
    //               }, {
    //                 offset: 1,
    //                 color: '#f505a4' // 100% 处的颜色
    //               }],
    //               globalCoord: false // 缺省为 false
    //             }
    //           }
    //         },
    //         zlevel: 1,
    //         tooltip:{
    //           show:false
    //         }
    //       },
    //     ]
    //   }
    //   this.showTooltip();
    //   if(e.type=="一般事件"){
    //     this.data[0].push(['2018/09/08 14:00:00',e.name,4,e.type])
    //     this.topdata1[0]=['2018/09/08 14:00:00',e.name,4,e.type]
    //   }else {
    //     this.data[1].push(['2018/09/08 14:00:00',e.name,4,e.type])
    //     this.topdata1[0]=['2018/09/08 14:00:00',e.name,4,e.type]
    //   }
    //   this.scatter_option = {
    //     backgroundColor: new echarts.graphic.RadialGradient(0, 0, 0, [{
    //       offset: 0,
    //       color: '#f7f8fa'
    //     }, {
    //       offset: 1,
    //       color: '#cdd0d5'
    //     }]),
    //     title: {
    //       text: '预警情况报告',
    //       textStyle: {
    //         color: 'white',
    //         fontSize: 20
    //       },
    //       x: 'center'
    //     },
    //     legend: {
    //       right: 10,
    //       data: ['紧急事件', '一般事件'],
    //       textStyle: {
    //         color: 'white'
    //       },
    //     },
    //     xAxis: {
    //       splitNumber: 24,
    //       type: 'time',
    //       splitLine: {
    //         show: true,
    //         lineStyle: {
    //           color: '#95ffff'
    //         }
    //
    //       },
    //       axisLine: {
    //         lineStyle: {
    //           color: '#95ffff'
    //         }
    //       },
    //     },
    //     yAxis: {
    //       type: 'category',
    //       data: ['沈阳','大连','鞍山','抚顺','本溪','丹东','锦州','营口','阜新','辽阳','盘锦','铁岭','朝阳','葫芦岛'],
    //       splitLine: {
    //         show: true,
    //         lineStyle: {
    //           color: '#95ffff'
    //         }
    //       },
    //       axisLine: {
    //         lineStyle: {
    //           color: '#95ffff'
    //         }
    //       },
    //       scale: true
    //     },
    //     series: [
    //       {
    //         name: '紧急事件',
    //         data: this.data[1],
    //         type: 'scatter',
    //         symbolSize: function (data) {
    //           return data[2] * 8;
    //         },
    //         label: {
    //           emphasis: {
    //             show: true,
    //             formatter: function (param) {
    //               return param.data[1];
    //             },
    //             position: 'top'
    //           }
    //         },
    //         itemStyle: {
    //           normal: {
    //             shadowBlur: 10,
    //             shadowColor: 'rgba(120, 36, 50, 0.5)',
    //             shadowOffsetY: 5,
    //             color: {
    //               type: 'radial',
    //               x: 0.5,
    //               y: 0.5,
    //               r: 0.5,
    //               colorStops: [{
    //                 offset: 0,
    //                 color: '#ae0876' // 0% 处的颜色
    //               }, {
    //                 offset: 0.5,
    //                 color: '#cd0a8b' // 50% 处的颜色
    //               }, {
    //                 offset: 1,
    //                 color: '#f505a4' // 100% 处的颜色
    //               }],
    //               globalCoord: false // 缺省为 false
    //             }
    //           }
    //         }
    //       },
    //       {
    //         name: '一般事件',
    //         data: this.data[0],
    //         type: 'scatter',
    //         symbolSize: function (data) {
    //           return (data[2]) * 8;
    //         },
    //         label: {
    //           emphasis: {
    //             show: true,
    //             formatter: function (param) {
    //               return param.data[1];
    //             },
    //             position: 'top'
    //           }
    //         },
    //         itemStyle: {
    //           normal: {
    //             shadowBlur: 10,
    //             shadowColor: 'rgba(25, 100, 150, 0.5)',
    //             shadowOffsetY: 5,
    //             // color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
    //             //   offset: 0,
    //             //   color: 'rgb(129, 227, 238)'
    //             // }, {
    //             //   offset: 1,
    //             //   color: 'rgb(25, 183, 207)'
    //             // }])
    //             color: {
    //               type: 'radial',
    //               x: 0.5,
    //               y: 0.5,
    //               r: 0.5,
    //               colorStops: [{
    //                 offset: 0,
    //                 color: '#a7ac0e' // 0% 处的颜色
    //               }, {
    //                 offset: 0.5,
    //                 color: '#babc0c' // 50% 处的颜色
    //               }, {
    //                 offset: 1,
    //                 color: '#f6f701' // 100% 处的颜色
    //               }],
    //               globalCoord: false // 缺省为 false
    //             }
    //           }
    //         }
    //       },
    //       {
    //         name: 'Top',
    //         type: 'effectScatter',
    //         data: this.topdata1,
    //         symbolSize: 20,
    //         showEffectOn: 'render',
    //         rippleEffect: {
    //           brushType: 'stroke'
    //         },
    //         hoverAnimation: false,
    //         label: {
    //           normal: {
    //             formatter: '{b}',
    //             position: 'right',
    //             show: false
    //           }
    //         },
    //         itemStyle: {
    //           normal: {
    //             shadowBlur: 10,
    //             shadowColor: 'rgba(120, 36, 50, 0.5)',
    //             shadowOffsetY: 5,
    //             color: {
    //               type: 'radial',
    //               x: 0.5,
    //               y: 0.5,
    //               r: 0.5,
    //               colorStops: [{
    //                 offset: 0,
    //                 color: '#ae0876' // 0% 处的颜色
    //               }, {
    //                 offset: 0.5,
    //                 color: '#cd0a8b' // 50% 处的颜色
    //               }, {
    //                 offset: 1,
    //                 color: '#f505a4' // 100% 处的颜色
    //               }],
    //               globalCoord: false // 缺省为 false
    //             }
    //           }
    //         },
    //         zlevel: 1
    //       },
    //     ]
    //   };
    //   this.click_tset()
    // });
  }
  SetActive(event, chatId: string) {

    var hElement: HTMLElement = this.elRef.nativeElement;
    //now you can simply get your elements with their class name
    var allAnchors = hElement.getElementsByClassName('list-group-item');
    //do something with selected elements
    [].forEach.call(allAnchors, function (item: HTMLElement) {
      item.setAttribute('class', 'list-group-item no-border');
    });
    //set active class for selected item
    event.currentTarget.setAttribute('class', 'list-group-item bg-blue-grey bg-lighten-5 border-right-primary border-right-2');
    this.detaildata="今年第23号台风“百里嘉”（热带风暴级）的中心今天（12日，下同）早晨5点钟位于广东省雷州市偏东方大约630公里的海面上，就是北纬20.5度、东经116.1度，中心附近最大风力有8级（20米/秒），中心最低气压为995百帕，七级风圈半径100-120公里。\n" +
      "\n"
  }

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
  onChartInit(ec) {
    this.echartsIntance = ec;
  }
  onChartClick(params){

    if(params.seriesName=='气泡'){
      // this.chartOption.series[1].data.splice(params.dataIndex,1)
      if ((this.pindata.length-1)==params.dataIndex){
        this.topdata.pop()
      }
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
          show: false,
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
            color: ['#e0ffff', '#006edd']
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
            },
            tooltip:{
              backgroundColor:'rgba(50,50,50,0.95)',
              formatter: function (params, ticket, callback) {
                if(!isUndefined(params.data )) {
                  let strarray="";
                  let len = params.data.value[2].length;
                  for(let i=0;i<(params.data.value[2].length/11);i++)
                  {
                    let str = params.data.value[2].substring(params.data.value[2].length-(i+1)*11,params.data.value[2].length-i*11);
                    strarray= str+ '<br>'+ strarray;
                  }
                  // return '最新预警信息'+'</br>预警地点：'+params.data.value[0]+','+params.data.value[1]+'</br>预警内容：'+params.data.value[2]
                  const res = "<div class=\"card\" style=\"background-color: unset;width: 400px\">\n" +
                    "  <div style=\" ;\n" +
                    "  margin-left: 10px;\n" +
                    "  font-weight: bold;\n" +
                    "  font-size: 15px;\n" +
                    "  text-align: left;\">\n" +
                    "    最新预警信息\n" +
                    "  </div>\n" +
                    "  <div class=\"row\">\n" +
                    "    <div class=\"col-6 pl-3\" style=\"height: 200px;width: 200px\">\n" +
                    "      <img src=\"assets/image/lantianbaiyun.jpg\" style=\"width: 100%;height: 100%\">\n" +
                    "    </div>\n" +
                    "    <div class=\"col-6\">\n" +
                    "      <span>所在城市</span><br>\n" +
                    "      <span style = 'line-height:30px;font-size : 25px; font-weight:bold;'>"+params.data.value[3]+"</span><br>\n" +
                    "      <div>\n" +
                    "      <div style = 'float : left; padding-right:20px; border-bottom: solid 1px #4c4a4a;'>\n" +
                    "        <span >地理坐标</span><br>\n" +
                    "        <span style = 'color : red; '>("+params.data.value[0]+','+params.data.value[1]+")</span>\n" +
                    "        </div><br>\n" +
                    "      <div style = 'float : left;'>\n" +
                    "        <span style = 'width : 100px;'>预警内容：</span><br>\n" +
                    "        <div style='width: 100px;height:100%display:block;word-break: break-all;word-wrap: break-word;color:yellow'> "+strarray+"</div>\n" +
                    "        </div>\n" +
                    "      </div>\n" +
                    "\n" +
                    "    </div>\n" +
                    "  </div>\n" +
                    "</div>";
                  return res
                }
              }
            }
          },
          {
            name: 'Top',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            data: [this.topdata[0]],
            symbolSize: 20,
            showEffectOn: 'render',
            rippleEffect: {
              brushType: 'stroke'
            },
            hoverAnimation: false,
            label: {
              normal: {
                formatter: '{b}',
                position: 'right',
                show: false
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
            },
            zlevel: 1,
            tooltip:{
              show:false
            }
          },
        ]
      }
    }

  }
  click(event) {
    const modalRef = this.modalService.open(WarningDetailComponent, {windowClass: 'WarningModalClass'});
    modalRef.componentInstance.city = event.name;
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
