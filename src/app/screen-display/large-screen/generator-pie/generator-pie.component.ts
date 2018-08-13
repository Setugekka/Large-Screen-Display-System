import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {url_main} from '../config'
@Component({
  selector: 'app-generator-pie',
  templateUrl: './generator-pie.component.html',
  styleUrls: ['./generator-pie.component.css']
})
export class GeneratorPieComponent implements OnInit {
  dataCapacity:Array<any>;
  dataPosition:Array<any>;
  City:Array<string>;
  Pie_Option:any;
  Dict_temp:any;
  scale:number;
  rich: any;
  constructor(private http:HttpClient) { }

  ngOnInit() {

    //获取按容量分布数据
    // this.http.get(url_main+'/generator/count/Capacity').subscribe(res =>{
    //   this.dataCapacity=[]
    //   for (const key of Object.keys(res['data'])){
    //     this.Dict_temp={value:res['data'][key],name:key};
    //     this.dataCapacity.push(this.Dict_temp)
    //   }
    //   console.log(this.dataCapacity)
    // })
    //获取按位置分布数据
    this.http.get(url_main+'/generator/count/City').subscribe(res=>{
      this.dataPosition=[]
      this.City = []
      this.rich = {
        yellow: {
          color: "#ffc72b",
          fontSize: 30 * this.scale,
          padding: [5, 4],
          align: 'center'
        },
        total: {
          color: "#ffc72b",
          fontSize: 40 * this.scale,
          align: 'center'
        },
        white: {
          color: "#fff",
          align: 'center',
          fontSize: 14 * this.scale,
          padding: [21, 0]
        },
        blue: {
          color: '#49dff0',
          fontSize: 16 * this.scale,
          align: 'center'
        },
        hr: {
          borderColor: '#0b5263',
          width: '100%',
          borderWidth: 1,
          height: 0,
        }
      }
      this.scale=1
      for (const key of Object.keys(res['data'])){
        this.Dict_temp={value:Number(res['data'][key]),name:key};
        this.dataPosition.push(this.Dict_temp)
        this.City.push(key)
      }
      var echartData = this.dataPosition;
      console.log(echartData)
      this.Pie_Option = {
        title : {

          text: '辽宁省发电车辆分布',
          subtext: '纯属虚构',
          left:'center',
          top:'46%',
          x:'center',
          textStyle:{
            color:'#fff'
          }
        },
        //tooltip: {
        //    trigger: 'item',
        //    formatter: "{a} <br/>{b}: {c} ({d}%)"
        //},
        legend: {
          orient: 'vertical',
          x: 'left',
          data:this.City
        },
        series: [
          {
            name:'车辆占比',
            type:'pie',
            radius: ['40%', '55%'],
            color: ['#c487ee', '#deb140', '#49dff0', '#034079', '#6f81da', '#00ffb4'],
            label: {
              normal: {
                formatter: '{b|{b}：}{c}  {per|{d}%}  ',
                //backgroundColor: '#eee',
                borderColor: '#aaa',
                borderWidth: 1,
                borderRadius: 4,
                // shadowBlur:3,
                // shadowOffsetX: 2,
                // shadowOffsetY: 2,
                // shadowColor: '#999',
                // padding: [0, 7],
                rich: {
                  a: {
                    //color: '#999',
                    color:'#fff',
                    lineHeight: 22,
                    align: 'center'
                  },
                  // abg: {
                  //     backgroundColor: '#333',
                  //     width: '100%',
                  //     align: 'right',
                  //     height: 22,
                  //     borderRadius: [4, 4, 0, 0]
                  // },
                  hr: {
                    borderColor: '#aaa',
                    width: '100%',
                    borderWidth: 0.5,
                    height: 0
                  },
                  b: {
                    fontSize: 16,
                    lineHeight: 33
                  },
                  per: {
                    //color: '#eee',
                    color:'#fff',
                    backgroundColor: '#334455',
                    padding: [2, 4],
                    borderRadius: 2
                  }
                }
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: '30',
                  fontWeight: 'bold'
                }
              }
            },
            data:this.dataPosition
          }
        ]
      };
    })
  }

}
