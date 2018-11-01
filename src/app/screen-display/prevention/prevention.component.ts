import { Component, OnInit } from '@angular/core';
import * as SocketIO from "socket.io-client";
import {HttpClient} from "@angular/common/http";
import {isUndefined, log} from "util";
import {number} from "ng2-validation/dist/number";
declare var echarts:any;

@Component({
  selector: 'app-prevention',
  templateUrl: './prevention.component.html',
  styleUrls: ['./prevention.component.css']
})
export class PreventionComponent implements OnInit {
  private initdata = [
    {name: '大连', value: 20},
    {name: '锦州', value: 30},
    {name: '葫芦岛', value: 25},
    {name: '丹东', value: 40},
    {name: '抚顺', value: 50},
    {name: '沈阳', value: 30},
    {name: '辽阳', value: 80},
    {name: '铁岭', value: 10},
    {name: '鞍山', value: 20},
    {name: '盘锦', value: 30},
    {name: '朝阳', value: 60},
    {name: '营口', value: 20},
    {name: '阜新', value: 10},
    {name: '本溪', value: 30},
  ];
  private prevention_list=[];
  private prevention_series_list=[{city:'沈阳',p_class:"无预警",index:-1},
    {city:'大连',p_class:"无预警",index:-1},
    {city:'锦州',p_class:"无预警",index:-1},
    {city:'葫芦岛',p_class:"无预警",index:-1},
    {city:'丹东',p_class:"无预警",index:-1},
    {city:'抚顺',p_class:"无预警",index:-1},
    {city:'辽阳',p_class:"无预警",index:-1},
    {city:'铁岭',p_class:"无预警",index:-1},
    {city:'鞍山',p_class:"无预警",index:-1},
    {city:'盘锦',p_class:"无预警",index:-1},
    {city:'朝阳',p_class:"无预警",index:-1},
    {city:'营口',p_class:"无预警",index:-1},
    {city:'阜新',p_class:"无预警",index:-1},
    {city:'本溪',p_class:"无预警",index:-1}];
  private start_time=this.time_now()
  private prevention_series=[{
    type: 'bar',
    stack: '预警',
    label: {
      normal: {
        show: true,
        position: 'insideRight'
      }
    },
    data: [
      {value:[this.start_time,'本溪'],itemStyle:{color:'white'}},
      {value:[this.start_time,'大连'],itemStyle:{color:'white'}},
      {value:[this.start_time,'锦州'],itemStyle:{color:'white'}},
      {value:[this.start_time,'葫芦岛'],itemStyle:{color:'white'}},
      {value:[this.start_time,'丹东'],itemStyle:{color:'white'}},
      {value:[this.start_time,'抚顺'],itemStyle:{color:'white'}},
      {value:[this.start_time,'沈阳'],itemStyle:{color:'white'}},
      {value:[this.start_time,'辽阳'],itemStyle:{color:'white'}},
      {value:[this.start_time,'铁岭'],itemStyle:{color:'white'}},
      {value:[this.start_time,'鞍山'],itemStyle:{color:'white'}},
      {value:[this.start_time,'盘锦'],itemStyle:{color:'white'}},
      {value:[this.start_time,'朝阳'],itemStyle:{color:'white'}},
      {value:[this.start_time,'营口'],itemStyle:{color:'white'}},
      {value:[this.start_time,'阜新'],itemStyle:{color:'white'}}]
  }]
  private pindata=[];
  private chartOption:any={};
  private timelineOption:any={};
  private echartsIntance:any;
  private timelineIntance:any;
  private socket = SocketIO('127.0.0.1:5000/LargeScreen');
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.timelineOption = {
      tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
          type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      label: {
        normal: {
          show: true,
          position: 'insideRight',
          color:"white",
          formatter:function (e) {
            return e.value[0]
          }
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis:  {
        type: 'time',
        min:'2011-01-01 13:00',
        max:'2011-01-01 15:00',
        axisLabel: {
          color:"white"
        }
      },
      yAxis: {
        type: 'category',
        data: ['沈阳','大连','鞍山','抚顺','本溪','丹东','锦州','营口','阜新','辽阳','盘锦','铁岭','朝阳','葫芦岛'],
        axisLabel: {
          color:"white"
        }
      },
      series: this.prevention_series
    };
    setInterval(e=>{this.refresh_timeline()},1000);
    this.http.get('assets/json/210000.json').subscribe(geoJson=>{
      echarts.registerMap('辽宁', geoJson)
      this.chartOption = {
        title: {
          text: '预警状态',
          textAlign: 'center',
          left: '50%',
          top: '20',
          textStyle: {
            color: '#FFF',
            fontWeight: 'normal',
            fontSize: 36,
          }
        },
        toolbox: {
          show: true,
          orient: 'vertical',
          left: 'right',
          top: 'center',
          feature: {
            dataView: {readOnly: false},
            restore: {},
            saveAsImage: {}
          }
        },
        visualMap: {
          min: 0,
          max: 100,
          text:['High','Low'],
          realtime: false,
          calculable: true,
          inRange: {
            color: ['#e0ffff', '#006edd']
          }
        },
        geo: {
          show: false,
          map: '辽宁',
          top:100,
          zoom:1,
          label: {
            normal: {
              show: false
            },
            emphasis: {
              show: false,
            }
          },
          roam: false,
          itemStyle: {
            normal: {
              areaColor: '#031525',
              borderColor: '#097bba',
            },
            emphasis: {
              areaColor: '#2B91B7',
            }
          }
        },
        tooltip:{
          show:true
        },
        series: [
          {
            name: '预警分布',
            type: 'map',
            mapType: '辽宁', // 自定义扩展图表类型
            top:100,
            zoom:1,
            tooltip: {
              formatter: '{b}<br/>预警数量：{c}'
            },
            itemStyle:{
              normal:{label:{show:true}},
              emphasis:{label:{show:true}}
            },
            data:this.initdata,
            // markPoint : {//数据全是markPoint
            //   symbolSize: 50,       // 标注大小，半宽（半径）参数，当图形为方向或菱形则总宽度为symbolSize * 2
            //   itemStyle: {
            //     normal: {
            //       borderColor: '#87cefa',
            //       borderWidth: 1,            // 标注边线线宽，单位px，默认为1
            //       label: {
            //         show: false
            //       }
            //     },
            //     emphasis: {
            //       borderColor: '#1e90ff',
            //       borderWidth: 5,
            //       label: {
            //         show: false
            //       }
            //     }
            //   },
            //   effect : {
            //     show: true,
            //     shadowBlur : 0
            //   },
            //   data : [
            //     {name:'',coord:[121.62,38.92,12]}
            //   ],
            // },//end markPoint
          },
          {
            name: 'Top',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            data: this.setpincolor(this.pindata),
            symbolSize: 30,
            symbolOffset:[0,"-100%"],
            showEffectOn: 'render',
            rippleEffect: {
              brushType: 'stroke'
            },
            hoverAnimation: false,
            label: {
              normal: {
                formatter: '{b}',
                position: 'right',
                show: false
              }
            },
            itemStyle: {
              normal: {
                shadowBlur: 10,
                shadowColor: 'rgba(120, 36, 50, 0.5)',
                shadowOffsetY: 5,
                color: {
                  type: 'radial',
                  x: 0.5,
                  y: 0.5,
                  r: 0.5,
                  colorStops: [{
                    offset: 0,
                    color: '#ae0876' // 0% 处的颜色
                  }, {
                    offset: 0.5,
                    color: '#cd0a8b' // 50% 处的颜色
                  }, {
                    offset: 1,
                    color: '#f505a4' // 100% 处的颜色
                  }],
                  globalCoord: false // 缺省为 false
                }
              }
            },
            zlevel: 1,
            tooltip:{
              backgroundColor:'rgba(50,50,50,0.95)',
              formatter: function (params, ticket, callback) {
                if(!isUndefined(params.data )) {
                  let strarray="";
                  let len = params.data.value[2].length;
                  for(let i=0;i<(params.data.value[2].length/11);i++)
                  {
                    let str = params.data.value[2].substring(params.data.value[2].length-(i+1)*11,params.data.value[2].length-i*11);
                    strarray= str+ '<br>'+ strarray;
                  }
                  // return '最新预警信息'+'</br>预警地点：'+params.data.value[0]+','+params.data.value[1]+'</br>预警内容：'+params.data.value[2]
                  const res = "<div class=\"card\" style=\"background-color: unset;width: 400px\">\n" +
                    "  <div style=\" ;\n" +
                    "  margin-left: 10px;\n" +
                    "  font-weight: bold;\n" +
                    "  font-size: 15px;\n" +
                    "  text-align: left;\">\n" +
                    "    最新预警信息\n" +
                    "  </div>\n" +
                    "  <div class=\"row\">\n" +
                    "    <div class=\"col-6 pl-3\" style=\"height: 200px;width: 200px\">\n" +
                    "      <img src=\"assets/image/lantianbaiyun.jpg\" style=\"width: 100%;height: 100%\">\n" +
                    "    </div>\n" +
                    "    <div class=\"col-6\">\n" +
                    "      <span>所在城市</span><br>\n" +
                    "      <span style = 'line-height:30px;font-size : 25px; font-weight:bold;'>"+params.data.value[3]+"</span><br>\n" +
                    "      <div>\n" +
                    "      <div style = 'float : left; padding-right:20px; border-bottom: solid 1px #4c4a4a;'>\n" +
                    "        <span >地理坐标</span><br>\n" +
                    "        <span style = 'color : red; '>("+params.data.value[0]+','+params.data.value[1]+")</span>\n" +
                    "        </div><br>\n" +
                    "      <div style = 'float : left;'>\n" +
                    "        <span style = 'width : 100px;'>预警级别：</span><br>\n" +
                    "        <div style='width: 100px;height:100%display:block;word-break: break-all;word-wrap: break-word;color:yellow'> "+strarray+"</div>\n" +
                    "        </div>\n" +
                    "      </div>\n" +
                    "\n" +
                    "    </div>\n" +
                    "  </div>\n" +
                    "</div>";
                  return res
                }
              }
            }
          },
        ]
      }
    })
    this.socket.on('my_response',e=>console.log(e.data));
    this.socket.on('update_prevention',e=>{
      if(this.prevention_list.indexOf(e.city)==-1){
        if(e.p_type=='true'){
          this.prevention_list.push(e.city);
          this.pindata.push({value:e.coord.concat([e.p_class,e.city]),city:e.city,visualMap:false});
          this.prevention_series.reverse()
          const t_index = this.prevention_series.push({
            type: 'bar',
            stack: '预警',
            label: {
              normal: {
                show: true,
                position: 'insideRight'
              }
            },
            data: [{value:[this.time_now(),e.city],itemStyle:{color:this.set_color(e.p_class),}}]
          })-1
          this.set_index(e.city,t_index)
          this.set_p_class(e.city,e.p_class)
          this.prevention_series.reverse()
        }
      }else{
        if(e.p_type=='true'){
          for(let i in this.pindata){
            if(this.pindata[i].city==e.city){
              this.pindata[i].value=e.coord.concat([e.p_class,e.city])
            }
          }
          if(this.get_p_class(e.city)!=e.p_class){
            this.prevention_series.reverse()
            const t_index = this.prevention_series.push({
              type: 'bar',
              stack: '预警',
              label: {
                normal: {
                  show: true,
                  position: 'insideRight'
                }
              },
              data: [{value:[this.time_now(),e.city],itemStyle:{color:this.set_color(e.p_class),}}]
            })-1
            this.set_index(e.city,t_index)
            this.set_p_class(e.city,e.p_class)
            this.prevention_series.reverse()
          }
        }else {
          for(let i in this.pindata){
            if(this.pindata[i].city==e.city){
              this.pindata.splice(Number(i),1)
            }
            this.prevention_list.splice(this.prevention_list.indexOf(e.city),1)
          }
          this.prevention_series.reverse()
          const t_index = this.prevention_series.push({
            type: 'bar',
            stack: '预警',
            label: {
              normal: {
                show: true,
                position: 'insideRight'
              }
            },
            data: [{value:[this.time_now(),e.city],itemStyle:{color:'white'}}]
          })-1
          this.set_index(e.city,t_index)
          this.set_p_class(e.city,'无预警')
          this.prevention_series.reverse()
        }
      }
      this.chartOption={
        title: {
          text: '预警状态',
          textAlign: 'center',
          left: '50%',
          top: '20',
          textStyle: {
            color: '#FFF',
            fontWeight: 'normal',
            fontSize: 36,
          }
        },

        toolbox: {
          show: true,
          orient: 'vertical',
          left: 'right',
          top: 'center',
          feature: {
            dataView: {readOnly: false},
            restore: {},
            saveAsImage: {}
          }
        },
        visualMap: {
          min: 0,
          max: 100,
          text:['High','Low'],
          realtime: false,
          calculable: true,
          inRange: {
            color: ['#e0ffff', '#006edd']
          }
        },

        geo: {
          show: false,
          map: '辽宁',
          top:100,
          zoom:1,
          label: {
            normal: {
              show: false
            },
            emphasis: {
              show: false,
            }
          },
          roam: false,
          itemStyle: {
            normal: {
              areaColor: '#031525',
              borderColor: '#097bba',
            },
            emphasis: {
              areaColor: '#2B91B7',
            }
          }
        },
        tooltip:{
          show:true
        },
        series: [
          {
            name: '预警分布',
            type: 'map',
            mapType: '辽宁', // 自定义扩展图表类型
            top:100,
            zoom:1,
            tooltip: {
              formatter: '{b}<br/>预警数量：{c}'
            },
            itemStyle:{
              normal:{label:{show:true}},
              emphasis:{label:{show:true}}
            },
            data:this.initdata,
            // markPoint : {//数据全是markPoint
            //   symbolSize: 50,       // 标注大小，半宽（半径）参数，当图形为方向或菱形则总宽度为symbolSize * 2
            //   itemStyle: {
            //     normal: {
            //       borderColor: '#87cefa',
            //       borderWidth: 1,            // 标注边线线宽，单位px，默认为1
            //       label: {
            //         show: false
            //       }
            //     },
            //     emphasis: {
            //       borderColor: '#1e90ff',
            //       borderWidth: 5,
            //       label: {
            //         show: false
            //       }
            //     }
            //   },
            //   effect : {
            //     show: true,
            //     shadowBlur : 0
            //   },
            //   data : [
            //     {name:'',coord:[121.62,38.92,12]}
            //   ],
            // },//end markPoint
          },
          {
            name: 'Top',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            data: this.setpincolor(this.pindata),
            symbolSize: 30,
            symbolOffset:[0,"-100%"],
            showEffectOn: 'render',
            rippleEffect: {
              brushType: 'stroke'
            },
            hoverAnimation: false,
            label: {
              normal: {
                formatter: '{b}',
                position: 'right',
                show: false
              }
            },
            itemStyle: {
              normal: {
                shadowBlur: 10,
                shadowColor: 'rgba(120, 36, 50, 0.5)',
                shadowOffsetY: 5,
                color: {
                  type: 'radial',
                  x: 0.5,
                  y: 0.5,
                  r: 0.5,
                  colorStops: [{
                    offset: 0,
                    color: '#ae0876' // 0% 处的颜色
                  }, {
                    offset: 0.5,
                    color: '#cd0a8b' // 50% 处的颜色
                  }, {
                    offset: 1,
                    color: '#f505a4' // 100% 处的颜色
                  }],
                  globalCoord: false // 缺省为 false
                }
              }
            },
            zlevel: 1,
            tooltip:{
              backgroundColor:'rgba(50,50,50,0.95)',
              formatter: function (params, ticket, callback) {
                if(!isUndefined(params.data )) {
                  let strarray="";
                  let len = params.data.value[2].length;
                  for(let i=0;i<(params.data.value[2].length/11);i++)
                  {
                    let str = params.data.value[2].substring(params.data.value[2].length-(i+1)*11,params.data.value[2].length-i*11);
                    strarray= str+ '<br>'+ strarray;
                  }
                  // return '最新预警信息'+'</br>预警地点：'+params.data.value[0]+','+params.data.value[1]+'</br>预警内容：'+params.data.value[2]
                  const res = "<div class=\"card\" style=\"background-color: unset;width: 400px\">\n" +
                    "  <div style=\" ;\n" +
                    "  margin-left: 10px;\n" +
                    "  font-weight: bold;\n" +
                    "  font-size: 15px;\n" +
                    "  text-align: left;\">\n" +
                    "    最新预警信息\n" +
                    "  </div>\n" +
                    "  <div class=\"row\">\n" +
                    "    <div class=\"col-6 pl-3\" style=\"height: 200px;width: 200px\">\n" +
                    "      <img src=\"assets/image/lantianbaiyun.jpg\" style=\"width: 100%;height: 100%\">\n" +
                    "    </div>\n" +
                    "    <div class=\"col-6\">\n" +
                    "      <span>所在城市</span><br>\n" +
                    "      <span style = 'line-height:30px;font-size : 25px; font-weight:bold;'>"+params.data.value[3]+"</span><br>\n" +
                    "      <div>\n" +
                    "      <div style = 'float : left; padding-right:20px; border-bottom: solid 1px #4c4a4a;'>\n" +
                    "        <span >地理坐标</span><br>\n" +
                    "        <span style = 'color : red; '>("+params.data.value[0]+','+params.data.value[1]+")</span>\n" +
                    "        </div><br>\n" +
                    "      <div style = 'float : left;'>\n" +
                    "        <span style = 'width : 100px;'>预警级别：</span><br>\n" +
                    "        <div style='width: 100px;height:100%display:block;word-break: break-all;word-wrap: break-word;color:yellow'> "+strarray+"</div>\n" +
                    "        </div>\n" +
                    "      </div>\n" +
                    "\n" +
                    "    </div>\n" +
                    "  </div>\n" +
                    "</div>";
                  return res
                }
              }
            }
          },
        ]
      }
      // 首先reverse
      // 在最后一个位置push
      // push所需数据生成
      // 预警状态变更的登记
      // 需要一个记录状态的列表 5种状态
      // 根据列表生成data 包含每一个城市的预警
      const now=new Date();
      const now_to_2=new Date(new Date().valueOf()-60*1000);
      this.timelineOption = {
        tooltip : {
          trigger: 'axis',
          axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        label: {
          normal: {
            show: true,
            position: 'insideRight',
            color:"white",
            formatter:function (e) {
              return e.value[0]
            }
          }
        },
        xAxis:  {
          type: 'time',
          min:this.format_date(now_to_2),
          max:this.format_date(now),
          axisLabel: {
            color:"white"
          }
        },
        yAxis: {
          type: 'category',
          data: ['沈阳','大连','鞍山','抚顺','本溪','丹东','锦州','营口','阜新','辽阳','盘锦','铁岭','朝阳','葫芦岛'],
          axisLabel: {
            color:"white"
          }
        },
        series: this.prevention_series
      };

    });

  }
  onChartInit(ec) {
    this.echartsIntance = ec;
  }
  ontimelineInit(tc){
    this.timelineIntance = tc;
  }
  onChartClick(params){
  }

  showTooltip(){
    const cur_index=this.pindata.length-1
    setTimeout(()=> {
      this.echartsIntance.dispatchAction({
        type: 'showTip',
        seriesIndex:1 ,//第几条series
        dataIndex: cur_index,//第几个tooltip
      });
    },500);
  }
  setpincolor(data){
    for(let i in data){
      const t=data[i];
      if (t.value[2]=="红色预警"){
        t["itemStyle"]={
          normal: {
            shadowColor: 'rgba(120, 36, 50, 0.5)',
            color: {
              type: 'radial',
              x: 0.5,
              y: 0.5,
              r: 0.5,
              colorStops: [{
                offset: 0,
                color: 'red' // 0% 处的颜色
              }, {
                offset: 0.5,
                color: 'red' // 50% 处的颜色
              }, {
                offset: 1,
                color: 'red' // 100% 处的颜色
              }],
              globalCoord: false // 缺省为 false
            }
          }
        }
      }
      if (t.value[2]=="橙色预警"){
        t["itemStyle"]={
          normal: {
            shadowBlur: 10,
            shadowColor: 'rgba(120, 36, 50, 0.5)',
            shadowOffsetY: 5,
            color: {
              type: 'radial',
              x: 0.5,
              y: 0.5,
              r: 0.5,
              colorStops: [{
                offset: 0,
                color: 'orange' // 0% 处的颜色
              }, {
                offset: 0.5,
                color: 'orange' // 50% 处的颜色
              }, {
                offset: 1,
                color: 'orange' // 100% 处的颜色
              }],
              globalCoord: false // 缺省为 false
            }
          }
        }
      }
      if (t.value[2]=="黄色预警"){
        t["itemStyle"]={
          normal: {
            shadowBlur: 10,
            shadowColor: 'rgba(120, 36, 50, 0.5)',
            shadowOffsetY: 5,
            color: {
              type: 'radial',
              x: 0.5,
              y: 0.5,
              r: 0.5,
              colorStops: [{
                offset: 0,
                color: 'yellow' // 0% 处的颜色
              }, {
                offset: 0.5,
                color: 'yellow' // 50% 处的颜色
              }, {
                offset: 1,
                color: 'yellow' // 100% 处的颜色
              }],
              globalCoord: false // 缺省为 false
            }
          }
        }
      }
      if (t.value[2]=="蓝色预警"){
        t["itemStyle"]={
          normal: {
            shadowBlur: 10,
            shadowColor: 'rgba(120, 36, 50, 0.5)',
            shadowOffsetY: 5,
            color: {
              type: 'radial',
              x: 0.5,
              y: 0.5,
              r: 0.5,
              colorStops: [{
                offset: 0,
                color: 'blue' // 0% 处的颜色
              }, {
                offset: 0.5,
                color: 'blue' // 50% 处的颜色
              }, {
                offset: 1,
                color: 'blue' // 100% 处的颜色
              }],
              globalCoord: false // 缺省为 false
            }
          }
        }
      }

    }
    return data
  }

  starttimeline(){

  }
  refresh_timeline(){
    const now=new Date();
    const now_to_2=new Date(new Date().valueOf()-60*1000);
    this.prevention_series.reverse()
    for(let i of this.prevention_series_list){
      if(i.index!=-1){
        this.prevention_series[i.index].data[0].value[0]=this.time_now()
      }
    }
    this.prevention_series.reverse()
    this.timelineOption = {
      tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
          type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      label: {
        normal: {
          show: true,
          position: 'insideRight',
          color:"white",
          formatter:function (e) {
            return e.value[0]
          }
        }
      },
      xAxis:  {
        type: 'time',
        min:this.format_date(now_to_2),
        max:this.format_date(now),
        axisLabel: {
          color:"white"
        }
      },
      yAxis: {
        type: 'category',
        data: ['沈阳','大连','鞍山','抚顺','本溪','丹东','锦州','营口','阜新','辽阳','盘锦','铁岭','朝阳','葫芦岛'],
        axisLabel: {
          color:"white"
        }
      },
      series: this.prevention_series
    };
  }
  format_date(time){
    // 格式化日期，获取今天的日期
    const Dates = new Date( time );
    const year: number = Dates.getFullYear();
    const month: any = Dates.getMonth()+1 < 10 ? '0' + Dates.getMonth()+1 : Dates.getMonth()+1 ;
    const day: any = Dates.getDate() < 10 ? '0' + Dates.getDate() : Dates.getDate();
    const hour:any= Dates.getHours() < 10 ? '0' + Dates.getHours() : Dates.getHours();
    const minute:any=Dates.getMinutes()< 10 ? '0' + Dates.getMinutes() : Dates.getMinutes();
    const seconds:any=Dates.getSeconds()< 10 ? '0' + Dates.getSeconds() : Dates.getSeconds();
    return year + '-' + month + '-' + day +" "+hour+":"+minute+":"+seconds ;
  }
  find_last_index(city){
    for(let i of this.prevention_series_list){
      if(i.city==city){
        return i.index
      }
    }
  }
  find_last_p_class(city){
    for(let i of this.prevention_series_list){
      if(i.city==city){
        return i.p_class
      }
    }
  }
  set_color(p_class){
    if(p_class=="红色预警"){
      return 'red'
    }
    if(p_class=="橙色预警"){
      return 'orange'
    }
    if(p_class=="黄色预警"){
      return 'yellow'
    }
    if(p_class=="蓝色预警"){
      return 'blue'
    }

  }
  time_now(){
    const now=new Date();
    return this.format_date(now)
  }
  set_index(city,new_index){
    for (let i in this.prevention_series_list){
      if(this.prevention_series_list[i].city==city){
        this.prevention_series_list[i].index=new_index
      }
    }
  }
  set_p_class(city,new_p_class){
    for (let i in this.prevention_series_list){
      if(this.prevention_series_list[i].city==city){
        this.prevention_series_list[i].p_class=new_p_class
      }
    }
  }
  get_p_class(city){
    for (let i in this.prevention_series_list){
      if(this.prevention_series_list[i].city==city){
        return this.prevention_series_list[i].p_class
      }
    }
  }

}




