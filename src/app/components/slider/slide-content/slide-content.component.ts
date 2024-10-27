import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Slide } from '../../../models/slide';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-slide-content',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './slide-content.component.html',
  styleUrl: './slide-content.component.scss'
})
export class SlideContentComponent {
  @Input() slide: Slide = new Slide();
  @Input() active = false;
  titleCharArr: string[][] = [];

  ngOnInit() {
    this.titleCharArr = this.slide.title.split(' ').map(word=> word.split(''));
  }

  getPreviousWordLength(wordIndex: number) {
    if (wordIndex <= 0) return 0;



    return this.titleCharArr.filter((word, index)=> index < wordIndex).map(word=> word.length).reduce((a,b)=> a+b);
  }
}
