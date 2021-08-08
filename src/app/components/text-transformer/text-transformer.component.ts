import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'text-transformer',
  templateUrl: './text-transformer.component.html',
  styleUrls: ['./text-transformer.component.css']
})
export class TextTransformerComponent implements OnInit {
  text: string;

  constructor() { }

  ngOnInit(): void {
  }
}

