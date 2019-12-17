import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'page-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() headerText: string;
  @Input() subtitle: string;
  @Input() paragraphs: string[];
  
  constructor() { }

  ngOnInit() {
  }

}
