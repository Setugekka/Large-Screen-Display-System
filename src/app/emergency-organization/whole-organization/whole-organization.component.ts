import { Component, OnInit } from '@angular/core';
import {Urls} from '../../shared/model/model.url';
import {Http} from '@angular/http';
import { Router} from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {PicShowComponent} from '../pic-show/pic-show.component';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-whole-organization',
  templateUrl: './whole-organization.component.html',
  styleUrls: ['./whole-organization.component.css']
})
export class WholeOrganizationComponent implements OnInit {

  // private datasource=[{"level":1,"data":[{'name': '超长内容哈哈哈哈啦啦啦啦啦',
  //     'title': 'senior engineer',
  //     'className': 'rd-dept'}]},{"level":2,"data":[{'name': '沈阳市', 'title': 'engineer', 'className': 'frontend1'},{'name': '超长内容哈哈哈哈啦啦啦啦啦',
  //     'title': 'senior engineer',
  //     'className': 'product-dept'}]},{"level":3,"data":[{'name': '超长内容哈哈哈哈啦啦啦啦啦',
  //     'title': 'UE engineer',
  //     'className': 'yellow'},{'name': '测试',
  //     'title': 'UE engineer',
  //     'className': 'frontend1'},{'name': '测试',
  //     'title': 'UE engineer',
  //     'className': 'frontend1'}]},{"level":3,"data":[{'name': '测试',
  //     'title': 'UE engineer',
  //     'className': 'frontend1'},{'name': '超长内容哈哈哈哈啦啦啦啦啦',
  //     'title': 'UE engineer',
  //     'className': 'frontend1'},{'name': '测试',
  //     'title': 'UE engineer',
  //     'className': 'frontend1'}]}];
  // private datasource = [
  //   {"level":1,"data":[{'name': '应急领导小组',
  //       'title': '',
  //       'className': 'rd-dept'}]},
  //   {"level":2,"data":[{'name': '安全应急办公室', 'title': '', 'className': 'frontend1'},{'name': '稳定应急办公室',
  //       'title': '',
  //       'className': 'product-dept'}]},
  //   {"level":3,"data":[{'name': '办公室',
  //       'title': '',
  //       'className': 'yellow'},{'name': '安全监察质量部',
  //       'title': '保卫部',
  //       'className': 'frontend1'},{'name': '建设部',
  //       'title': '项目管理中心',
  //       'className': 'frontend1'},
  //       {'name': '电力调度控制中心',
  //         'title': '',
  //         'className': 'yellow'},{'name': '运维检修部',
  //         'title': '',
  //         'className': 'frontend1'},{'name': '营销部',
  //         'title': '农电工作部',
  //         'className': 'frontend1'},{'name': '信息通信分公司',
  //         'title': '',
  //         'className': 'yellow'},{'name': '物资供应中心',
  //         'title': '',
  //         'className': 'frontend1'},{'name': '综合服务',
  //         'title': '',
  //         'className': 'frontend1'}]},{"level":4,"data":[{'name': '输电运检室',
  //       'title': '',
  //       'className': 'frontend1'},{'name': '变电运维室',
  //       'title': '',
  //       'className': 'frontend1'},{'name': '变电检修室',
  //       'title': '',
  //       'className': 'frontend1'},{'name': '配电运检室',
  //       'title': '',
  //       'className': 'frontend1'},{'name': '电缆运检室',
  //       'title': '',
  //       'className': 'frontend1'},{'name': '带电作业室',
  //       'title': '',
  //       'className': 'frontend1'},{'name': '和平客户服务分中心',
  //       'title': '',
  //       'className': 'frontend1'},{'name': '沈河客户服务分中心',
  //       'title': '',
  //       'className': 'frontend1'},{'name': '大东客户服务分中心',
  //       'title': 'r',
  //       'className': 'frontend1'},{'name': '皇姑客户服务分中心',
  //       'title': '',
  //       'className': 'frontend1'},{'name': '铁西客户服务分中心',
  //       'title': '',
  //       'className': 'frontend1'},{'name': '浑南客户服务分中心',
  //       'title': '',
  //       'className': 'frontend1'},{'name': '开发区客户服务分中心',
  //       'title': '',
  //       'className': 'frontend1'},{'name': '国网新民市供电公司',
  //       'title': '',
  //       'className': 'frontend1'},{'name': '国网沈阳市辽中区供电公司',
  //       'title': 'r',
  //       'className': 'frontend1'},{'name': '国网沈阳市苏家屯区供电公司',
  //       'title': '',
  //       'className': 'frontend1'},{'name': '国网沈阳市沈北新区供电公司',
  //       'title': '',
  //       'className': 'frontend1'},{'name': '国网沈阳市于洪区供电公司',
  //       'title': '',
  //       'className': 'frontend1'},{'name': '国网沈阳市法库县供电公司',
  //       'title': 'r',
  //       'className': 'frontend1'},{'name': '国网沈阳市康平县供电公司',
  //       'title': '',
  //       'className': 'frontend1'},{'name': '国网沈阳市东陵区供电公司',
  //       'title': '',
  //       'className': 'frontend1'}]}];
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
    this.router.navigate(['/EmergencyOrganization/CityOrganization', {Id: event.name}]);
  }
  GetCityList():  any {
    const data = this.http.get(this.urls.GetCityList)
      .toPromise()
      .then(response => response.json());
    return data;
  }
  constructor(private http: Http, private router: Router, private modalService: NgbModal, public activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    // $("#orgchart-container").on("click",".org-node",e=>{
    //     const i=e.currentTarget.getAttribute("data-value")
    //     this.router.navigate(['/EmergencyOrganization/CityOrganization', {Id:i}]);
    // })
    // this.GetCityList().then(r => {
    //   this.city_list = r;
    //   const list = this.form_city(this.city_list);
    //   // this.option = {
    //   //   title: {
    //   //     text: ''
    //   //   },
    //   //   tooltip: {
    //   //     show: false,
    //   //     trigger: 'item',
    //   //     formatter: '{b}: {c}'
    //   //   },
    //   //   toolbox: {
    //   //     show: true,
    //   //     feature: {
    //   //       mark: {
    //   //         show: true
    //   //       },
    //   //       dataView: {
    //   //         show: false,
    //   //         readOnly: false
    //   //       },
    //   //       restore: {
    //   //         show: false
    //   //       },
    //   //       saveAsImage: {
    //   //         show: false
    //   //       }
    //   //     }
    //   //   },
    //   //   calculable: false,
    //   //   series: [{
    //   //     name: '树图',
    //   //     type: 'tree',
    //   //     orient: 'vertical', // vertical horizontal
    //   //     rootLocation: {
    //   //       x: '50%',
    //   //       y: '15%'
    //   //     }, // 根节点位置  {x: 'center',y: 10}
    //   //     nodePadding: 20,
    //   //     layerPadding: 40,
    //   //     left: 0,
    //   //     right: 0,
    //   //     symbol: 'rectangle',
    //   //     borderColor: 'black',
    //   //     itemStyle: {
    //   //       normal: {
    //   //         color: '#fff', // 节点背景色
    //   //         label: {
    //   //           show: true,
    //   //           position: 'inside',
    //   //           textStyle: {
    //   //             color: 'black',
    //   //             fontSize: 15,
    //   //             // fontWeight:  'bolder'
    //   //           }
    //   //         },
    //   //         lineStyle: {
    //   //           color: 'black',
    //   //           width: 1,
    //   //           type: 'broken' // 'curve'|'broken'|'solid'|'dotted'|'dashed'
    //   //         }
    //   //       },
    //   //       emphasis: {
    //   //         label: {
    //   //           show: false
    //   //         }
    //   //       }
    //   //     },
    //   //     data: list
    //   //   }]
    //   // };
    // });
  }
  open_picture(event) {
    // console.log(event.target['src']);
    // FileModalClass自定义模态框大小，该css类写在了全局样式style.css中
     const modalRef = this.modalService.open(PicShowComponent, {windowClass: 'PictureModalClass'});
     modalRef.componentInstance.url = event.target['src'];
  }
}
