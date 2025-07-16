import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PrismaService } from 'src/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { UtilsService } from 'src/shared/services/utils/utils.service';

@Module({
  controllers: [AuthController],
  providers: [AuthService, PrismaService, JwtService, UtilsService]
})
export class AuthModule {}
