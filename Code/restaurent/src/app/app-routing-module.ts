import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { ShowAllMenu } from './show-all-menu/show-all-menu';

const routes: Routes = [

  {path:'', component:Home},
  
  {path:'allmenu', component: ShowAllMenu},
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
