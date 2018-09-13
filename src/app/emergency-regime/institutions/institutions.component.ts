import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FileviewComponent} from '../fileview/fileview.component';
import {Http} from '@angular/http';
import { Urls} from '../../shared/model/model.url';
import {ActivatedRoute} from '@angular/router';



declare var echarts: any;
@Component({
  selector: 'app-institutions',
  templateUrl: './institutions.component.html',
  styleUrls: ['./institutions.component.css']
})

export class InstitutionsComponent implements OnInit {
  private  urls = Urls;
  private  data = {};
  treemap_option: any;
  class = '';
  GetInstitutions():  any {
    const params = {
      'class': this.class
    };
    const data = this.http.get(this.urls.GetInstitutions, {params: params} )
      .toPromise()
      .then(response => response.json());
    return data;
  }
  constructor(private modalService: NgbModal, private http: Http, public activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.class = this.activatedRoute.snapshot.paramMap.get('Id');
    console.log(this.class);
    this.GetInstitutions().then(r => {
      this.data = r
      this.treemap_option = {
      title: {
        text: '应急制度体系',
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
              fontSize: 32,
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
              fontSize: 32,
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
  });
  }
  onChartClick(event) {
    const modalRef = this.modalService.open(FileviewComponent, {windowClass: 'FileModalClass'}); // FileModalClass自定义模态框大小，该css类写在了全局样式style.css中
    modalRef.componentInstance.file_src = event.data['url'];
  }

}
