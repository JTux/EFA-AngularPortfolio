import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TuckerEFAPortfolio';

  @ViewChild('bodyContent', {static: false}) scrollContent: ElementRef;

  constructor() { }
  
  onActivate() {
    this.scrollContent.nativeElement.scrollTop = 0;
  }
}
