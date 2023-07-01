import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


const API_URL = environment.API_URL;
const API_KEY = environment.API_KEY;

@Component({
selector: 'app-news',
templateUrl: './news.page.html',
styleUrls: ['./news.page.scss'],   
})

export class NewsPage implements OnInit {

constructor(private navController: NavController, private router: Router, public httpClient: HttpClient) {
  this.loadData()
 }
 loadData(){
  this.httpClient.get(`${API_URL}/top-headlines?country=ie&apiKey=${API_KEY}`).subscribe(results =>{
    console.log(results);
})
}

	ngOnInit() {  
	}

openDetails() {
// Both of these would work!
// But the standard Router is recommended.
// this.navController.navigateForward(`/tabs/news/42`);
this.router.navigateByUrl(`/tabs/news/42`);  
}

// goToArticles() {
// this.navController.navigateRoot(`/tabs/news/42`) 
// 	}

}

