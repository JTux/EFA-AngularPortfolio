import { Component, OnInit, Input } from '@angular/core';
import { Subtitle } from 'src/app/models/subtitle';

@Component({
  selector: 'app-subtitle',
  templateUrl: './subtitle.component.html',
  styleUrls: ['./subtitle.component.css']
})
export class SubtitleComponent implements OnInit {

  @Input() subtitleArray: Subtitle[];

  constructor() {
  }

  ngOnInit() {
    this.shuffleArray(this.subtitleArray);
  }

  private shuffleArray<T>(array: Array<T>) {
    array.sort(() => Math.random() - 0.5);
  }
}
