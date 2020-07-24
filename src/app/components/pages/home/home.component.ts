import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NavOption } from 'src/app/models/navOption';
import { LinkItem } from 'src/app/models/linkItem';
import { Router } from '@angular/router';
import { SidebarComponent } from '../../navigation/sidebar/sidebar.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Output() setPage = new EventEmitter();

  pageTitle: string = 'Joshua Tucker Instructor Portfolio';
  pageSubtitle: string = 'Senior .NET Instructor';

  options: NavOption[] = [
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Class', id: 'class' },
    { label: 'Curriculum', id: 'curriculum' },
    { label: 'Feedback', id: 'feedback' }
  ];

  aboutLinkItem: LinkItem = {id: 1, text: "Go To About", route: '/about'};

  constructor(private router: Router, private sidebar: SidebarComponent) { }

  ngOnInit() {
  }
  setActiveItem(item: LinkItem) {
    this.router.navigate([item.route]).then(() => {
      this.sidebar.activeItem = item.id;
    });
  }

}
