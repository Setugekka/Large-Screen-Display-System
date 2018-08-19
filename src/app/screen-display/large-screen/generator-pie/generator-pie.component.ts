import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {url_main} from '../config'
import {componentRefresh} from "@angular/core/src/render3/instructions";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {DetailviewComponent} from "../detailview/detailview.component"
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

  dtOptions:any;
  constructor(private http:HttpClient,private modalService:NgbModal) { }
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
          subtext: '安质部编制',
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
          show: false,
        },
        series: [
          {
            name:'车辆占比',
            type:'pie',
            radius: ['40%', '55%'],
            color: ['#c487ee', '#deb140', '#49dff0', '#034079', '#6f81da', '#00ffb4'],
            avoidLabelOverlap:true,
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
                    color:'tranaparent',
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
            labelLine:{
              length:50,
              length2:30
            },
            data:this.dataPosition
          }
        ]
      };
    })
    // this.refresh('抚顺')
  }
  refresh(city){
    if (city == '辽宁'){
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
            data:this.City,
            textStyle: {
              color: 'white'
            }
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
                  // backgroundColor: '#eee',
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
    else{
      this.http.get(url_main+'/generator/count/department/'+city).subscribe(res=>{
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
  onChartClick(event){
    this.dtOptions={

      language: {     // 语言设置
        'paginate': {
          'first':      '首页',
          'last':       '末页',
          'next':       '下一页',
          'previous':   '上一页'
        },
        'zeroRecords':    '没有查询到匹配的数据',
        'search': '搜索:',
        'emptyTable':     '当前文件夹为空',
        'processing': '处理中...',
        'lengthMenu': '显示 _MENU_ 项结果',
        'info': '显示第 _START_ 至 _END_ 项结果，共 _TOTAL_ 项',
        'infoEmpty': '显示第 0 至 0 项结果，共 0 项',
        'infoFiltered': '(由 _MAX_ 项结果过滤)',
        'infoPostFix': '',
        'url': '',
        'loadingRecords': '载入中...',
      },

      ajax:url_main+'/generator/getbyCity/'+event.name,
      columns:[
        {title:'序号',data:'Id'},
        {title:'管理单位',data:'Department'},
        {title:'型号',data:'Type'},
        {title:'容量（千瓦）',data:'Capacity'},
        {title:'出厂时间',data:'Date_Production'},
        {title:'生产厂家',data:'Factory'},
        {title:'联系人',data:'Contact'},
        {title:'联系电话',data:'Phone'},
        {title:'存放地点',data:'Position'},
        {title:'调用情况',data:'Condition'}
      ],


    }
    const modalRef = this.modalService.open(DetailviewComponent,{windowClass:'myCustomModalClass'}) //myCustomModalClass自定义模态框大小，该css类写在了全局样式style.css中
    modalRef.componentInstance.dOptions = this.dtOptions;

  }
}
