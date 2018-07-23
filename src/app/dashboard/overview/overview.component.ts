import { Component, OnInit } from '@angular/core';

declare var $: any;
@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $.getScript('./assets/js/overview_test.js');
  }

}
