import { Routes,RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';
import { NgModule } from '@angular/core';




export const routes: Routes = [

  {
    path: '', component: InicioComponent
  },

  {
    path:'app-login',
    component:LoginComponent
  },
  {
    path:'app-inicio',
    component:InicioComponent
  },
  //{path:'',redirectTo:'/inicio',pathMatch:'full'}
];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})

export class AppRoutingModule {

}
