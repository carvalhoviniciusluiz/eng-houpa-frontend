export interface EditProduct {
  edit: (params: EditProduct.Params) => Promise<EditProduct.Response>
}

export namespace EditProduct {
  export type Params = {
    id: string;
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
