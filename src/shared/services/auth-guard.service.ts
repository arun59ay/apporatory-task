import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";
import { Observable } from "rxjs";
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})

export class AuthGuardService implements CanActivate {
  constructor(private router: Router, private platform: Platform) { }
  //, private auth: AuthService, private dataService: DataService
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    console.log("this is steps", next, state);
    
    // if (this.platform.is('mobile')) {
    //   this.router.navigate(["welcome"]);
    //   console.log("running on Android device!");
    //   return true;
    // } else {
    //   this.router.navigate(["signin"]);
    //   return true;
    // }
    
     return true;
  }
}

