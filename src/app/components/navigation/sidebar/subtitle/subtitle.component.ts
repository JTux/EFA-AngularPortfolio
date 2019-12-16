import { Component, OnInit } from '@angular/core';
import { Subtitle } from 'src/app/models/subtitle';

@Component({
  selector: 'app-subtitle',
  templateUrl: './subtitle.component.html',
  styleUrls: ['./subtitle.component.css']
})
export class SubtitleComponent implements OnInit {

  subtitles: Subtitle[] = [
    { text: 'Teacher' },
    { text: 'Problem Solver' },
    { text: 'Lifelong Student' },
    { text: '.NET Developer' },
    { text: 'Curriculum Manager' }
  ];

  constructor() {
    this.shuffleArray(this.subtitles);
  }

  ngOnInit() {
  }

  private shuffleArray<T>(array: Array<T>) {
    array.sort(() => Math.random() - 0.5);
  }
}
