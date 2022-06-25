import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface list{
  name:string;
  age:number;
  counter: number;
}

@Injectable()
export class CaioListService {
  site='https://api.agify.io/';
  list='';
 
  constructor(private http: HttpClient) { }

  getDados(){
    this.http.get<any>('https://api.agify.io/?name=bella').subscribe((data) => {
      return this.list = data;
      console.log(data);
  })
  }
  
}