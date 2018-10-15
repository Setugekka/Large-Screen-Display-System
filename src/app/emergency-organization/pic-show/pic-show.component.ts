import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Router} from '@angular/router';

@Component({
  selector: 'app-pic-show',
  templateUrl: './pic-show.component.html',
  styleUrls: ['./pic-show.component.css']
})
export class PicShowComponent implements OnInit {
  @Input() url;
  chosen_level = '第一级';
  level_list = ['第一级', '第二级', '第三级', '第四级'];
  chosen_org = '应急领导小组';
  org_list = ['应急领导小组'];
  level_org = [
    {name: '第一级', value: ['应急领导小组']},
    {name: '第二级', value: ['安全应急办公室', '稳定应急办公室']},
    {name: '第三级', value: [ '保卫部', '建设部', '电力调度控制中心', '运维检修部', '营销部', '信息通信分公司', '物资供应中心', '综合服务']},
    {name: '第四级', value: [ '输电运检室', '变电运维室', '变电检修室', '配电运检室', '电缆运检室', '带电作业室', '和平客户服务分中心', '沈河客户服务分中心',
        '大东客户服务分中心', '皇姑客户服务分中心', '铁西客户服务分中心', '浑南客户服务分中心', '开发区客户服务分中心', '国网新民市供电公司', '国网沈阳市辽中区供电公司', '国网沈阳市苏家屯区供电公司',
        '国网沈阳市沈北新区供电公司', '国网沈阳市于洪区供电公司', '国网沈阳市法库县供电公司', '国网康平县供电公司', '国网沈阳市东陵区供电公司']}];
  change_org_list(level): any {
    console.log(level);
    this.chosen_level = level;
    for (const i of this.level_org) {
      if (i.name === level) {
        this.org_list = i.value;
      }
    }
    this.chosen_org = this.org_list[0];
  }
  open_org(event): any {
    // console.log(event.target['innerText']);
    this.router.navigate(['/EmergencyOrganization/CityOrganization', {Id: event.target['innerText']}]);
    this.activeModal.close('Close click');
  }
  constructor(public activeModal: NgbActiveModal,  private router: Router) { }

  ngOnInit() {
  }

}
