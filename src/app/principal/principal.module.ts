import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaginatorModule } from 'primeng/paginator';
import { PrincipalRoutingModule } from './principal-routing.module';

import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
//import { MomentPipe } from '../moment-pipe.pipe';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { KeyFilterModule } from 'primeng/keyfilter';
import { InputNumberModule } from 'primeng/inputnumber';
import { ToastModule } from 'primeng/toast';
import { RippleModule } from 'primeng/ripple';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { SkeletonModule } from 'primeng/skeleton';
import { GalleriaModule } from 'primeng/galleria';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { QuienesComponent } from './components/quienes/quienes.component';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';
import { DividerModule } from 'primeng/divider';

import { DataViewModule } from 'primeng/dataview';
import { SelectButtonModule } from 'primeng/selectbutton';


@NgModule({
  declarations: [
    NavbarComponent,
    InicioComponent,
    QuienesComponent,
    CatalogoComponent
   //MomentPipe 
  ],
  imports: [
    DataViewModule,
    SelectButtonModule,
    DividerModule,
    TagModule,
    GalleriaModule,
    CarouselModule,
    CommonModule,
    PrincipalRoutingModule,
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
export class PrincipalModule { }
