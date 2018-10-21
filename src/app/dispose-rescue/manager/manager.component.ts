import { Component, OnInit } from '@angular/core';
import {toUnicode} from "punycode";
import {ScreenDisplayService} from "../../screen-display/screen-display.service";
import {EventEmitterService} from "../../screen-display/large-screen/event-emitter.service";

import {McAllComponent} from '../mc-all/mc-all.component';
import {HttpClient} from "@angular/common/http";
import {ModalDatatableComponent} from "../modal-datatable/modal-datatable.component";
import {url_main} from "../../screen-display/large-screen/config";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

declare var echarts:any;
@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {
  // ngOnInit() {
  //   // this.emitService.eventEmit.subscribe((value: any) => {
  //   //   // if(value == "userList") {
  //   //   //   // 这里就可以调取接口，刷新userList列表数据
  //   //   //   alert("收到了，我立马刷新列表");
  //   //   // }
  //   //   if(this.last!=null){
  //   //     this.ecinstance.dispatchAction({
  //   //       type: 'downplay',
  //   //       // 可选，系列 index，可以是一个数组指定多个系列
  //   //       seriesIndex:0,
  //   //       name:this.last
  //   //     })}
  //   //   this.last=value;
  //   //   this.ecinstance.dispatchAction({
  //   //     type: 'highlight',
  //   //     // 可选，系列 index，可以是一个数组指定多个系列
  //   //     seriesIndex:0,
  //   //     name:value
  //   //   })
  //   // });
  // }
  mapLoaded = false;
  private activeArea = [{name:'朝阳',areaColor:'#FFE4A4'},
    {name:'丹东',areaColor:'#95D5AC'},
    {name:'大连',areaColor:'#FAF6AA'},
    {name:'铁岭',areaColor:'#E1F2DE'},
    {name:'沈阳',areaColor:'#C2D7EE'},
    {name:'抚顺',areaColor:'#FFE4A4'},
    {name:'锦州',areaColor:'#95D5AC'},
    {name:'阜新',areaColor:'#FBC8DE'},
    {name:'葫芦岛',areaColor:'#C2D7EE'},
    {name:'鞍山',areaColor:'#FBC8DE'},
    {name:'本溪',areaColor:'#FBC8DE'},
    {name:'营口',areaColor:'#E1F2DE'},
    {name:'辽阳',areaColor:'#FFE4A4'},
    {name:'盘锦',areaColor:'#FFF2B7'}];
  private levelColorMap = {
    '1': 'rgba(241, 109, 115, .8)',
    '2': 'rgba(255, 235, 59, .7)',
    '3': 'rgba(147, 235, 248, 1)'
  };
  private data = [{name:"沈阳",value:10,level:1}];
  private geoCoordMap = {
    '大连': [],
    '锦州': [],
    '葫芦岛': [],
    '丹东': [],
    '抚顺': [],
    '沈阳': [123.38,41.8],
    '辽阳': [],
    '铁岭': [],
    '鞍山': [],
    '盘锦': [],
    '朝阳': [],
    '营口':[],
    '阜新':[],
    '本溪':[],
  };
  private chartoption = {};
  dtOptionscity: DataTables.Settings = {};
  dtOptionsvillage: DataTables.Settings = {};
  model_title: any;
  constructor(private http: HttpClient,public emitService: EventEmitterService,private modalService: NgbModal) { }

  ngOnInit() {
    this.http.get('assets/json/210000.json').subscribe(geoJson=>{
      console.log(geoJson)
      this.mapLoaded=true;
      echarts.registerMap('liaoning', geoJson);
      const levelColorMap = this.levelColorMap;
      this.chartoption = {
        tooltip: {
          show: true,
          trigger: 'item',
          showDelay: 0,
          transitionDuration: 0.2,
        },
        geo: [{
          id: 0,
          map: 'liaoning',
          // roam: true,
          zoom: 1.2,
          label: {
            normal: {
              show: true,
            },
            emphasis: {
              textStyle: {
                color: '#fff'
              }
            }
          },
          // selectedMode: 'single',
          itemStyle: {
            // normal: {
            //   borderColor: 'rgba(147, 235, 248, 1)',
            //   borderWidth: 1,
            //   areaColor: {
            //     type: 'radial',
            //     x: 0.5,
            //     y: 0.5,
            //     r: 0.8,
            //     colorStops: [{
            //       offset: 0,
            //       color: 'rgba(147, 235, 248, 0)' // 0% 处的颜色
            //     }, {
            //       offset: 1,
            //       color: 'rgba(147, 235, 248, .2)' // 100% 处的颜色
            //     }],
            //     globalCoord: false // 缺省为 false
            //   },
            //   shadowColor: 'rgba(128, 217, 248, 1)',
            //   // shadowColor: 'rgba(255, 255, 255, 1)',
            //   shadowOffsetX: -2,
            //   shadowOffsetY: 2,
            //   shadowBlur: 10
            // },
            normal: {
              areaColor: "lightskyblue",
              // shadowColor: 'rgba(255, 255, 255, 1)',
            },
            emphasis: {
              areaColor: '#389BB7',
              borderWidth: 0
            }
          },
          regions: this.activeArea.map(function (item) {
            if (typeof item !== 'string') {
              return {
                name: item.name,
                itemStyle: {
                  normal: {
                    areaColor: item.areaColor || '#389BB7'
                  }
                }
              };
            } else {
              return {
                name: item,
                itemStyle: {
                  normal: {
                    borderColor: '#91e6ff',
                    areaColor: '#389BB7'
                  }
                }
              }
            }
          })
        },
        ],
        series:[{
          type: 'effectScatter',
          coordinateSystem: 'geo',
          // symbol: 'diamond',
          showEffectOn: 'render',
          rippleEffect: {
            period: 15,
            scale: 6,
            brushType: 'fill'
          },
          hoverAnimation: true,
          itemStyle: {
            normal: {
              color: function (params) {
                return levelColorMap[params.value[3]];
              },
              shadowBlur: 10,
              shadowColor: '#333'
            }
          },
          data: this.initSeriesData(this.data)
        }]
      }
    })
  }

  onChartClick(params): void{
    this.dtOptionscity = {
      language: {     // 语言设置
        'paginate': {
          'first':      '首页',
          'last':       '末页',
          'next':       '下一页',
          'previous':   '上一页'
        },
        'zeroRecords':    '没有查询到匹配的数据',
        'search': '搜索:',
        'emptyTable':     '当前文件夹为空',
        'processing': '处理中...',
        'lengthMenu': '显示 _MENU_ 项结果',
        'info': '显示第 _START_ 至 _END_ 项结果，共 _TOTAL_ 项',
        'infoEmpty': '显示第 0 至 0 项结果，共 0 项',
        'infoFiltered': '(由 _MAX_ 项结果过滤)',
        'infoPostFix': '',
        'url': '',
        'loadingRecords': '载入中...',
      },
      ajax: url_main + '/c_manager/get_data_by_city/' + params.name,
      columns: [
        {title:'序号',data:'Id'},
        {title:'姓名',data:'Name'},
        {title:'基干分队职务',data:'Post'},
        {title:'出生年月',data:'Birthday'},
        {title:'学历',data:'Education'},
        {title:'所属单位',data:'Department'},
        {title:'从事专业',data:'Major'},
        {title:'电话/短号',data:'Phone'},
        {title:'上次培训时间',data:'Date_training'},
        {title:'城市',data:'City'}
      ],
    };
    this.dtOptionsvillage = {
      language: {     // 语言设置
        'paginate': {
          'first':      '首页',
          'last':       '末页',
          'next':       '下一页',
          'previous':   '上一页'
        },
        'zeroRecords':    '没有查询到匹配的数据',
        'search': '搜索:',
        'emptyTable':     '当前文件夹为空',
        'processing': '处理中...',
        'lengthMenu': '显示 _MENU_ 项结果',
        'info': '显示第 _START_ 至 _END_ 项结果，共 _TOTAL_ 项',
        'infoEmpty': '显示第 0 至 0 项结果，共 0 项',
        'infoFiltered': '(由 _MAX_ 项结果过滤)',
        'infoPostFix': '',
        'url': '',
        'loadingRecords': '载入中...',
      },
      ajax: url_main + '/v_manager/get_data_by_city/' + params.name,
      columns: [
        {title:'序号',data:'Id'},
        {title:'姓名',data:'Name'},
        {title:'基干分队职务',data:'Post'},
        {title:'出生年月',data:'Birthday'},
        {title:'学历',data:'Education'},
        {title:'所属单位',data:'Department'},
        {title:'从事专业',data:'Major'},
        {title:'电话/短号',data:'Phone'},
        {title:'上次培训时间',data:'Date_training'},
        {title:'城市',data:'City'}
      ],
    };
    this.model_title = '应急基干分队人员信息表';
    const modalRef = this.modalService.open(ModalDatatableComponent,{windowClass:'modal-datatables'}) //myCustomModalClass自定义模态框大小，该css类写在了全局样式style.css中
    modalRef.componentInstance.dOptionscity = this.dtOptionscity;
    modalRef.componentInstance.dOptionsvillage = this.dtOptionsvillage;
    modalRef.componentInstance.model_title = this.model_title;
  };

  onChartMouseOver(params): void{
    this.emitService.eventEmit.emit(params.name);
  }

  initSeriesData(data):any{
    var temp = [];
    for (var i = 0; i < data.length; i++) {
      var geoCoord = this.geoCoordMap[data[i].name];
      if (geoCoord) {
        temp.push({
          name: data[i].name,
          value: geoCoord.concat(data[i].value, data[i].level)
        });
      }
    }
    return temp;
  };
}
