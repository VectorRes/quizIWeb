import { Module } from '@nestjs/common';
import { PeoresPeliculasService } from './peores-peliculas.service';
import { PeoresPeliculasController } from './peores-peliculas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Directore } from 'src/directores/entities/directore.entity';
import { PeoresPelicula } from './entities/peores-pelicula.entity';

@Module({
  controllers: [PeoresPeliculasController],
  providers: [PeoresPeliculasService],
  imports: [TypeOrmModule.forFeature([Directore, PeoresPelicula])],
})
export class PeoresPeliculasModule {}
