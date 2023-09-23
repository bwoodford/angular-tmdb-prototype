import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CardDisplay } from '@shared/models/card-display.interface';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.component.html',
  styleUrls: ['./infinite-scroll.component.sass']
})
export class InfiniteScrollComponent implements OnInit {

  @Input() entries: CardDisplay[] = new Array<CardDisplay>();
  @Output() scrolled = new EventEmitter<null>();

  disableScroll: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }
  
  onScroll() {
    this.scrolled.emit();
  }

}
