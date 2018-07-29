import { Component, ViewChild  } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable/release';

declare var require: any;
const data: any = require('../../shared/data/data_manager_list.json');

@Component({
  selector: 'app-operation-log',
  templateUrl: './operation-log.component.html',
  styleUrls: ['./operation-log.component.css']
})

export class OperationLogComponent  {
  showloading: boolean = true;

  chartOption = {
    title: {
      text: '近一周各个管理员修改次数'
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['张一', '王二', '刘三', '李四', ]
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: '张一',
        type: 'line',
        stack: '总量',
        areaStyle: { normal: {} },
        data: [120, 132, 101, 134, 90, 230, 210]
      },
      {
        name: '王二',
        type: 'line',
        stack: '总量',
        areaStyle: { normal: {} },
        data: [220, 182, 191, 234, 290, 330, 310]
      },
      {
        name: '刘三',
        type: 'line',
        stack: '总量',
        areaStyle: { normal: {} },
        data: [150, 232, 201, 154, 190, 330, 410]
      },
      {
        name: '李四',
        type: 'line',
        stack: '总量',
        areaStyle: { normal: {} },
        data: [320, 332, 301, 334, 390, 330, 320]
      },
    ]
  };

  rows = [];
  temp = [];
  // Table Column Titles
  columns = [
    { prop: 'id' },
    { name: 'name' },
    { name: 'time' },
    { name: 'operation' },
    { name: 'dataid' },
  ];
  @ViewChild(DatatableComponent) table: DatatableComponent;
  constructor() {
    this.temp = [...data];
    this.rows = data;

  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.temp.filter(function (d) {
      return d.name.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.rows = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }





  }

