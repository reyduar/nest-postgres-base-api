import {
  IsNumber,
  IsString,
  MinLength,
  IsPositive,
  Min,
  IsOptional,
  IsInt,
  IsArray,
  IsIn,
} from 'class-validator';
export class CreateProductDto {
  constructor(
    title: string,
    price: number,
    description: string,
    slug: string,
    stock: number,
    priceType: string,
    sizes: string[],
  ) {
    this.title = title;
    this.price = price;
    this.stock = stock;
    this.description = description;
    this.slug = slug;
    this.priceType = priceType;
    this.sizes = sizes;
  }

  @IsString()
  @MinLength(2)
  title: string;

  @IsNumber()
  @IsPositive()
  @Min(1)
  price: number;

  @IsInt()
  @Min(1)
  @IsPositive()
  stock: number;

  @IsString()
  @IsOptional()
  description: string;

  @IsString()
  @IsOptional()
  slug: string;

  @IsIn(['Minorista', 'Mayorista', 'Contado'])
  priceType: string;

  @IsString({ each: true })
  @IsArray()
  sizes: string[];

  @IsString({ each: true })
  @IsArray()
  @IsOptional()
  tags: string[];
}
