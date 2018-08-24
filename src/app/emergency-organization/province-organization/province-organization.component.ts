import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Urls} from '../../shared/model/model.url';

@Component({
  selector: 'app-province-organization',
  templateUrl: './province-organization.component.html',
  styleUrls: ['./province-organization.component.css']
})
export class ProvinceOrganizationComponent implements OnInit {
  option: any;
  private  urls = Urls;
  private  data = {};         // 后台获取数据
  data1 = {
    name: '省公司应急领导小组',
    children: [{
      name: '领导1',
      children: [{
        name: '成员1',
        "create": "二珂",
        "selected": true, //当前选中
      }, {
        "name": '成员2',
      }, {
        "name": '成员3',
      }, {
        "name": '成员4',
      }, {
        "name": '成员5',
      }]
    }, {
      name: '领导2',
      children: [{
        name: '成员1',
        "create": "二珂",
      }, {
        "name": '成员2',
      }, {
        "name": '成员3',
      }, {
        "name": '成员4',
      }, {
        "name": '成员5',
      }]
    }, {
      name: '成员1',
      children: [{
        name: '成员1',
        "create": "二珂",
      }, {
        "name": '成员2',
      }, {
        "name": '成员3',
      }, {
        "name": '成员4',
      }, {
        "name": '成员5',
      }]
    }]
  }
  constructor(private http: Http) { }
  GetOrgaization(group= null):  any {
    const params = {
      'group': group
    };
    const data = this.http.get(this.urls.GetOrganization, {params: params})
      .toPromise()
      .then(response => response.json());
    return data;
  }
  click(value) {
    this.GetOrgaization(value).then(r => {
      this.data = r;
      console.log(this.data)
      this.option = {
        tooltip: {
          trigger: 'item',
          triggerOn: 'mousemove',
          formatter: function(params) {
            return params.data.create && `作者：${params.data.create}`;
          }
        },
        series: [{
          type: 'tree',
          name: 'tree2',
          data: [this.data],
          top: '0',
          bottom: '22%',
          right: '28%',
          symbolSize: 20,
          initialTreeDepth: 10,
          label: {
            normal: {
              position: 'bottom',
              verticalAlign: 'middle',
              align: 'center',
              textStyle: {
                color: '#FFF',
                fontWeight: 'normal',
                fontSize: 20,
              },
              formatter: function(params) {
                if (params.data.selected) {
                  const str = '当前:'
                  return `{box|${str}${params.data.name}}`;
                } else {
                  return `${params.data.name}`;
                }

              },
              rich: {
                box: {
                  color: '#3FA7DC',
                  fontSize: 20,
                }
              }
            }
          },

          leaves: {
            label: {
              normal: {
                position: 'right',
                verticalAlign: 'middle',
                align: 'left'
              }
            }
          },


          /* leaves: {
               label: {
                   normal: {
                       position: 'right',
                       verticalAlign: 'middle',
                       align: 'left'
                   }
               }
           },*/

          // expandAndCollapse: true,
          // animationDuration: 550,
          // animationDurationUpdate: 750
        }]
      };
    }),
    console.log(value);
  }
  ngOnInit() {
    this.option = {
      tooltip: {
        trigger: 'item',
        triggerOn: 'mousemove',
        formatter: function(params) {
          return params.data.create && `作者：${params.data.create}`;
        }
      },
      series: [{
        type: 'tree',
        name: 'tree2',
        data: [this.data1],
        top: '0',
        bottom: '22%',
        right: '28%',
        symbolSize: 20,
        initialTreeDepth: 10,
        label: {
          normal: {
            position: 'bottom',
            verticalAlign: 'middle',
            align: 'center',
            textStyle: {
              color: '#FFF',
              fontWeight: 'normal',
              fontSize: 20,
            },
            formatter: function(params) {
              if (params.data.selected) {
                const str = '当前:'
                return `{box|${str}${params.data.name}}`;
              } else {
                return `${params.data.name}`;
              }

            },
            rich: {
              box: {
                color: '#3FA7DC',
                fontSize: 20,
              }
            }
          }
        },

        leaves: {
          label: {
            normal: {
              position: 'right',
              verticalAlign: 'middle',
              align: 'left'
            }
          }
        },


        /* leaves: {
             label: {
                 normal: {
                     position: 'right',
                     verticalAlign: 'middle',
                     align: 'left'
                 }
             }
         },*/

        // expandAndCollapse: true,
        // animationDuration: 550,
        // animationDurationUpdate: 750
      }]
    };
  }

}
