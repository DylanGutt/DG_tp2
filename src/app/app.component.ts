import { Component } from '@angular/core';
import { Article } from './article.model';
import { ArticleService } from './article.service';
import { JSDocComment } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  articles!: Article[]

  constructor(private service: ArticleService){

  }

  addArticle(title: HTMLInputElement , link: HTMLInputElement){
    console.log(`input ${title.value}`)
    this.service.addArticle(new Article(title.value, link.value, 0 )).subscribe()
    location.reload
    return false
  }

  removeArticleAny(article: Article){
    const indexToRemove = this.articles.indexOf(article)
    if(indexToRemove !== -1){
      this.articles.splice(indexToRemove,1)
    }
    console.log('suppression réussie')
    location.reload
    return false
  }

  getArticles(){
    this.service.getArticles().subscribe(a=> this.articles =a);
  }

  ArticleRemoval(id :number) {
    const index = this.articles.findIndex((article) => article.id === id);
      this.articles.splice(index, 1); 
      this.service.deleteArticle(index+1).subscribe(()=>
      this.getArticles())
  
    return false;
  }
 
  ngOnInit(): void {
    this.service
    .getArticles()
    .subscribe(restArticles => this.articles = restArticles)
  }
}
