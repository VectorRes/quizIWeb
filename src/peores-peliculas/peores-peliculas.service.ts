import { Injectable } from '@nestjs/common';
import { CreatePeoresPeliculaDto } from './dto/create-peores-pelicula.dto';
import { UpdatePeoresPeliculaDto } from './dto/update-peores-pelicula.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { PeoresPelicula } from './entities/peores-pelicula.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PeoresPeliculasService {

  constructor(@InjectRepository(PeoresPelicula)
  private readonly peoresPeliculasRepository: Repository<PeoresPelicula>
  )
  { }

  async create(createPeoresPeliculaDto: CreatePeoresPeliculaDto) {
    const PeoresPelicula = this.peoresPeliculasRepository.create(createPeoresPeliculaDto);
    await this.peoresPeliculasRepository.save(PeoresPelicula);
    return PeoresPelicula;
  }

  async findAll() {
    const PeoresPelicula = await this.peoresPeliculasRepository.find({});
    return PeoresPelicula;
  }

  async findOne(id: string) {
    const PeoresPelicula = await this.peoresPeliculasRepository.findOneBy({id:id})
    return PeoresPelicula;
  }

  async update(id: string, updatePeoresPeliculaDto: UpdatePeoresPeliculaDto) {
    const PeoresPelicula = await this.peoresPeliculasRepository.preload({id:id, ...updatePeoresPeliculaDto})
    return PeoresPelicula;
  }

  async remove(id: string) {
    const PeoresPelicula = await this.peoresPeliculasRepository.delete({id:id})
    return PeoresPelicula;
  }
}
