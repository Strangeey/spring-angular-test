import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../article';
import { ArticleService } from '../article.service';
import { HttpClient } from '@angular/common/http';
import { NgModule }  from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css']
})
export class CreateArticleComponent implements OnInit {
  article : Article = new Article();


  constructor(private articleService : ArticleService, private activatedRoute : ActivatedRoute, private _router : Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      let id : number = params['id'];
      if (id){
        this.articleService.getArticle(id).subscribe(response => this.article = response);
      }
    })
  }

  createAnArticle(){
    this.articleService.addArticle(this.article).subscribe(data =>{
      console.log("success");
      this._router.navigate(['/articles'])
    })
  }
  

  editAnArticle(){
    this.articleService.editArticle(this.article).subscribe(data =>{
      console.log("success");
      this._router.navigate(['/articles'])
    })
  }


}
