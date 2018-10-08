import { Component, OnInit } from '@angular/core';
import {Urls} from '../../shared/model/model.url';
import {Http} from '@angular/http';
import { Router} from '@angular/router';


@Component({
  selector: 'app-whole-plan',
  templateUrl: './whole-plan.component.html',
  styleUrls: ['./whole-plan.component.css']
})
export class WholePlanComponent implements OnInit {

  option: any;
  city_list = {};
  style = {
    symbolSize: [50, 30],
    symbol: 'rectangle',
    itemStyle: {
      normal: {
        borderWidth: 2,
        borderColor: 'black'
      }
    }};
  private  urls = Urls;
  form_city(data): any {
    for (let i = 0; i < data.length; i++) {
      for (const key in this.style) {
        if (key) {
          data[i][key] = this.style[key];
        }
      }
    }
    const data1 = [{
      name: '辽宁',
      value: 6,
      symbolSize: [60, 30],
      symbol: 'rectangle',
      itemStyle: {
        normal: {
          borderWidth: 2,
          borderColor: 'black'
        }
      },
      children: data
    }];
    return data1;
  }
  click(event) {
    console.log(event.name);
    this.router.navigate(['/ContingencyPlan/CityPlan', {Id: event.name}]);
  }
  GetCityList():  any {
    const data = this.http.get(this.urls.GetCityList)
      .toPromise()
      .then(response => response.json());
    return data;
  }
  constructor(private http: Http, private router: Router) { }

  ngOnInit() {
    $("#orgchart-container").on("click",".org-node",e=>{
      const i=e.currentTarget.getAttribute("data-value")
      this.router.navigate(['/ContingencyPlan/CityPlan', {Id: i}]);
    })
    this.GetCityList().then(r => {
      this.city_list = r;
      const list = this.form_city(this.city_list)
      this.option = {
        title: {
          text: ''
        },
        tooltip: {
          show: false,
          trigger: 'item',
          formatter: '{b}: {c}'
        },
        toolbox: {
          show: true,
          feature: {
            mark: {
              show: true
            },
            dataView: {
              show: false,
              readOnly: false
            },
            restore: {
              show: false
            },
            saveAsImage: {
              show: false
            }
          }
        },
        calculable: false,
        series: [{
          name: '树图',
          type: 'tree',
          orient: 'vertical', // vertical horizontal
          rootLocation: {
            x: '50%',
            y: '15%'
          }, // 根节点位置  {x: 'center',y: 10}
          nodePadding: 20,
          layerPadding: 40,
          left: 0,
          right: 0,
          symbol: 'rectangle',
          borderColor: 'black',
          itemStyle: {
            normal: {
              color: '#fff', // 节点背景色
              label: {
                show: true,
                position: 'inside',
                textStyle: {
                  color: 'black',
                  fontSize: 15,
                  // fontWeight:  'bolder'
                }
              },
              lineStyle: {
                color: 'black',
                width: 1,
                type: 'broken' // 'curve'|'broken'|'solid'|'dotted'|'dashed'
              }
            },
            emphasis: {
              label: {
                show: false
              }
            }
          },
          data: list
        }]
      };
    });
  }
}

