import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-caio-home',
  templateUrl: './caio-home.component.html',
  styleUrls: ['./caio-home.component.css']
})
export class CaioHomeComponent implements OnInit {
  data1 = new Date('2021-04-23T10:00:00.000');
  constructor() { }

  ngOnInit() {
  }

}