import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CrearActualizarComponent } from './components/crear-actualizar/crear-actualizar.component';
import { VistaComponent } from './components/vista/vista.component';
import { VistaGeneralComponent } from './components/vista-general/vista-general.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaginatorModule } from 'primeng/paginator';
import { PokemonesRoutingModule } from './pokemones-routing.module';

import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { MomentPipe } from '../moment-pipe.pipe';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { KeyFilterModule } from 'primeng/keyfilter';
import { InputNumberModule } from 'primeng/inputnumber';
import { ToastModule } from 'primeng/toast';
import { RippleModule } from 'primeng/ripple';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { SkeletonModule } from 'primeng/skeleton';




@NgModule({
  declarations: [
    NavbarComponent,
    CrearActualizarComponent,
    VistaComponent,
    VistaGeneralComponent,
    MomentPipe
  ],
  imports: [
    CommonModule,
    PokemonesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    PaginatorModule,
    CardModule, 
    ButtonModule,
    InputTextModule,
    KeyFilterModule,
    InputNumberModule,
    ToastModule,
    RippleModule,
    ConfirmPopupModule,
    SkeletonModule
  ]
})
export class PokemonesModule { }
