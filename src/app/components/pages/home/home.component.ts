import { Component, OnInit } from '@angular/core';
import { NavOption } from 'src/app/models/navOption';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  pageTitle: string;
  pageSubtitle: string;
  headParagraphs: string[];

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
    this.headParagraphs = this.setParagraphs();
  }

  private setParagraphs(): string[] {
    this.pageTitle = 'Page Title';
    this.pageSubtitle = 'Page Subtitle';

    let textArray: string[] = [
      'This is my first paragraph.',
      'This should be the second one!'
    ];
    return textArray;
  }

}
