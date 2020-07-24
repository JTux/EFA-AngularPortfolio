import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LinkItem } from 'src/app/models/linkItem';

@Component({
  selector: 'navlink',
  templateUrl: './hyperlink.component.html',
  styleUrls: ['./hyperlink.component.css']
})
export class HyperlinkComponent implements OnInit {

  @Input() public linkItem: LinkItem;
  @Output() public setActivePage = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  setActiveNavItem() {
    this.setActivePage.emit(this.linkItem);
  }

}
