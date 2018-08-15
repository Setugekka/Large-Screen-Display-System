import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {url_main} from '../config'
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
  constructor(private http:HttpClient) { }

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
}
