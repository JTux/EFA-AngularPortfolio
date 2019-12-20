import { Component, OnInit } from '@angular/core';
import { NavOption } from 'src/app/models/navOption';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  pageTitle: string = "Student Success & Feedback";
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
