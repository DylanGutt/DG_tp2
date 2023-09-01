import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Article } from '../article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {

  @Input()
  article!: Article
  @Output() remove = new EventEmitter<Article>()
  constructor(){


  }
  voteUp(): boolean{
    this.article.voteUp()
    return false
  }
  voteDown(): boolean{
    this.article.voteDown()
    return false
  }

  
  // removeArticle(article : Article){
  // this.remove.emit(article.id)
  // }
}
