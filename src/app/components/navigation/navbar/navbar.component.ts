import { Component, OnInit, Input } from '@angular/core';
import { NavOption } from 'src/app/models/navOption';

@Component({
  selector: 'page-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  private options: NavOption[];

  @Input() pageTitle: string;

  get pageOptions(): NavOption[] {
    return this.options;
  }

  @Input('pageOptions')
  set pageOptions(value: NavOption[]) {
    this.options = value;
  }

  constructor() { }

  ngOnInit() {
  }

}
