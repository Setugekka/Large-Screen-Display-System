import { Component, OnInit } from '@angular/core';
import {EventEmitterService} from '../../screen-display/large-screen/event-emitter.service';
import { Http } from '@angular/http';
import { Urls} from '../../shared/model/model.url';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {SingleDatatableComponent} from '../single-datatable/single-datatable.component';
import {url_main} from '../../screen-display/large-screen/config';
declare var echarts: any;

@Component({
  selector: 'app-mc-edu',
  templateUrl: './mc-edu.component.html',
  styleUrls: ['./mc-edu.component.css']
})
export class McEduComponent implements OnInit {

  private bar_option: any;
  private current_city = null;
  dtOptions: DataTables.Settings = {};
  model_title: any;
  private  urls = Urls;
  GetCityManager_Edu(city= null):  any {
    const params = {
      'city': city
    };
    const data = this.http.get(this.urls.GetCityManager_Edu, {params: params})
      .toPromise()
      .then(response => response.json());
    return data;
  }
  click(params): void {
    this.dtOptions = {
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
      ajax: url_main + '/c_manager/get_data_by_edu/' + this.current_city + '/'  + params.name,
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
    this.model_title = '县应急基干分队人员信息表';
    // myCustomModalClass自定义模态框大小，该css类写在了全局样式style.css中
    const modalRef = this.modalService.open(SingleDatatableComponent, {windowClass: 'modal-datatables'});
    modalRef.componentInstance.dOptions = this.dtOptions;
    modalRef.componentInstance.model_title = this.model_title;
  }
  constructor(public emitService: EventEmitterService, private http: Http, private modalService: NgbModal) { }

  ngOnInit() {
    this.GetCityManager_Edu(this.current_city).then(r => {
      const data = r;
      this.bar_option = {
        title : {
          text: '市级基干队伍学历分布',
          textStyle: {
            color: '#009DA0',
            fontSize: 16,
            fontFamily: '微软雅黑',
            fontWeight: 'normal',
          },
          x: '150',
          y: '10',
        },
        tooltip : {
          trigger: 'axis',
          axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
          },
          formatter: function (params) {
            return params[0]['name'] + '：' + '<br/>'  + params[0]['value'];
          }
        },
        // grid: {left: '20%'},
        xAxis: {
          type : 'category',
          splitLine: {show: false},
          data : data.education_list,
          nameTextStyle: {color: '#009DA0'},
          axisLabel: {
            color: '#009DA0',
            interval: 0,
            rotate: 30
          },
          axisLine: {
            lineStyle: {
              color: '#009DA0'
            }
          },

        },
        yAxis: {
          name: '人数',
          type : 'value',
          nameTextStyle: {color: '#009DA0'},
          axisLabel: {
            color: '#009DA0',
          },
          splitLine: {
            show: false,
            lineStyle: {
              color: '#009DA0'
            }
          },
          axisLine: {
            lineStyle: {
              color: '#009DA0'
            }
          },
        },
        series: [
          {
            name: '人数',
            type: 'bar',
            stack: '总量',
            label: {
              normal: {
                show: false,
                position: 'top',
                color: '#009DA0'
              }
            },
            // barGap: 0.1,
            // barCategoryGap: 0.01,
            itemStyle: {
              normal: {
                color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [{
                    offset: 0,
                    color: '#00d386' // 0% 处的颜色
                  }, {
                    offset: 1,
                    color: '#0076fc' // 100% 处的颜色
                  }],
                  globalCoord: false // 缺省为 false
                },
                barBorderRadius: 10,
              }
            },
            barWidth: 20,
            data: data.value_list,
          }
        ]
      };
    });
    this.emitService.eventEmit.subscribe((value: any) => {
      this.current_city = value;
      this.GetCityManager_Edu(value).then(r => {
        console.log(r);
        const data = r;
        this.bar_option = {
          title : {
            text: '市级基干队伍学历分布',
            textStyle: {
              color: '#009DA0',
              fontSize: 16,
              fontFamily: '微软雅黑',
              fontWeight: 'normal',
            },
            x: '150',
            y: '10',
          },
          tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
              type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            },
            formatter: function (params) {
              return params[0]['name'] + '：' + '<br/>'  + params[0]['value'];
            }
          },
          // grid: {left: '20%'},
          xAxis: {
            type : 'category',
            splitLine: {show: false},
            data : data.education_list,
            nameTextStyle: {color: '#009DA0'},
            axisLabel: {
              color: '#009DA0',
              interval: 0,
              rotate: 30
            },
            axisLine: {
              lineStyle: {
                color: '#009DA0'
              }
            },

          },
          yAxis: {
            name: '人数',
            type : 'value',
            nameTextStyle: {color: '#009DA0'},
            axisLabel: {
              color: '#009DA0',
            },
            splitLine: {
              show: false,
              lineStyle: {
                color: '#009DA0'
              }
            },
            axisLine: {
              lineStyle: {
                color: '#009DA0'
              }
            },
          },
          series: [
            {
              name: '人数',
              type: 'bar',
              stack: '总量',
              label: {
                normal: {
                  show: false,
                  position: 'top',
                  color: '#009DA0'
                }
              },
              // barGap: 0.1,
              // barCategoryGap: 0.01,
              itemStyle: {
                normal: {
                  color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                      offset: 0,
                      color: '#00d386' // 0% 处的颜色
                    }, {
                      offset: 1,
                      color: '#0076fc' // 100% 处的颜色
                    }],
                    globalCoord: false // 缺省为 false
                  },
                  barBorderRadius: 10,
                }
              },
              barWidth: 20,
              data: data.value_list,
            }
          ]
        };
      });
    });
  }


}
