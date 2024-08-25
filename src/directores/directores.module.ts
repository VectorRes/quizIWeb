import { Module } from '@nestjs/common';
import { DirectoresService } from './directores.service';
import { DirectoresController } from './directores.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Directore } from './entities/directore.entity';
import { PeoresPelicula } from 'src/peores-peliculas/entities/peores-pelicula.entity';

@Module({
  controllers: [DirectoresController],
  providers: [DirectoresService],
  imports: [TypeOrmModule.forFeature([Directore, PeoresPelicula])]
})
export class DirectoresModule {}
