import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';

@Controller('usuarios')
export class UsuariosController {

    constructor(private usuarioSvc: UsuariosService) { }

    @Get ()
    listar(){
        return this.usuarioSvc.listar();
    }
    @Get ("clave")
    getUsuariosById(clave:number){
        return `Usuario: ${ clave }`;
    }

    @Post()
    crear( @Body() usuario: CreateUsuarioDto) {
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
