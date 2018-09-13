import {Component, ElementRef, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-pm-index',
  templateUrl: './pm-index.component.html',
  styleUrls: ['./pm-index.component.css']
})
export class PmIndexComponent implements OnInit {

  private detaildata;
  constructor(private elRef:ElementRef,private router:Router) { }

  ngOnInit() {
  }
  SetActive(event, chatId: string) {

    var hElement: HTMLElement = this.elRef.nativeElement;
    //now you can simply get your elements with their class name
    var allAnchors = hElement.getElementsByClassName('list-group-item');
    //do something with selected elements
    [].forEach.call(allAnchors, function (item: HTMLElement) {
      item.setAttribute('class', 'list-group-item no-border');
    });
    //set active class for selected item
    event.currentTarget.setAttribute('class', 'list-group-item bg-blue-grey bg-lighten-5 border-right-primary border-right-2');
    this.detaildata="预计下午1点至3点进行大规模停电"
  }
  clicktest(){
    this.router.navigate(["/PublicOpinionResponse/Status"])
  }

}
