import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'page-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title: string;
  sub: string;

  @Input() arrowId: string;

  get headerText(): string {
    return this.title;
  }

  @Input('headerText')
  set headerText(value: string) {
    this.title = value.toUpperCase();
  }

  get subtitle(): string {
    return this.sub;
  }

  @Input('subtitle')
  set subtitle(value: string) {
    this.sub = value.toUpperCase();
  }

  constructor() { }

  ngOnInit() {
  }

}
