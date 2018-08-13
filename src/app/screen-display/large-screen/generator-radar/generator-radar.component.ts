import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {url_main} from '../config'

@Component({
  selector: 'app-generator-radar',
  templateUrl: './generator-radar.component.html',
  styleUrls: ['./generator-radar.component.css']
})
export class GeneratorRadarComponent implements OnInit {

  constructor(private http:HttpClient) { }
  Option:any;
  ngOnInit() {
    this.http.get(url_main+'/generator/count/capacity').subscribe(res=>{
      this.Option = {
        title: {
          text: '应急发电车能力分布雷达图',
          left: '10%',
          textStyle: {
            color: '#eee'
          }
        },
        tooltip: {},
        // legend: {
        //   data: ['容量分配']
        // },
        radar: {
          // shape: 'circle',
          name: {
            textStyle: {
              color: '#fff',
              //backgroundColor: '#999',
              borderRadius: 3,
              padding: [3, 5]
            }
          },
          indicator: [
            { name: '<200', max: 20},
            { name: '200-300', max: 20},
            { name: '300-400', max: 20},
            { name: '400-450', max: 20},
            { name: '450-500', max: 20},
          ],
          splitLine: {
            lineStyle: {
              color: [
                'rgba(238, 197, 102, 0.1)', 'rgba(238, 197, 102, 0.2)',
                'rgba(238, 197, 102, 0.4)', 'rgba(238, 197, 102, 0.6)',
                'rgba(238, 197, 102, 0.8)', 'rgba(238, 197, 102, 1)'
              ].reverse()
            }
          },
          splitArea: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: 'rgba(238, 197, 102, 0.5)'
            }
          }
        },
        series: [{
          name: '应急发电车能力分布',
          lineStyle:{
            normal: {
              width: 1,
              opacity: 0.5
            }
          },
          itemStyle: {
            normal: {
              color: '#F9713C'
            }
          },
          areaStyle: {
            normal: {
              opacity: 0.1
            }
          },
          type: 'radar',
          // areaStyle: {normal: {}},
          data : [
            {
              value : res['data'],
              name : '能力分布图'
            },
          ]
        }]
      };
    })
  }

}
