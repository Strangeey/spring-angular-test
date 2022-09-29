import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Ordre } from './ordre';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http:HttpClient) { }

  public getOrdres():Observable<Ordre[]>{
    return this.http.get<Ordre[]>(`${this.apiServerUrl}/orders`);
  }

  public addOrdre(ordre : Ordre): Observable<Ordre>{
    return this.http.post<Ordre>(`${this.apiServerUrl}/orders`, ordre);
  }

  public getOrdre(id : number):Observable<Ordre>{
    return this.http.get<Ordre>(this.apiServerUrl+'/order/'+id);
  }

  public editOrdre(ordre : Ordre): Observable<Ordre>{
    return this.http.put<Ordre>(this.apiServerUrl+'/orders/'+ordre.id, ordre);
  }

  public deleteArticleFromOrder(ordre : Ordre): Observable<Ordre>{
    return this.http.put<Ordre>(this.apiServerUrl+'/orders/delete/'+ordre.id, ordre);
  }

}
