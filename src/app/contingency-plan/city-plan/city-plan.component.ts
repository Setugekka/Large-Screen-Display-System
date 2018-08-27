import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Urls} from '../../shared/model/model.url';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-city-plan',
  templateUrl: './city-plan.component.html',
  styleUrls: ['./city-plan.component.css']
})
export class CityPlanComponent implements OnInit {
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
  option: any;
  data = [
    {
      'name': '整体预案体系',
      'draggable': true,
      'category': '整体预案体系',
      'url': '/assets/pdf/test.pdf'
    },{
      'name': '专项1',
      'draggable': true,
      'category': '专项1',
      'url': '/assets/pdf/test.pdf'
    }, {
      'name': '专项2',
      'draggable': true,
      'category': '专项2',
      'url': '/assets/pdf/test.pdf'
    }, {
      'name': '专项3',
      'draggable': true,
      'category': '专项3',
      'url': '/assets/pdf/test.pdf'
    }, {
      'name': '专项4',
      'draggable': true,
      'category': '专项4',
      'url': '/assets/pdf/test.pdf'
    }, {
      'name': '专项5',
      'draggable': true,
      'category': '专项5',
      'url': '/assets/pdf/test.pdf'
    }, {
      'name': '专项6',
      'draggable': true,
      'category': '专项6',
      'url': '/assets/pdf/test.pdf'
    }, {
      'name': '专项7',
      'draggable': true,
      'category': '专项7',
      'url': '/assets/pdf/test.pdf'
    }, {
      'name': '专项8',
      'draggable': true,
      'category': '专项8',
      'url': '/assets/pdf/test.pdf'
    }, {
      'name': '专项9',
      'draggable': true,
      'category': '专项9',
      'url': '/assets/pdf/test.pdf'
    }, {
      'name': '专项10',
      'draggable': true,
      'category': '专项10',
      'url': '/assets/pdf/test.pdf'
    }, {
      'name': '专项11',
      'draggable': true,
      'category': '专项11',
      'url': '/assets/pdf/test.pdf'
    }, {
      'name': '专项12',
      'draggable': true,
      'category': '专项12',
      'url': '/assets/pdf/test.pdf'
    },
    {
      'name': '专项13',
      'draggable': true,
      'category': '专项13',
      'url': '/assets/pdf/test.pdf'
    }, {
      'name': '专项14',
      'draggable': true,
      'category': '专项14',
      'url': '/assets/pdf/test.pdf'
    }, {
      'name': '专项15',
      'draggable': true,
      'category': '专项15',
      'url': '/assets/pdf/test.pdf'
    }, {
      'name': '专项16',
      'draggable': true,
      'category': '专项16',
      'url': '/assets/pdf/test.pdf'
    }, {
      'name': '专项17',
      'draggable': true,
      'category': '专项17',
      'url': '/assets/pdf/test.pdf'
    },
    {
      'name': '专项18',
      'draggable': true,
      'category': '专项18',
      'url': '/assets/pdf/test.pdf'
    }];
  category = [
    {
      'name': '整体预案体系'
    },{
      'name': '专项1'
    }, {
      'name': '专项2'
    },{
      'name': '专项3'
    }, {
      'name': '专项4'
    },{
      'name': '专项5'
    }, {
      'name': '专项6'
    },{
      'name': '专项7'
    }, {
      'name': '专项8'
    },{
      'name': '专项9'
    }, {
      'name': '专项10'
    },{
      'name': '专项11'
    }, {
      'name': '专项12'
    }, {
      'name': '专项13'
    }, {
      'name': '专项14'
    }, {
      'name': '专项15'
    }, {
      'name': '专项16'
    },{
      'name': '专项17'
    }, {
      'name': '专项18'
    }];
  links = [
    {
    'target': '专项1',
    'source': '整体预案体系',
    'category': '专项1'
  }, {
    'target': '专项2',
    'source': '整体预案体系',
    'category': '专项2'
  }, {
    'target': '专项3',
    'source': '整体预案体系',
    'category': '专项3'
  }, {
    'target': '专项4',
    'source': '整体预案体系',
    'category': '专项4'
  }, {
    'target': '专项5',
    'source': '整体预案体系',
    'category': '专项5'
  }, {
    'target': '专项6',
    'source': '整体预案体系',
    'category': '专项6'
  }, {
    'target': '专项7',
    'source': '整体预案体系',
    'category': '专项7'
  }, {
    'target': '专项8',
    'source': '整体预案体系',
    'category': '专项8'
  }, {
    'target': '专项9',
    'source': '整体预案体系',
    'category': '专项9'
  }, {
    'target': '专项10',
    'source': '整体预案体系',
    'category': '专项10'
  }, {
    'target': '专项11',
    'source': '整体预案体系',
    'category': '专项11'
  }, {
    'target': '专项12',
    'source': '整体预案体系',
    'category': '专项12'
  }, {
    'target': '专项13',
    'source': '整体预案体系',
    'category': '专项13'
  }, {
    'target': '专项14',
    'source': '整体预案体系',
    'category': '专项14'
  }, {
    'target': '专项15',
    'source': '整体预案体系',
    'category': '专项15'
  }, {
    'target': '专项16',
    'source': '整体预案体系',
    'category': '专项16'
  }, {
    'target': '专项17',
    'source': '整体预案体系',
    'category': '专项17'
  }, {
    'target': '专项18',
    'source': '整体预案体系',
    'category': '专项18'
  }];
  private name = '';  // 专项文件名称
  private  urls = Urls;
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
  onChartClick(event) {
    this.name = event.name;
    if (this.city_name === '请选择城市') {
      alert('请选择城市');
    } else if (this.town_name === '请选择区县') {
      alert('请选择区县');
    } else {
      this.GetPlan(this.name).then(r => {
        const url = 'http://localhost:4200/src' + r;
        window.open(url);
      });
      console.log(this.name);
    }
  }
  GetPlan(name= null):  any {
    const params = {
      'name': name
    };
    const data = this.http.get(this.urls.GetPlan, {params: params})
      .toPromise()
      .then(response => response.json());
    return data;
  }
  constructor(private http: Http, private modalService: NgbModal) { }

  ngOnInit() {
    this.option = {
      tooltip: {
        formatter: function(param) {
          if (param.dataType === 'edge') {
            return param.data.category + ': ' + param.data.target;
          }
          return param.data.category + ': ' + param.data.name;
        }
      },
      title: {
        text: '各地市应急预案体系',
        textAlign: 'center',
        left: '50%',
        top: '20',
        textStyle: {
          color: '#FFF',
          fontWeight: 'normal',
          fontSize: 36,
        }
      },
      series: [{
        top: 150,
        label: {
          normal: {
            show: true,
            position: "inside",
            textStyle: {
              fontSize: 18
            }
          }
        },
        roam: true,
        edgeLabel: {
          normal: {
            show: true,
            formatter: function(param) {
              return param.data.category;
            },
            textStyle: {
              fontSize: 16
            }
          }
        },
        "bottom": 80,
        "data": this.data,
        "categories": this.category,
        "type": "graph",
        "focusNodeAdjacency": true,
        "force": {
          "repulsion": 1000,
          "edgeLength": [150, 300]
        },
        "layout": "force",
        "symbolSize": [120, 30],
        "links": this.links,
        "symbol": "path://M19.300,3.300 L253.300,3.300 C262.136,3.300 269.300,10.463 269.300,19.300 L269.300,21.300 C269.300,30.137 262.136,37.300 253.300,37.300 L19.300,37.300 C10.463,37.300 3.300,30.137 3.300,21.300 L3.300,19.300 C3.300,10.463 10.463,3.300 19.300,3.300 Z",
        "lineStyle": {
          "normal": {
            "opacity": 0.9,
            "width": 1,
            "curveness": 0.1
          }
        }
      }],
      "animationEasingUpdate": "quinticInOut",
      "animationDurationUpdate": 1500
    };
  }

}
