import { Component, Input } from '@angular/core';

@Component({
  selector: 'like-btn',
  templateUrl: './like-btn.component.html',
  styleUrls: ['./like-btn.component.css']
})
export class LikeBtnComponent {
  @Input('is-active') isActive: boolean;
  @Input('like-count') likesCount: number;

  constructor() { }

  onClick() {
    this.isActive = !this.isActive;
    this.isActive ? this.likesCount+=1: this.likesCount-=1;
  }
}
