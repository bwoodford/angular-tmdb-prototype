import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Provider } from '@shared/models/provider.interface';

@Component({
  selector: 'app-providers',
  templateUrl: './providers.component.html',
  styleUrls: ['./providers.component.sass']
})
export class ProvidersComponent implements OnInit {

  @Input() providers = new Array<Provider>();
  @Output() selections = new EventEmitter<Array<string>>();
  
  readonly uniqueSelections = new Set<string>();

  constructor() { }

  ngOnInit(): void {
    this.providers.sort((a, b) => a.display_priority < b.display_priority ? -1 : 1);
  }

  providerClick(event: Event, id: string): void {
    event.preventDefault();
    this.uniqueSelections.has(id) ? this.uniqueSelections.delete(id) : this.uniqueSelections.add(id);
    this.selections.emit(Array.from(this.uniqueSelections.values()));
  }

}
