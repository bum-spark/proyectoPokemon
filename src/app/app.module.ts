import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginModule } from './acceso/login.module';
import { PokemonesModule } from './pokemones/pokemones.module';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { errorInterceptor } from './error.interceptor';
import { ConfirmationService, MessageService } from 'primeng/api';
import { PrincipalModule } from './principal/principal.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LoginModule,
    PokemonesModule,
    PrincipalModule
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withInterceptors([errorInterceptor])),
    provideHttpClient(withFetch()),
    MessageService,
    ConfirmationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
