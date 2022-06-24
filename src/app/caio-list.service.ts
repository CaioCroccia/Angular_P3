import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
interface task{
  name: string
  age: string
  count: string
}
@Injectable()
export class CaioListService {
  site='https://api.agify.io/';
  list='';
  constructor(private http: HttpClient) { }

  getDados(){
    this.http.get<any>('https://api.agify.io/?name=bella').subscribe((data) => {
      this.list = data;
      console.log(data);
  })
  }
}