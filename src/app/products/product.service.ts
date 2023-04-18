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

// al parametro id le ponemos Product['id'] para que si desde nuestro tipado en base.model nos cambian el tipo de dato del id no se nos rompa la funcion. Tener en cuenta que no estamos opteniendo el valor del id solo el tipado.                                     |
export const updateProduct = (id: Product['id'], changes: updateProductDto): Product => {
  const index = products.findIndex(item => item.id === id);
  const prevData = products[index];
  products[index] = {
    ...prevData,
    ...changes
  }
  return products[index];
}

export const findProducts = (dto:FindProductDto): Product[] =>{
  // si descomentamos esos dto vamos a notar que no nos deja cambiarle el valor al array porque lo pusimos de solo lectura. Pero pasaba algo raro, no nos dejaba asignarle un nuevo valor pero si usar los metodos pop y push, pero agregando el nuevo tipado de tags diciendo  readonly tags: ReadonlyArray<string>; no solo es de solo lectura si no estamos tipado que el array en si no se pueda mutar tampoco. 
  // dto.tags= [];
  // dto.tags?.push()
  // dto.tags?.pop()
  return products;
}