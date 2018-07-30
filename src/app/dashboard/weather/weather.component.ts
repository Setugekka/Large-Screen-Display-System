import { Component, OnInit } from '@angular/core';

declare var echarts:any;
declare var $:any;
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  chartOption = {
    title: {
      text: '温度'
    },
    tooltip : {
      trigger: 'axis'
    },
    legend: {
      data:['沈阳','铁岭','鞍山','抚顺','大连']
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis : [
      {
        type : 'category',
        boundaryGap : false,
        data : ['9：00','12：00','15：00','18：00','21：00','3：00','6：00']
      }
    ],
    yAxis : [
      {
        type : 'value'
      }
    ],
    series : [
      {
        name:'沈阳',
        type:'line',
        stack: '总量',
        areaStyle: {normal: {}},
        data:[120, 132, 101, 134, 90, 230, 210]
      },
      {
        name:'鞍山',
        type:'line',
        stack: '总量',
        areaStyle: {normal: {}},
        data:[220, 182, 191, 234, 290, 330, 310]
      },
      {
        name:'抚顺',
        type:'line',
        stack: '总量',
        areaStyle: {normal: {}},
        data:[150, 232, 201, 154, 190, 330, 410]
      },
      {
        name:'铁岭',
        type:'line',
        stack: '总量',
        areaStyle: {normal: {}},
        data:[320, 332, 301, 334, 390, 330, 320]
      },
      {
        name:'大连',
        type:'line',
        stack: '总量',
        label: {
          normal: {
            show: true,
            position: 'top'
          }
        },
        areaStyle: {normal: {}},
        data:[820, 932, 901, 934, 1290, 1330, 1320]
      }
    ]
  };
  tiaooption = {
    title: {
      text: '降雨量',
      subtext: '最近一个月降雨量'
    },
    xAxis: {
      data: ['1', '3', '5', '7', '9', '11', '13', '15', '17', '19', '21', '23', '25', '27', '29', '31'],
      axisLabel: {
        inside: true,
        textStyle: {
          color: '#fff'
        }
      },
      axisTick: {
        show: false
      },
      axisLine: {
        show: false
      },
      z: 10
    },
    yAxis: {
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        textStyle: {
          color: '#999'
        }
      }
    },
    dataZoom: [
      {
        type: 'inside'
      }
    ],
    series: [
      { // For shadow
        type: 'bar',
        itemStyle: {
          normal: {color: 'rgba(0,0,0,0.05)'}
        },
        barGap:'-100%',
        barCategoryGap:'40%',
        data: [500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500],
        animation: false
      },
      {
        type: 'bar',
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
        data: [220, 182, 191, 234, 290, 330, 310, 123, 442, 321, 90, 149, 210, 122, 133, 334]
      }
    ]
  };
  jioption = {
    angleAxis: {
      type: 'category',
      data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
      z: 10
    },
    radiusAxis: {
    },
    polar: {
    },
    series: [{
      type: 'bar',
      data: [1, 2, 3, 4, 3, 5, 1],
      coordinateSystem: 'polar',
      name: 'A',
      stack: 'a'
    }, {
      type: 'bar',
      data: [2, 4, 6, 1, 3, 2, 1],
      coordinateSystem: 'polar',
      name: 'B',
      stack: 'a'
    }, {
      type: 'bar',
      data: [1, 2, 3, 4, 1, 2, 5],
      coordinateSystem: 'polar',
      name: 'C',
      stack: 'a'
    }],
    legend: {
      show: true,
      data: ['A', 'B', 'C']
    }
  };
  constructor() { }

  ngOnInit() {
    $("#owl-demo,#owl-demo1,#owl-demo3,#owl-demo4").owlCarousel({
      autoPlay: 3000, //Set AutoPlay to 3 seconds
      items : 4,
      itemsDesktop : [768,3],
      itemsDesktopSmall : [414,2]

    });
  }

}
