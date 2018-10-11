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
  private title;
  private text;
  private time;
  mapLoaded = false;
  city_list = ['沈阳', '大连', '鞍山'];
  private geoCoordMap = {
    '丹东市': [124.821, 40.62],
    '大连市': [122.2009, 39.4409],
    '沈阳市': [123.1238, 42.1216],
    '营口市': [122.3316, 40.4],
    '葫芦岛市': [120.1575, 40.578],
    '鞍山市': [123.55, 40.32],
    '抚顺市': [124.97, 42.27],
    '本溪市': [124.93, 41.38],
    '朝阳市': [119.52, 41.75],
    '阜新市': [121.65, 42.45],
    '辽阳市': [123.27, 41.20],
    '铁岭市': [123.85, 43.02],
    '盘锦市': [121.97, 41.29],
    '锦州市': [120.85, 41.29],

  };
  data = [
    {name: '沈阳市', value: ['90']},  // value值为不包括百分号的上交进度，实际值应为100%
    {name: '大连市', value: ['85']},
    {name: '鞍山市', value: ['95']},
    {name: '抚顺市', value: ['50']},
    {name: '本溪市', value: ['80']},
    {name: '丹东市', value: ['90']},
    {name: '盘锦市', value: ['98']},
    {name: '营口市', value: ['50']},
    {name: '葫芦岛市', value: ['60']},
    {name: '朝阳市', value: ['99']},
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
    return '<p style="color: red">' + e.name + ':</p>' + '风向：' + e.value[3]
                          +  ' \n ' + '风速：' + e.value[5];
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
                  this.data[a]['value'] = this.data[a]['value'].concat([i['fx2']]);
                  this.data[a]['value'] = this.data[a]['value'].concat([i['fs1']]);
                  this.data[a]['value'] = this.data[a]['value'].concat([i['fs2']]);
                  this.data[a]['value'] = this.data[a]['value'].concat([i['temp1']]);
                  this.data[a]['value'] = this.data[a]['value'].concat([i['temp2']]);
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
                color: '#009DA0',
              }
            },
            tooltip: {
              trigger: 'item',
              formatter: function (params) {
                return params.name + ': ' + params.data['value'] + '%';
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
                  borderColor: '#3fdaff',
                  borderWidth: 1,
                  // shadowColor: 'rgba(63, 218, 255, 0.5)',
                  // shadowBlur: 30
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
                  normal: {
                    // formatter: this.GetWeather,
                    formatter: function (e) {
                      return  '{a|'+e.name+'}'+'\n'+'{hr|}' + '\n' + '风向：' + e.value[3]
                        +  ' \n ' + '风速：' + e.value[5];
                    },
                    show: true,
                    color: '#ffffff',
                    backgroundColor: 'rgba(26,87,178,.5)',
                    lineHeight: 16,
                    fontSize: 12,
                    // height: 30,
                    padding: [2, 5],
                    borderRadius: 15,
                    position: 'right',
                    rich: {
                      a:{
                        color:'red'
                      },
                      b: {
                        fontSize: 20,
                        color: '#12EABE',
                        align: 'left',
                        padding: 4
                      },
                      hr: {
                        borderColor: 'white',
                        width: '70%',
                        borderWidth: 1,
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
                labelLine: {
                  length: 50,
                  length2: 30
                },
                itemStyle: {
                  normal: {
                    color: function (val) {
                      const num = <number>val.data.value[2];
                      if (num < 100) {
                        return '#228c38';
                      } else {
                        return 'rgba(35,143,56,.5)';
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
                // labelLine: {
                //   normal: {
                //     show: true,
                //     length: 20,
                //     length2: 20,
                //     lineStyle: {
                //       color: '#12EABE',
                //       width: 2
                //     }
                //   }
                // },
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
    this.httpClient.get('/api/ProService/servlet/wordProductAction?action=glfwzb').subscribe(res=>{
      if (res['statue'] == 'success'){
        const news=res['data'][0]
        this.httpClient.get('/api/ProService/servlet/showWordContentAction?action=service&id='+news['id']).subscribe(res=>{
          if(res['statue'] == 'success'){
            this.title=res['title']
            this.text=res['text']
            this.time=res['datetime']
          }
        })
      }
    })


}

}
