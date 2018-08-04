
/**
 此版本通过设置geoindex && seriesIndex: [1] 属性来实现geo和map共存，来达到hover散点和区域显示tooltip的效果

 默认情况下，map series 会自己生成内部专用的 geo 组件。但是也可以用这个 geoIndex 指定一个 geo 组件。这样的话，map 和 其他 series（例如散点图）就可以共享一个 geo 组件了。并且，geo 组件的颜色也可以被这个 map series 控制，从而用 visualMap 来更改。
 当设定了 geoIndex 后，series-map.map 属性，以及 series-map.itemStyle 等样式配置不再起作用，而是采用 geo 中的相应属性。

 http://echarts.baidu.com/option.html#series-map.geoIndex

 并且加了pin气泡图标以示数值大小
 */

var uploadedDataURL = "./assets/json/liaoning.json";
myChart=echarts.init(document.getElementById('map'));
myChart.showLoading();
$.getJSON(uploadedDataURL, function(geoJson) {
  echarts.registerMap('liaoning', geoJson);
  myChart.hideLoading();
  var geoCoordMap = {
    '丹东市': [124.521, 40.4242],
    '大连市': [122.2009, 39.4409],
    '沈阳市': [123.1238, 42.1216],
    '营口市': [122.4316, 40.4297],
    '葫芦岛市': [120.1575, 40.578],
    '鞍山市': [122.85,40.82],
    '抚顺市': [123.97,41.67],
    '本溪市': [123.93,41.3],
    '朝阳市':	[120.42,41.58],
    '阜新市': [121.65,42],
    '辽阳市': [123.17,41.28],
    '铁岭市': [123.85,42.32],
    '盘锦市':[122.07,41.12],
    '锦州市':[121.15,41.13],

  };
  var data = [
    {name:'沈阳市',value:190},
    {name:'大连市',value:190},
    {name:'鞍山市',value:190},
    {name:'抚顺市',value:190},
    {name:'本溪市',value:190},
    {name:'丹东市',value:90},
    {name:'盘锦市',value:120},
    {name:'营口市',value:120},
    {name:'葫芦岛市',value:120},
    {name:'朝阳市',value:120},
    {name:'阜新市',value:190},
    {name:'辽阳市',value:190},
    {name:'铁岭市',value:190},
    {name:'锦州市',value:190},
  ];
  var max = 480, min = 9; // todo
  var maxSize4Pin = 100, minSize4Pin = 20;

  var convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
      var geoCoord = geoCoordMap[data[i].name];
      if (geoCoord) {
        res.push({
          name: data[i].name,
          value: geoCoord.concat(data[i].value)
        });
      }
    }
    return res;
  };
  option = {
    backgroundColor: '#020933',
    title: {
      top:10,
      text: '“摄像头分布” - 辽宁省',
      x: 'center',
      textStyle: {
        color: '#ccc',
      }
    },
    tooltip: {
      trigger: 'item',
      formatter: function (params) {
        if(typeof(params.value)[2] == "undefined"){
          return params.name + ' : ' + params.value;
          console.log(params)
        }else{
          return params.name + ' : ' + params.value[2];
        }
      }
    },
    visualMap: {
      show: false,
      min: 0,
      max: 500,
      left: 'left',
      text: ['高', '低'], // 文本，默认为数值文本
      calculable: true,
      seriesIndex: [1],
      inRange: {
      }
    },
    geo: {
      show: true,
      map: 'liaoning',
      label: {
        normal: {
          show: true,
        },
        emphasis: {
          show: true,
        }
      },
      roam: true,
      zoom:0.9,
      top: 30,
      itemStyle: {
        normal: {
          areaColor: 'transparent',
          borderColor: '#3fdaff',
          borderWidth: 1,
          shadowColor: 'rgba(63, 218, 255, 0.5)',
          shadowBlur: 30
        },
        emphasis: {
          areaColor: '#2B91B7',
        }
      }
    },
    series : [
      {
        name: 'light',
        type: 'scatter',
        coordinateSystem: 'geo',
        data: convertData(data),
        symbolSize: function (val) {
          return val[2] / 10;
        },
        label: {
          normal: {
            formatter: '{b}',
            position: 'right',
            show: true
          },
          emphasis: {
            show: true
          }
        },
        itemStyle: {
          normal: {
            color: '#F4E925'
          }
        }
      },
      {
        type: 'map',
        map: 'liaoning',
        geoIndex: 0,
        showLegendSymbol: false, // 存在legend时显示
        label: {
          normal: {
            show: false
          },
          emphasis: {
            show: true,
            textStyle: {
              color: '#fff'
            }
          }
        },
        roam: true,
        itemStyle: {
          normal: {
            areaColor: '#031525',
            borderColor: '#FFFFFF',
          },
          emphasis: {
            areaColor: '#2B91B7'
          }
        },
        animation: true,
        data: data
      },
      {
        name: 'Top 5',
        type: 'effectScatter',
        coordinateSystem: 'geo',
        data: convertData(data.sort(function (a, b) {
          return b.value - a.value;
        }).slice(0, 5)),
        symbolSize: function (val) {
          return val[2] / 10;
        },
        showEffectOn: 'render',
        rippleEffect: {
          brushType: 'stroke'
        },
        hoverAnimation: true,
        label: {
          normal: {
            formatter: '{b}',
            position: 'right',
            show: true
          }
        },
        itemStyle: {
          normal: {
            color: '#F4E925',
            shadowBlur: 10,
            shadowColor: '#05C3F9'
          }
        },
      },

    ]
  };
  myChart.setOption(option);
  myChart.on('click', function (params) {
    console.log(params)
  });
});






