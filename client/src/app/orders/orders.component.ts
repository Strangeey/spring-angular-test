import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from '../article';
import { OrderService } from '../order.service';
import { Ordre } from '../ordre';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  ordre : Ordre = new Ordre();

  public ordres : Ordre[];
  article : Article = new Article();


  constructor(private ordreService : OrderService, private activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    this.getOrdres();
    this.activatedRoute.params.subscribe(params => {
      let id : number = params['id'];
      if (id){
        this.ordreService.getOrdre(id).subscribe(response => this.ordre = response);
      }
    })
  }

  public getOrdres(): void {
    this.ordreService.getOrdres().subscribe(
      (response: Ordre[]) => {
        this.ordres = response;
        console.log(this.ordres);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );

  }

  deleteArticleFromOrder(){
    this.ordreService.deleteArticleFromOrder(this.ordre).subscribe(response => console.log("Articles Deleted"))
  }

  editAnOrder(){
    this.ordreService.editOrdre(this.ordre).subscribe(response => console.log("Edit Success"))
  }

}
