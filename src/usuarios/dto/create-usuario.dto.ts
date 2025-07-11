import { IsEmail, IsNotEmpty, IsString, MaxLength, maxLength, MinDate, MinLength } from "class-validator";

export class CreateUsuarioDto {
    @IsString()
    @IsNotEmpty()
    @MaxLength(150)
    @MinLength(3)
    nombre: string;


    @IsString()
    @IsNotEmpty()
    @MaxLength(230)
    @MinLength(3)
    apellidos: string;

    @IsEmail()
    correo: string;

    @IsString()
    @IsNotEmpty()
    @MaxLength(100)
    @MinLength(3)
    username: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    password: string;
}