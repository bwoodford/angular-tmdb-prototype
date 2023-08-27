import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { filter, map, share, tap } from 'rxjs/operators';

@Injectable()
export class CacheInterceptorInterceptor implements HttpInterceptor {
  
  private cache: Map<HttpRequest<any>, CacheEvent> = new Map()
  private cacheTimeout: number = 1;

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Only cache GET requests
    if(request.method !== "GET") {
      return next.handle(request);
    }

    const cachedResponse: CacheEvent | undefined = this.cache.get(request);
    
    if (cachedResponse !== undefined) {
      // Get the time difference in minutes to compare with the cache timeout
      if ((cachedResponse.time.getTime() - new Date().getTime()) / 60000 <= this.cacheTimeout) {
        return of(cachedResponse.response.clone());
      }
      // Break the cached item
      this.cache.delete(request);
    }

    return next.handle(request).pipe(
      filter((event: any) => event instanceof HttpResponse),
      tap((event: HttpResponse<any>) => this.cache.set(request, new CacheEvent(event.clone(), new Date()))),
      share()
    );
  }
}

class CacheEvent {
  response: HttpResponse<any>;
  time: Date;
  
  constructor(response: HttpResponse<any>, time: Date) {
    this.response = response;
    this.time = time || new Date();
  }
}
