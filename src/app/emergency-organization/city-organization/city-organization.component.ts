import { Component, OnInit } from '@angular/core';
import {Urls} from '../../shared/model/model.url';
import {Http} from '@angular/http';

@Component({
  selector: 'app-city-organization',
  templateUrl: './city-organization.component.html',
  styleUrls: ['./city-organization.component.css']
})
export class CityOrganizationComponent implements OnInit {
  city_list = ['沈阳' , '大连', '鞍山', '抚顺', '本溪', '丹东' , '锦州', '营口', '阜新', '辽阳', '盘锦' , '铁岭', '朝阳', '葫芦岛', '省检修']
  city_name = '请选择城市'
  town_name = '请选择区县'
  town_list = []
  data1 = [
    {name:'沈阳',value:['和平区','浑南区','皇姑区','沈河区','大东区','铁西区','苏家屯区','沈北新区','于洪区','辽中区','新民市','康平县','法库县']},
    {name:'大连',value:['中山区','西岗区','沙河口区','甘井子区','旅顺口区','金州区','普兰店区','瓦房店市','庄河市','长海县']},
    {name:'鞍山',value:['铁东区','铁西区','立山区','千山区','海城市','台安县','岫岩满族自治县']},
    {name:'抚顺',value:['新抚区','顺城区','望花区','东洲区','抚顺县','新宾满族自治县','清原满族自治县']},
    {name:'本溪',value:['平山区','溪湖区','明山区','南芬区','本溪满族自治县','桓仁满族自治县']},
    {name:'丹东',value:['元宝区','振兴区','振安区','东港市','凤城市','宽甸满族自治县']},
    {name:'盘锦',value:[	'双台子区','兴隆台区','大洼区','盘山县']},
    {name:'营口',value:['站前区','西市区','鲅鱼圈区','老边区','盖州市','大石桥市']},
    {name:'葫芦岛',value:['连山区','龙港区','南票区','兴城市','绥中县','建昌县']},
    {name:'朝阳',value:['双塔区','龙城区','北票市','凌源市','朝阳县','建平县','喀喇沁左翼蒙古族自治县']},
    {name:'阜新',value:['海州区','新邱区','太平区','清河门区','细河区','阜新蒙古族自治县','彰武县']},
    {name:'辽阳',value:['白塔区','文圣区','宏伟区','弓长岭区','太子河区','灯塔市','辽阳县']},
    {name:'铁岭',value:['银州区','清河区','调兵山市','开原市','铁岭县','昌图县','西丰县']},
    {name:'锦州',value:['古塔区','凌河区','太和区','凌海市','北镇市','黑山县','义县]']},
  ];
  data_init = {
    name: '应急领导小组',
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
  option: any;
  private  urls = Urls;
  private  data = {};         // 后台获取数据
  choosetown(city): any {
    this.city_name = city
    this.town_name = '请选择区县'
   for (const i of this.data1) {
        if (i.name === city) {
          this.town_list = i.value;
        }
      }
      console.log(this.city_list);
  }
  choosentown(town): any {
    this.town_name = town;
  }
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
  constructor(private http: Http) { }

  ngOnInit() {
    this.option = {
    //   title: {
    //     text: '组织结构图',
    //     textAlign: 'center',
    //     left: '50%',
    //     top: '20',
    //     textStyle: {
    //       color: '#FFF',
    //       fontWeight: 'normal',
    //       fontSize: 36,
    //     },
    //     formatter: function() {
    //       if (this.city_name === '请选择城市' ) {
    //         return '辽宁省组织结构图';
    //       } else if (this.town_name === '请选择区县') {
    //         return '辽宁省' && this.city_name && '市组织结构图';
    //       } else {
    //         return '辽宁省' && this.city_name && '市' && this.town_name && '组织结构图';
    //       }
    //     }
    //   },
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
        data: [this.data_init],
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
