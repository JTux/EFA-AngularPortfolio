import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'TuckerEFAPortfolio';

  @ViewChild('bodyContent', { static: false }) scrollContent: ElementRef;

  constructor() { }

  onActivate() {
    let body = this.scrollContent.nativeElement;
    body.style.scrollBehavior = 'auto';
    body.scrollTop = 0;
    body.style.scrollBehavior = 'smooth';
  }

  ngOnInit() {
    if (environment.production) {
      if (location.protocol === 'http:') {
        window.location.href = location.href.replace('http', 'https');
      }
    }
  }
}
