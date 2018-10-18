import {Component, OnInit} from '@angular/core';
import {EventEmitterService} from "../../screen-display/large-screen/event-emitter.service";
import {url_main} from "../../screen-display/large-screen/config";
import {HttpClient} from "@angular/common/http";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {DetailviewComponent} from "../../screen-display/large-screen/detailview/detailview.component";
import {group} from "@angular/animations";

declare var echarts: any;

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
  mapLoaded = false;
  private activeArea = [{name: '朝阳', areaColor: '#FFE4A4'},
    {name: '丹东', areaColor: '#95D5AC'},
    {name: '大连', areaColor: '#FAF6AA'},
    {name: '铁岭', areaColor: '#E1F2DE'},
    {name: '沈阳', areaColor: '#C2D7EE'},
    {name: '抚顺', areaColor: '#FFE4A4'},
    {name: '锦州', areaColor: '#95D5AC'},
    {name: '阜新', areaColor: '#FBC8DE'},
    {name: '葫芦岛', areaColor: '#C2D7EE'},
    {name: '鞍山', areaColor: '#FBC8DE'},
    {name: '本溪', areaColor: '#FBC8DE'},
    {name: '营口', areaColor: '#E1F2DE'},
    {name: '辽阳', areaColor: '#FFE4A4'},
    {name: '盘锦', areaColor: '#FFF2B7'}];
  private levelColorMap = {
    '1': 'rgba(241, 109, 115, .8)',
    '2': 'rgba(255, 235, 59, .7)',
    '3': 'rgba(147, 235, 248, 1)'
  };
  private data = [{name: "沈阳", value: 10, level: 1},
    {name: "大连", value: 10, level: 1},
    {name: "鞍山", value: 10, level: 1},
    {name: "抚顺", value: 10, level: 1},
    {name: "本溪", value: 10, level: 1},
    {name: "丹东", value: 10, level: 1},
    {name: "铁岭", value: 10, level: 1},
    {name: "朝阳", value: 10, level: 1},
    {name: "阜新", value: 10, level: 1},
    {name: "辽阳", value: 10, level: 1},
    {name: "营口", value: 10, level: 1},
    {name: "盘锦", value: 10, level: 1},
    {name: "锦州", value: 10, level: 1},
    {name: "葫芦岛", value: 10, level: 1}];
  private geoCoordMap = {
    '大连': [121.618622,
      38.91459],
    '锦州': [121.235858,
      41.219296],
    '葫芦岛': [120.356394,
      40.555572],
    '丹东': [124.35445,
      40.500787],
    '抚顺': [124.521109,
      41.775956],
    '沈阳': [123.38, 41.8],
    '辽阳': [123.236974,
      41.267794],
    '铁岭': [124.126035,
      42.523828],
    '鞍山': [122.895632,
      40.810626],
    '盘锦': [122.06957,
      41.124484],
    '朝阳': [120.451176,
      41.576758],
    '营口': [122.535151,
      40.367432],
    '阜新': [121.648962,
      42.011796],
    '本溪': [123.970519,
      41.297909],
  };
  private chartoption = {};
  dtOptions: DataTables.Settings = {};
  model_title: any;

  constructor(private http: HttpClient, public emitService: EventEmitterService, private modalService: NgbModal) {
  }

  ngOnInit() {
    this.http.get('assets/json/210000.json').subscribe(geoJson => {
      console.log(geoJson)
      this.mapLoaded = true;
      echarts.registerMap('liaoning', geoJson);
      const levelColorMap = this.levelColorMap;
      this.chartoption = {
        tooltip: {
          show: true,
          trigger: 'item',
          showDelay: 0,
          transitionDuration: 0.2,
          formatter: '{b}'
        },
        graphic:{
          elements:[{
            type:'group',
            right:'50px',
            bottom:'50px',
            width:'200px',
            height:'200px',
            children:[{
              type:'text',
              position:[100,25],
              style:{
                text:"装备库房",
                font: '18px "STHeiti", sans-serif'
              }
            },{
              type:'image',
              left:0,
              scale:[0.4,0.4],
              style:{
                image:'assets/img/logos/kufang.png'
              }
            },]
          }]
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
          selectedMode: 'single',
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
        series: [{
          type: 'scatter',
          coordinateSystem: 'geo',
          // symbol: 'diamond',
          hoverAnimation: true,
          symbol: 'image://assets/img/logos/kufang.png',
          symbolSize: 60,
          data: this.initSeriesData(this.data)
        }]
      }
    })
  }

  onChartClick(params): void {
    // this.emitService.eventEmit.emit(params.name);
    this.dtOptions = {
      language: {     // 语言设置
        'paginate': {
          'first': '首页',
          'last': '末页',
          'next': '下一页',
          'previous': '上一页'
        },
        'zeroRecords': '没有查询到匹配的数据',
        'search': '搜索:',
        'emptyTable': '当前文件夹为空',
        'processing': '处理中...',
        'lengthMenu': '显示 _MENU_ 项结果',
        'info': '显示第 _START_ 至 _END_ 项结果，共 _TOTAL_ 项',
        'infoEmpty': '显示第 0 至 0 项结果，共 0 项',
        'infoFiltered': '(由 _MAX_ 项结果过滤)',
        'infoPostFix': '',
        'url': '',
        'loadingRecords': '载入中...',
      },
      ajax: url_main + '/m_equipment/get_data_by_city_new/' + params.name,
      columns: [
        {title: '序号', data: 'Id'},
        {title: '品名', data: 'Name'},
        {title: '数量', data: 'Num'},
        {title: '单位', data: 'Unit'},
        {title: '类别', data: 'Type'},
        {title: '型号', data: 'Model'},
        {title: '城市', data: 'City'},
      ],
    };
    this.model_title = '应急基干装备明细表';
    const modalRef = this.modalService.open(DetailviewComponent, {windowClass: 'modal-datatables'}) //myCustomModalClass自定义模态框大小，该css类写在了全局样式style.css中
    modalRef.componentInstance.dOptions = this.dtOptions;
    modalRef.componentInstance.model_title = this.model_title;
  };

  initSeriesData(data): any {
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
