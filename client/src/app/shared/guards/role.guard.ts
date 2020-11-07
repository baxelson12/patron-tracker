import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
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
