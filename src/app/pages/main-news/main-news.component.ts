import { Component, OnInit } from '@angular/core';
import { NewsApiService } from 'src/app/services/news-api.service';


@Component({
  selector: 'app-main-news',
  templateUrl: './main-news.component.html',
  styleUrls: ['./main-news.component.scss']
})
export class MainNewsComponent implements OnInit {
  Articles: [];
  Sources: [];
  
  constructor(private newsapi:NewsApiService){
    console.log('App Component Constructor Called');
  }

  ngOnInit(){
    // Loads Articles
    this.newsapi.initArticles().subscribe(data => this.Articles = data['articles']);
    
    // Load News Sources
    this.newsapi.initSources().subscribe(data => this.Sources = data['sources']);
  }

  searchArticles(source){
    console.log('selected source is:' + source);
    this.newsapi.getArticlesByID(source).subscribe(data =>this.Articles = data['articles']);
  }

}
