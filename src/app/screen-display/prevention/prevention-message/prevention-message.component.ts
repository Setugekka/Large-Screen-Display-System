import { Component, OnInit } from '@angular/core';
import * as SocketIO from "socket.io-client";
import {HttpClient} from "@angular/common/http";
import {isUndefined} from "util";



@Component({
  selector: 'app-prevention-message',
  templateUrl: './prevention-message.component.html',
  styleUrls: ['./prevention-message.component.css']
})
export class PreventionMessageComponent implements OnInit {
  private  message_id = ['box1', 'box2', 'box3', 'box4'];
  private socket = SocketIO('127.0.0.1:5000/LargeScreen');
  private  close(event): any {
    console.log(event.target['id']);
    const id = event.target['id'];
    const index = this.message_id.indexOf(id);
    // $('#' + id).fadeOut(2000);
    $('#' + id).animate({marginLeft: '-=280px', opacity: '0'}, 500);
    $.each(this.message_id, function(i, item) {
      if (i > index) {
        console.log(item);
        setTimeout(() => {
          $('#' + item).animate({top: '-=110px'}, 500);
        });
      }
    });
  }
  private  set_color(type): any {
    if (type === '红色预警') {
      return 'red';
    } else if (type === '蓝色预警') {
      return 'blue';
    } else if (type === '橙色预警') {
      return 'orange';
    } else {
      return 'yellow';
    }
  }
  click(): any {
    const a = Math.ceil(Math.random() * 9);
    const new_message = '新预警' + a;
    this.message_id.unshift(new_message);
    const message_list = this.message_id;
    $(".first").animate({top: "+=110px"}, 500);
    $(".normal").animate({top: "+=110px"}, 500);
    setTimeout(() => {
      $('#container').prepend('<div class="new" style="margin-left: 280px; margin-top: 10px; position: absolute; top: 10px; width: 280px; background-color: black;height: 100px; color: #00B5B8; font-size: 50px; font-weight: normal" (click)="close(event)"><p class="new_content" style="position: absolute; top: 20px;"></p><p class="content_weather" style="position: absolute; top: 40px;">降水量：</p></div>');
      $('.new_content')[0].innerHTML = new_message;
      $('.content_weather')[0].innerHTML += '0';
      $('.new')[0].id = new_message;
      $('.new')[0].style.opacity = '0';
      $('.new').click(function(Event) {
        console.log(Event);
        const chosen_id = Event.currentTarget['id'];
        const index = message_list.indexOf(chosen_id);
        // console.log(index);
        $('#' + chosen_id).fadeOut(1000);
        // 淡出下方的div上移
        $.each(message_list, function(i, item) {
          if (i > index) {
            console.log(item);
            setTimeout(() => {
              $('#' + item).animate({top: '-=110px'}, 1000);
            });
          }
        });
      });
    }, 500);
    setTimeout(() => {
      $(".new").animate({marginLeft: "-=280px", opacity: '0.5'}, 500);
      $(".first").addClass("normal").removeClass("first");
      $(".new").addClass("first").removeClass("new");
    }, 500);
  }

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.socket.on('update_prevention', e => {
      if (this.message_id.indexOf(e.city) === -1) {               // 当前城市未预警
        if (e.p_type === 'true') {
          this.message_id.unshift(e.city);
          $(".first").animate({top: "+=110px"}, 500);
          $(".normal").animate({top: "+=110px"}, 500);
          setTimeout(() => {
            $('#container').prepend('<div class="new" style="margin-left: 280px; margin-top: 10px; position: absolute; top: 10px; width: 280px; background-color: black;height: 100px; color: #00B5B8; font-size: 30px; font-weight: normal" (click)="close(event)"><p class="new_content" style="position: absolute; top: 20px;font-size: 30px;"></p> <p class="content_weather" style="position: absolute; top: 60px;font-size: 30px;">降水量：</p></div>');
            $('.new_content')[0].innerHTML = e.city + '市：' + e.p_class;
            $('.content_weather')[0].innerHTML += '0';
            $('.new')[0].id = e.city;
            $('.new')[0].style.opacity = '0';
            $('.new')[0].style.color = this.set_color(e.p_class);
          }, 500);
          setTimeout(() => {
            $(".new").animate({marginLeft: "-=280px", opacity: '0.5'}, 1000);
            $(".first").addClass("normal").removeClass("first");
            $(".new").addClass("first").removeClass("new");
          }, 500);
        }
      } else {
        if (e.p_type === 'true') {                        // 某城市修改预警，首先撤销原预警，再重新发布预警
          for (let i in this.message_id) {
            if (this.message_id[i] === e.city) {
              const index = this.message_id.indexOf(e.city);
              $('#' + e.city).animate({marginLeft: '-=280px', opacity: '0'}, 500); // 原预警滑出
              $.each(this.message_id, function(a, item) {                                                    // 原预警上方的预警下移
                if (a < index) {
                  // console.log(item);
                  setTimeout(() => {
                    $('#' + item).animate({top: '+=110px'}, 500);
                  }, 500);
                }
              });
              this.message_id.splice(index, 1);                                 // 在预警列表中删除该市预警
            }
          }
          setTimeout(() => {
            this.message_id.unshift(e.city);                                                                           // 重新在预警列表中加入该城市
            $('#container').prepend('<div class="new" style="margin-left: 280px; margin-top: 10px; position: absolute; top: 10px; width: 280px; background-color: black;height: 100px; color: #00B5B8; font-size: 30px; font-weight: normal" (click)="close(event)"><p class="new_content" style="position: absolute; top: 20px;font-size: 30px;"></p> <p class="content_weather" style="position: absolute; top: 60px;font-size: 30px;">降水量：</p></div>');
            $('.new_content')[0].innerHTML = e.city + '市：' + e.p_class;
            $('.new')[0].id = e.city;
            $('.new')[0].style.opacity = '0';
            $('.content_weather')[0].innerHTML += '0';
            $('.new')[0].style.color = this.set_color(e.p_class);
          }, 500);
          setTimeout(() => {
            $(".new").animate({marginLeft: "-=280px", opacity: '0.5'}, 1000);
            $(".first").addClass("normal").removeClass("first");
            $(".new").addClass("first").removeClass("new");
          }, 500);
        } else {                                                                             // 该市取消预警
          for (let i in this.message_id) {
            if (this.message_id[i] === e.city) {
              const index = this.message_id.indexOf(e.city);
              $('#' + e.city).animate({marginLeft: '-=280px', opacity: '0'}, 500);
              $.each(this.message_id, function(a, item) {
                if (a > index) {
                  // console.log(item);
                  setTimeout(() => {
                    $('#' + item).animate({top: '-=110px'}, 500);
                  });
                }
              });
              this.message_id.splice(index , 1);
            }
          }
        }
      }

});
  }
}
