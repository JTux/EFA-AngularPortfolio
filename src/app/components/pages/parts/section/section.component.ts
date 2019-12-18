import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'page-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {

  @Input() sectionHeader: string;

  constructor() { }

  ngOnInit() {
  }

}
