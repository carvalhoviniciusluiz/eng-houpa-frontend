export interface AddProduct {
  add: (params: AddProduct.Params) => Promise<AddProduct.Response>
}

export namespace AddProduct {
  export type Params = {
    name: string;
    description: string;
    ref: string;
    price: number;
  }

  export type Response = {
    id: string;
    name: string;
    description: string;
    ref: string;
    price: number;
    updatedAt: Date;
  }
}
