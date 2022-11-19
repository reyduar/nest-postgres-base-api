import { Inject, Injectable } from '@nestjs/common';
import { ProductsService } from 'src/products/products.service';
import { initialData } from './data/seed-data';

@Injectable()
export class SeedService {
  constructor(private readonly productsService: ProductsService) {}

  async runSeed() {
    await this.insertNewProduct();
    return 'SEED EXECUTED';
  }

  private async insertNewProduct() {
    await this.productsService.deleteAllProducts();

    const seedProducts = initialData.products;
    const insertPromises = [];
    seedProducts.forEach((item) => {
      insertPromises.push(this.productsService.create(item));
    });
    await Promise.all(insertPromises);

    return true;
  }
}
