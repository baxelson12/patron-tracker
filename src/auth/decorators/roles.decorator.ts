import { SetMetadata } from "@nestjs/common";

// Spread out roles as metadata
// @Roles('admin', 'employee') -->
// SetMetadata('roles', 'admin'),
// SetMetadata('roles', 'employee')
export const Roles = (...roles: string[]) => SetMetadata('roles', roles)