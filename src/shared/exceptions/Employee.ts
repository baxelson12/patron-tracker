import { NotFoundException, UnauthorizedException } from "@nestjs/common"

export const EmployeeNotFound = new NotFoundException("Can't find employee.")
export const ImproperPermissions = new UnauthorizedException("Improper permissions.")