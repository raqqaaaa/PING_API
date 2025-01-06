import { Controller, Get, Headers } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('Ping')
@Controller('ping')
export class PingController {
  @Get()
  @ApiOperation({ summary: 'Retourner les headers de la requête' })
  @ApiResponse({
    status: 200,
    description: 'Headers retournés avec succès.',
  })
  getHeaders(@Headers() headers: Record<string, string>): Record<string, string> {
    return headers;
  }
}
