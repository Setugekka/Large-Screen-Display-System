import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  title = 'app';
  head = [];
  edit = [];
  editing = {};
  click = false;
  message_click = true;
  @Input() data;
  constructor() {
  }
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
    };
    this.head = this.data[0];
    this.data.splice(0, 1);
    console.log(this.data);
  }
  onDeleteConfirm(event) {
    if (window.confirm('Are you sure you want to apply?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
  clicked(row) {
    this.click = true;
    this.edit = row;
    this.message_click = true;
    console.log(this.edit);
  }
}
