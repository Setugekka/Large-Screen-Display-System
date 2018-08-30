import { Component } from '@angular/core';
import {FileUploader} from 'ng2-file-upload';
import * as XLSX from 'xlsx';

declare var $: any;
@Component({
  selector: 'app-input-file',
  templateUrl: './input-file.component.html',
  styleUrls: ['./input-file.component.css' ]
})
export class InputFileComponent {
  inputdata = [];
  m_type = '';
  r_type = '';
  g_Capacity = '';
  ex_education = '';
  ma_education = '';
  ex_Type = '';
  re_Type = '';
  ma_Type = '';
  re_Position = '';
  g_Capacity_list = ['30', '50', '68', '110', '125', '200', '255', '260', '300', '320', '360', '400', '450', '500' ];
  city_list = ['沈阳' , '大连', '鞍山', '抚顺', '本溪', '丹东' , '锦州', '营口', '阜新', '辽阳', '盘锦' , '铁岭', '朝阳', '葫芦岛', '省检修'];
  data1 = [
    {name:'沈阳',value:['和平区','浑南区','皇姑区','沈河区','大东区','铁西区','苏家屯区','沈北新区','于洪区','辽中区','新民市','康平县','法库县']},
    {name:'大连',value:['中山区','西岗区','沙河口区','甘井子区','旅顺口区','金州区','普兰店区','瓦房店市','庄河市','长海县']},
    {name:'鞍山',value:['铁东区','铁西区','立山区','千山区','海城市','台安县','岫岩满族自治县']},
    {name:'抚顺',value:['新抚区','顺城区','望花区','东洲区','抚顺县','新宾满族自治县','清原满族自治县']},
    {name:'本溪',value:['平山区','溪湖区','明山区','南芬区','本溪满族自治县','桓仁满族自治县']},
    {name:'丹东',value:['元宝区','振兴区','振安区','东港市','凤城市','宽甸满族自治县']},
    {name:'盘锦',value:[	'双台子区','兴隆台区','大洼区','盘山县']},
    {name:'营口',value:['站前区','西市区','鲅鱼圈区','老边区','盖州市','大石桥市']},
    {name:'葫芦岛',value:['连山区','龙港区','南票区','兴城市','绥中县','建昌县']},
    {name:'朝阳',value:['双塔区','龙城区','北票市','凌源市','朝阳县','建平县','喀喇沁左翼蒙古族自治县']},
    {name:'阜新',value:['海州区','新邱区','太平区','清河门区','细河区','阜新蒙古族自治县','彰武县']},
    {name:'辽阳',value:['白塔区','文圣区','宏伟区','弓长岭区','太子河区','灯塔市','辽阳县']},
    {name:'铁岭',value:['银州区','清河区','调兵山市','开原市','铁岭县','昌图县','西丰县']},
    {name:'锦州',value:['古塔区','凌河区','太和区','凌海市','北镇市','黑山县','义县]']},
  ];
  town_list = [];
  city_name = ''; // 选中的城市
  town_name = ''; // 选中的区县
  input_name = 'niexin';
  click = false;
  public uploader: FileUploader = new FileUploader({
    url: './src/assets/pdf',
    method: 'POST',
    itemAlias: 'uploadedfile'
  });
  selectedFileOnChanged(event: any) {
    // 打印文件选择名称
    console.log(event.target.value);
  }
  uploadFile() {
    // 上传
    this.uploader.queue[0].onSuccess = function (response, status, headers) {
      // 上传文件成功
      if (status === 200) {
        // 上传文件后获取服务器返回的数据
        const tempRes = JSON.parse(response);
      } else {
        // 上传文件后获取服务器返回的数据错误
        alert('wrong!');
      }
    };
    this.uploader.queue[0].upload(); // 开始上传
  }

  constructor( ) {
  }
  input(evt: any) {
    /* wire up file reader */
    const target: DataTransfer = <DataTransfer>(evt.target);
    if (target.files.length !== 1) {
      throw new Error('Cannot use multiple files');
    }
    const reader: FileReader = new FileReader();
    reader.readAsBinaryString(target.files[0]);
    reader.onload = (e: any) => {
      /* read workbook */
      const bstr: string = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(bstr, {type: 'binary'});

      /* grab first sheet */
      const wsname: string = wb.SheetNames[0];
      const ws: XLSX.WorkSheet = wb.Sheets[wsname];

      /* save data */
      this.inputdata = XLSX.utils.sheet_to_json(ws, {header: 1});
      this.click = true;
      return this.inputdata;
    };
  }
  select_city(event) {
    for (const i of this.data1) {
      if (i.name === event) {
        this.town_list = i.value;
      }
    }
  }
  select_town(event) {

  }
  save() {
    this.uploadFile();
  }
}




