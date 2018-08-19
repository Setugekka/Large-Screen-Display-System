import { Component, AfterViewInit, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit , AfterViewInit {
  title = 'app';
  player1: any;
  player2: any;
  player3: any;
  index = '0';
  number = '0';
  constructor() { }
  ngOnInit() {
    $.getScript('./assets/js/display_map.js');
  }
  ngAfterViewInit() {
    this.videoPlayer();
  }
  videoPlayer() {
    const videoObject1 = {
      container: '#video1', // “#”代表容器的ID，“.”或“”代表容器的class
      variable: 'player1', // 该属性必需设置，值等于下面的new ckplayer()的对象
      autoplay: true, // 自动播放
      live: true,
      // poster: 'material/poster.jpg',
      video: 'rtmp://live.hkstv.hk.lxdns.com/live/hks' // 视频地址
      // video:'http://live.hkstv.hk.lxdns.com/live/hks/playlist.m3u8'//视频地址
    };
    this.player1 = new ckplayer(videoObject1);
    const videoObject2 = {
      container: '#video2', // “#”代表容器的ID，“.”或“”代表容器的class
      variable: 'player2', // 该属性必需设置，值等于下面的new ckplayer()的对象
      autoplay: true, // 自动播放
      live: true,
      // poster: 'material/poster.jpg',
     // video: 'rtmp://221.120.177.59/livestream/ucagm8kk' // 视频地址
      video: 'http://live.hkstv.hk.lxdns.com/live/hks/playlist.m3u8' // 视频地址
    };
    this.player2 = new ckplayer(videoObject2);
    const videoObject3 = {
      container: '#video3', // “#”代表容器的ID，“.”或“”代表容器的class
      variable: 'player3', // 该属性必需设置，值等于下面的new ckplayer()的对象
      autoplay: true, // 自动播放
      live: true,
      // poster: 'material/poster.jpg',
      // video: 'rtmp://221.120.177.59/livestream/ucagm8kk' // 视频地址
      video: 'http://live.hkstv.hk.lxdns.com/live/hks/playlist.m3u8' // 视频地址
    };
    this.player3 = new ckplayer(videoObject3);

  }
  choose() {
    this.number = this.index;
    this.videoPlayer();
    console.log(this.number);
    return this.number;
  }
}
