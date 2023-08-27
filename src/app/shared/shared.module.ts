import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WordShrinkPipe } from '@shared/pipes/word-shrink/word-shrink.pipe';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CacheInterceptorInterceptor } from '@shared/interceptor/cache-interceptor.interceptor';
import { CardComponent } from './components/card/card.component';

import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { PercentageComponent } from './components/percentage/percentage.component';
import { InfiniteScrollComponent } from './components/infinite-scroll/infinite-scroll.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    WordShrinkPipe,
    CardComponent,
    PercentageComponent,
    InfiniteScrollComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    FlexLayoutModule,
    InfiniteScrollModule,
    MatProgressSpinnerModule
  ],
  exports: [
    WordShrinkPipe,
    CardComponent,
    PercentageComponent,
    InfiniteScrollComponent
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
