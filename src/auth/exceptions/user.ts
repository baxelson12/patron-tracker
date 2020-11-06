import { NotFoundException, UnauthorizedException } from "@nestjs/common"

export const UserNotFound = new NotFoundException("Could not find user.")
export const InvalidCredentials = new UnauthorizedException("Invalid credentials.")