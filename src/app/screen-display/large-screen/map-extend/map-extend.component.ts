import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {EventEmitterService} from '../event-emitter.service';
declare var echarts: any;
declare var $: any;
@Component({
  selector: 'app-map-extend',
  templateUrl: './map-extend.component.html',
  styleUrls: ['./map-extend.component.css']
})
export class MapExtendComponent implements OnInit {
  mapLoaded = false;
  private echartsIntance: any;
  private chartOption: any;
  private map_data;

  private opt:any={
    // bgColor: '#154e90', // 画布背景色
    mapName: '辽宁', // 地图名
    goDown: true, // 是否下钻
    // 下钻回调
    callback: (name, option, instance)=> {
      // console.log(name, option, instance);
      this.emit(name)
    },
    // 数据展示
    data: [{name:"沈阳",value:10,level:1}
      //     {
      //     name: '南昌',
      //     value: 10,
      //     level: 1
      // }, {
      //     name: '景德镇',
      //     value: 12,
      //     level: 2
      // }, {
      //     name: '萍乡',
      //     value: 11,
      //     level: 3
      // }, {
      //     name: '赣州',
      //     value: 16,
      //     level: 2
      // }, {
      //     name: '吉安',
      //     value: 12,
      //     level: 1
      // }
    ]
  };
  private cur_option;



  private curGeoJson = {};
  private cityMap={
    '大连': "DALIAN",
    '锦州': "JINZHOU",
    '葫芦岛': "HULUDAO",
    '丹东': "DANDONG",
    '抚顺': "FUSHUN",
    '沈阳': "SHENYANG",
    '辽阳': "LIAOYANG",
    '铁岭': "TIELING",
    '鞍山': "ANSHAN",
    '盘锦': "PANJIN",
    '朝阳': "CHAOYANG",
    '营口':"YINGKO",
    '阜新':"FUXIN",
    '本溪':"BENXI",
  }
  private geoCoordMap = {
    '大连': [],
    '锦州': [],
    '葫芦岛': [],
    '丹东': [],
    '抚顺': [],
    '沈阳': [123.38,41.8],
    '辽阳': [],
    '铁岭': [],
    '鞍山': [],
    '盘锦': [],
    '朝阳': [],
    '营口':[],
    '阜新':[],
    '本溪':[],
  };
  private levelColorMap = {
    '1': 'rgba(241, 109, 115, .8)',
    '2': 'rgba(255, 235, 59, .7)',
    '3': 'rgba(147, 235, 248, 1)'
  };
  private defaultOpt = {
    mapName: 'china', // 地图展示
    goDown: false, // 是否下钻
    // bgColor: '#404a59', // 画布背景色
    activeArea: [], // 区域高亮,同echarts配置项
    data: [],
    // 下钻回调(点击的地图名、实例对象option、实例对象)
    callback: function (name, option, instance) {
    }
  };
  // 层级索引
  private name = [this.opt.mapName];
  private idx = 0;
  private pos = {
    leftPlus: 115,
    leftCur: 0,
    left: 50,
    top: 50
  };

  private line = [
    [0, 0],
    [8, 11],
    [0, 22]
  ];
  // style
  private style = {
    font: '18px "Microsoft YaHei", sans-serif',
    textColor: '#eee',
    lineColor: 'rgba(147, 235, 248, .8)'
  };

  constructor(private http: HttpClient,public emitService: EventEmitterService) {
  }

  ngOnInit() {
    this.http.get('assets/json/map.json').subscribe(mapJson => {
      this.map_data = mapJson;
      const liaoning = this.map_data.filter(function (e) {
        return e.name == "辽宁省"
      })[0];
      this.http.get('assets/json/' + liaoning.adcode + '.json').subscribe(geoJson => {
        console.log(geoJson)
        this.mapLoaded = true;
        echarts.registerMap('辽宁', geoJson);
        this.chartOption=this.makeOption(this.opt)
      })

    })
  }
  onChartInit(ec) {
    this.echartsIntance = ec;
  }
  makeOption(opt){
    if (opt) opt = echarts.util.extend(this.defaultOpt, opt);
    const levelColorMap=this.levelColorMap;
    const option = {
      backgroundColor: opt.bgColor,
      graphic: [{
        type: 'group',
        left: this.pos.left,
        top: this.pos.top - 4,
        children: [{
          type: 'line',
          left: 0,
          top: -20,
          shape: {
            x1: 0,
            y1: 0,
            x2: 60,
            y2: 0
          },
          style: {
            stroke: this.style.lineColor,
          }
        }, {
          type: 'line',
          left: 0,
          top: 20,
          shape: {
            x1: 0,
            y1: 0,
            x2: 60,
            y2: 0
          },
          style: {
            stroke: this.style.lineColor,
          }
        }]
      }, {
        id: this.name[this.idx],
        type: 'group',
        left: this.pos.left + 2,
        top: this.pos.top,
        children: [{
          type: 'polyline',
          left: 90,
          top: -12,
          shape: {
            points: this.line
          },
          style: {
            stroke: 'transparent',
            key: this.name[0]
          },
          onclick: e=> {
            // var name = this.style.key;
            this.resetOption(this.echartsIntance,this.cur_option,name[0])
          }
        }, {
          type: 'text',
          left: 0,
          top: 'middle',
          style: {
            text: this.name[0] === '辽宁' ? '辽宁省' : name[0],
            textAlign: 'center',
            fill: this.style.textColor,
            font: this.style.font
          },
          onclick: e=> {
            this.resetOption(this.echartsIntance,this.cur_option,'辽宁')
          }
        }, {
          type: 'text',
          left: 0,
          top: 10,
          style: {
            text: 'LIAONING',
            textAlign: 'center',
            fill: this.style.textColor,
            font: '12px "Microsoft YaHei", sans-serif',
          },
          onclick: e=> {
            this.resetOption(this.echartsIntance,this.cur_option,'辽宁')
          }
        }]
      }],
      tooltip:{
        show:true,
        trigger: 'item',
        showDelay: 0,
        transitionDuration: 0.2,
      },

      geo: [{
        id:0,
        map: opt.mapName,
        // roam: true,
        zoom: 1,
        label: {
          normal: {
            show: true,
            textStyle: {
              color: '#fff'
            },
          },
          emphasis: {
            textStyle: {
              color: '#fff'
            }
          }
        },
        selectedMode:'single',
        itemStyle: {
          normal: {
            borderColor: 'rgba(147, 235, 248, 1)',
            borderWidth: 1,
            areaColor: {
              type: 'radial',
              x: 0.5,
              y: 0.5,
              r: 0.8,
              colorStops: [{
                offset: 0,
                color: 'rgba(147, 235, 248, 0)' // 0% 处的颜色
              }, {
                offset: 1,
                color: 'rgba(147, 235, 248, .2)' // 100% 处的颜色
              }],
              globalCoord: false // 缺省为 false
            },
            shadowColor: 'rgba(128, 217, 248, 1)',
            // shadowColor: 'rgba(255, 255, 255, 1)',
            shadowOffsetX: -2,
            shadowOffsetY: 2,
            shadowBlur: 10
          },
          emphasis: {
            areaColor: '#389BB7',
            borderWidth: 0
          }
        },
        regions: opt.activeArea.map(function (item) {
          if (typeof item !== 'string') {
            return {
              name: item.name,
              itemStyle: {
                normal: {
                  areaColor: item.areaColor || '#389BB7'
                }
              },
              label: {
                normal: {
                  show: item.showLabel,
                  textStyle: {
                    color: '#fff'
                  }
                }
              }
            }
          } else {
            return {
              name: item,
              itemStyle: {
                normal: {
                  borderColor: '#91e6ff',
                  areaColor: '#389BB7'
                }
              }
            }
          }
        })
      },
//       {
//       id:1,
//       map: 'china',
//       z:-1,
//       center:[122.32,41.11],
//       zoom:7.46,
//       label: {
//         normal: {
//           show: false
//         },
//         emphasis: {
//           show: false
//         }
//       },
//       tooltip:{
//         show:false
//       },
// //                 itemStyle: {
// //                     normal: {
// //                         borderColor: '#389BB7',
// //                         areaColor: '#323c47',
// // //    label:{show:false},
// //                     },
// //                     emphasis: {
// //                         areaColor: '#389BB7',
// //                         borderWidth: 0,
// //                         show:false,
// //                     }
// //                 },
//       itemStyle: {
//         normal: {
//           borderColor: 'rgba(147, 235, 248, 1)',
//           borderWidth: 1,
//           areaColor: {
//             type: 'radial',
//             x: 0.5,
//             y: 0.5,
//             r: 0.8,
//             colorStops: [{
//               offset: 0,
//               color: 'rgba(147, 235, 248, 0)' // 0% 处的颜色
//             }, {
//               offset: 1,
//               color: 'rgba(147, 235, 248, .2)' // 100% 处的颜色
//             }],
//             globalCoord: false // 缺省为 false
//           },
//           shadowColor: 'rgba(128, 217, 248, 1)',
//           // shadowColor: 'rgba(255, 255, 255, 1)',
//           shadowOffsetX: -2,
//           shadowOffsetY: 2,
//           shadowBlur: 10
//         },
//         emphasis: {
//           areaColor: '#389BB7',
//           borderWidth: 0,
//           show:false
//         }
//       },
//       animation: false,
//       silent:true
//
//     }
      ],

      series:[{
        type: 'effectScatter',
        coordinateSystem: 'geo',
        // symbol: 'diamond',
        showEffectOn: 'render',
        rippleEffect: {
          period: 15,
          scale: 6,
          brushType: 'fill'
        },
        hoverAnimation: true,
        itemStyle: {
          normal: {
            color: function (params) {
              return levelColorMap[params.value[3]];
            },
            shadowBlur: 10,
            shadowColor: '#333'
          }
        },
        data: this.initSeriesData(opt.data)
      }]
    };
    this.cur_option=option;
    return option
  }
  /**
   * i 实例对象
   * o option
   * n 地图名
   **/
  resetOption(i=this.echartsIntance, o=this.cur_option, n) {
    let breadcrumb = this.createBreadcrumb(n);

    let j = this.name.indexOf(n);
    let l = o.graphic.length;
    if (j < 0) {
      o.graphic.push(breadcrumb);
      o.graphic[0].children[0].shape.x2 = 145;
      o.graphic[0].children[1].shape.x2 = 145;
      if (o.graphic.length > 2) {
        for (let x = 0; x < this.opt.data.length; x++) {
          if (n === this.opt.data[x].name + '市') {
            o.series[0].data = this.initSeriesData([this.opt.data[x]]);
            break;
          } else o.series[0].data = [];
        }
      }
      ;
      this.name.push(n);
      this.idx++;
    } else {
      o.graphic.splice(j + 2, l);
      if (o.graphic.length <= 2) {
        o.graphic[0].children[0].shape.x2 = 60;
        o.graphic[0].children[1].shape.x2 = 60;
        o.series[0].data = this.initSeriesData(this.opt.data);
      }
      ;
      this.name.splice(j + 1, l);
      this.idx = j;
      this.pos.leftCur -= this.pos.leftPlus * (l - j - 1);
    }
    ;
    o.geo[0].map = n;
    o.geo[0].zoom = 0.4;
    i.clear();
    i.setOption(o);
    this.zoomAnimation();
    this.opt.callback(n);
  };

  /**
   * name 地图名
   **/
  createBreadcrumb(name) {
    const cityToPinyin = {
      '大连': "DALIAN",
      '锦州': "JINZHOU",
      '葫芦岛': "HULUDAO",
      '丹东': "DANDONG",
      '抚顺': "FUSHUN",
      '沈阳': "SHENYANG",
      '辽阳': "LIAOYANG",
      '铁岭': "TIELING",
      '鞍山': "ANSHAN",
      '盘锦': "PANJIN",
      '朝阳': "CHAOYANG",
      '营口':"YINGKO",
      '阜新':"FUXIN",
      '本溪':"BENXI",
    };
    let breadcrumb = {
      type: 'group',
      id: name,
      left: this.pos.leftCur + this.pos.leftPlus,
      top: this.pos.top + 3,
      children: [{
        type: 'polyline',
        left: -90,
        top: -5,
        shape: {
          points: this.line
        },
        style: {
          stroke: '#fff',
          key: name
          // lineWidth: 2,
        },
        onclick: e=> {
          console.log(e)
          // var name = this.style.key;
          this.resetOption(this.echartsIntance,this.cur_option,name)

        }
      }, {
        type: 'text',
        left: -58,
        top: 'middle',
        style: {
          text: name,
          textAlign: 'center',
          fill: this.style.textColor,
          font: this.style.font
        },
        onclick: e=> {
          // var name = this.style.text;
          this.resetOption(this.echartsIntance,this.cur_option,name)
        }
      }, {
        type: 'text',
        left: -68,
        top: 10,
        style: {

          name: name,
          text: cityToPinyin[name] ? cityToPinyin[name].toUpperCase() : '',
          textAlign: 'center',
          fill: this.style.textColor,
          font: '12px "Microsoft YaHei", sans-serif',
        },
        onclick: e=> {
          // console.log(this.style);
          // var name = this.style.name;
          this.resetOption(this.echartsIntance,this.cur_option,name)
        }
      }]
    }

    this.pos.leftCur += this.pos.leftPlus;

    return breadcrumb;
  }

  // 设置effectscatter
  initSeriesData(data) {
    let temp = [];
    for (let i = 0; i < data.length; i++) {
      let geoCoord = this.geoCoordMap[data[i].name];
      if (geoCoord) {
        temp.push({
          name: data[i].name,
          value: geoCoord.concat(data[i].value, data[i].level)
        });
      }
    }
    return temp;
  }

  zoomAnimation() {
    let count = null;
    window.requestAnimationFrame(e=>{this.zoom(0.2,count)});
  }
  zoom(per,count){
    if (!count) count = per;
    count = count + per;
    // console.log(per,count);
    // chart.setOption();
    this.echartsIntance.setOption({
      geo: {
        zoom: count
      }
    });
    if (count < 1) window.requestAnimationFrame(e=> {
      this.zoom(0.2,count);
    });

  }

  onChartClick(params) {
    // console.log(params)
    if (this.opt.goDown && params.name !== this.name[this.idx]) {
      if(this.cityMap[params.name]) {
        const newmap = this.map_data.filter(e=> {
          return e.name == (params.name+'市')
        })[0];
        const url = "./assets/json/" + newmap.adcode + ".json"
        this.http.get(url).subscribe(response=>{
          this.curGeoJson = response;
          echarts.registerMap(params.name, response);
          this.resetOption(this.echartsIntance, this.cur_option, params.name);
        });
        this.emit(params.name);
      }else {
        this.emit(params.name);
      }
    }
  }

  // chart.on('mouseover',function (params) {
  //     console.log(params)
  //     var mousePos = mousePosition(params.event.event);
  //     var  xOffset = 20;
  //     var  yOffset = 25;
  //     $("#tooltip").css("display","block").css("position","absolute").css("top",(mousePos.y - yOffset) + "px").css("left",(mousePos.x + xOffset) + "px");
  //     $("#tooltip").html("悬浮窗内容");
  // })
 emit(city){
    if(city=='辽宁'){
      this.emitService.eventEmit.emit('');
    }
    else{
      this.emitService.eventEmit.emit(city);
    }
 }
}



