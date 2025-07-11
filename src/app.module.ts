import { Module } from '@nestjs/common';
import { UsuariosModule } from './usuarios/usuarios.module';
import { TareasModule } from './tareas/tareas.module';

@Module({
  imports: [UsuariosModule, TareasModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
