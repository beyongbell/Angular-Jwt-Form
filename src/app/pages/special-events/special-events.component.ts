import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EventService } from '@service/event.service';
import { Event } from '@interface/event';
import { Router } from '@angular/router';

@Component({
  selector: 'app-special-events',
  templateUrl: './special-events.component.html',
  styleUrls: ['./special-events.component.scss']
})
export class SpecialEventsComponent implements OnInit {

  specialEvents: Event;

  constructor(private eventService: EventService, private router: Router) { }

  ngOnInit() {
    this.eventService.getSpecialEvents().subscribe(
      res => this.specialEvents = res,
      err => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            this.router.navigate(['login']);
          }
        }
      }
    );
  }

}
