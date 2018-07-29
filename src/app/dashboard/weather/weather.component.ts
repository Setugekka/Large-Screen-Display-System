import { Component, OnInit } from '@angular/core';

declare var $:any;
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $("#owl-demo,#owl-demo1,#owl-demo3,#owl-demo4").owlCarousel({
      autoPlay: 3000, //Set AutoPlay to 3 seconds
      items : 4,
      itemsDesktop : [768,3],
      itemsDesktopSmall : [414,2]

    });
  }

}
