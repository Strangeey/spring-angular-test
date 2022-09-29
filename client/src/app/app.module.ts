import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleService } from './article.service';
import { ArticlesComponent } from './articles/articles.component';
import { OrdersComponent } from './orders/orders.component';
import { CreateArticleComponent } from './create-article/create-article.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateOrderComponent } from './create-order/create-order.component';
import { CreateorderwitharticleComponent } from './createorderwitharticle/createorderwitharticle.component';
import { DeletearticlefromorderComponent } from './deletearticlefromorder/deletearticlefromorder.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component'; 
 

@NgModule({
  declarations: [
    AppComponent,
    ArticlesComponent,
    OrdersComponent,
    CreateArticleComponent,
    CreateOrderComponent,
    CreateorderwitharticleComponent,
    DeletearticlefromorderComponent,
    LoginComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,                               
    ReactiveFormsModule                        
  ],
  providers: [ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
