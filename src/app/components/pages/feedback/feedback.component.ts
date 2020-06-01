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
    { label: 'Overview', id: 'overview' },
    { label: 'Colleagues', id: 'colleagues' },
    { label: 'Student', id: 'student' }
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
