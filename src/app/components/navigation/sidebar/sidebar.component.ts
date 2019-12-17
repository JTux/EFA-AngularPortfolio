import { Component, OnInit } from '@angular/core';
import { Subtitle } from 'src/app/models/subtitle';
import { SideNavItem, NavRouteItem } from 'src/app/models/sideNavItem';

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
    { text: 'Home', route: '/', icon: 'fas fa-home' },
    { text: 'Technical & Code Related Skills', route: '', icon: 'fas fa-laptop-code' },
    { text: 'Teaching & Classroom Management', route: '', icon: 'fas fa-chalkboard-teacher' },
    { text: 'EFA Curriculum & Classroom Resources', route: '', icon: 'fas fa-book' },
    { text: 'Success Stories & Other Feedback', route: '', icon: 'fas fa-user-graduate' },
    { text: 'Contributions to Excellence', route: '', icon: 'far fa-lightbulb' },
    { text: 'More About Me', route: '', icon: 'fas fa-user' }
  ];

  constructor() {
    this.navOptions.forEach(routeItem => {
      let itemCount = this.navItems.length;
      itemCount = this.navItems.push({ id: itemCount + 1, text: routeItem.text, active: false, route: routeItem.route, icon: routeItem.icon });
    });
  }

  ngOnInit() {
  }

  updateActiveItem(event: string) {
    this.activeItem = parseInt(event);
  }
}
