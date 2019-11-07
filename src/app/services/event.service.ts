import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Event } from '@interface/event';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private eventUrl   = environment.api + 'events';
  private specialUrl = environment.api + 'special';

  constructor(private http: HttpClient) { }

  getEvents(): Observable<Event> {
    return this.http.get<Event>(this.eventUrl).pipe(catchError(this.errorHandler));
  }

  getSpecialEvents(): Observable<Event> {
    return this.http.get<Event>(this.specialUrl).pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || 'Server Error!');
  }

}
