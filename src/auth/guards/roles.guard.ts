import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(private reflector: Reflector) {}

    canActivate(
        context: ExecutionContext
    ): boolean {
        // Get roles from deco
        const roles = this.reflector.get<string[]>('roles', context.getHandler());
        // If none needed, you can pass
        if (!roles) { return true; }
        const req = context.switchToHttp().getRequest();
        // Compare roles on endpoint to user's roles
        return this.matchRoles(roles, req.user.role)
    }

    private matchRoles(roles: string[], role: string): boolean {
        // iterate through roles, return true if there's any matches
        return roles.some(r => r === role);
    }
}
