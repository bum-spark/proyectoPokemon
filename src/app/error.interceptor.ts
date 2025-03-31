import { error } from 'console';
import { inject } from '@angular/core';
import { HttpErrorResponse, HttpHeaders, HttpInterceptorFn } from '@angular/common/http';
import { LocalstorageService } from './localstorage.service';
import { catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';
//ng genertae interceptor error
//Intercepta la conexion que esta en peticion y puede hacer varios cambios como al request (la informacion que nos estan dando)
export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const localStorage = inject(LocalstorageService);
  const token = localStorage.getItem('accessToken') || '';
  const router = inject(Router);
  if (token) {
    req = req.clone({
      setHeaders: {
        'Authorization': `Bearer ${token}`
      }
    })  
  }
  return next(req).pipe(
    catchError((err: HttpErrorResponse) => {
      if (err.status == 401) {
        router.navigate(['/']);
      }
      return throwError(()=> err.error);
    })  
  );

};
