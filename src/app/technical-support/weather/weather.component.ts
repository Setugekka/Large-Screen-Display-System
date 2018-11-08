import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Http} from '@angular/http';
import {number} from 'ng2-validation/dist/number';

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
  private weather_time;
  // 刷新频率
  chosen_level = '每一小时更新';
  level_list = ['每半小时更新', '每一小时更新', '每三小时更新', '每五小时更新'];
  mapLoaded = false;
  city_list = ['沈阳', '大连', '鞍山'];
  private geoCoordMap = {
    '丹东市': [124.321, 40.62],
    '大连市': [122.10, 39.7409],
    '沈阳市': [122.80, 42.1216],
    '营口市': [122.02, 40.4],
    '葫芦岛市': [120.00, 40.578],
    '鞍山市': [123.05, 40.52],
    '抚顺市': [124.27, 41.80],
    '本溪市': [124.93, 41.38],
    '朝阳市': [119.52, 41.35],
    '阜新市': [121.65, 42.35],
    '辽阳市': [123.07, 41.20],
    '铁岭市': [123.85, 42.82],
    '盘锦市': [121.77, 41.29],
    '锦州市': [120.85, 41.29],

  };
  data = [
    {name: '沈阳市', value: ['10']},
    {name: '大连市', value: ['10']},
    {name: '鞍山市', value: ['10']},
    {name: '抚顺市', value: ['10']},
    {name: '本溪市', value: ['10']},
    {name: '丹东市', value: ['10']},
    {name: '盘锦市', value: ['10']},
    {name: '营口市', value: ['10']},
    {name: '葫芦岛市', value: ['10']},
    {name: '朝阳市', value: ['10']},
    {name: '阜新市', value: ['10']},
    {name: '辽阳市', value: ['10']},
    {name: '铁岭市', value: ['10']},
    {name: '锦州市', value: ['10']},
  ];
  private option = {};
  private weather_data = [];
  private show_data = [];
  weatherIcons = {
    'Sunny': './assets/img/weather/Sunny.ico',
    'Cloudy': './assets/img/weather/Cloudy.ico',
    'Rain': './assets/img/weather/Rain.ico'
  };
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
  click(level): any {
    console.log(level);
    this.chosen_level = level;
  }

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
          this.weather_time = "更新于"+ weatherJson['datetime'];
          // console.log(weatherJson['datetime']);
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
                  this.data[a]['value'] = this.data[a]['value'].concat([i['tq1']]);
                  if (i['tq1'] === '晴') {
                    // console.log(i['tq1']);
                    this.data[a]['value'] = this.data[a]['value'].concat(['./assets/img/weather/Sunny.ico']);
                  } else if (i['tq1'] === '多云') {
                    this.data[a]['value'] = this.data[a]['value'].concat(['./assets/img/weather/Cloudy.ico']);
                  } else {
                    this.data[a]['value'] = this.data[a]['value'].concat(['./assets/img/weather/Rain.ico']);
                  }
                  this.data[a]['value'] = this.data[a]['value'].concat([i['tq2']]);
                  this.data[a]['value'] = this.data[a]['value'].concat([i['temp1']]);
                  this.data[a]['value'] = this.data[a]['value'].concat([i['temp2']]);
                }
              }
              // console.log(this.data[a]['value']);
            }
          }
          console.log(this.show_data);
          this.option = {
            backgroundColor: 'transparent',
            title: {
              top: 10,
              text: '',
              x: 'center',
              textStyle: {
                color: '#009DA0',
              }
            },
            tooltip: {
              trigger: 'item',
              formatter: function (params) {
                const result = "<span style = font-size : 20px; font-weight:bold>" + params.name + "</span>" +
                  "<span style = 'color: red; line-height:30px;font-size : 25px; font-weight:bold;margin-left: 80px'>" + params.data['value'][7] + "</span>" +
                  "<div>" +
                  "<div style = 'float : left; padding-right:20px; border-right: solid 1px #4c4a4a;'>" +
                  "<span >日间风向</span></br>" +
                  "<span style = 'color : orangered; '>" + params.data['value'][2] + "</span>" +
                  "</div>" +
                  "<div style = 'float : right; margin-left:20px;'>" +
                  "<span style = 'width : 100px;'>日间温度</span></br>" +
                  "<span style = 'color : orangered; font-weight: bold'>" + params.data['value'][9] + "</span>" +
                  "</div></div>";
                return result;
                // return params.name + ': ' + '\n' + '气温：' + params.data['value'][8] + '--' + params.data['value'][9] + ' 摄氏度' + '\n' +
                //   '气温：' + params.data['value'][8] + '--' + params.data['value'][9] + ' 摄氏度';
              },
            },
            visualMap: {
              show: false,
              min: -10,
              max: 40,
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
                      console.log(e)
                      if (e.value[9] === '晴') {
                        return  '{a|' + e.name + '}' + '\n' +  '{Sunny|}';
                      } else if (e.value[7] === '多云') {
                        return  '{a|' + e.name + '}' + '\n' +  '{Cloudy|}';
                      } else {
                        return  '{a|' + e.name + '}' + '\n' +  '{Rainy|}';
                      }
                      },
                    show: true,
                    color: '#ffffff',
                    backgroundColor: 'transparent',
                    lineHeight: 18,
                    fontSize: 12,
                    // height: 30,
                    padding: [2, 5],
                    borderRadius: 7,
                    position: 'right',
                    rich: {
                      a: {
                        color: '#5D4037',
                        fontSize: 16,
                        fontWeight: 'bold'
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
                      },
                      Sunny: {
                        height: 25,
                        backgroundColor: {
                          image: this.weatherIcons.Sunny
                        }
                      },
                      Cloudy: {
                        height: 25,
                        backgroundColor: {
                          image: this.weatherIcons.Cloudy
                        }
                      },
                      Rainy: {
                        height: 25,
                        backgroundColor: {
                          image: this.weatherIcons.Rain
                        }
                      },
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
