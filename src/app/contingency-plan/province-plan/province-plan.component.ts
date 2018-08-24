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
    },{
    'name': '专项1',
    'draggable': true,
    'category': '专项1',
    'url': '/assets/pdf/test.pdf'
  }, {
    'name': '专项2',
    'draggable': true,
    'category': '专项2',
    'url': '/assets/pdf/test.pdf'
  }, {
    'name': '专项3',
    'draggable': true,
    'category': '专项3',
    'url': '/assets/pdf/test.pdf'
  }, {
    'name': '专项4',
    'draggable': true,
    'category': '专项4',
    'url': '/assets/pdf/test.pdf'
  }, {
    'name': '专项5',
    'draggable': true,
    'category': '专项5',
    'url': '/assets/pdf/test.pdf'
  }, {
    'name': '专项6',
    'draggable': true,
    'category': '专项6',
    'url': '/assets/pdf/test.pdf'
  }, {
    'name': '专项7',
    'draggable': true,
    'category': '专项7',
    'url': '/assets/pdf/test.pdf'
  }, {
    'name': '专项8',
    'draggable': true,
    'category': '专项8',
    'url': '/assets/pdf/test.pdf'
  }, {
    'name': '专项9',
    'draggable': true,
    'category': '专项9',
    'url': '/assets/pdf/test.pdf'
  }, {
    'name': '专项10',
    'draggable': true,
    'category': '专项10',
    'url': '/assets/pdf/test.pdf'
  }, {
    'name': '专项11',
    'draggable': true,
    'category': '专项11',
    'url': '/assets/pdf/test.pdf'
  }, {
    'name': '专项12',
    'draggable': true,
    'category': '专项12',
    'url': '/assets/pdf/test.pdf'
  },
    {
      'name': '专项13',
      'draggable': true,
      'category': '专项13',
      'url': '/assets/pdf/test.pdf'
    }, {
    'name': '专项14',
    'draggable': true,
    'category': '专项14',
    'url': '/assets/pdf/test.pdf'
  }, {
    'name': '专项15',
    'draggable': true,
    'category': '专项15',
    'url': '/assets/pdf/test.pdf'
  }, {
    'name': '专项16',
    'draggable': true,
    'category': '专项16',
    'url': '/assets/pdf/test.pdf'
  }, {
    'name': '专项17',
    'draggable': true,
    'category': '专项17',
    'url': '/assets/pdf/test.pdf'
  },
    {
      'name': '专项18',
      'draggable': true,
      'category': '专项18',
      'url': '/assets/pdf/test.pdf'
    }, {
    'name': '专项19',
    'draggable': true,
    'category': '专项19',
    'url': '/assets/pdf/test.pdf'
  }];
  category = [
    {
      'name': '整体预案体系'
    },{
    'name': '专项1'
  }, {
    'name': '专项2'
  },{
    'name': '专项3'
  }, {
    'name': '专项4'
  },{
    'name': '专项5'
  }, {
    'name': '专项6'
  },{
    'name': '专项7'
  }, {
    'name': '专项8'
  },{
    'name': '专项9'
  }, {
    'name': '专项10'
  },{
    'name': '专项11'
  }, {
    'name': '专项12'
  }, {
    'name': '专项13'
  }, {
    'name': '专项14'
  }, {
    'name': '专项15'
  }, {
    'name': '专项16'
  },{
    'name': '专项17'
  }, {
    'name': '专项18'
  },{
    'name': '专项19'
  }];
  links = [{
    'target': '专项1',
    'source': '整体预案体系',
    'category': '专项1'
  }, {
    'target': '专项2',
    'source': '整体预案体系',
    'category': '专项2'
  }, {
    'target': '专项3',
    'source': '整体预案体系',
    'category': '专项3'
  }, {
    'target': '专项4',
    'source': '整体预案体系',
    'category': '专项4'
  }, {
    'target': '专项5',
    'source': '整体预案体系',
    'category': '专项5'
  }, {
    'target': '专项6',
    'source': '整体预案体系',
    'category': '专项6'
  }, {
    'target': '专项7',
    'source': '整体预案体系',
    'category': '专项7'
  }, {
    'target': '专项8',
    'source': '整体预案体系',
    'category': '专项8'
  }, {
    'target': '专项9',
    'source': '整体预案体系',
    'category': '专项9'
  }, {
    'target': '专项10',
    'source': '整体预案体系',
    'category': '专项10'
  }, {
    'target': '专项11',
    'source': '整体预案体系',
    'category': '专项11'
  }, {
    'target': '专项12',
    'source': '整体预案体系',
    'category': '专项12'
  }, {
    'target': '专项13',
    'source': '整体预案体系',
    'category': '专项13'
  }, {
    'target': '专项14',
    'source': '整体预案体系',
    'category': '专项14'
  }, {
    'target': '专项15',
    'source': '整体预案体系',
    'category': '专项15'
  }, {
    'target': '专项16',
    'source': '整体预案体系',
    'category': '专项16'
  }, {
    'target': '专项17',
    'source': '整体预案体系',
    'category': '专项17'
  }, {
    'target': '专项18',
    'source': '整体预案体系',
    'category': '专项18'
  }, {
    'target': '专项19',
    'source': '整体预案体系',
    'category': '专项19'
  },
    ];

    constructor() { }

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
          text: '省公司应急制度体系',
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
          "bottom": 80,
          "data": this.data,
          "categories": this.category,
          "type": "graph",
          "focusNodeAdjacency": true,
          "force": {
            "repulsion": 1000,
            "edgeLength": [150, 300]
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
