import { Component, OnInit } from '@angular/core';
import { NavOption } from 'src/app/models/navOption';

@Component({
  selector: 'app-teaching',
  templateUrl: './teaching.component.html',
  styleUrls: ['./teaching.component.css']
})
export class TeachingComponent implements OnInit {

  pageTitle: string = "Classroom Experience";
  pageSubtitle: string = "";

  options: NavOption[] = [
    { label: 'Interactive', id: 'interactive' },
    { label: 'Learning', id: 'learning' },
    { label: 'Humility', id: 'humility' },
    { label: 'Reviews', id: 'reviews' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
