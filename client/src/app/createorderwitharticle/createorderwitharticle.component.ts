import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from '../article';
import { ArticleService } from '../article.service';
import { OrderService } from '../order.service';
import { Ordre } from '../ordre';

@Component({
  selector: 'app-createorderwitharticle',
  templateUrl: './createorderwitharticle.component.html',
  styleUrls: ['./createorderwitharticle.component.css']
})
export class CreateorderwitharticleComponent implements OnInit {

  ordre : Ordre = new Ordre();
  public articles : Article[];

  constructor(private orderService : OrderService, private articleService : ArticleService,private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.getArticles();
    this.activatedRoute.params.subscribe(params => {
      let id : number = params['id'];
      if (id){
        this.orderService.getOrdre(id).subscribe(response => this.ordre = response);
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

  editAnOrder(){
    this.orderService.editOrdre(this.ordre).subscribe(response => console.log("Edit Success"))
  }

  deleteArticleFromOrder(){
    this.orderService.deleteArticleFromOrder(this.ordre).subscribe(response => console.log("Articles Deleted"))
  }


}
