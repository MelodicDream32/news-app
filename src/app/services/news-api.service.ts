import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  api_key = '4419b7ede3df49898683cf2bd5748d10';

  constructor(private http:HttpClient) { }

  initSources(){
    return this.http.get('https://newsapi.org/v2/sources?language=en&apiKey=' + this.api_key);
  }

  initArticles(){
    return this.http.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=' + this.api_key);
  }

  getArticlesByID(source: String){
    return this.http.get('https://newsapi.org/v2/everything?sources=' + source + '&pageSize=100&sortBy=publishedAt&apiKey=' + this.api_key);
  }
}
