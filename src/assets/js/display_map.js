
/**
 此版本通过设置geoindex && seriesIndex: [1] 属性来实现geo和map共存，来达到hover散点和区域显示tooltip的效果

 默认情况下，map series 会自己生成内部专用的 geo 组件。但是也可以用这个 geoIndex 指定一个 geo 组件。这样的话，map 和 其他 series（例如散点图）就可以共享一个 geo 组件了。并且，geo 组件的颜色也可以被这个 map series 控制，从而用 visualMap 来更改。
 当设定了 geoIndex 后，series-map.map 属性，以及 series-map.itemStyle 等样式配置不再起作用，而是采用 geo 中的相应属性。

 http://echarts.baidu.com/option.html#series-map.geoIndex

 并且加了pin气泡图标以示数值大小
 */


$.ajaxSettings.async = false;
$.getJSON('./assets/json/liaoning.json', function(geoJson) {
  echarts.registerMap('liaoning', geoJson);
  console.log(geoJson)
})
myChart=echarts.init(document.getElementById('map'));
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
var data1 = [
  {name:'沈阳市',value:['和平区','浑南区','皇姑区','沈河区','大东区','铁西区','苏家屯区','沈北新区','于洪区','辽中区','新民市','康平县','法库县']},
  {name:'大连市',value:['中山区','西岗区','沙河口区','甘井子区','旅顺口区','金州区','普兰店区','瓦房店市','庄河市','长海县']},
  {name:'鞍山市',value:['铁东区','铁西区','立山区','千山区','海城市','台安县','岫岩满族自治县']},
  {name:'抚顺市',value:['新抚区','顺城区','望花区','东洲区','抚顺县','新宾满族自治县','清原满族自治县']},
  {name:'本溪市',value:['平山区','溪湖区','明山区','南芬区','本溪满族自治县','桓仁满族自治县']},
  {name:'丹东市',value:['元宝区','振兴区','振安区','东港市','凤城市','宽甸满族自治县']},
  {name:'盘锦市',value:[	'双台子区','兴隆台区','大洼区','盘山县']},
  {name:'营口市',value:['站前区','西市区','鲅鱼圈区','老边区','盖州市','大石桥市']},
  {name:'葫芦岛市',value:['连山区','龙港区','南票区','兴城市','绥中县','建昌县']},
  {name:'朝阳市',value:['双塔区','龙城区','北票市','凌源市','朝阳县','建平县','喀喇沁左翼蒙古族自治县']},
  {name:'阜新市',value:['海州区','新邱区','太平区','清河门区','细河区','阜新蒙古族自治县','彰武县']},
  {name:'辽阳市',value:['白塔区','文圣区','宏伟区','弓长岭区','太子河区','灯塔市','辽阳县']},
  {name:'铁岭市',value:['银州区','清河区','调兵山市','开原市','铁岭县','昌图县','西丰县']},
  {name:'锦州市',value:['古塔区','凌河区','太和区','凌海市','北镇市','黑山县','义县]']},
];
var selected = '';
var selecteddata = [];
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
    backgroundColor: '#154e90',
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
        }else{
          return params.name + ' : ' + params.value[2];
        }
      },
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
          show: false,
        },
        emphasis: {
          show: false,
        }
      },
      roam: true,
      zoom:0.9,
      top: 20,
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
        name: 'Top 3',
        type: 'effectScatter',
        coordinateSystem: 'geo',
        data: convertData(data.sort(function (a, b) {
          return b.value - a.value;
        }).slice(0, 3)),
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
    selected = params.name;
    console.log(selected);
    for (var i = 0; i < data1.length; i++) {
      if (data1[i].name==selected) {
        selecteddata = data1[i].value;
      }
    }

    var MyDiv =document.getElementById("district");
    $("#dropdownMenu2").html(selected)
    var html = '';
    for(var i = 0; i<selecteddata.length;i++ ){
      html+='<button class="dropdown-item" >'+selecteddata[i]+'</button>';
    }
    $("#district").html(html);

  });

$(document).ready(function(){
  var windowHeight = $(window).height();
  var windowHeight1 = windowHeight*0.92;
  if($(video).height() < windowHeight1){
    $(video).height(windowHeight1);
  };
});






