import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {url_main} from '../config'
declare var echarts
@Component({
  selector: 'app-urgent-material-tree',
  templateUrl: './urgent-material-tree.component.html',
  styleUrls: ['./urgent-material-tree.component.css']
})
export class UrgentMaterialTreeComponent implements OnInit {
  treeOption:any;
  test:any;
  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.http.get(url_main+'/urgentmaterial/treedata').subscribe(res=>{
      this.treeOption = {
        grid:{
          left:'center',
          top:'center'
        },
        tooltip: {
          trigger: 'item',
          // triggerOn: 'mousemove'
        },
        // legend: {
        //   top: '2%',
        //   left: '3%',
        //   orient: 'vertical',
        //   data: [{
        //     name: 'tree1',
        //     icon: 'rectangle'
        //   } ],
        //   borderColor: '#c23531'
        // },
        series:[
          {
            type: 'tree',

            name: 'tree1',

            data: [res['data']],

            top: '5%',
            left: '7%',
            bottom: '2%',
            right: '60%',

            symbolSize: 7,
            initialTreeDepth:1,
            label: {
              normal: {
                position: 'left',
                verticalAlign: 'middle',
                align: 'right',
                color:'white'
              }
            },

            leaves: {
              label: {
                normal: {
                  position: 'right',
                  verticalAlign: 'middle',
                  align: 'left',
                  color:'white'
                }
              }
            },

            expandAndCollapse: true,

            animationDuration: 550,
            animationDurationUpdate: 750

          }
        ]
      };


    })
  }

}
