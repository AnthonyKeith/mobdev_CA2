import { environment } from 'src/environments/environment';
import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http"

const API_URL = environment.API_URL;
const API_KEY = environment.API_KEY;

@Component({
  selector: 'app-sport',
  templateUrl: 'sport.page.html',
  styleUrls: ['sport.page.scss'],
})
export class SportPage {
  constructor(public httpClient:HttpClient) {
    this.loadData()
  }

  loadData(){
    this.httpClient.get(`${API_URL}/top-headlines?country=ie&category=sports&apiKey=${API_KEY}`).subscribe(results =>{
      console.log(results);
    })
  }
}

