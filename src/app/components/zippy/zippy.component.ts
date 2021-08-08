import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent {
  @Input('title') title: string; 
  isActive: boolean = false; 

  toogle() {
    this.isActive = !this.isActive;
  }

}
