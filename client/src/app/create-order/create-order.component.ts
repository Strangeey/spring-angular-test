import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from '../order.service';
import { Ordre } from '../ordre';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent implements OnInit {

  ordre : Ordre = new Ordre();

  constructor(private orderService : OrderService, private activatedRoute : ActivatedRoute,  private _router : Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      let id : number = params['id'];
      if (id){
        this.orderService.getOrdre(id).subscribe(response => this.ordre = response);
      }
    })
  }

  createAnOrder(){
    this.orderService.addOrdre(this.ordre).subscribe(data =>{
      console.log("success");
      this._router.navigate(['/orders'])
    })
  }

  editAnOrder(){
    this.orderService.editOrdre(this.ordre).subscribe(response => console.log("Edit Success"))
  }

}
