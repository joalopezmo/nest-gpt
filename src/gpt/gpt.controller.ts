import { Controller, Post, Body } from '@nestjs/common';
import { GptService } from './gpt.service';
import { OrthographyDto } from './dtos';

@Controller('gpt')
export class GptController {
  constructor(private readonly gptService: GptService) {}
  //Este controlador sirve para escuchar las peticiones y emitir respuestas
  //El servicio se encarga de la lógica de negocio

  @Post('orthography-check')
  orthographyCheck(@Body() orthographyDto: OrthographyDto) {
    // orthographyDto.prompt
    return this.gptService.orthographyCheck(orthographyDto);
    // return orthographyDto;
  }
}
