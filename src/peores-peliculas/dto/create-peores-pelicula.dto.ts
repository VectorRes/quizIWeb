import { Type } from "class-transformer";
import { IsString, IsDate, IsObject, MinLength } from "class-validator";
import { Directore } from "src/directores/entities/directore.entity";

export class CreatePeoresPeliculaDto {
    @IsString()
    @MinLength(1)
    titulo: string;
    
    @Type(()=>Date)
    @IsDate()
    fechaLanzamiento: Date;

    @IsString()
    genero: string;

    @IsString()
    descripcion: string;

    @IsObject()
    director: Directore;
}
