import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'page-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css']
})
export class LinkComponent implements OnInit {

  url: string;

  @Input() id: string;

  constructor() {
    this.url = window.location.href;
  }

  ngOnInit() {
    if (this.url.substring(this.url.lastIndexOf('#')).length != 0) {
      this.url = this.url.split('#')[0];
    }
  }

}
