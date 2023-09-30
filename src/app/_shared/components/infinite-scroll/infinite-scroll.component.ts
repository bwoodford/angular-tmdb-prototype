import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { CardDisplay } from '@shared/models/card-display.interface';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.component.html',
  styleUrls: ['./infinite-scroll.component.sass']
})
export class InfiniteScrollComponent implements OnInit, OnChanges {

  @Input() entries: CardDisplay[] = new Array<CardDisplay>();
  @Output() scrolled = new EventEmitter<null>();

  scrollDisabled: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }
  
  onScroll() {
    this.scrolled.emit();
  }

  ngOnChanges() {
    this.scrollDisabled = true;
  }
}
