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
    { label: 'Teaching', id: 'teaching' },
    { label: 'Coding', id: 'coding' },
    { label: 'Projects', id: 'projects' },
    { label: 'Languages', id: 'languages' }
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
