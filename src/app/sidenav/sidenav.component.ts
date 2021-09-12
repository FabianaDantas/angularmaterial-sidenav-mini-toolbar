import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  routes = [] = [
    { link: '', name: 'Home', icon: 'home' },
    { link: '/users', name: 'Usuários do sistema', icon: 'view_carousel' },
    { link: '/groups', name: 'Grupos', icon: 'account_balance' }
  ];
  public isExpanded = false;
  public toggleMenu() {
    this.isExpanded = !this.isExpanded;
  }
  constructor() { }

  ngOnInit() {
  }

}
