import { Component, OnInit } from '@angular/core';
import { CaioListService } from '../caio-list.service';

@Component({
  selector: 'app-caio-list',
  templateUrl: './caio-list.component.html',
  styleUrls: ['./caio-list.component.css']
})
export class CaioListComponent implements OnInit {

  constructor(public lista: CaioListService) { }

  ngOnInit() {
  }

}