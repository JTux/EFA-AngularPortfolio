import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  htmlContent = '<h1>Hey</h1>';

  pageTitle: string;
  pageSubtitle: string;
  headParagraphs: string[];

  constructor() { }

  ngOnInit() {
    this.headParagraphs = this.setParagraphs();
  }

  private setParagraphs(): string[] {
    this.pageTitle = '';
    this.pageSubtitle = '';

    let textArray: string[] = [
      'This is my first paragraph.',
      'This should be the second one!'
    ];
    return textArray;
  }

}
