import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-ngbd-modal-content',
  template: `
    <div class="modal-dialog" >
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title" style="color: #009DA0">修改信息</h4>
          <button type="button" class="close" (click)="activeModal.dismiss('Cross click')" >×</button>
        </div>
        <div class="modal-body">
            <label for="projectinput4" *ngFor="let a of head;let i = index">{{a}}:
              <input class="form-control round" type="text" value = {{data[i]}} [(ngModel)] ="data[i]" >
            </label>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-raised btn-primary btn-xs" (click)="activeModal.dismiss('Cross click')">确定</button>
        </div>
      </div>
    </div>  `
})

export class NgbdModalContentComponent {
  @Input() head;
  @Input() data;
  constructor(public activeModal: NgbActiveModal) { }
}

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class DataTableComponent implements OnInit {
  closeResult: string;
  dtOptions: DataTables.Settings = {};
  title = 'app';
  head = [];
  edit = [];
  editing = {};
  click = false;
  @Input() data;
  @Input() datatable_click;
  constructor(private modalService: NgbModal) {
  }

  // This function is used in open
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  open(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
    this.click = true;
  }

  // Open content with dark section
  openContent(row, head) {
      const modalRef = this.modalService.open(NgbdModalContentComponent);
      modalRef.componentInstance.data = row;
      modalRef.componentInstance.head = head;
  }
  setTimeout(a) {
    setTimeout(a , 1000);
  }
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
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
    };
    this.head = this.data[0];
    this.data.splice(0, 1);
    console.log(this.data);
  }

}
