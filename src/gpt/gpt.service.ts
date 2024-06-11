import { Injectable } from '@nestjs/common';
import { orthographyUseCase } from './use-cases/index';

@Injectable()
export class GptService {
  //Retornara casos de uso
  async orthographyCheck() {
    return await orthographyUseCase();
  }
}
