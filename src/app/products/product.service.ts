import { faker } from '@faker-js/faker';
import { Product } from './product.model'
import { CreateProductDto, FindProductDto, updateProductDto } from './products.dto';

export const products: Product[] = [];

export const addProducts = (data: CreateProductDto): Product => {
  const newProduct = {
    ...data,
    id: faker.datatype.uuid(),
    createdAT: faker.date.recent(),
    updatedAT: faker.date.recent(),
    category: {
      id: data.categoryId,
      name: faker.commerce.department(),
      createdAT: faker.date.recent(),
      updatedAT: faker.date.recent()
    }
  }
  products.push(newProduct);
  return newProduct;
};

export const updateProduct = (id: string, changes: updateProductDto): Product => {
  const index = products.findIndex(item => item.id === id);
  const prevData = products[index];
  products[index] = {
    ...prevData,
    ...changes
  }
  return products[index];
}

export const findProducts = (dto:FindProductDto): Product[] =>{
  return products;
}