import { Component, OnInit } from '@angular/core';
import { Subtitle } from 'src/app/models/subtitle';
import { SideNavItem } from 'src/app/models/sideNavItem';
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

  navItems: SideNavItem[] = [
    { id: 1, text: 'First', active: false, icon: 'home' },
    { id: 2, text: 'Second', active: false, icon: 'home' },
    { id: 3, text: 'Third', active: false, icon: 'home' },
    { id: 4, text: 'Fourth', active: false, icon: 'home' },
    { id: 5, text: 'Fifth', active: false, icon: 'home' }
  ];

  activeItem: number;

  constructor() { }

  ngOnInit() {
  }

  private updateActiveItem(event: string) {
    this.activeItem = parseInt(event);
  }
}
