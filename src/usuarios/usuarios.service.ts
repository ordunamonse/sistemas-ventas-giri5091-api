import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UsuariosService {

    constructor(private prisma: PrismaService) {}

    listar() {
        return this.prisma.usuario.findMany();
    }

    crear(usuario: CreateUsuarioDto) {
       return this.prisma.usuario.create( {data: usuario });
    }

    actualizar() {
        return 'Actualizando Usuario';
    }
 
    eliminar(){
        return  'Eliminando usuario';
     }
}
