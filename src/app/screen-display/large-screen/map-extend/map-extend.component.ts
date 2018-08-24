import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
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
  private option = {
    // bgColor: '#154e90', // 画布背景色
    mapName: '辽宁', // 地图名
    goDown: true, // 是否下钻
    // 下钻回调
    callback: function (name, option, instance) {
      // console.log(name, option, instance);
      show(name)
    },
    // 数据展示
    data: [{name: "沈阳", value: 10, level: 1}]
  };
  private graphicStyle = {
    font: '18px "Microsoft YaHei", sans-serif',
    textColor: '#eee',
    lineColor: 'rgba(147, 235, 248, .8)'
  };

  constructor(private http: HttpClient) {
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
        this.chartOption = this.extendsMap(this.option);
      })

    })
  }

  onChartInit(ec) {
    this.echartsIntance = ec;
  }

  onChartClick(params): void {
    console.log('23333')
  };

  test() {
    console.log('success 2333333333333')
  }

  extendsMap(opt) {
    // 实例
    let curGeoJson = {};
    const cityMap = {
      '大连市': "DALIAN",
      '锦州市': "JINZHOU",
      '葫芦岛市': "HULUDAO",
      '丹东市': "DANDONG",
      '抚顺市': "FUSHUN",
      '沈阳市': "SHENYANG",
      '辽阳市': "LIAOYANG",
      '铁岭市': "TIELING",
      '鞍山市': "ANSHAN",
      '盘锦市': "PANJIN",
      '朝阳市': "CHAOYANG",
      '营口市': "YINGKO",
      '阜新市': "FUXIN",
      '本溪市': "BENXI",
    }
    const geoCoordMap = {
      '大连': [],
      '锦州': [],
      '葫芦岛': [],
      '丹东': [],
      '抚顺': [],
      '沈阳': [123.38, 41.8],
      '辽阳': [],
      '铁岭': [],
      '鞍山': [],
      '盘锦': [],
      '朝阳': [],
      '营口': [],
      '阜新': [],
      '本溪': [],
    };
    const levelColorMap = {
      '1': 'rgba(241, 109, 115, .8)',
      '2': 'rgba(255, 235, 59, .7)',
      '3': 'rgba(147, 235, 248, 1)'
    };

    const defaultOpt = {
      mapName: 'china', // 地图展示
      goDown: false, // 是否下钻
      activeArea: [], // 区域高亮,同echarts配置项
      data: [],
      // 下钻回调(点击的地图名、实例对象option、实例对象)
      callback: function (name, option, instance) {
        console.log("默认下钻回调")
      }
    };
    if (opt) opt = echarts.util.extend(defaultOpt, opt);

    // 层级索引
    const name = [opt.mapName];
    let idx = 0;
    const pos = {
      leftPlus: 115,
      leftCur: 0,
      left: 50,
      top: 50
    };

    const line = [
      [0, 0],
      [8, 11],
      [0, 22]
    ];
    // style
    const style = this.graphicStyle;

    const option = {
      backgroundColor: opt.bgColor,
      graphic: [{
        type: 'group',
        left: pos.left,
        top: pos.top - 4,
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
            stroke: style.lineColor,
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
            stroke: style.lineColor,
          }
        }]
      }, {
        id: name[idx],
        type: 'group',
        left: pos.left + 2,
        top: pos.top,
        children: [{
          type: 'polyline',
          left: 90,
          top: -12,
          shape: {
            points: line
          },
          style: {
            stroke: 'transparent',
            key: name[0]
          },
          onclick: this.graphicClick
        }, {
          type: 'text',
          left: 0,
          top: 'middle',
          style: {
            text: name[0] === '辽宁' ? '辽宁省' : name[0],
            textAlign: 'center',
            fill: style.textColor,
            font: style.font
          },
          // onclick: this.resetOption
        }, {
          type: 'text',
          left: 0,
          top: 10,
          style: {
            text: 'LIAONING',
            textAlign: 'center',
            fill: style.textColor,
            font: '12px "Microsoft YaHei", sans-serif',
          },
          // onclick: this.resetOption
        }]
      }],
      tooltip: {
        show: true,
        trigger: 'item',
        showDelay: 0,
        transitionDuration: 0.2,
      },

      geo: [{
        id: 0,
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
        selectedMode: 'single',
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

      series: [{
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
        // data: handleEvents.initSeriesData(opt.data)
        data: []
      }]
    };

    return option;
  };

  graphicClick() {
    console.log("success")
    // var name = this.graphicStyle.key;
    // handleEvents.resetOption(chart, option, name);
  }

}



