import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WordShrinkPipe } from '@shared/pipes/word-shrink/word-shrink.pipe';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CacheInterceptorInterceptor } from '@shared/interceptor/cache-interceptor.interceptor';
import { CardComponent } from './components/card/card.component';

import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { PercentageComponent } from './components/percentage/percentage.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { InfiniteScrollComponent } from './components/infinite-scroll/infinite-scroll.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { SortComponent } from './components/sort/sort.component';
import { FilterAccordionComponent } from './components/filter-accordion/filter-accordion.component';
import { ProvidersComponent } from './components/providers/providers.component';
import { FilterSubmitComponent } from './components/filter-submit/filter-submit.component';
import { CountrySelectorComponent } from './components/country-selector/country-selector.component';
import { CountryFilterPipe } from './pipes/country-filter/country-filter.pipe';
import { FormsModule } from '@angular/forms';
import { DateFromToComponent } from './components/date-from-to/date-from-to.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ChipListComponent } from './components/chip-list/chip-list.component';
import { MatChipsModule } from '@angular/material/chips';

@NgModule({
  declarations: [
    WordShrinkPipe,
    CardComponent,
    PercentageComponent,
    InfiniteScrollComponent,
    NavigationComponent,
    SortComponent,
    FilterAccordionComponent,
    ProvidersComponent,
    FilterSubmitComponent,
    CountrySelectorComponent,
    CountryFilterPipe,
    DateFromToComponent,
    ChipListComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    FlexLayoutModule,
    InfiniteScrollModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatSelectModule,
    MatExpansionModule,
    MatTooltipModule,
    MatAutocompleteModule,
    FormsModule,
    MatDatepickerModule,
    MatChipsModule
  ],
  exports: [
    WordShrinkPipe,
    CardComponent,
    PercentageComponent,
    InfiniteScrollComponent,
    NavigationComponent,
    SortComponent,
    FilterAccordionComponent,
    ProvidersComponent,
    FilterSubmitComponent,
    CountrySelectorComponent,
    DateFromToComponent,
    ChipListComponent
  ],
  providers:[ 
    {
    provide: HTTP_INTERCEPTORS,
    useClass: CacheInterceptorInterceptor,
    multi: true
    }
  ] 
})
export class SharedModule { }