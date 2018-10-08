import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import * as d3 from 'd3';
declare var echarts: any;
@Component({
  selector: 'app-whole-institution',
  templateUrl: './whole-institution.component.html',
  styleUrls: ['./whole-institution.component.css']
})
export class WholeInstitutionComponent implements OnInit {
  private  option: any;
  private  root = <any>{};
  private data = {
    name: "基础数据资源",
    "children": [{
      "name": "国家",
      "size": 300,
      "num": "1"
    }, {
      "name": "国家能源局",
      "size": 300,
      "num": "2"
    },

      {
        "name": "国网公司",
        "size": 300,
        "num": "3"
      }],
    "size": 77,
    "num": "0"
  };
  renderItem = function(params, api) {
    // const fillObj = this.getFillColor(api.value(2));
    const textPosition = 'inside';
    if (api.value(2) === '国家') {
      return {
        type: 'circle',
        shape: {
          cx: api.value(5),
          cy: api.value(6),
          r: api.value(7)
        },
        z2: api.value(1) * 2,
        style: api.style({
          stroke: 'rgba(182, 184,30, 1)',
          fill:  {
            type: 'radial',
            x: 0.5,
            y: 0.5,
            r: 0.5,
            colorStops: [{
              offset: 0,
              color: '#626815' // 0% 处的颜色
            },
              /* {
                                         offset: 0.7, color: "#7b8013" // 100% 处的颜色
                                     },*/
              {
                offset: 1,
                color: '#a9aa0e' // 100% 处的颜色
              }
            ],
            globalCoord: false // 缺省为 false
          },
          textPosition: textPosition,
          lineWidth: 2
        }),
        styleEmphasis: api.style({
          textPosition: textPosition,
          stroke: '#f6f701',
          fill: {
            type: 'radial',
            x: 0.5,
            y: 0.5,
            r: 0.5,
            colorStops: [{
              offset: 0,
              color: '#a7ac0e' // 0% 处的颜色
            }, {
              offset: 0.5,
              color: '#babc0c' // 50% 处的颜色
            }, {
              offset: 1,
              color: '#f6f701' // 100% 处的颜色
            }],
            globalCoord: false // 缺省为 false
          },
          lineWidth: 2
        })
      };
    } else if (api.value(2) === '国家能源局') {
      return {
        type: 'circle',
        shape: {
          cx: api.value(5),
          cy: api.value(6),
          r: api.value(7)
        },
        z2: api.value(1) * 2,
        style: api.style({
          stroke: 'rgba(154, 14, 109, 1)',
          fill:  {
            type: 'radial',
            x: 0.5,
            y: 0.5,
            r: 0.5,
            colorStops: [{
              offset: 0,
              color: '#4e0435' // 0% 处的颜色
            },
              /* {
                                         offset: 0.7, color: "#7b8013" // 100% 处的颜色
                                     },*/
              {
                offset: 1,
                color: '#84085a' // 100% 处的颜色
              }
            ],
            globalCoord: false // 缺省为 false
          },
          textPosition: textPosition,
          lineWidth: 2
        }),
        styleEmphasis: api.style({
          textPosition: textPosition,
          stroke: '#f505a4',
          fill: {
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
          },
          lineWidth: 2
        })
      };
    } else {
      return {
        type: 'circle',
        shape: {
          cx: api.value(5),
          cy: api.value(6),
          r: api.value(7)
        },
        z2: api.value(1) * 2,
        style: api.style({
          stroke: '#03a1b3',
          fill:  {
            type: 'radial',
            x: 0.5,
            y: 0.5,
            r: 0.5,
            colorStops: [{
              offset: 0,
              color: '#034e61' // 0% 处的颜色
            },
              {
                offset: 0.7,
                color: '#086b87' // 70% 处的颜色
              },
              {
                offset: 1,
                color: '#068ca3' // 100% 处的颜色
              }
            ],
            globalCoord: false // 缺省为 false
          },
          textPosition: textPosition,
          lineWidth: 2
        }),
        styleEmphasis: api.style({
          textPosition: textPosition,
          stroke: '#09c2f6',
          fill: {
            type: 'radial',
            x: 0.5,
            y: 0.5,
            r: 0.5,
            colorStops: [{
              offset: 0,
              color: '#0a7998' // 0% 处的颜色
            }, {
              offset: 0.7,
              color: '#0b9ec8'  // 70% 处的颜色
            }, {
              offset: 1,
              color: '#09c2f6' // 100% 处的颜色
            }],
            globalCoord: false // 缺省为 false
          },
          lineWidth: 2
        })
      };
    }

  };
  // click(event) {
  //   // console.log(event.value[2]);
  //   this.router.navigate(['/EmergencyRegime/Institutions', {Id: event.value[2]}]);
  // }
  click(id) {
    console.log(id);
    this.router.navigate(['/EmergencyRegime/Institutions', {Id: id}]);
  }
  constructor(private router: Router) { }

  ngOnInit() {
    this.root = d3.hierarchy(this.data)
      .sum(function(d) {
        return d.size;
      })
      .sort(function(a, b) {
        return b.value - a.value;
      });
    d3.pack()
      .size([1000, 580])
      .padding(3)(this.root);
    let maxDepth = 0;
    const nodeAll = this.root.descendants();
    const nodes = nodeAll.filter(function(it) {
      return it.parent;
    });
    const seriesData = nodes.map(function(node) {
      maxDepth = Math.max(maxDepth, node.depth);
      let color = '#ffffff';
      if (node.depth === 1) {
        switch (node.data.name) {
          case '国家':
            color = 'rgba(218, 22, 158, 1)';
            break;
          case '国家能源局':
            color = 'rgba(156,156,14,1)';
            break;
          case '国网公司':
            color = 'rgba(14, 149, 156, 1)';
            break;
        }
        return {
          value: [
            node.value,
            node.depth,
            node.data.name,
            node.data.size,
            node.data.num,
            node.x,
            node.y,
            node.r,

          ],
          label: {
            normal: {
              show: true,
              color: color,
              formatter: function(params) {
                return "{type|" + params.value[4] + "}\n{numAll|" + params.value[2] + "}";
              },
              rich: {
                type: {
                  fontSize: 28,
                  padding: [0, 30, 0, 30],
                  color: color
                },
                numAll: {
                  fontSize: 28,
                  padding: [5, 0, 5, 0],
                  color: color
                }
              }
            }
          }
        };
      }
    });
    this.option = {
      backgroundColor: 'transparent',
      title: {
        text: '',
        textStyle: {
          color: 'rgba(164, 159, 159, 0.21)',
          fontSize: 32,
          fontFamily: '微软雅黑',
          fontWeight: 'normal'
        },
        right: 10,
        bottom: 10
      },
      xAxis: {
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          show: false
        },
        splitLine: {
          show: false
        }
      },
      yAxis: {
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          show: false
        },
        splitLine: {
          show: false
        }
      },
      tooltip: {
        backgroundColor: 'rgba(50,50,50,0.95)',
        formatter: function(params) {
          const size = ('' + params.value[3]).replace(/\d{1,3}(?=(\d{3})+$)/g, "$&,");
          const add = ('' + params.value[4]).replace(/\d{1,3}(?=(\d{3})+$)/g, "$&,");
          const result = "<span>" + params.value[2] + "</span><br>" +
            "<span style = 'line-height:30px;font-size : 25px; font-weight:bold;'>" + size + "</span></br>";
          return result;
        }
      },
      series: {
        type: 'custom',
        renderItem: this.renderItem,
        data: seriesData
      }
    };
  }

}
