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
    'name': '应急领导小组',
    'children': [{
      'name': '安全应急办公室',
      'children': [{
        'name': '项目管理中心',
      }, {
        'name': '电力调试控制中心',
      }, {
        'name': '安全监察质量部',
      }, {
        'name': '办公中心',
      }]
    }, {
      'name': '稳定应急办公室',
      'children': [{
        'name': '运维检修部',
      }, {
        'name': '农电工作部',
      }, {
        'name': '信息通讯中心',
      }, {
        'name': '物资供应中心',
      }, {
        'name': '综合服务',
      }]
    }, {
      'name': '紧急灾难处理中心',
      'children': [{
        'name': '变电抢修',
      }, {
        'name': '二次抢修',
      }, {
        'name': '物资调配',
      }, {
        'name': '通讯中心',
      }, {
        'name': '医疗分队',
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
      // console.log(this.data)
      this.option = {
        tooltip: {
          trigger: 'item',
          triggerOn: 'mousemove',
          formatter: function(params) {
            return params.data.create && `负责人：${params.data.create}`;
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
          return params.data.create && `负责人：${params.data.create}`;
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
