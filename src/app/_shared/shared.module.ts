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
import { SortComponent } from './components/sort/sort.component';
import { FilterAccordionComponent } from './components/filter-accordion/filter-accordion.component';
import { ProvidersComponent } from './components/providers/providers.component';


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
    MatTooltipModule
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