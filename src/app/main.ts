import { faker } from '@faker-js/faker';
import { addProducts, findProducts, products,updateProduct } from "./products/product.service";

for (let i = 0; i < 50; i++) {
  addProducts({
    description: faker.commerce.productDescription(),
    image: faker.image.imageUrl(),
    color: faker.commerce.color(),
    size: faker.helpers.arrayElement(['M', 'S', 'L', 'XL']),
    price: parseInt(faker.commerce.price(), 10),
    isNew: faker.datatype.boolean(),
    tags: faker.helpers.arrayElements(),
    title: faker.commerce.productName(),
    stock: faker.datatype.number({ min: 10, max: 100 }),
    categoryId: faker.datatype.uuid()
  });
};

console.log(products);

const product = products[0];
updateProduct(product.id,{
  title:"New Title",
  stock: 80
})

findProducts({
  stock:10,
  color:'red',
  createdAT: new Date(),
  tags:['fd']
})



