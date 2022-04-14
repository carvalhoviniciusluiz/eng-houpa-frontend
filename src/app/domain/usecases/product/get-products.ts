export interface GetProduct {
  get: (id: string) => Promise<GetProduct.Response[]>
}

export namespace GetProduct {
  export type Response = {
    id: string;
    name: string;
    description: string;
    ref: string;
    price: number;
    updatedAt: string;
  }
}
