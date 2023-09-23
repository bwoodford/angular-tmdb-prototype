import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CardDisplay } from '@shared/models/card-display.interface';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.sass']
})
export class MovieListComponent implements OnInit {
  
  @Input() movies: Array<CardDisplay> = new Array<CardDisplay>()
  @Output() scrolled: EventEmitter<void> =  new EventEmitter<void>()

  constructor(
  ) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
  }
  
  onScrolled(): void {
    this.scrolled.emit();
  }
}
