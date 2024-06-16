import { Injectable } from '@nestjs/common';
import { orthographyUseCase } from './use-cases/index';
import { OrthographyDto } from './dtos/orthography.dto';
import OpenAI from 'openai';

@Injectable()
export class GptService {
  private openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  //Retornara casos de uso
  async orthographyCheck(orthographyDto: OrthographyDto) {
    return await orthographyUseCase(this.openai, {
      prompt: orthographyDto.prompt,
    });
  }
}
