import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './auth.guard';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: ()=>import('./acceso/login.module').then(m => m.LoginModule)
  },
  {
    path: 'equis',
    loadChildren: ()=> import('./pokemones/pokemones.module').then(m=>m.PokemonesModule),
    canActivate: [authGuard]
  },
  {
    path: '',
    loadChildren: ()=> import('./principal/principal.module').then(m=>m.PrincipalModule),
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
