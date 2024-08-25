import { Injectable } from '@nestjs/common';
import { CreateDirectoreDto } from './dto/create-directore.dto';
import { UpdateDirectoreDto } from './dto/update-directore.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Directore } from './entities/directore.entity';
import { PeoresPelicula } from 'src/peores-peliculas/entities/peores-pelicula.entity';

@Injectable()
export class DirectoresService {

  constructor(
    @InjectRepository(Directore) private readonly directoreRepository: Repository<Directore>,
    @InjectRepository(PeoresPelicula) private readonly peoresPeliculasRepository: Repository<PeoresPelicula>,
  )
  { }

  async create(createDirectoreDto: CreateDirectoreDto) {
    const Directore = this.directoreRepository.create(createDirectoreDto);
    await this.directoreRepository.save(Directore)
    return Directore;
  }

  async findAll() {
    const Directore = await this.directoreRepository.find({});
    return Directore;
  }

  async findOne(id: string) {
    const Directore = await this.directoreRepository.findOneBy({id:id});
    return Directore;
  }

 async update(id: string, updateDirectoreDto: UpdateDirectoreDto) {
  const Directore = await this.directoreRepository.preload({id:id, ...updateDirectoreDto});
    return Directore;
  }

  async remove(id: string) {
    const Directore = await this.directoreRepository.delete({id:id})
    return Directore;
  }

  async findPeoresPeliculas(id: string){
    return this.peoresPeliculasRepository.find({
      where: { director: {id:id } },
      relations: ['director'],
    })
  }
}
