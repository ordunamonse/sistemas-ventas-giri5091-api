import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UtilsService } from 'src/shared/services/utils/utils.service';

@Controller('usuarios')
export class UsuariosController {

    constructor(private usuarioSvc: UsuariosService, 
                private utilSvc: UtilsService) { }

    @Get ()
    listar(){
        return this.usuarioSvc.listar();
    }
    @Get ("clave")
    getUsuariosById(clave:number){
        return `Usuario: ${ clave }`;
    }

    @Post()
   async  crear( @Body() usuario: CreateUsuarioDto) {

        //Encriptar contraseña
        var encrypted = await this.utilSvc.hashPassword(usuario.password);
        usuario.password =encrypted;

        return this.usuarioSvc.crear(usuario);
    }

    @Put()
    actualizar() {
        return this.usuarioSvc.actualizar();
    }


    @Delete()
    eliminar(){
        return this.usuarioSvc.eliminar();
    }
}
