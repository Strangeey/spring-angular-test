import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Article } from '../article';
import { ArticleService } from '../article.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  article: Article = new Article();

  public articles : Article[];

  constructor(private articleService : ArticleService, private activatedRoute : ActivatedRoute) {}

  ngOnInit() {
    this.getArticles();
    this.activatedRoute.params.subscribe(params => {
      let id : number = params['id'];
      if (id){
        this.articleService.getArticle(id).subscribe(response => this.article = response);
      }
    })
  }
 

  public getArticles(): void {
    this.articleService.getArticles().subscribe(
      (response: Article[]) => {
        this.articles = response;
        console.log(this.articles);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  deleteArticle(id:number){
    this.articleService.deleteArticle(id).subscribe(response => console.log("Deleted Successfully"));
  }



}
