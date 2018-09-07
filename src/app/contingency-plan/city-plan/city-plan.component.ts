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
  city_name = '沈阳'
  town_name = '请选择区县'
  town_list = ['和平区','浑南区','皇姑区','沈河区','大东区','铁西区','苏家屯区','沈北新区','于洪区','辽中区','新民市','康平县','法库县']
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
    }, {
      'name': '台风',
      'draggable': true,
      'category': '自然灾害类',
      'url': '/assets/pdf/test.pdf'
    }, {
      'name': '防汛',
      'draggable': true,
      'category': '自然灾害类',
      'url': '/assets/pdf/test.pdf'
    }, {
      'name': '雨雪冰冻',
      'draggable': true,
      'category': '自然灾害类',
      'url': '/assets/pdf/test.pdf'
    }, {
      'name': '地震',
      'draggable': true,
      'category': '自然灾害类',
      'url': '/assets/pdf/test.pdf'
    }, {
      'name': '地质灾害',
      'draggable': true,
      'category': '自然灾害类',
      'url': '/assets/pdf/test.pdf'
    }, {
      'name': '大面积停电',
      'draggable': true,
      'category': '事故灾难类',
      'url': '/assets/pdf/test.pdf'
    }, {
      'name': '人身伤亡',
      'draggable': true,
      'category': '事故灾难类',
      'url': '/assets/pdf/test.pdf'
    }, {
      'name': '交通事故',
      'draggable': true,
      'category': '事故灾难类',
      'url': '/assets/pdf/test.pdf'
    }, {
      'name': '设备事故',
      'draggable': true,
      'category': '事故灾难类',
      'url': '/assets/pdf/test.pdf'
    }, {
      'name': '生产火灾',
      'draggable': true,
      'category': '事故灾难类',
      'url': '/assets/pdf/test.pdf'
    }, {
      'name': '通信事故',
      'draggable': true,
      'category': '事故灾难类',
      'url': '/assets/pdf/test.pdf'
    }, {
      'name': '网络',
      'draggable': true,
      'category': '事故灾难类',
      'url': '/assets/pdf/test.pdf'
    },
    {
      'name': '环境污染',
      'draggable': true,
      'category': '事故灾难类',
      'url': '/assets/pdf/test.pdf'
    }, {
      'name': '公共卫生',
      'draggable': true,
      'category': '公共卫生类',
      'url': '/assets/pdf/test.pdf'
    }, {
      'name': '电力服务',
      'draggable': true,
      'category': '社会安全类',
      'url': '/assets/pdf/test.pdf'
    }, {
      'name': '重要保电',
      'draggable': true,
      'category': '社会安全类',
      'url': '/assets/pdf/test.pdf'
    }, {
      'name': '群体事件',
      'draggable': true,
      'category': '社会安全类',
      'url': '/assets/pdf/test.pdf'
    },
    {
      'name': '新闻突发事件',
      'draggable': true,
      'category': '社会安全类',
      'url': '/assets/pdf/test.pdf'
    }
  ];
  category = [
    {
      'name': '整体预案体系'
    },{
      'name': '自然灾害类'
    }, {
      'name': '事故灾难类'
    },{
      'name': '公共卫生类'
    }, {
      'name': '社会安全类'
    }
  ];
  links = [
    {
      'target': '台风',
      'source': '整体预案体系',
      'category': '自然灾害类'
    }, {
      'target': '防汛',
      'source': '整体预案体系',
      'category': '自然灾害类'
    }, {
      'target': '雨雪冰冻',
      'source': '整体预案体系',
      'category': '自然灾害类'
    }, {
      'target': '地震',
      'source': '整体预案体系',
      'category': '自然灾害类'
    }, {
      'target': '地质灾害',
      'source': '整体预案体系',
      'category': '自然灾害类'
    }, {
      'target': '大面积停电',
      'source': '整体预案体系',
      'category': '事故灾难类'
    }, {
      'target': '人身伤亡',
      'source': '整体预案体系',
      'category': '事故灾难类'
    }, {
      'target': '交通事故',
      'source': '整体预案体系',
      'category': '事故灾难类'
    }, {
      'target': '设备事故',
      'source': '整体预案体系',
      'category': '事故灾难类'
    }, {
      'target': '生产火灾',
      'source': '整体预案体系',
      'category': '事故灾难类'
    }, {
      'target': '通信事故',
      'source': '整体预案体系',
      'category': '事故灾难类'
    }, {
      'target': '网络',
      'source': '整体预案体系',
      'category': '事故灾难类'
    }, {
      'target': '环境污染',
      'source': '整体预案体系',
      'category': '事故灾难类'
    }, {
      'target': '公共卫生',
      'source': '整体预案体系',
      'category': '公共卫生类'
    }, {
      'target': '电力服务',
      'source': '整体预案体系',
      'category': '社会安全类'
    }, {
      'target': '重要保电',
      'source': '整体预案体系',
      'category': '社会安全类'
    }, {
      'target': '群体事件',
      'source': '整体预案体系',
      'category': '社会安全类'
    }, {
      'target': '新闻突发事件',
      'source': '整体预案体系',
      'category': '社会安全类'
    }
  ];
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
  return(): any {
    this.town_name = '请选择区县';
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
      series: [
        {
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
        bottom: 80,
        data: this.data,
        categories: this.category,
        type: 'graph',
        focusNodeAdjacency: true,
        force: {
          repulsion: 1000,
          edgeLength: [150, 300],
          layoutAnimation: false,
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
