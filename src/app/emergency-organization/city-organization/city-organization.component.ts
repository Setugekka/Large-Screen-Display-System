import { Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Urls} from '../../shared/model/model.url';
import {Http} from '@angular/http';

@Component({
  selector: 'app-city-organization',
  templateUrl: './city-organization.component.html',
  styleUrls: ['./city-organization.component.css']
})
export class CityOrganizationComponent implements OnInit {
  city_list = ['沈阳' , '大连', '鞍山', '抚顺', '本溪', '丹东' , '锦州', '营口', '阜新', '辽阳', '盘锦' , '铁岭', '朝阳', '葫芦岛', '省检修']
  city_name = '沈阳'
  town_name = '请选择区县'
  town_list = ['和平区','浑南区','皇姑区','沈河区','大东区','铁西区','苏家屯区','沈北新区','于洪区','辽中区','新民市','康平县','法库县']
  // 各个城市的区县
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
  // 初始树图（暂搁置）
  data_init = {
    'name': '沈阳市应急领导小组',
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
  // 组织结构图层级元素
  data_all = [{
    name: '应急领导小组',
    value: 1
  }, {
    name: '安全应急办公室',
    value: 2
  }, {
    name: '稳定应急办公室',
    value: 2
  }, {
    name: '办公室',
    value: 3
  }, {
    name: '保卫部',
    value: 3
  }, {
    name: '建设部',
    value: 3
  }, {
    name: '电力调度控制中心',
    value: 3
  }, {
    name: '运维检修部',
    value: 3
  }, {
    name: '营销部',
    value: 3
  }, {
    name: '信息通信分公司',
    value: 3
  }, {
    name: '物资供应中心',
    value: 3
  }, {
    name: '综合服务',
    value: 3
  }, {
    name: '输电运检室',
    value: 4
  }, {
    name: '变电运维室',
    value: 4
  }, {
    name: '变电检修室',
    value: 4
  }, {
    name: '配电运检室',
    value: 4
  }, {
    name: '电缆运检室',
    value: 4
  }, {
    name: '带电作业室',
    value: 4
  }, {
    name: '和平客户服务分中心',
    value: 4
  }, {
    name: '沈河客户服务分中心',
    value: 4
  }, {
    name: '大东客户服务分中心',
    value: 4
  }, {
    name: '皇姑客户服务分中心',
    value: 4
  }, {
    name: '铁西客户服务分中心',
    value: 4
  }, {
    name: '浑南客户服务分中心',
    value: 4
  }, {
  name: '开发区客户服务分中心',
  value: 4
}, {
  name: '国网新民市供电公司',
    value: 4
}, {
  name: '国网沈阳市辽中区供电公司',
    value: 4
}, {
  name: '国网沈阳市苏家屯区供电公司',
  value: 4
}, {
  name: '国网沈阳市沈北新区供电公司',
    value: 4
}, {
  name: '国网沈阳市于洪区供电公司',
    value: 4
}, {
  name: '国网沈阳市法库县供电公司',
    value: 4
}, {
  name: '国网康平县供电公司',
    value: 4
}, {
  name: '国网沈阳市东陵区供电公司',
    value: 4
}];
  data_1 = [];
  data_2 = [];
  data_3 = [];
  data_4 = [];
  option: any;
  option_sankey: any;
  links = [];
  private all_content = [
    {name: '应急领导小组', value: '贯彻落实国家应急管理法律法规、方针政策及标准体系。。。'},
    {name: '安全应急办公室', value: '安全应急办公室设在公司安质部。。。'},
    {name: '稳定应急办公室', value: '稳定应急办公室设在公司办公室、负责公共卫生。。。'},
    {name: '公司各部门', value: '各职能部门按照“谁主管、谁负责”原则。。。'},
    {name: '公司各供电公司及单位', value: '公司各供电公司下设安全应急办公室和稳定应急办公室。。。'}

];
  private content = '贯彻落实国家应急管理法律法规、方针政策及标准体系。。。';
  private chosen_name = '应急领导小组';
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
    this.GetOrgaization('应急领导小组').then(r => {
      this.data = r;
      const a = this.data['name'];
      console.log(r)
      if (this.town_name !== '请选择区县') {
        this.data['name'] = this.city_name + '市' + this.town_name + a;
        console.log(this.town_name);
      } else {
        this.data['name'] = this.city_name + '市' + a;
      }
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
    });

  }
  choosentown(town): any {
    this.town_name = town;
    this.GetOrgaization('应急领导小组').then(r => {
      this.data = r;
      const a = this.data['name'];
      if (this.town_name !== '请选择区县') {
        this.data['name'] = this.city_name + '市' + this.town_name + a;
      } else {
        this.data['name'] = this.city_name + '市' + a;
      }

      // console.log(this.data[name])
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
    });
  }
  setup_link(data): any {
    for (const i of data) {
      if (i) {
        switch (i.value) {
          case 1:
            this.data_1.push(i);
            break;
          case 2:
            this.data_2.push(i);
            break;
          case 3:
            this.data_3.push(i);
            break;
          case 4:
            this.data_4.push(i);
            break;
        }
      }
    }
    for (const a of this.data_1) {
      if (a) {
        console.log(a);
        for (const b of this.data_2) {
          if (b) {
            this.links.push({
              source: a.name,
              target: b.name,
              value: 1,
            });
          }
        }
      }
    }
    for (const a of this.data_2) {
      if (a) {
        for (const b of this.data_3) {
          if (b) {
            this.links.push({
              source: a.name,
              target: b.name,
              value: 1,
            });
          }
        }
      }
    }
    for (const a of this.data_3) {
      if (a) {
        for (const b of this.data_4) {
          if (b) {
            this.links.push({
              source: a.name,
              target: b.name,
              value: 1,
            });
          }
        }
      }
    }
  }
  return(): any {
    this.town_name = '请选择区县';
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
      const a = this.data['name'];
      if (this.town_name !== '请选择区县') {
        this.data['name'] = this.city_name + '市' + this.town_name + a;
      } else {
        this.data['name'] = this.city_name + '市' + a;
      }

      // console.log(this.data[name])
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
    });
      // console.log(value);
  }
  show_content(event) {
    for (const i of this.all_content) {
      if (i.name === event.data.source) {
        this.chosen_name = event.data.source;
        this.content = i.value;
        console.log(i);
      }
    }
    console.log(this.content);
  }
  constructor(private http: Http, public activatedRoute: ActivatedRoute ) {
  }

  ngOnInit() {
    this.city_name = this.activatedRoute.snapshot.paramMap.get('Id')
    if (this.city_name === null)  {
      this.city_name = '沈阳';
      // console.log(this.city_name);
    }
    this.setup_link(this.data_all);
    // console.log(this.links);
    this.option_sankey = {
      series: {
        type: 'sankey',
        layout: 'none',
        data: this.data_all,
        links: this.links,
        itemStyle: {
          normal: {
            borderWidth: 1,
            borderColor: '#aaa'
          }
        },
        lineStyle: {
          normal: {
            color: 'source',
            curveness: 0.5
          }
        },
        label: {
          normal: {
            color: 'white',
            fontSize: 14,
          }
        }
      }
    };
  }

}
