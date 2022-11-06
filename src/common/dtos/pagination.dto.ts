import { Type } from 'class-transformer';
import { IsOptional, IsPositive } from 'class-validator';

export class PaginationDto {
  @IsOptional()
  @IsPositive()
  @Type(() => Number) // it's the shame did on main.ts with the property enableImplicitConversion: true,
  limit?: number;

  @IsOptional()
  @Type(() => Number) // it's the shame did on main.ts with the property enableImplicitConversion: true,
  offset?: number;
}
