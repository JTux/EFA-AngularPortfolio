import { Component, OnInit } from '@angular/core';
import { NavOption } from 'src/app/models/navOption';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  pageTitle: string = "Technical & Coding Experience";
  pageSubtitle: string = "";

  options: NavOption[] = [
    { label: 'one', id: 'one' },
    { label: 'two', id: 'two' },
    { label: 'three', id: 'three' },
    { label: 'four', id: 'four' },
    { label: 'five', id: 'five' },
    { label: 'six', id: 'six' }
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
