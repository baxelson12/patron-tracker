import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(private reflector: Reflector) {}

    canActivate(
        context: ExecutionContext
    ): boolean {
        const roles = this.reflector.get<string[]>('roles', context.getHandler());
        if (!roles) { return true; }
        const req = context.switchToHttp().getRequest();
        return this.matchRoles(roles, req.user.role)
    }

    private matchRoles(roles: string[], role: string): boolean {
        // iterate through roles, return true if there's any matches
        return roles.some(r => r === role);
    }
}
