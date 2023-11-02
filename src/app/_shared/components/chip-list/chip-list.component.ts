import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatChipListChange } from '@angular/material/chips';
import { BaseType } from '@app/_shared/models/base-type.interface';

@Component({
  selector: 'app-chip-list',
  templateUrl: './chip-list.component.html',
  styleUrls: ['./chip-list.component.sass']
})
export class ChipListComponent implements OnInit {

  @Input() chips = new Array<BaseType>();
  @Output() selections = new EventEmitter<Array<BaseType>>();

  constructor() { }

  ngOnInit(): void {
  }

  onSelection(chipList: MatChipListChange) {
    this.selections.emit(chipList.value);
  }

}
