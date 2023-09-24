import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-filter-accordion',
  templateUrl: './filter-accordion.component.html',
  styleUrls: ['./filter-accordion.component.sass']
})
export class FilterAccordionComponent implements OnInit {

  @Input() title: string = "Accordion";

  constructor() { }

  ngOnInit(): void {
  }

}
