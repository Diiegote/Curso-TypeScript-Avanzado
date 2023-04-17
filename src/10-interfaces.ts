type Sizes = 'S' | 'M' | 'L' | 'XL';
type userID = string | number;
interface Product {
   id: string | number;
   title: string;
   createdAT: Date;
   stock: number;
   size?: Sizes;
}

const products: Product[] = [];

products.push({
   id:'1',
   title: 'Product 1',
   createdAT: new Date(),
   stock: 15,
});

const addProducts = (data: Product) => {
   products.push(data);
};