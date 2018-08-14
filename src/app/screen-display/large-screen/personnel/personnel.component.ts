import { Component, OnInit } from '@angular/core';
import {ScreenDisplayService} from '../../screen-display.service';
import {toUnicode} from 'punycode';
declare var echarts: any;
@Component({
  selector: 'app-personnel',
  templateUrl: './personnel.component.html',
  styleUrls: ['./personnel.component.css']
})
export class PersonnelComponent implements OnInit {
  private p_expert = 0;
  private p_repair = 0;
  private p_manager = 0;
  private pie_option = {
    tooltip: {
      trigger: 'item',
      formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
      orient: 'horizontal',
      data:['专家','抢修队伍','基干分队'],
      textStyle:{color:'#95ffff'}
    },
    series: [
      {
        name:'人员分布',
        type:'pie',
        selectedMode: 'single',
        radius: [0, '50%'],

        label: {
          normal: {
            show: false
          }
        },
        labelLine: {
          normal: {
            show: false
          }
        },
        data:[
          {value:this.p_expert, name:'专家',itemStyle:{color:'#61fcff'}},
          {value:this.p_repair, name:'抢修队伍',itemStyle:{color:'#52a5ff'}},
          {value:this.p_manager, name:'基干分队',itemStyle:{color:'#4e76ff'}}
        ]
      },
    ]
  };
  private bar_option_expert: any;
  private bar_option_repair: any;
  private bar_option_manager: any;
  private current_city = '沈阳';

  constructor(private service: ScreenDisplayService) { }
  ngOnInit() {
    this.service.CountExpert(this.current_city).then(r => {
      this.p_expert = r.data;
      this.pie_option={
        tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
          orient: 'horizontal',
          data:['专家','抢修队伍','基干分队'],
          textStyle:{color:'#95ffff'}
        },
        series: [
          {
            name:'人员分布',
            type:'pie',
            selectedMode: 'single',
            radius: [0, '50%'],

            label: {
              normal: {
                show: false
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data:[
              {value:this.p_expert, name:'专家',itemStyle:{color:'#61fcff'}},
              {value:this.p_repair, name:'抢修队伍',itemStyle:{color:'#52a5ff'}},
              {value:this.p_manager, name:'基干分队',itemStyle:{color:'#4e76ff'}}
            ]
          },
        ]
      };;
    });
    this.service.CountRepair(this.current_city).then(r => {
      this.p_repair = r.data;
      this.pie_option={
        tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
          orient: 'horizontal',
          data:['专家','抢修队伍','基干分队'],
          textStyle:{color:'#95ffff'}
        },
        series: [
          {
            name:'人员分布',
            type:'pie',
            selectedMode: 'single',
            radius: [0, '50%'],

            label: {
              normal: {
                show: false
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data:[
              {value:this.p_expert, name:'专家',itemStyle:{color:'#61fcff'}},
              {value:this.p_repair, name:'抢修队伍',itemStyle:{color:'#52a5ff'}},
              {value:this.p_manager, name:'基干分队',itemStyle:{color:'#4e76ff'}}
            ]
          },
        ]
      };;
    });
    this.service.CountManager(this.current_city).then(r => {
      this.p_manager = r.data;
      this.pie_option={
        tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
          orient: 'horizontal',
          data:['专家','抢修队伍','基干分队'],
          textStyle:{color:'#95ffff'}
        },
        series: [
          {
            name:'人员分布',
            type:'pie',
            selectedMode: 'single',
            radius: [0, '50%'],

            label: {
              normal: {
                show: false
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data:[
              {value:this.p_expert, name:'专家',itemStyle:{color:'#61fcff'}},
              {value:this.p_repair, name:'抢修队伍',itemStyle:{color:'#52a5ff'}},
              {value:this.p_manager, name:'基干分队',itemStyle:{color:'#4e76ff'}}
            ]
          },
        ]
      };;
    });
    this.service.GetExpertDist(this.current_city).then(r => {
      const data = this.change_bar_data(r.value_list, r.class_list);
      this.bar_option_expert={
        tooltip : {
          trigger: 'axis',
          axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
          },
          formatter: function (params) {
            var tar;
            if (params[1].value != '-') {
              tar = params[1];
            }
            else {
              tar = params[0];
            }
            return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
          }
        },
        grid:{left:'20%'},
        xAxis: {
          type : 'category',
          splitLine: {show: false},
          data : data.class_list
        },
        yAxis: {
          name: '人数',
          type : 'value',
          nameTextStyle:{color:'#95ffff'},
          axisLabel:{color:'#95ffff'}
        },
        series: [
          {
            name:'统计',
            type: 'bar',
            stack: '总量',
            itemStyle: {
              normal: {
                barBorderColor: 'rgba(0,0,0,0)',
                color: 'rgba(0,0,0,0)'
              },
              emphasis: {
                barBorderColor: 'rgba(0,0,0,0)',
                color: 'rgba(0,0,0,0)'
              }
            },
            data: data.under_data
          },
          {
            name: '人数',
            type: 'bar',
            stack: '总量',
            label: {
              normal: {
                show: false,
                position: 'top',
                color:'#95ffff'
              }
            },
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(
                  0, 0, 0, 1,
                  [
                    {offset: 0, color: '#83bff6'},
                    {offset: 0.5, color: '#188df0'},
                    {offset: 1, color: '#188df0'}
                  ]
                )
              },
              emphasis: {
                color: new echarts.graphic.LinearGradient(
                  0, 0, 0, 1,
                  [
                    {offset: 0, color: '#2378f7'},
                    {offset: 0.7, color: '#2378f7'},
                    {offset: 1, color: '#83bff6'}
                  ]
                )
              }
            },
            data: data.data
          },
        ]
      };
    });
    this.service.GetManagerDist(this.current_city).then(r => {
      const data = this.change_bar_data(r.value_list, r.class_list);
      this.bar_option_manager={
        tooltip : {
          trigger: 'axis',
          axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
          },
          formatter: function (params) {
            var tar;
            if (params[1].value != '-') {
              tar = params[1];
            }
            else {
              tar = params[0];
            }
            return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
          }
        },
        grid:{left:'20%'},
        xAxis: {
          type : 'category',
          splitLine: {show: false},
          data : data.class_list
        },
        yAxis: {
          name: '人数',
          type : 'value',
          nameTextStyle:{color:'#95ffff'},
          axisLabel:{color:'#95ffff'}
        },
        series: [
          {
            name:'统计',
            type: 'bar',
            stack: '总量',
            itemStyle: {
              normal: {
                barBorderColor: 'rgba(0,0,0,0)',
                color: 'rgba(0,0,0,0)'
              },
              emphasis: {
                barBorderColor: 'rgba(0,0,0,0)',
                color: 'rgba(0,0,0,0)'
              }
            },
            data: data.under_data
          },
          {
            name: '人数',
            type: 'bar',
            stack: '总量',
            label: {
              normal: {
                show: false,
                position: 'top',
                color:'#95ffff'
              }
            },
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(
                  0, 0, 0, 1,
                  [
                    {offset: 0, color: '#83bff6'},
                    {offset: 0.5, color: '#188df0'},
                    {offset: 1, color: '#188df0'}
                  ]
                )
              },
              emphasis: {
                color: new echarts.graphic.LinearGradient(
                  0, 0, 0, 1,
                  [
                    {offset: 0, color: '#2378f7'},
                    {offset: 0.7, color: '#2378f7'},
                    {offset: 1, color: '#83bff6'}
                  ]
                )
              }
            },
            data: data.data
          },
        ]
      };
    });
    this.service.GetRepairDist(this.current_city).then(r => {
      const data = this.change_bar_data(r.value_list, r.class_list);
      this.bar_option_repair={
        tooltip : {
          trigger: 'axis',
          axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
          },
          formatter: function (params) {
            var tar;
            if (params[1].value != '-') {
              tar = params[1];
            }
            else {
              tar = params[0];
            }
            return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
          }
        },
        grid:{left:'20%'},
        xAxis: {
          type : 'category',
          splitLine: {show: false},
          data : data.class_list
        },
        yAxis: {
          name: '人数',
          type : 'value',
          nameTextStyle:{color:'#95ffff'},
          axisLabel:{color:'#95ffff'}
        },
        series: [
          {
            name:'统计',
            type: 'bar',
            stack: '总量',
            itemStyle: {
              normal: {
                barBorderColor: 'rgba(0,0,0,0)',
                color: 'rgba(0,0,0,0)'
              },
              emphasis: {
                barBorderColor: 'rgba(0,0,0,0)',
                color: 'rgba(0,0,0,0)'
              }
            },
            data: data.under_data
          },
          {
            name: '人数',
            type: 'bar',
            stack: '总量',
            label: {
              normal: {
                show: false,
                position: 'top',
                color:'#95ffff'
              }
            },
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(
                  0, 0, 0, 1,
                  [
                    {offset: 0, color: '#83bff6'},
                    {offset: 0.5, color: '#188df0'},
                    {offset: 1, color: '#188df0'}
                  ]
                )
              },
              emphasis: {
                color: new echarts.graphic.LinearGradient(
                  0, 0, 0, 1,
                  [
                    {offset: 0, color: '#2378f7'},
                    {offset: 0.7, color: '#2378f7'},
                    {offset: 1, color: '#83bff6'}
                  ]
                )
              }
            },
            data: data.data
          },
        ]
      };
    });
  }
  change_bar_data(data, class_data): any {
    let temp = 0
    const under_data: Array<Number> = [0];
    for (const i of data) {
      temp = temp + i;
      under_data.push(temp);
    }
    under_data.reverse();
    data.push(under_data[0]);
    data.reverse();
    under_data[0]= 0;
    class_data.push(toUnicode('总数'));
    class_data.reverse();
    return {'class_list':class_data,'under_data':under_data,'data':data}
  }
}
