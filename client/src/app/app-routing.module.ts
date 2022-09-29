import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesComponent } from './articles/articles.component';
import { CreateArticleComponent } from './create-article/create-article.component';
import { CreateOrderComponent } from './create-order/create-order.component';
import { CreateorderwitharticleComponent } from './createorderwitharticle/createorderwitharticle.component';
import { DeletearticlefromorderComponent } from './deletearticlefromorder/deletearticlefromorder.component';
import { LoginComponent } from './login/login.component';
import { OrdersComponent } from './orders/orders.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'login', component:LoginComponent},
  {path:'registration', component:RegistrationComponent},
  {path:'articles', component:ArticlesComponent},
  {path:'article', component:ArticlesComponent},
  {path:'orders', component:OrdersComponent},
  {path:'article/:id', component: CreateArticleComponent},
  {path:'order/:id', component: CreateorderwitharticleComponent},
  {path:'orders/order/:id', component: CreateorderwitharticleComponent},
  {path:'orders/orderr/:id', component: DeletearticlefromorderComponent},
  {path:'createarticle', component:CreateArticleComponent},
  {path:'createorder', component:CreateOrderComponent},
  {path:'createorderwitharticle',component:CreateorderwitharticleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
