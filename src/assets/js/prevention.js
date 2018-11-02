var colorDict={"橙色预警":"orange","红色预警":"red","蓝色预警":"blue","黄色预警":"yellow"};
//定义时间格式
var timeFormatter=d3.timeFormat("%m月%d日-%H时%M分%S秒");
current_rect="";
// width and height of the canvas
var w=1600;
var h=900;
var padding=50
// define svg
var svg=d3.select(".container")
  .append("svg")
  .attr("width",w)
  .attr("height",h);
//定义时间尺度到画布的映射函数
var timeScale = function(t1,t2){
  return d3.scaleTime()
    .domain([t1,t2])
    .range([0,w-padding])
};

//定义时间轴
t2=d3.timeMinute.offset(Date.now(),0);
t1=d3.timeMinute.offset(Date.now(),-24);
ts = timeScale(t1,t2)
var timeAxis=d3.axisBottom(ts)
  .ticks(10)
  .tickFormat(d3.timeFormat("%m/%d-%H:%M:%S"))

//画时间轴
svg.append("g")
  .attr("class","timeaxis")
  .attr("transform", "translate("+0+","+(h-padding)+")")
  .call(timeAxis);
//定义时间轴线的样式
d3.select(".domain")
  .attr("stroke-width", 4)
  .attr("stroke-linecap", "round");



//定义城市轴
cityData=["沈阳","大连","鞍山","抚顺","本溪","丹东","锦州","营口","阜新","辽阳","盘锦","铁岭","朝阳","葫芦岛"]
var cityScale=d3.scaleBand()
  .domain(cityData)
  .range([0,h-padding])
  .paddingInner(0.05);
var cityAxis=d3.axisRight(cityScale)
  .tickValues(cityData);
//画城市轴
svg.append("g")
  .attr("class","cityaxis")
  .attr("transform","translate("+(w-padding)+",0)")
  .call(cityAxis)

svg.selectAll(".cityaxis")
  .selectAll(".tick")
  .selectAll("text")
  .attr("y",0);

//定义时间与城市轴上标签的样式
d3.selectAll("text")
//.attr("y", 20)
  .attr("style", "font-size:10px")
  .attr("stroke", "white");


FREQUENCY=1000 //刷新频率，单位毫秒
//定义刷新事件
var t = d3.interval(function(elapsed) {
  //更新时间轴
  time1=d3.timeMinute.offset(Date.now(),-24);
  time2=d3.timeMinute.offset(Date.now(),0);
  ts.domain([time1,time2]);
  svg.select(".timeaxis")
    .transition()
    .duration(1000)
    .call(timeAxis);
  //更新进度条:移动x坐标
  svg.selectAll("rect")
    .transition()
    .duration(1000)
    .attr("x",function(d){
      return ts(d.time)-ts(time1);
    });
  //更新进度条：增加未结束的进度条宽度
  svg.selectAll("rect")
    .filter(function (d) { return d.p_type=="true" })//仅选择尚未结束的预警
    .transition()
    .duration(1000)
    .attr("x",function(d){
      return ts(d.time)-ts(time1);
    })
    .attr("width",function(d){
      return ts(time2)-ts(d.time);
    });
  //更新时间线
//        svg.selectAll(".timeLine")
//            .transition()
//            .duration(1000)
//            .attr("x1",function (d) {
//                return ts(d.time)-ts(time1);
//            })
//            .attr("x2",function (d) {
//                return ts(d.time)-ts(time1);
//            })
  //更新事件时间标签
//        svg.selectAll(".labels")
//            .transition()
//            .duration(1000)
//            .attr("x",function (d) {
//                return ts(d.time)-ts(time1);
//            })
//            .attr("style","font-size:10px")
//            .attr("stroke","white");

}, FREQUENCY);

//定义socket，事件监听
$(document).ready(function(){
  //监听地址
  var socket = io.connect('http://127.0.0.1:5000/LargeScreen');
  //监听事件为 update_prevention
  socket.on('update_prevention', function(msg) {

    msg["time"] = d3.timeMinute.offset(Date.now(),0);
    current_rect = msg.city;
    console.log(msg);
    //若预警已经结束p_class=="true"
    if (msg.p_type=="false"){

      if (d3.selectAll("."+current_rect).data().length!=0){
        for (var i=0;i<d3.selectAll("."+current_rect).data().length;i++){
          d3.selectAll("."+current_rect).data()[i].p_type="false";
        }
      };
      console.log(svg.selectAll("."+current_rect))
      svg.selectAll("."+current_rect)
        .transition()
        // .duration(2000)
        .attr("opacity",0.2)
        .attr("stroke-width",5)
        .attr("stroke-opacity",0.9);
      //添加结束时间线
//                svg.append("line")
//                    .attr("fill","red")
//                    .attr("class","timeLine")
//                    .attr("x1",function (d) {
//                        return ts(d.time)-ts(time1);
//                    })
//                    .attr("y1",0)
//                    .attr("x2",function (d) {
//                        return ts(d.time)-ts(time1);
//                    })
//                    .attr("y2",h-padding);
    }
    //若预警还未结束p_class=="false"
    else{
      myMsg=[msg];

      if (d3.selectAll("."+current_rect).data().length!=0){
        for (var i=0;i<d3.selectAll("."+current_rect).data().length;i++){
          d3.selectAll("."+current_rect).data()[i].p_type="false";
        }
      }
      //更新时间轴
      time1=d3.timeMinute.offset(Date.now(),-24);
      time2=d3.timeMinute.offset(Date.now(),0);
      ts.domain([time1,time2]);
      svg.select(".timeaxis")
        .transition()
        .duration(1000)
        .call(timeAxis);
      //更新进度条
      svg .append("rect")
        .data(myMsg)
        .attr("class",current_rect)
        .attr("x",function(d){
          return ts(d.time)-ts(time1)
        })
        .attr("y",function (d) {
          return cityScale(d.city);
        })
        .attr("width",function(d){
          return ts(time2)-ts(d.time);
        })
        .attr("height",(h-padding)/15)
        .attr("fill",function (d) {
          return colorDict[d.p_class];
        })
        .attr("opacity",0.9)
        .attr("stroke",function (d) {
          return colorDict[d.p_class];
        })
        .attr("stroke-width",1)
        .attr("stroke-opacity",0.4);
      //添加开始时间线
//                svg.append("line")
//                    .data(myMsg)
//                    .attr("fill","green")
//                    .attr("class","timeLine")
//                    .attr("x1",function (d) {
//                        return ts(d.time)-ts(time1);
//                    })
//                    .attr("y1",0)
//                    .attr("x2",function (d) {
//                        return ts(d.time)-ts(time1);
//                    })
//                    .attr("y2",h-padding);
      //加入时间标签
//                svg.append("text")
//                    .data(myMsg)
//                    .attr("class","labels")
//                    .attr("x",function (d) {
//                        return ts(d.time)-ts(time1);
//                    })
//                    .attr("y",function(d){
//                        return cityScale(d.city)-11;
//                    })
//                    .text(function(d){
//                        return timeFormatter(d.time);
//                    });

    }

  });

})
