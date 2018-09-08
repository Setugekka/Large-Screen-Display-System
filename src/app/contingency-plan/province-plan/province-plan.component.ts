import { Component, OnInit } from '@angular/core';
declare var echarts: any;

@Component({
  selector: 'app-province-plan',
  templateUrl: './province-plan.component.html',
  styleUrls: ['./province-plan.component.css']
})
export class ProvincePlanComponent implements OnInit {
  option: any;
  data = [
    {
      'name': '整体预案体系',
      'draggable': true,
      'category': '整体预案体系',
      'url': '/assets/pdf/test.pdf'
    }, {
    'name': '台风',
    'draggable': true,
    'category': '自然灾害类',
    'url': '/assets/pdf/test.pdf'
  }, {
    'name': '防汛',
    'draggable': true,
    'category': '自然灾害类',
    'url': '/assets/pdf/test.pdf'
  }, {
    'name': '雨雪冰冻',
    'draggable': true,
    'category': '自然灾害类',
    'url': '/assets/pdf/test.pdf'
  }, {
    'name': '地震',
    'draggable': true,
    'category': '自然灾害类',
    'url': '/assets/pdf/test.pdf'
  }, {
    'name': '地质灾害',
    'draggable': true,
    'category': '自然灾害类',
    'url': '/assets/pdf/test.pdf'
  }, {
    'name': '大面积停电',
    'draggable': true,
    'category': '事故灾难类',
    'url': '/assets/pdf/test.pdf'
  }, {
    'name': '人身伤亡',
    'draggable': true,
    'category': '事故灾难类',
    'url': '/assets/pdf/test.pdf'
  }, {
    'name': '交通事故',
    'draggable': true,
    'category': '事故灾难类',
    'url': '/assets/pdf/test.pdf'
  }, {
    'name': '设备事故',
    'draggable': true,
    'category': '事故灾难类',
    'url': '/assets/pdf/test.pdf'
  }, {
    'name': '生产火灾',
    'draggable': true,
    'category': '事故灾难类',
    'url': '/assets/pdf/test.pdf'
  }, {
    'name': '通信事故',
    'draggable': true,
    'category': '事故灾难类',
    'url': '/assets/pdf/test.pdf'
  }, {
    'name': '网络',
    'draggable': true,
    'category': '事故灾难类',
    'url': '/assets/pdf/test.pdf'
  },
    {
      'name': '环境污染',
      'draggable': true,
      'category': '事故灾难类',
      'url': '/assets/pdf/test.pdf'
    }, {
    'name': '公共卫生',
    'draggable': true,
    'category': '公共卫生类',
    'url': '/assets/pdf/ws.pdf'
  }, {
    'name': '电力服务',
    'draggable': true,
    'category': '社会安全类',
    'url': '/assets/pdf/test.pdf'
  }, {
    'name': '重要保电',
    'draggable': true,
    'category': '社会安全类',
    'url': '/assets/pdf/test.pdf'
  }, {
    'name': '群体事件',
    'draggable': true,
    'category': '社会安全类',
    'url': '/assets/pdf/test.pdf'
  },
    {
      'name': '新闻突发事件',
      'draggable': true,
      'category': '社会安全类',
      'url': '/assets/pdf/test.pdf'
    }
  ];
  category = [
    {
      'name': '整体预案体系'
    }, {
    'name': '自然灾害类'
  }, {
    'name': '事故灾难类'
  }, {
    'name': '公共卫生类'
  }, {
    'name': '社会安全类'
  }
  ];
  links = [
    {
    'target': '台风',
    'source': '整体预案体系',
    'category': '自然灾害类'
  }, {
    'target': '防汛',
    'source': '整体预案体系',
    'category': '自然灾害类'
  }, {
    'target': '雨雪冰冻',
    'source': '整体预案体系',
    'category': '自然灾害类'
  }, {
    'target': '地震',
    'source': '整体预案体系',
    'category': '自然灾害类'
  }, {
    'target': '地质灾害',
    'source': '整体预案体系',
    'category': '自然灾害类'
  }, {
    'target': '大面积停电',
    'source': '整体预案体系',
    'category': '事故灾难类'
  }, {
    'target': '人身伤亡',
    'source': '整体预案体系',
    'category': '事故灾难类'
  }, {
    'target': '交通事故',
    'source': '整体预案体系',
    'category': '事故灾难类'
  }, {
    'target': '设备事故',
    'source': '整体预案体系',
    'category': '事故灾难类'
  }, {
    'target': '生产火灾',
    'source': '整体预案体系',
    'category': '事故灾难类'
  }, {
    'target': '通信事故',
    'source': '整体预案体系',
    'category': '事故灾难类'
  }, {
    'target': '网络',
    'source': '整体预案体系',
    'category': '事故灾难类'
  }, {
    'target': '环境污染',
    'source': '整体预案体系',
    'category': '事故灾难类'
  }, {
    'target': '公共卫生',
    'source': '整体预案体系',
    'category': '公共卫生类'
  }, {
    'target': '电力服务',
    'source': '整体预案体系',
    'category': '社会安全类'
  }, {
    'target': '重要保电',
    'source': '整体预案体系',
    'category': '社会安全类'
  }, {
    'target': '群体事件',
    'source': '整体预案体系',
    'category': '社会安全类'
  }, {
    'target': '新闻突发事件',
    'source': '整体预案体系',
    'category': '社会安全类'
  }
    ];

  constructor() { }
  onChartClick($event) {
    console.log(event);
    window.open('http://localhost:4200/src/assets/pdf/ws.pdf');
  }

  ngOnInit() {
      this.option = {
        tooltip: {
          formatter: function(param) {
            if (param.dataType === 'edge') {
              return param.data.category + ': ' + param.data.target;
            }
            return param.data.category + ': ' + param.data.name;
          }
        },
        title: {
          text: '省公司应急预案体系',
          textAlign: 'center',
          left: '50%',
          top: '20',
          textStyle: {
            color: '#FFF',
            fontWeight: 'normal',
            fontSize: 36,
          }
        },
        series: [{
          top: 150,
          label: {
            normal: {
              show: true,
              position: "inside",
              textStyle: {
                fontSize: 18
              }
            }
          },
          roam: true,
          edgeLabel: {
            normal: {
              show: true,
              formatter: function(param) {
                return param.data.category;
              },
              textStyle: {
                fontSize: 16
              }
            }
          },
          bottom: 80,
          data: this.data,
          categories: this.category,
          type: 'graph',
          focusNodeAdjacency: true,
          force: {
            repulsion: 1000,
            edgeLength: [150, 300],
            layoutAnimation: false,
          },
          "layout": "force",
          "symbolSize": [120, 30],
          "links": this.links,
          "symbol": "path://M19.300,3.300 L253.300,3.300 C262.136,3.300 269.300,10.463 269.300,19.300 L269.300,21.300 C269.300,30.137 262.136,37.300 253.300,37.300 L19.300,37.300 C10.463,37.300 3.300,30.137 3.300,21.300 L3.300,19.300 C3.300,10.463 10.463,3.300 19.300,3.300 Z",
          "lineStyle": {
            "normal": {
              "opacity": 0.9,
              "width": 1,
              "curveness": 0.1
            }
          }
        }],
        "animationEasingUpdate": "quinticInOut",
        "animationDurationUpdate": 1500
      };
}
}
