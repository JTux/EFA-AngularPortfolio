import { Component, OnInit } from '@angular/core';
import { NavOption } from 'src/app/models/navOption';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.css']
})
export class CurriculumComponent implements OnInit {

  pageTitle: string = "Curriculum Management";
  pageSubtitle: string = "";

  options: NavOption[] = [
    { label: 'Curriculum', id: 'curriculum' },
    { label: 'Canvas', id: 'canvas' },
    { label: 'Courses', id: 'parttime' },
    { label: 'Videos', id: 'videos' },
    { label: 'Refactors', id: 'refactors' }
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
