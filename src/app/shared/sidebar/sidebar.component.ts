import { Component, OnInit } from '@angular/core';
import { ROUTES } from './sidebar-routes.config';
import { RouteInfo } from './sidebar.metadata';
import { Router, ActivatedRoute } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  public menuItems: any[];
  constructor(private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    $.getScript('./assets/js/app-sidebar.js');
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }

  // ngxWizardFunction(path: string) {
  //   if (path.indexOf('forms/ngx') !== -1) {
  //     this.router.navigate(['forms/ngx/wizard'], {skipLocationChange: false});
  //   }
  // }

}
