import { Component, OnInit } from '@angular/core';
import { Subtitle } from 'src/app/models/subtitle';
import { SideNavItem, NavRouteItem } from 'src/app/models/sideNavItem';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  subtitles: Subtitle[] = [
    { text: 'Instructor' },
    { text: 'Problem Solver' },
    { text: 'Lifelong Student' },
    { text: '.NET Developer' },
    { text: 'Curriculum Manager' }
  ];

  navItems: SideNavItem[] = [];
  activeItem: number;

  private navOptions: NavRouteItem[] = [
    { text: 'Home', route: '/', icon: 'fas fa-home' },
    { text: 'About Me', route: '/about', icon: 'fas fa-user' },
    { text: 'Technical & Code Related Skills', route: '/experience', icon: 'fas fa-laptop-code' },
    { text: 'Teaching & Classroom Management', route: '/teaching', icon: 'fas fa-chalkboard-teacher' },
    { text: 'EFA Curriculum & Classroom Resources', route: '/curriculum', icon: 'fas fa-book' },
    { text: 'Success Stories & Other Feedback', route: '/feedback', icon: 'fas fa-user-graduate' },
  ];

  constructor(private router: Router, private activeRoute: ActivatedRoute) {

  }

  ngOnInit() {
    this.navOptions.forEach(routeItem => {
      let itemCount = this.navItems.length;
      itemCount = this.navItems.push({ id: itemCount + 1, text: routeItem.text, active: false, route: routeItem.route, icon: routeItem.icon });
      
      let currentRoute = window.location.href.substring(window.location.href.lastIndexOf('/'));
      if (currentRoute.substring(currentRoute.lastIndexOf('#')).length != 0) {
        currentRoute = currentRoute.split('#')[0];
      }

      if (routeItem.route == currentRoute) {
        this.updateActiveItem(itemCount);
      }
    });
  }

  updateActiveItem(itemId: number) {
    this.activeItem = itemId;
  }

  updateActivePage(itemId: string) {
    let newPage = this.navItems.find((item) => item.id === parseInt(itemId));
    this.router.navigate([newPage.route]).then(() => {
      this.updateActiveItem(parseInt(itemId));
    });
  }
}
