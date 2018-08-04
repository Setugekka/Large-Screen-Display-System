import { Component, OnInit } from '@angular/core';

declare var $: any;
@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  option = {

    // calculable : true,
    series : [
      {
        name:'面积模式',
        type:'pie',
        radius : [15, 50],
        // center : ['50%', '30%'],
        label: {
          normal: {
            show: false,
            position:"inside"
          },
          emphasis: {
            show: true,
          }
        },
        roseType : 'area',
        data:[
          {value:10, name:'季度1',itemStyle:{
              color:"#73faf3"
            }},
          {value:5, name:'季度2',itemStyle:{
              color:"#aed0fa"
            }},
          {value:15, name:'季度3',itemStyle:{
              color:"#a6fab7"
            }},
          {value:25, name:'季度4',itemStyle:{
              color:"#d2c7fa"
            }},
        ]

      }
    ]
  };
  constructor() { }

  ngOnInit() {
    $.getScript('./assets/js/overview_test.js');
  }

}
