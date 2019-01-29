import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class CanActivateService implements CanActivate{

  constructor(private auth : AuthenticationService) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state : RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean{
    return 
  };
}
