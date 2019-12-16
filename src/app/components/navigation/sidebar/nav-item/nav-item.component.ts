import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SideNavItem } from 'src/app/models/sideNavItem';

@Component({
  selector: 'sidenav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.css']
})
export class NavItemComponent implements OnInit {

  @Input() navItem: SideNavItem;
  @Output() setActive = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  setActiveItem(id: number) {
    this.setActive.emit(`${id}`);
  }

}
