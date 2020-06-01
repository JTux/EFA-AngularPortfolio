import { Component, OnInit } from '@angular/core';
import { NavOption } from 'src/app/models/navOption';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  serviceTime: string;

  pageTitle: string = "About Me";
  pageSubtitle: string = "";

  options: NavOption[] = [
    { label: 'Greetings', id: 'one' },
    { label: 'Creativity', id: 'two' },
    { label: 'Childhood', id: 'three' },
    { label: 'Schooling', id: 'four' },
    { label: 'Interests', id: 'five' }
  ];

  constructor() { }

  ngOnInit() {
    let d1 = new Date("Oct 9, 2018");
    let d2 = new Date();
    let months: number;
    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth();
    months += d2.getMonth();
    this.serviceTime = `${months} months`
  }
}
