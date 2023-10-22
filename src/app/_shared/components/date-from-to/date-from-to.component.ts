import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DateType } from '@app/_shared/models/date-type.enum';

@Component({
  selector: 'app-date-from-to',
  templateUrl: './date-from-to.component.html',
  styleUrls: ['./date-from-to.component.sass']
})
export class DateFromToComponent implements OnInit {

  @Output() selectedDates = new EventEmitter<[Date?, Date?]>();

  private dates: [Date?,  Date?] = [undefined, undefined];
  readonly DateType = DateType;

  constructor() { }

  ngOnInit(): void {
  }

  onDateChange(event: any, type: DateType) {
    if (type === DateType.From) {
      this.dates[DateType.From] = event.value;
    } else {
      this.dates[DateType.To] = event.value;
    }
    this.selectedDates.emit(this.dates);
  }
}