import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {url_main} from '../config'
declare var echarts:any;

@Component({
  selector: 'app-generator-bar',
  templateUrl: './generator-bar.component.html',
  styleUrls: ['./generator-bar.component.css']
})


export class GeneratorBarComponent implements OnInit {
  Target:string;//保存显示的城市
  City:Array<string>;
  Generator_Count:Array<string>;
  Department:Array<string>;
  DataSeries:any;
  test:any;
  bar_option:any;
  className:any;
  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.Target="辽宁";
    //this.Target="鞍山";
    console.log(this.Target)
    console.log(this.Target=="辽宁")
    if (this.Target=="辽宁"){
      this.Generator_Count=[];
      this.City = [];
      this.http.get(url_main+'/generator/count/City').subscribe(res => {
        this.DataSeries=res;
        this.Generator_Count=[];
        this.City = [];
        //获取发电车数量
        for (const key of Object.keys(res["data"])){
          this.City.push(key);
          this.Generator_Count.push(res["data"][key]);
        };
        console.log(this.City)
        console.log(this.Generator_Count)
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
              name:'发电车',
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
              name:'发电车',
              type:'bar',
              data:this.Generator_Count,
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
      this.http.get(url_main+'/generator/count/city/'+this.Target).subscribe(res => {
        this.Department=[]
        this.Generator_Count=[]
        for (const key of Object.keys(res["data"])){
          this.Department.push(key);
          this.Generator_Count.push(res["data"][key]);
          this.bar_option = {
            //backgroundColor: '#23243a',
            title:{
              text:this.Target+'发电车',
              left:'center',
              textStyle: {
                color: '#fff',
                fontStyle: 'normal',
                fontFamily: '微软雅黑',
                fontSize: 14,
              }
            },
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
                name:'发电车',
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
                data: this.Department,
                axisLabel: { //坐标轴刻度标签的相关设置。
                  interval: 0,//设置为 1，表示『隔一个标签显示一个标签』
                  rotate:20,
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
                name:'发电车',
                type:'bar',
                data:this.Generator_Count,
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
        };
      })
    }


  }
  onChartClick(event:any){
    if (this.City.includes(event.name)){
      this.http.get(url_main+'/generator/count/city/'+event.name).subscribe(res => {
        this.Department=[]
        for (const key of Object.keys(res["data"])){
          this.Department.push(key);
          this.Generator_Count.push(res["data"][key]);
          this.bar_option = {
            //backgroundColor: '#23243a',
            title:{
              text:event.name+'发电车',
              left:'center',
              textStyle: {
                color: '#fff',
                fontStyle: 'normal',
                fontFamily: '微软雅黑',
                fontSize: 14,
              }
            },
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
                name:'发电车',
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
                data: this.Department,
                axisLabel: { //坐标轴刻度标签的相关设置。
                  interval: 0,//设置为 1，表示『隔一个标签显示一个标签』
                  rotate:20,
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
                name:'发电车',
                type:'bar',
                data:this.Generator_Count,
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
        };
      })
    }
    else{
      this.http.get(url_main+'/generator/count/City').subscribe(res => {
          this.DataSeries=res;
          this.City=[]
          this.Generator_Count=[]
          //获取发电车数量
          for (const key of Object.keys(res["data"])){
            this.City.push(key);
            this.Generator_Count.push(res["data"][key]);
          };
          console.log(this.City)
          console.log(this.Generator_Count)
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
              top:'10%',
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
                name:'发电车',
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
                name:'发电车',
                type:'bar',
                data:this.Generator_Count,
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
