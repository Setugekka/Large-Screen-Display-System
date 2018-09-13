import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Urls} from '../../shared/model/model.url';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ActivatedRoute} from '@angular/router';

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
  plan_list = [];
  style = {
    symbolSize: [200, 30],
    symbol: 'rectangle',
    itemStyle: {
      normal: {
        borderWidth: 2,
        borderColor: 'black'
      }
    }};
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
  // 获取全部预案类目
  GetAllPlan(): any {
      const data = this.http.get(this.urls.GetAllPlan)
        .toPromise()
        .then(response => response.json());
      return data;
  }
  // 添加树图样式
  form_plan(data): any {
    for (let i = 0; i < data.length; i++) {
      for (const key in this.style) {
        if (key) {
          data[i][key] = this.style[key];
        }
      }
      if (data[i]['Level']  === '2') {
        data[i]['symbolSize'] = [100, 30];
      } else if (data[i]['Level']  === '3') {
        data[i]['symbolSize'] = [100, 30];
      }
      if (data[i]['children']) {
        this.form_plan(data[i]['children']);
      } else {
        data[i]['symbolSize'] = [30, 230];
      }
    }
    return data;
  }
  //  获取预案文件地址
  GetPlan(name= null):  any {
    const params = {
      'name': name
    };
    const data = this.http.get(this.urls.GetPlan, {params: params})
      .toPromise()
      .then(response => response.json());
    return data;
  }
  constructor(private http: Http, private modalService: NgbModal, public activatedRoute: ActivatedRoute ) {}

  ngOnInit() {
    this.city_name = this.activatedRoute.snapshot.paramMap.get('Id')
    if (this.city_name === null)  {
      this.city_name = '沈阳';
    }
    this.GetAllPlan().then(r => {
      this.plan_list = r;
      const list = this.form_plan(this.plan_list)
      console.log(list)
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
          top: 25,
          left: 0,
          right: 0,
          orient: 'vertical', // vertical horizontal
          rootLocation: {
            x: '50%',
            y: '15%',
          }, // 根节点位置  {x: 'center',y: 10}
          // nodePadding: 20,
          // layerPadding: 40,
          symbol: 'rectangle',
          borderColor: 'white',
          itemStyle: {
            normal: {
              color: '#fff', // 节点背景色
              label: {
                show: true,
                position: 'inside',
                textStyle: {
                  color: 'black',
                  fontSize: 14,
                  // fontWeight:  'bolder'
                },
                formatter: function(params) {
                  if (params.data.Level === '4') {
                    let new_name = ' \n ';
                    for (let i = 0; i < params.data.name.length; i++) {
                       new_name += params.data.name[i] + ' \n ';
                    }
                    return new_name;
                  }
                },
              },
              lineStyle: {
                color: '#fff',
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
          data: list,
          expandAndCollapse: true,
          initialTreeDepth: 2,
        }]
      };
    });
  }

}
