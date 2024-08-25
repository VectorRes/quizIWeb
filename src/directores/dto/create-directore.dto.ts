import { IsString, IsDate } from "class-validator";
import { Type } from "class-transformer";

export class CreateDirectoreDto {
    @IsString()
    nombre:string;

    @Type(()=> Date)
    @IsDate()
    fechaNacimiento:Date;

    @IsString()
    nacionalidad:string;

    @IsString()
    biografia: string;


}
