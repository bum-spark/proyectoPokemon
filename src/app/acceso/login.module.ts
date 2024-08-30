import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LoginRoutingModule } from "./login-routing.module";
import { PrincipalLoginComponent } from "./pages/principal.component";
import { LoginComponent } from "./components/login/login.component";
import { MenuComponent } from "./pages/menu/menu.component";


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
import { PaginatorModule } from "primeng/paginator";
import { DialogModule } from 'primeng/dialog';
import { MessageService } from 'primeng/api';

@NgModule({
declarations: [PrincipalLoginComponent, LoginComponent, MenuComponent],
exports: [ PrincipalLoginComponent ], 
imports: [CommonModule, FormsModule, LoginRoutingModule, ReactiveFormsModule,PaginatorModule,
    CardModule, 
    ButtonModule,
    InputTextModule,
    KeyFilterModule,
    InputNumberModule,
    ToastModule,
    RippleModule,
    ConfirmPopupModule,
    DialogModule
]
})
export class LoginModule{
    
}