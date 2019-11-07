import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.scss']
})
export class NameComponent implements OnInit {

  name = new FormControl('');

  constructor() { }

  ngOnInit() {
    // this.name.setValue('Nancy');
  }

  updateName() {
    this.name.setValue('Nancy');
  }

}
