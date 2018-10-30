import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-prevention-roll',
  templateUrl: './prevention-roll.component.html',
  styleUrls: ['./prevention-roll.component.css']
})
export class PreventionRollComponent implements OnInit {
  data = [
    {name: '沈阳市', value: []},
    {name: '大连市', value: []},
    {name: '鞍山市', value: []},
    {name: '抚顺市', value: []},
    {name: '本溪市', value: []},
    {name: '丹东市', value: []},
    {name: '盘锦市', value: []},
    {name: '营口市', value: []},
    {name: '葫芦岛市', value: []},
    {name: '朝阳市', value: []},
    {name: '阜新市', value: []},
    {name: '辽阳市', value: []},
    {name: '铁岭市', value: []},
    {name: '锦州市', value: []},
  ];
  weatherText = '';
  private weather_data = [];
  roll(): any {
    const scrollWidth = $('#affiche').width();
    const textWidth = $('.affiche_text').width();
    let i = scrollWidth;
    setInterval(function() {
      i--;
      if (i < -textWidth ) {
        i = scrollWidth;
      }
      $('.affiche_text').animate({'left': i + 'px'}, 15);
    }, 15);
  }
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get('/api/ProService/servlet/forecastServlet?period=24')
      .subscribe(weatherJson => {
        this.weather_data = weatherJson['data'];
        // console.log(weatherJson['datetime']);
        for (const a in this.data) {
          if (a) {
            let city = this.data[a]['name'];
            city = city.substring(0, city.length - 1);
            for (const i of this.weather_data) {
              if (city === i.city) {
                this.data[a]['value'] = this.data[a]['value'].concat([i['fx1']]);
                this.data[a]['value'] = this.data[a]['value'].concat([i['fx2']]);
                this.data[a]['value'] = this.data[a]['value'].concat([i['fs1']]);
                this.data[a]['value'] = this.data[a]['value'].concat([i['fs2']]);
                this.data[a]['value'] = this.data[a]['value'].concat([i['tq1']]);
                this.data[a]['value'] = this.data[a]['value'].concat([i['tq2']]);
                this.data[a]['value'] = this.data[a]['value'].concat([i['temp1']]);
                this.data[a]['value'] = this.data[a]['value'].concat([i['temp2']]);
                this.weatherText += city + '市: ' + this.data[a]['value'][1] + this.data[a]['value'][3] + ';  ';
              }
            }
             // console.log(this.data[a]['value']);
          }
        }
        $('.affiche_text')[0].innerHTML = this.weatherText;
        setTimeout(this.roll(), 750);
      });
  }

}
