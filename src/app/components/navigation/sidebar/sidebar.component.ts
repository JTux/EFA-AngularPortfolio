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
    { text: 'Home', route: '', icon: 'home' },
    { text: 'Technical & Code Related Skills', route: '', icon: 'code' },
    { text: 'Teaching & Classroom Management', route: '', icon: 'supervisor_account' },
    { text: 'EFA Curriculum & Classroom Resources', route: '', icon: 'speaker_notes' },
    { text: 'Success Stories & Other Feedback', route: '', icon: 'done' },
    { text: 'Contributions to Excellence', route: '', icon: 'highlight' },
    { text: 'More About Me', route: '', icon: 'person' }
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
    console.log(this.activeItem)
  }
}
