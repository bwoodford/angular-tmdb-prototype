import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-percentage',
  templateUrl: './percentage.component.html',
  styleUrls: ['./percentage.component.sass']
})
export class PercentageComponent implements OnInit {
  
  @Input() percentage: number = 0;
  color: string = PercentageColor.Red;

  constructor() { }

  ngOnInit(): void {
    if (this.percentage >= 70) {
      this.color = PercentageColor.Green;
    } else if (this.percentage >= 50) {
      this.color = PercentageColor.Yellow;
    } 
  }
}

enum PercentageColor {
  Red = "red",
  Yellow = "#D2D531",
  Green = "#21D07A"
}
