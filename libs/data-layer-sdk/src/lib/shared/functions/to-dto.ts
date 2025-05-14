import { Type } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';

export function toDto<T>(type: Type<T>, dto: object): T {
  return plainToInstance(type, dto, { strategy: 'excludeAll' });
}

export function toDtos<T>(type: Type<T>, dtos: object[]): T[] {
  return dtos.map((dto) => toDto(type, dto));
}
