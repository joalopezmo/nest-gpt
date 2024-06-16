import { Injectable } from '@nestjs/common';
import { orthographyUseCase } from './use-cases/index';
import { OrthographyDto } from './dtos/orthography.dto';

@Injectable()
export class GptService {
  //Retornara casos de uso
  async orthographyCheck(orthographyDto: OrthographyDto) {
    return await orthographyUseCase({
      prompt: orthographyDto.prompt,
    });
  }
}
