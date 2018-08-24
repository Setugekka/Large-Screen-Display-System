import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FileviewComponent} from '../fileview/fileview.component';



declare var echarts: any;
@Component({
  selector: 'app-institutions',
  templateUrl: './institutions.component.html',
  styleUrls: ['./institutions.component.css']
})

export class InstitutionsComponent implements OnInit {
  data = [{
    "value": 3,
    "name": "《中华人民共和国应急法》",
    'url': '/assets/pdf/test.pdf',
    'classification': '国家级别'
  }, {
    "value": 3,
    "name": "《中华人民共和国安全法》",
    'url': '/assets/pdf/test.pdf',
    'classification': '国家级别'
  }, {
    "value": 2.5,
    "name": "《国家能源监管局预案评审及备案细则》",
    'url': '/assets/pdf/test.pdf',
    'classification': '国家能监局'
  }, {
    "value": 2,
    "name": "《国家电网公司应急管理工作规定》",
    'url': '/assets/pdf/test.pdf',
    'classification': '国网公司'
  }, {
    "value": 2,
    "name": "《国家电网公司应急预案管理办法》",
    'url': '/assets/pdf/test.pdf',
  'classification': '国网公司'
  }, {
    "value": 2,
    "name": "《国家电网公司应急预案评审及备案管理办法》",
    'url': '/assets/pdf/test.pdf',
    'classification': '国网公司'
  }, {
    "value": 2,
    "name": "《国家电网公司救援基干管理工作规定》",
    'url': '/assets/pdf/test.pdf',
    'classification': '国网公司'
  }];
  treemap_option: any;
  constructor(private modalService: NgbModal) { }

  ngOnInit() {
    this.treemap_option = {
      title: {
        text: '应急预案体系',
        subtext: '',
        left: '50%',
        top: '20',
        textAlign: 'center',
        textStyle: {
          color: '#FFF',
          fontWeight: 'normal',
          fontSize: 36,
        }
      },
      tooltip: {
        trigger: 'item',
        formatter: '{b}'
      },
      series: [{
        type: 'treemap',
        width: '80%',
        height: '700',
        top: '100',
        roam: false, // 是否开启拖拽漫游（移动和缩放）
        nodeClick: false, // 点击节点后的行为,false无反应
        breadcrumb: {
          show: false
        },
        label: { // 描述了每个矩形中，文本标签的样式。
          normal: {
            show: true,
            position: 'inside',
            textStyle: {
              color: '#fff',
              fontSize: 16,
            },
            formatter: function(params) {
                return params.data['name'] + '\n\n' + params.data['classification'];
            },
          }
        },
        itemStyle: {
          normal: {
            show: true,
            textStyle: {
              color: '#fff',
              fontSize: 12,
            },
            borderWidth: 1,
            borderColor: '#fff',
          },

          emphasis: {
            label: {
              show: true
            }
          }
        },
        data: this.data
      }]
    };
  }
  onChartClick(event) {
    const modalRef = this.modalService.open(FileviewComponent, {windowClass: 'FileModalClass'}); // FileModalClass自定义模态框大小，该css类写在了全局样式style.css中
  }

}
