import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-coordinatesform',
  templateUrl: './coordinatesform.component.html',
  styleUrls: ['./coordinatesform.component.css']
})
export class CoordinatesformComponent implements OnInit {
  latitude: number;
  longitude: number;

  @Output() private coordinatesFormEvent = new EventEmitter();

  onSubmit() {
    this.coordinatesFormEvent.emit({ latitude: this.latitude, longitude: this.longitude });
  }

  constructor() { }

  ngOnInit() {

  }

}
