import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Directore } from "src/directores/entities/directore.entity";

@Entity()
export class PeoresPelicula {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text',{
        nullable:false,
    })
    titulo: string;

    @Column('date',{
        nullable:false,
    })
    fechaLanzamiento: Date;

    @Column('text',{
        nullable:false,
    })
    genero: string;

    @Column('text',{
        nullable:false,
    })
    descripcion: string;
    
    @ManyToOne(() => Directore, director => director.peoresPeliculas)
    director: Directore;
}
