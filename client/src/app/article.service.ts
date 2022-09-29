import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Article } from './article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http:HttpClient)  { }

  public getArticles():Observable<Article[]>{
    return this.http.get<Article[]>(`${this.apiServerUrl}/articles`);
  }

  public addArticle(article : Article): Observable<Article>{
    return this.http.post<Article>(`${this.apiServerUrl}/articles`, article);
  }

  public getArticle(id : number):Observable<Article>{
    return this.http.get<Article>(this.apiServerUrl+'/'+id);
  }

  public editArticle(article : Article): Observable<Article>{
    return this.http.put<Article>(this.apiServerUrl+'/edit/'+article.id, article);
  }

  public deleteArticle(id : number): Observable<any>{
    return this.http.delete<any>(this.apiServerUrl+'/delete/'+id);
  }


}
