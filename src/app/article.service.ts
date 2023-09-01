import { Injectable } from '@angular/core';
import { Article } from './article.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService{
  constructor(private client:HttpClient){}

  getArticles():Observable<Article[]>{
    return this.client.get<Article[]>('http://localhost:3000/articles')
  }

  addArticle(article: Article): Observable<Article[]>{
    return this.client.post<Article[]>('http://localhost:3000/articles', article)
  }

  deleteArticle(id: number): Observable<any>{
    return this.client.delete('http://localhost:3000/articles/'+ id)
  }


  }


