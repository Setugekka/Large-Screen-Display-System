import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservoir',
  templateUrl: './reservoir.component.html',
  styleUrls: ['./reservoir.component.css']
})
export class ReservoirComponent implements OnInit {
  echartsIntance:any;
  option = {
    tooltip : {
      formatter: "{a} <br/>{b} : {c}%"
    },
    series: [
      {
        name: '水位高度',
        type: 'gauge',
        detail: {formatter:'{value}%'},
        data: [{value: 50, name: '水位'}]
      }
    ]
  };
  chartoption = {
    "title": {
      "text": "水位情况图",
      "left": "center",
      "y": "10",
      "textStyle": {
        "color": "#fff"
      }
    },
    "color": "#384757",
    "tooltip": {
      "trigger": "axis",
      "axisPointer": {
        "type": "cross",
        "crossStyle": {
          "color": "#384757"
        }
      }
    },
    "legend": {
      "data": [
        {
          "name": "最高水位",
          "icon": "circle",
          "textStyle": {
            "color": "#7d838b"
          }
        },
        {
          "name": "最低水位",
          "icon": "circle",
          "textStyle": {
            "color": "#7d838b"
          }
        },
        {
          "name": "临界点",
          "icon": "circle",
          "textStyle": {
            "color": "#7d838b"
          }
        }
      ],
      "top": "10%",
      "textStyle": {
        "color": "#fff"
      }
    },
    "xAxis": [
      {
        "type": "category",
        "data": [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6"
        ],
        "axisPointer": {
          "type": "shadow"
        },
        "axisLabel": {
          "show": true,
          "textStyle": {
            "color": "#7d838b"
          }
        }
      }
    ],
    "yAxis": [
      {
        "type": "value",
        "name": "高度",
        "nameTextStyle": {
          "color": "#7d838b"
        },
        "min": 0,
        "max": 50,
        "interval": 10,
        "axisLabel": {
          "show": true,
          "textStyle": {
            "color": "#7d838b"
          }
        },
        "axisLine": {
          "show": true
        },
        "splitLine": {
          "lineStyle": {
            "color": "#7d838b"
          }
        }
      },
      {
        "type": "value",
        "name": "临界点",
        "show": true,
        "axisLabel": {
          "show": true,
          "textStyle": {
            "color": "#7d838b"
          }
        }
      }
    ],
    "grid": {
      "top": "20%"
    },
    "series": [
      {
        "name": "最低水位",
        "type": "bar",
        "data": [
          4,
          6,
          36,
          6,
          8,
          6
        ],
        "barWidth": "auto",
        "itemStyle": {
          "normal": {
            "color": {
              "type": "linear",
              "x": 0,
              "y": 0,
              "x2": 0,
              "y2": 1,
              "colorStops": [
                {
                  "offset": 0,
                  "color": "rgba(255,37,117,0.7)"
                },
                {
                  "offset": 0.5,
                  "color": "rgba(0,133,245,0.7)"
                },
                {
                  "offset": 1,
                  "color": "rgba(0,133,245,0.3)"
                }
              ],
              "globalCoord": false
            }
          }
        }
      },
      {
        "name": "最高水位",
        "type": "bar",
        "data": [
          4,
          2,
          36,
          6,
          8,
          6
        ],
        "barWidth": "auto",
        "itemStyle": {
          "normal": {
            "color": {
              "type": "linear",
              "x": 0,
              "y": 0,
              "x2": 0,
              "y2": 1,
              "colorStops": [
                {
                  "offset": 0,
                  "color": "rgba(255,37,117,0.7)"
                },
                {
                  "offset": 0.5,
                  "color": "rgba(0,255,252,0.7)"
                },
                {
                  "offset": 1,
                  "color": "rgba(0,255,252,0.3)"
                }
              ],
              "globalCoord": false
            }
          }
        },
        "barGap": "0"
      },
      {
        "name": "临界点",
        "type": "line",
        "yAxisIndex": 1,
        "data": [
          100,
          33,
          100,
          100,
          100,
          100
        ],
        "itemStyle": {
          "normal": {
            "color": "#ffaa00"
          }
        },
        "smooth": true
      }
    ]
  };
  constructor() { }

  ngOnInit() {
  }
  onChartInit(ec) {
    this.echartsIntance = ec;
  }
  }

