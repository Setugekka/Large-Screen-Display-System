import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Http} from '@angular/http';

declare var echarts: any;

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  mapLoaded = false;
  city_list = ['沈阳', '大连', '鞍山'];
  private geoCoordMap = {
    '丹东市': [124.521, 40.4242],
    '大连市': [122.2009, 39.4409],
    '沈阳市': [123.1238, 42.1216],
    '营口市': [122.4316, 40.4297],
    '葫芦岛市': [120.1575, 40.578],
    '鞍山市': [122.85, 40.82],
    '抚顺市': [123.97, 41.67],
    '本溪市': [123.93, 41.3],
    '朝阳市': [120.42, 41.58],
    '阜新市': [121.65, 42],
    '辽阳市': [123.17, 41.28],
    '铁岭市': [123.85, 42.32],
    '盘锦市': [122.07, 41.12],
    '锦州市': [121.15, 41.13],

  };
  data = [
    {name: '沈阳市', value: ['100']},  // value值为不包括百分号的上交进度，实际值应为100%
    {name: '大连市', value: ['85']},
    {name: '鞍山市', value: ['100']},
    {name: '抚顺市', value: ['50']},
    {name: '本溪市', value: ['80']},
    {name: '丹东市', value: ['90']},
    {name: '盘锦市', value: ['100']},
    {name: '营口市', value: ['50']},
    {name: '葫芦岛市', value: ['60']},
    {name: '朝阳市', value: ['100']},
    {name: '阜新市', value: ['88']},
    {name: '辽阳市', value: ['90']},
    {name: '铁岭市', value: ['90']},
    {name: '锦州市', value: ['95']},
  ];
  private option = {};
  private weather_data = [];
  convertData = function (data) {
    const res = [];
    for (let i = 0; i < data.length; i++) {
      const geoCoord = this.geoCoordMap[data[i].name];
      if (geoCoord) {
        // console.log(data[i].value);
        res.push({
          name: data[i].name,
          value: geoCoord.concat(data[i].value)
        });
      }
    }
    return res;
  };

  GetWeather(e) {
    return e.value[3];
  }


  constructor(private httpClient: HttpClient, private http: Http) {
  }

  ngOnInit() {
    this.httpClient.get('assets/json/liaoning.json').subscribe(geoJson => {
      this.mapLoaded = true;
      echarts.registerMap('liaoning', geoJson);
      this.httpClient.get('/api/ProService/servlet/forecastServlet?period=24')
        .subscribe(weatherJson => {
          this.weather_data = weatherJson['data'];
          // console.log(this.weather_data);
          for (const a in this.data) {
            if (a) {
              let city = this.data[a]['name'];
              city = city.substring(0, city.length - 1);
              // console.log(city);
              for (const i of this.weather_data) {
                // console.log(i.city);
                if (city === i.city) {
                  this.data[a]['value'] = this.data[a]['value'].concat([i['fx1']]);
                  // console.log(a['value']);
                }
              }
            }
          }
          this.option = {
            backgroundColor: 'transparent',
            title: {
              top: 10,
              text: '辽宁省24小时天气状况预报',
              x: 'center',
              textStyle: {
                color: '#ccc',
              }
            },
            tooltip: {
              trigger: 'item',
              formatter: function (params) {
                return params.name + '上交情况: ' + params.data['value'] + '%';
              },
            },
            visualMap: {
              show: false,
              min: 0,
              max: 100,
              left: 'left',
              text: ['高', '低'], // 文本，默认为数值文本
              calculable: true,
              seriesIndex: [1],
              inRange: {
                color: ['#e0ffff', '#006edd'],
              }
            },
            geo: {
              show: true,
              map: 'liaoning',
              label: {
                normal: {
                  show: false,
                },
                emphasis: {
                  show: false,
                }
              },
              roam: true,
              zoom: 0.9,
              top: 20,
              itemStyle: {
                normal: {
                  areaColor: 'transparent',
                  borderColor: '#3fdaff',
                  borderWidth: 1,
                  shadowColor: 'rgba(63, 218, 255, 0.5)',
                  shadowBlur: 30
                },
                emphasis: {
                  areaColor: '#2B91B7',
                }
              }
            },
            series: [
              {
                name: 'light',
                type: 'scatter',
                coordinateSystem: 'geo',
                data: this.convertData(this.data),
                symbolSize: function (val) {
                  const num = <number>val[2];
                  return num / 8;
                },
                label: {
                  // normal: {
                  //   formatter: '{b}',
                  //   position: 'right',
                  //   show: true
                  // },
                  normal: {
                    formatter: this.GetWeather,
                    show: true,
                    position: 'right',
                    rich: {
                      b: {
                        fontSize: 20,
                        color: '#12EABE',
                        align: 'left',
                        padding: 4
                      },
                      hr: {
                        borderColor: '#12EABE',
                        width: '100%',
                        borderWidth: 2,
                        height: 0
                      },
                      d: {
                        fontSize: 20,
                        color: '#fff',
                        align: 'left',
                        padding: 4
                      },
                      c: {
                        fontSize: 20,
                        color: '#fff',
                        align: 'left',
                        padding: 4
                      }
                    }
                  },
                  emphasis: {
                    show: true
                  }
                },
                itemStyle: {
                  normal: {
                    color: function (val) {
                      const num = <number>val.data.value[2];
                      if (num < 100) {
                        return '#FF3D00';
                      } else {
                        return '#4AFF96';
                      }
                    },
                  }
                }
              },
              {
                type: 'map',
                map: 'liaoning',
                geoIndex: 0,
                showLegendSymbol: false, // 存在legend时显示
                // label: {
                //   normal: {
                //     show: true,
                //     formatter: function (params) {
                //       console.log(params);
                //     }
                //   },
                //   emphasis: {
                //     show: true,
                //     textStyle: {
                //       color: '#fff'
                //     }
                //   }
                // },
                labelLine: {
                  normal: {
                    show: true,
                    length: 20,
                    length2: 20,
                    lineStyle: {
                      color: '#12EABE',
                      width: 2
                    }
                  }
                },
                label: {
                  normal: {
                    formatter: '{c|{c}}\n{hr|}\n{d|{d}%}',
                    rich: {
                      b: {
                        fontSize: 20,
                        color: '#12EABE',
                        align: 'left',
                        padding: 4
                      },
                      hr: {
                        borderColor: '#12EABE',
                        width: '100%',
                        borderWidth: 2,
                        height: 0
                      },
                      d: {
                        fontSize: 20,
                        color: '#fff',
                        align: 'left',
                        padding: 4
                      },
                      c: {
                        fontSize: 20,
                        color: '#fff',
                        align: 'left',
                        padding: 4
                      }
                    }
                  }
                },
                roam: true,
                itemStyle: {
                  normal: {
                    areaColor: '#031525',
                    borderColor: '#FFFFFF',
                  },
                  emphasis: {
                    areaColor: '#2B91B7'
                  }
                },
                animation: true,
                data: this.data
              },
            ]
          };

        });
    });
}

}
