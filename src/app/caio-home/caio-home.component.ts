import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-caio-home',
  templateUrl: './caio-home.component.html',
  styleUrls: ['./caio-home.component.css']
})
export class CaioHomeComponent implements OnInit {
  data1 = new Date('2022-06-24T19:53:00.000Z');
  constructor() { }

  ngOnInit() {
  }

}