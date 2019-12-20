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
