import { Component, OnInit } from '@angular/core';
import { Subtitle } from 'src/app/models/subtitle';
import { SideNavItem, NavRouteItem } from 'src/app/models/sideNavItem';
import { element } from 'protractor';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  subtitles: Subtitle[] = [
    { text: 'Teacher' },
    { text: 'Problem Solver' },
    { text: 'Lifelong Student' },
    { text: '.NET Developer' },
    { text: 'Curriculum Manager' }
  ];

  navItems: SideNavItem[] = [];
  activeItem: number;

  private navOptions: NavRouteItem[] = [
    { text: 'Home', route: '' },
    { text: 'Technical & Code Related Skills', route: '' },
    { text: 'Teaching & Classroom Management', route: '' },
    { text: 'EFA Curriculum & Classroom Resources', route: '' },
    { text: 'Success Stories & Other Feedback', route: '' },
    { text: 'Contributions to Excellence', route: '' },
    { text: 'More About Me', route: '' }
  ];

  constructor() {
    this.navOptions.forEach(routeItem => {
      let itemCount = this.navItems.length;
      itemCount = this.navItems.push({ id: itemCount + 1, text: routeItem.text, active: false, route: routeItem.route });
    });
  }

  ngOnInit() {
  }

  private updateActiveItem(event: string) {
    this.activeItem = parseInt(event);
  }
}
