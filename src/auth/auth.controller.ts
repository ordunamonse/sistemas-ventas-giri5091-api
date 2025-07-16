import { Body, Controller, HttpCode, HttpStatus, Post, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UtilsService } from 'src/shared/services/utils/utils.service';
import { AuthDto } from 'src/shared/dto/auth.dto';

@Controller('auth')
export class AuthController {

    constructor(private authSvc: AuthService,
                private utilsSvc: UtilsService) {}

    @Post()
    @HttpCode(HttpStatus.OK)
    async iniciarSesion(@Body() data: AuthDto) {


        //TODO: Obtener el username y password de la variable "data"
        const { username, password } = data;

        //TODO: Verificar si el username existe
        const usuario = await this.authSvc.obtenerUsuario(username);

        //TODO: En caso de que el usuario no exista devolver un mensaje de NotAuthorized
        if(!usuario) {
            throw new UnauthorizedException('El usuario y/o contraseña es incorrecta');
        }

        //TODO: Si el usuario existe verificar la contraseña
        if (await this.utilsSvc.checkPassword(password, usuario.password)) {
             // Si la contraseña es corrcta generar un JWT
             const { password, fechaRegistro, ...payload } = usuario;
             const jwt = await this.utilsSvc.generateJWT(payload);

             return { token : jwt };

        }else {
            // en caso contrario devonver un  NotAuthorized
            throw new UnauthorizedException('El usuario y/o contraseña es incorrecto');
        }    
    }
}

