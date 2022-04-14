export interface EditProduct {
  edit: (id: string, params: EditProduct.Params) => Promise<EditProduct.Response>
}

export namespace EditProduct {
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
