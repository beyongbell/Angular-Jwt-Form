import { EventService } from '@service/event.service';
import { Component, OnInit } from '@angular/core';
import { Event } from '@interface/event';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  events: Event;

  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.eventService.getEvents().subscribe(res => this.events = res, err => console.log(err));
  }

}
