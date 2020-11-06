import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { jwtConstants } from "src/shared/constants";
import { AuthService } from "../auth.service";
import { InvalidCredentials } from "../exceptions/user";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly as: AuthService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: jwtConstants.secret
        })
    }

    async validate(payload: any) {
        const user = await this.as.validateUser(payload);
        if (!user) { return InvalidCredentials }

        return user;
    }
}