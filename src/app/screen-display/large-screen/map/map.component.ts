import { Component, OnInit } from '@angular/core';
import { EventEmitterService} from '../event-emitter.service';
import { HttpClient } from '@angular/common/http';
declare var echarts: any;
declare var $: any;
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  mapLoaded = false;
  private activeArea = [];
  private levelColorMap = {
    '1': 'rgba(241, 109, 115, .8)',
    '2': 'rgba(255, 235, 59, .7)',
    '3': 'rgba(147, 235, 248, 1)'
  };
  private data = [{name:"沈阳",value:10,level:1}];
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
  private chartoption = {};
  constructor(private http: HttpClient,public emitService: EventEmitterService) { }

  ngOnInit() {
    this.http.get('assets/json/210000.json').subscribe(geoJson=>{
      console.log(geoJson)
      this.mapLoaded=true;
      echarts.registerMap('liaoning', geoJson);
      const levelColorMap = this.levelColorMap;
      this.chartoption = {
      tooltip: {
        show: true,
        trigger: 'item',
        showDelay: 0,
        transitionDuration: 0.2,
      },
      geo: [{
        id: 0,
        map: 'liaoning',
        // roam: true,
        zoom: 1.2,
        label: {
          normal: {
            show: true,
          },
          emphasis: {
            textStyle: {
              color: '#fff'
            }
          }
        },
        selectedMode: 'single',
        itemStyle: {
          // normal: {
          //   borderColor: 'rgba(147, 235, 248, 1)',
          //   borderWidth: 1,
          //   areaColor: {
          //     type: 'radial',
          //     x: 0.5,
          //     y: 0.5,
          //     r: 0.8,
          //     colorStops: [{
          //       offset: 0,
          //       color: 'rgba(147, 235, 248, 0)' // 0% 处的颜色
          //     }, {
          //       offset: 1,
          //       color: 'rgba(147, 235, 248, .2)' // 100% 处的颜色
          //     }],
          //     globalCoord: false // 缺省为 false
          //   },
          //   shadowColor: 'rgba(128, 217, 248, 1)',
          //   // shadowColor: 'rgba(255, 255, 255, 1)',
          //   shadowOffsetX: -2,
          //   shadowOffsetY: 2,
          //   shadowBlur: 10
          // },
          normal: {
            areaColor: "lightskyblue",
            // shadowColor: 'rgba(255, 255, 255, 1)',
          },
          emphasis: {
            areaColor: '#389BB7',
            borderWidth: 0
          }
        },
        regions: this.activeArea.map(function (item) {
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
            };
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
        data: this.initSeriesData(this.data)
      }]
    }})
  }

  onChartClick(params): void{
    this.emitService.eventEmit.emit(params.name);
  };

  initSeriesData(data):any{
    var temp = [];
    for (var i = 0; i < data.length; i++) {
      var geoCoord = this.geoCoordMap[data[i].name];
      if (geoCoord) {
        temp.push({
          name: data[i].name,
          value: geoCoord.concat(data[i].value, data[i].level)
        });
      }
    }
    return temp;
  };

}
