import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from '../article';
import { ArticleService } from '../article.service';
import { OrderService } from '../order.service';
import { Ordre } from '../ordre';

@Component({
  selector: 'app-deletearticlefromorder',
  templateUrl: './deletearticlefromorder.component.html',
  styleUrls: ['./deletearticlefromorder.component.css']
})
export class DeletearticlefromorderComponent implements OnInit {

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



  deleteArticleFromOrder(){
    this.orderService.deleteArticleFromOrder(this.ordre).subscribe(response => console.log("Articles Deleted"))
  }


}