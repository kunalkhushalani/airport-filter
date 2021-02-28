import {
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CachedResponse } from '../model/airport.model';

@Injectable()
export class CacheInterceptor implements HttpInterceptor {
  private cache: CachedResponse[] = [];
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (req.method !== 'GET') {
      return next.handle(req);
    }
    const cachedResponse = this.cache.find(
      (cache: CachedResponse) => cache.url === req.url
    );
    if (cachedResponse) {
      return of(new HttpResponse({ body: cachedResponse.data }));
    } else {
      return next.handle(req).pipe(
        tap((stateEvent) => {
          if (stateEvent instanceof HttpResponse) {
            const index: number = this.cache.findIndex(
              (cache: CachedResponse) => cache.url === req.urlWithParams
            );
            if (index === -1) {
              this.cache.push({
                url: req.urlWithParams,
                data: stateEvent.body,
              });
            } else {
              this.cache[index].data = stateEvent.body;
            }
          }
        })
      );
    }
  }
}
