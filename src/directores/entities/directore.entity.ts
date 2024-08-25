import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { PeoresPelicula } from "src/peores-peliculas/entities/peores-pelicula.entity";

@Entity()
export class Directore {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text',{
        nullable:false,
    })
    nombre: string;

    @Column('date',{
        nullable:false,
    })
    fechaNacimiento: Date;

    @Column('text',{
        nullable:false,
    })
    nacionalidad: string;

    @Column('text',{
        nullable:false,
    })
    biografia: string;

    @OneToMany(()=> PeoresPelicula, peoresPeliculas => peoresPeliculas.director)
    peoresPeliculas: PeoresPelicula[];
}
