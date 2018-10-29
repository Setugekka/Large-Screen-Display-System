import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-prevention-message',
  templateUrl: './prevention-message.component.html',
  styleUrls: ['./prevention-message.component.css']
})
export class PreventionMessageComponent implements OnInit {
  private  message_id = ['box1', 'box2', 'box3', 'box4'];
  private  close(event): any {
    console.log(event.target['id']);
    const id = event.target['id'];
    const index = this.message_id.indexOf(id);
    // $('#' + id).fadeOut(2000);
    $('#' + id).animate({marginLeft: '-=200px', opacity: '0'}, 1000);
    $.each(this.message_id, function(i, item) {
      if (i > index) {
        console.log(item);
        setTimeout(() => {
          $('#' + item).animate({top: '-=110px'}, 1000);
        });
      }
    });
  }
  click(): any {
    const a = Math.ceil(Math.random() * 9);
    const new_message = '新预警' + a;
    this.message_id.unshift(new_message);
    const message_list = this.message_id;
    $(".first").animate({top: "+=110px"}, 1000);
    $(".normal").animate({top: "+=110px"}, 1000);
    setTimeout(() => {
      $('#container').prepend('<div class="new" style="margin-left: 200px; margin-top: 10px; position: absolute; top: 10px; width: 200px; background-color: black;height: 100px; color: #00B5B8; font-size: 50px; font-weight: normal" (click)="close(event)"><span class="new_content" style="position: absolute; top: 20px;"></span></div>');
      $('.new_content')[0].innerHTML = new_message;
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
    }, 1000);
    setTimeout(() => {
      $(".new").animate({marginLeft: "-=200px", opacity: '0.5'}, 1000);
      $(".first").addClass("normal").removeClass("first");
      $(".new").addClass("first").removeClass("new");
    }, 1000);
  }

  constructor() { }

  ngOnInit() {
  }

}
