import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import path from 'path';
import { VistaGeneralComponent } from './components/vista-general/vista-general.component';
import { CrearActualizarComponent } from './components/crear-actualizar/crear-actualizar.component';
import { VistaComponent } from './components/vista/vista.component';

const routes: Routes = [
  {
    path: '',
    component: NavbarComponent,
    children: [
      {
        path:'vista',
        component: VistaGeneralComponent
      },
      {
        path:'crear',
        component: CrearActualizarComponent
      },
      {
        path: 'ver/:id',
        component: VistaComponent
      },
      {
        path: 'actualizar/:id',
        component: CrearActualizarComponent
      },
      {
        path: '**',
        redirectTo: 'vista'
      }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonesRoutingModule { }
