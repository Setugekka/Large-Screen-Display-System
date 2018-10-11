import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import * as d3 from 'd3';
declare var echarts: any;
@Component({
  selector: 'app-is-index',
  templateUrl: './is-index.component.html',
  styleUrls: ['./is-index.component.css']
})
export class IsIndexComponent implements OnInit {
  private detail:any="综合后勤保障(ILS)是美军在20 世纪60 年 代提出来的解决保障问题的一种新的管理思想和 工作方法。这种方法的指导思想是在装备研制过 程中,同步开展有关装备保障的管理和技术活动, 在装备设计之初,确定最佳的保障性要求,进行保 障性设计,同步考虑主装备保障问题。在主装备 交付部队使用时,获得装备保障所需的各种保障 资源,并在使用阶段以最低的费用提供装备所需 的保障。\n" +
    "美军从国防部到各军兵种都制订了一系列的 指令、条例、军用标准等,并在军事装备中进行广 泛地应用。如在M1坦克、F-22战斗机、F35联合 攻击机、“海狼”级攻击型核潜艇等装备中按要求 开展综合后勤保障工作,并取得了较好的效果。\n" +
    "国外综合后勤保障能力主要体现在:\n" +
    "1)响应敏捷核心是在正确的时间将正确 的保障资源提供到正确的地方。\n" +
    "2)简单以最少的保障资源需求满足战备 完好性要求,保障效率高。\n" +
    "3)灵活后勤保障的结构和工作程序能适 应不断变化的形势、任务和作战方案,从而使响应 更加敏捷。\n" +
    "4)经济以尽可能少的费用提供所需保障。\n" +
    "5)恰当为作战提供最少、必需的供应和服 务,而非等到具备了最少必需的保障水平时才开 始作战(保障规划水平高)。\n" +
    "6)持续保持能力在作战期内,能持续维持 所需的保障水平(关系到部队的长期作战能力)。\n" +
    "7)生存力具有物理防护、伪装和限制规模 的能力。\n";
  private detail_title: any = '综合保障系统';
  private  option: any;
  private  root = <any>{};
  private data = {
    name: "",
    "children": [{
      "name": "物资",
      "size": 300,
      "num": "1"
    }, {
      "name": "装备",
      "size": 300,
      "num": "2"
    },

      {
        "name": "发电车",
        "size": 300,
        "num": "3"
      },{
        "name": "照明",
        "size": 300,
        "num": "4"
      },{
        "name": "车辆",
        "size": 300,
        "num": "5"
      },{
        "name": "发电机",
        "size": 300,
        "num": "6"
      },
      // {
      //   "name": "后勤",
      //   "size": 300,
      //   "num": "7"
      // }
      ],
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

  constructor(private router:Router) { }

  ngOnInit() {
    this.root = d3.hierarchy(this.data)
      .sum(function(d) {
        return d.size;
      })
      .sort(function(a, b) {
        return b.value - a.value;
      });
    d3.pack()
      .size([400, 400])
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
                return "{numAll|" + params.value[2] + "}";
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
          const result = "<span>" + params.value[2] + "</span><br>"
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

  onChartClick(params){
    const dict={"物资":"Material","车辆":"Vehicle","装备":"Equipment","后勤":"LogisticsMaterial","发电车":"GeneratorCar","发电机":"Alternator","照明":"Lighting"}
    const url="/IntegratedSupportability/"+dict[params.value[2]]
    this.router.navigate([url])
  }
  onChartMouseOver(params){
    const text={"物资":"应急物资是指为应对严重自然灾害、突发性公共卫生事件、公共安全事件及军事冲突等突发公共事件应急处置过程中所必需的保障性物质。从广义上概括，凡是在突发公共事件应对的过程中所用的物资都可以称为应急物资。","车辆":"应急通讯指挥车分为：公安通讯指挥车、武警通讯指挥车、电信通讯指挥车、桥梁通讯指挥车、建委通讯指挥车、城管通讯指挥车、电力通讯指挥车、交通通讯指挥车、卫生通讯指挥车、地震通讯指挥车、公路通讯指挥车、消防通讯指挥车、环境通讯指挥车、森林通讯指挥车等等。\n" +
      "外观照片\n" +
      "外观照片(4张)\n" +
      "通讯指挥车主要构有Hanhsx中控系统、视频系统、广播系统、灯光系统、供电系统等组成。完成系统集成的全部内容后，通讯指挥车到达现场系统将图像和声音通过汉华世讯Hanhsx系统传送到几十公里、几百公里的应急中心,供中心做应急处理。","装备":"应急救援设备与资源是开展应急救援工作必不可少的条件。为保证应急工作的有效实施，各应急部门都应制定应急救援装备的配备标准。应急救援装备的配备应根据各自承担的应急救援任务和要求选配。选择装备要根据实用性、功能性、耐用性和安全性，以及客观条件配置。","后勤":"后勤作为一种军事活动，有它特定的后勤机构和后勤保障内容。随着资本主义经济发展和工业革命带来的武器装备的进步，后勤机构和后勤任务量膨胀得像雪球一样急剧。主要表现在：① 物资消耗数量增多，品种、结构发生极大变化，弹药、油料和工程器材代替粮草成为主要物资；②随卫生保障着医疗科学技术和交通运输工具的发展，逐步成为系列化的工作；③交通运输也成为军队的一项专门勤务；①军队武器装备逐渐由机器产品代替了手工制品。","发电车":"装有电源装置的专用车．可装配电瓶组，柴油发电机组，燃汽发电机组．\n" +
      "\n" +
      "装配发电机组的车厢要求消音降躁，还要配置辅助油箱，电缆卷盘，照明灯等设备．\n" +
      "可用来发电，检修设备，会议保障，野外作业等功能．","发电机":"发电机是指将其他形式的能源转换成电能的机械设备，它由水轮机、汽轮机、柴油机或其他动力机械驱动，将水流，气流，燃料燃烧或原子核裂变产生的能量转化为机械能传给发电机，再由发电机转换为电能。\n" +
      "发电机在工农业生产、国防、科技及日常生活中有广泛的用途。发电机的形式很多，但其工作原理都基于电磁感应定律和电磁力定律。因此，其构造的一般原则是：用适当的导磁和导电材料构成互相进行电磁感应的磁路和电路，以产生电磁功率，达到能量转换的目的。","照明":"照明是利用各种光源照亮工作和生活场所或个别物体的措施。利用太阳和天空光的称“天然采光”；利用人工光源的称“人工照明”。照明的首要目的是创造良好的可见度和舒适愉快的环境。\n"}
   // this.detail=params.value[2]+"简介"+"         "+text[params.value[2]];
    this.detail = text[params.value[2]];
    this.detail_title = params.value[2];

  }

}
