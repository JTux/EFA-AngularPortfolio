import { Component, OnInit } from '@angular/core';
import { NavOption } from 'src/app/models/navOption';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

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
    this.pageTitle = 'About Me';
    this.pageSubtitle = "";

    let textArray: string[] = [
      'Learn more about me as an instructor, a developer, and as a person.',
      'This should be the second one!'
    ];
    return textArray;
  }
}
