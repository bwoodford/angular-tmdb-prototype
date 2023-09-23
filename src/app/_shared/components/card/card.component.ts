import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass'],
})
export class CardComponent implements OnInit {

  @Input() title: string = "Title Not Found";
  @Input() poster_path: string = "";
  @Input() release_date: string = "Date not found.";
  @Input() percentage: number = 1;
  poster_size: string = "w220_and_h330_face";


  constructor() {
  }

  ngOnInit(): void {
  }

}
