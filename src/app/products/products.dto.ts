import { Product } from "./product.model";
// EL Omit se utliliza para omitir algunos campos a la hora de crear algun producto
export interface CreateProductDto extends Omit<Product,'id' | 'createdAT' | 'updatedAT' | 'category'>{
  categoryId: string;
}
// Pick es el contrario de Omit, los campos que agregues son los campos que si va a tener en cuenta a la hora de crear algo
type example = Pick<Product,'color' | 'description'>;

// El Partial se utiliza para poner todos los campos como opcionales y que no sea necesario tener que poner a todos los parametros a la hora de actualizar algo.
export interface updateProductDto extends Partial<CreateProductDto>{};

// el Required es el contrario de Partial, te obliga a poner todos los campos si o si.
type example2 = Required<Product>;

// el Readonly es para que los campos sean solo de lectura y no se puedan modificar, esto lo usamos cuando solo queremos buscar un elemento pero no queremos que lo modifiquen

// export interface FindProductDto extends  Readonly<Partial<Product>>{};

// esto es la misma interface de la linea 17 solo que le agregamos un campo mas que es Omit para omitir los tags y le agregamos un nuevo tipado diciendo que va a ser de solo lectura y mas profundamente le decimos que va a ser un array de string pero de solo lecutra tambien con el ReadonlyArray.
// porque hacemos esto? anda a ver el archivo product.service.
export interface FindProductDto extends  Readonly<Partial<Omit<Product,'tags'>>>{
  readonly tags: ReadonlyArray<string>;
};

