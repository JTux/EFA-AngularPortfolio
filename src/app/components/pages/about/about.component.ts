import { Component, OnInit } from '@angular/core';
import { NavOption } from 'src/app/models/navOption';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  pageTitle: string = "About Me";
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
