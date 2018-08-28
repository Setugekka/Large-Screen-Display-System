import { Component, OnInit } from '@angular/core';
import * as SocketIO from "socket.io-client";
import {HttpClient} from "@angular/common/http";
import {isUndefined} from "util";
declare var echarts:any;

@Component({
  selector: 'app-system-map',
  templateUrl: './system-map.component.html',
  styleUrls: ['./system-map.component.css']
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
  private socket=SocketIO('127.0.0.1:5000/LargeScreen');
  constructor(private http:HttpClient) { }

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
    this.socket.on('update_option_system_map',e=>{
      for (let i in this.initdata){
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
      this.showTooltip()
    })
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

  showTooltip(){
    const cur_index=this.pindata.length-1
    setInterval(()=> {
      this.echartsIntance.dispatchAction({
        type: 'showTip',
        seriesIndex:1 ,//第几条series
        dataIndex: cur_index,//第几个tooltip
      });
    },500);
  }
}
