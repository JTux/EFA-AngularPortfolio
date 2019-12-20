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
