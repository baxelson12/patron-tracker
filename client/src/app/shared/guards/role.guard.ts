import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenStorageService } from '../../auth/token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(private tss: TokenStorageService, private location: Location) {}

  canActivate(): boolean {
    const currentRole = this.tss.getRole();
    if (currentRole === 'admin' || currentRole ==='overseer') {
      return true;
    }

    this.location.back();
    return false;
  }
}
