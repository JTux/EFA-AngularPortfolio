import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'TuckerEFAPortfolio';
  activeId: 0;

  @ViewChild('bodyContent', { static: false }) scrollContent: ElementRef;

  constructor() { }

  onActivate(item: any) {
    let body = this.scrollContent.nativeElement;
    body.style.scrollBehavior = 'auto';
    body.scrollTop = 0;
    body.style.scrollBehavior = 'smooth';

    console.log(item)
  }

  ngOnInit() {
    if (environment.production) {
      if (location.protocol === 'http:' && !window.location.href.includes('localhost')) {
        window.location.href = location.href.replace('http', 'https');
      }
    }
  }
}
