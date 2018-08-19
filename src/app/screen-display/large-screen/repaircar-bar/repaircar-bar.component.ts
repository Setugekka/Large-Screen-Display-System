import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {url_main} from '../config'
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {DetailviewComponent} from "../detailview/detailview.component"
declare var echarts:any;

@Component({
  selector: 'app-repaircar-bar',
  templateUrl: './repaircar-bar.component.html',
  styleUrls: ['./repaircar-bar.component.css']
})
export class RepaircarBarComponent implements OnInit {
  City:Array<string>;
  Repaircar_Count:Array<string>;
  Department:Array<string>;
  DataSeries:any;
  test:any;
  bar_option:any;
  className:any;
  dtOptions:any;
  constructor(private http:HttpClient,private modalService:NgbModal) { }

  ngOnInit() {
    this.Repaircar_Count=[];
    this.City = [];
    this.http.get(url_main+'/repaircar/count/City').subscribe(res => {
      this.DataSeries=res;
      this.Repaircar_Count=[];
      this.City = [];
      //获取发电车数量
      for (const key of Object.keys(res["data"])){
        this.City.push(key);
        this.Repaircar_Count.push(res["data"][key]);
      };

      this.bar_option = {
        //backgroundColor: '#23243a',
        tooltip: { //提示框组件
          trigger: 'axis',
          formatter: '{b}<br />{a0}: {c0}<br />{a1}: {c1}',
          axisPointer: {
            type: 'shadow',
            label: {
              backgroundColor: '#6a7985'
            }
          },
          textStyle: {
            color: '#fff',
            fontStyle: 'normal',
            fontFamily: '微软雅黑',
            fontSize: 12,
          }
        },
        grid: {
          left: '1%',
          right: '4%',
          bottom: '6%',
          top:30,
          padding:'0 0 10 0',
          containLabel: true,
        },
        legend: {//图例组件，颜色和名字
          right:10,
          top:0,
          itemGap: 16,
          itemWidth: 18,
          itemHeight: 10,
          data:[{
            name:'维修车',
            //icon:'image://../wwwroot/js/url2.png', //路径
          },
          ],
          textStyle: {
            color: '#fff',
            fontStyle: 'normal',
            fontFamily: '微软雅黑',
            fontSize: 12,
          }
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: true,//坐标轴两边留白
            data: this.City,
            axisLabel: { //坐标轴刻度标签的相关设置。
              interval: 0,//设置为 1，表示『隔一个标签显示一个标签』
              margin:15,
              //rotate:40,
              textStyle: {
                color: '#fff',
                fontStyle: 'normal',
                fontFamily: '微软雅黑',
                fontSize: 12,
              }
            },
            axisTick:{//坐标轴刻度相关设置。
              show: false,
            },
            axisLine:{//坐标轴轴线相关设置
              lineStyle:{
                color:'#fff',
                opacity:0.2
              }
            },
            splitLine: { //坐标轴在 grid 区域中的分隔线。
              show: false,
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            splitNumber: 5,
            axisLabel: {
              show:false,
              textStyle: {
                color: '#fff',
                fontStyle: 'normal',
                fontFamily: '微软雅黑',
                fontSize: 12,
              }
            },
            axisLine:{
              show: false
            },
            axisTick:{
              show: false
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: ['#fff'],
                opacity:0.06
              }
            }

          }
        ],
        series : [
          {
            name:'维修车',
            type:'bar',
            data:this.Repaircar_Count,
            barWidth: 40,
            barGap:0,//柱间距离
            label: {//图形上的文本标签
              normal: {
                show: true,
                position: 'top',
                textStyle: {
                  color: '#fff',
                  fontStyle: 'normal',
                  fontFamily: '微软雅黑',
                  fontSize: 12,
                },
              },
            },
            itemStyle: {
              normal: {
                barBorderRadius: 5,
                color: new echarts.graphic.LinearGradient(
                  0, 0, 0, 1,
                  [
                    {offset: 0, color: '#14c8d4'},
                    {offset: 1, color: '#43eec6'}
                  ]
                )
              },
              emphasis: {
                color: new echarts.graphic.LinearGradient(
                  0, 0, 0, 1,
                  [
                    {offset: 0, color: '#43eec6'},
                    {offset: 0.7, color: '#13c9d5'},
                    {offset: 1, color: '#14c8d4'}
                  ]
                )
              }
            },
          },

        ]
      };
    })
    //this.refresh('抚顺')
  }
  refresh(city){
    if (city =='辽宁'){
      this.http.get(url_main+'/repaircar/count/City').subscribe(res => {
        this.DataSeries=res;
        this.Repaircar_Count=[];
        this.City = [];
        //获取发电车数量
        for (const key of Object.keys(res["data"])){
          this.City.push(key);
          this.Repaircar_Count.push(res["data"][key]);
        };

        this.bar_option = {
          //backgroundColor: '#23243a',
          tooltip: { //提示框组件
            trigger: 'axis',
            formatter: '{b}<br />{a0}: {c0}<br />{a1}: {c1}',
            axisPointer: {
              type: 'shadow',
              label: {
                backgroundColor: '#6a7985'
              }
            },
            textStyle: {
              color: '#fff',
              fontStyle: 'normal',
              fontFamily: '微软雅黑',
              fontSize: 12,
            }
          },
          grid: {
            left: '1%',
            right: '4%',
            bottom: '6%',
            top:30,
            padding:'0 0 10 0',
            containLabel: true,
          },
          legend: {//图例组件，颜色和名字
            right:10,
            top:0,
            itemGap: 16,
            itemWidth: 18,
            itemHeight: 10,
            data:[{
              name:'维修车',
              //icon:'image://../wwwroot/js/url2.png', //路径
            },
            ],
            textStyle: {
              color: '#fff',
              fontStyle: 'normal',
              fontFamily: '微软雅黑',
              fontSize: 12,
            }
          },
          xAxis: [
            {
              type: 'category',
              boundaryGap: true,//坐标轴两边留白
              data: this.City,
              axisLabel: { //坐标轴刻度标签的相关设置。
                interval: 0,//设置为 1，表示『隔一个标签显示一个标签』
                margin:15,
                //rotate:40,
                textStyle: {
                  color: '#fff',
                  fontStyle: 'normal',
                  fontFamily: '微软雅黑',
                  fontSize: 12,
                }
              },
              axisTick:{//坐标轴刻度相关设置。
                show: false,
              },
              axisLine:{//坐标轴轴线相关设置
                lineStyle:{
                  color:'#fff',
                  opacity:0.2
                }
              },
              splitLine: { //坐标轴在 grid 区域中的分隔线。
                show: false,
              }
            }
          ],
          yAxis: [
            {
              type: 'value',
              splitNumber: 5,
              axisLabel: {
                show:false,
                textStyle: {
                  color: '#fff',
                  fontStyle: 'normal',
                  fontFamily: '微软雅黑',
                  fontSize: 12,
                }
              },
              axisLine:{
                show: false
              },
              axisTick:{
                show: false
              },
              splitLine: {
                show: true,
                lineStyle: {
                  color: ['#fff'],
                  opacity:0.06
                }
              }

            }
          ],
          series : [
            {
              name:'维修车',
              type:'bar',
              data:this.Repaircar_Count,
              barWidth: 40,
              barGap:0,//柱间距离
              label: {//图形上的文本标签
                normal: {
                  show: true,
                  position: 'top',
                  textStyle: {
                    color: '#fff',
                    fontStyle: 'normal',
                    fontFamily: '微软雅黑',
                    fontSize: 12,
                  },
                },
              },
              itemStyle: {//图形样式
                normal: {
                  barBorderRadius: [5, 5, 0, 0],
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 1, color: 'rgba(127, 128, 225, 0.7)'
                  },{
                    offset: 0.9, color: 'rgba(72, 73, 181, 0.7)'
                  },{
                    offset: 0.31, color: 'rgba(0, 208, 208, 0.7)'
                  },{
                    offset: 0.15, color: 'rgba(0, 208, 208, 0.7)'
                  }, {
                    offset: 0, color: 'rgba(104, 253, 255, 0.7)'
                  }], false),
                },
              },
            },

          ]
        };
      })
    }
    else{
      this.http.get(url_main+'/repaircar/count/department/'+city).subscribe(res => {
        this.DataSeries=res;
        this.Repaircar_Count=[];
        this.City = [];
        //获取发电车数量
        for (const key of Object.keys(res["data"])){
          this.City.push(key);
          this.Repaircar_Count.push(res["data"][key]);
        };

        this.bar_option = {
          //backgroundColor: '#23243a',
          tooltip: { //提示框组件
            trigger: 'axis',
            formatter: '{b}<br />{a0}: {c0}<br />{a1}: {c1}',
            axisPointer: {
              type: 'shadow',
              label: {
                backgroundColor: '#6a7985'
              }
            },
            textStyle: {
              color: '#fff',
              fontStyle: 'normal',
              fontFamily: '微软雅黑',
              fontSize: 12,
            }
          },
          grid: {
            left: '1%',
            right: '4%',
            bottom: '6%',
            top:30,
            padding:'0 0 10 0',
            containLabel: true,
          },
          legend: {//图例组件，颜色和名字
            right:10,
            top:0,
            itemGap: 16,
            itemWidth: 18,
            itemHeight: 10,
            data:[{
              name:'维修车',
              //icon:'image://../wwwroot/js/url2.png', //路径
            },
            ],
            textStyle: {
              color: '#fff',
              fontStyle: 'normal',
              fontFamily: '微软雅黑',
              fontSize: 12,
            }
          },
          xAxis: [
            {
              type: 'category',
              boundaryGap: true,//坐标轴两边留白
              data: this.City,
              axisLabel: { //坐标轴刻度标签的相关设置。
                interval: 0,//设置为 1，表示『隔一个标签显示一个标签』
                margin:15,
                //rotate:40,
                textStyle: {
                  color: '#fff',
                  fontStyle: 'normal',
                  fontFamily: '微软雅黑',
                  fontSize: 12,
                }
              },
              axisTick:{//坐标轴刻度相关设置。
                show: false,
              },
              axisLine:{//坐标轴轴线相关设置
                lineStyle:{
                  color:'#fff',
                  opacity:0.2
                }
              },
              splitLine: { //坐标轴在 grid 区域中的分隔线。
                show: false,
              }
            }
          ],
          yAxis: [
            {
              type: 'value',
              splitNumber: 5,
              axisLabel: {
                show:false,
                textStyle: {
                  color: '#fff',
                  fontStyle: 'normal',
                  fontFamily: '微软雅黑',
                  fontSize: 12,
                }
              },
              axisLine:{
                show: false
              },
              axisTick:{
                show: false
              },
              splitLine: {
                show: true,
                lineStyle: {
                  color: ['#fff'],
                  opacity:0.06
                }
              }

            }
          ],
          series : [
            {
              name:'维修车',
              type:'bar',
              data:this.Repaircar_Count,
              barWidth: 40,
              barGap:0,//柱间距离
              label: {//图形上的文本标签
                normal: {
                  show: true,
                  position: 'top',
                  textStyle: {
                    color: '#fff',
                    fontStyle: 'normal',
                    fontFamily: '微软雅黑',
                    fontSize: 12,
                  },
                },
              },
              itemStyle: {//图形样式
                normal: {
                  barBorderRadius: [5, 5, 0, 0],
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 1, color: 'rgba(127, 128, 225, 0.7)'
                  },{
                    offset: 0.9, color: 'rgba(72, 73, 181, 0.7)'
                  },{
                    offset: 0.31, color: 'rgba(0, 208, 208, 0.7)'
                  },{
                    offset: 0.15, color: 'rgba(0, 208, 208, 0.7)'
                  }, {
                    offset: 0, color: 'rgba(104, 253, 255, 0.7)'
                  }], false),
                },
              },
            },

          ]
        };
      })
    }
  }
  onChartClick(event){
    this.dtOptions={

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

      ajax:url_main+'/repaircar/getbyCity/'+event.name,
      columns:[
        {title:'序号',data:'Id'},
        {title:'所属单位',data:'Department'},
        {title:'车牌号',data:'License_num'},
        {title:'车种',data:'Brand'},
        {title:'购入日期',data:'Purchase_date'},
        {title:'油种',data:'Oil_type'},
        {title:'联系人',data:'Contact'},
        {title:'电话/短号',data:'Phone'},
        {title:'所属城市',data:'City'}
      ],


    }
    const modalRef = this.modalService.open(DetailviewComponent,{windowClass:'myCustomModalClass'}) //myCustomModalClass自定义模态框大小，该css类写在了全局样式style.css中
    modalRef.componentInstance.dOptions = this.dtOptions;

  }

}
