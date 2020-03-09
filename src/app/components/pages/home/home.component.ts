import { Component, OnInit } from '@angular/core';
import { NavOption } from 'src/app/models/navOption';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  pageTitle: string = 'Tucker Portfolio';
  pageSubtitle: string = '.NET Instructor';

  options: NavOption[] = [
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Class', id: 'class' },
    { label: 'Curriculum', id: 'curriculum' },
    { label: 'Feedback', id: 'feedback' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
