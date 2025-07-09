import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { ShowAllMenu } from './show-all-menu/show-all-menu';
import { Addmenu } from './addmenu/addmenu';
import { Updatemenu } from './updatemenu/updatemenu';


const routes: Routes = [

  { path: '', component: Home},

  { path: 'allmenu', component: ShowAllMenu},

  { path: 'addmenu', component: Addmenu},

  { path: 'updatemenu/:id', component: Updatemenu},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
