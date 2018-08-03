import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-videodata-setting',
  templateUrl: './videodata-setting.component.html',
  styleUrls: ['./videodata-setting.component.css']
})
export class VideodataSettingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $.getScript('./assets/js/display_map.js');
  }

}
