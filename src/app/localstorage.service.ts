import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  constructor(@Inject(PLATFORM_ID) private platform: object ) { }

  setItem(key: string, value: string){
    if (isPlatformBrowser(this.platform)) {
      localStorage.setItem(key, value);
    }
  }

  getItem(key: string){
    if (isPlatformBrowser(this.platform)) {
      return localStorage.getItem(key);
    }
    return null;
  }

  clean(){
    if (isPlatformBrowser(this.platform)) {
      localStorage.clear();
    }
  }

  cleanItem(key:string){
    if (isPlatformBrowser(this.platform)) {
      localStorage.removeItem(key);
    }
  }
}
