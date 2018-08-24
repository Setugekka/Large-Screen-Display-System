import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-city-training',
  templateUrl: './city-training.component.html',
  styleUrls: ['./city-training.component.css']
})
export class CityTrainingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $.getScript('./assets/js/display_map.js');
  }

}
