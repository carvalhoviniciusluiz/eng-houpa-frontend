export interface LoadProductList {
  loadAll: () => Promise<LoadProductList.Response[]>
}

export namespace LoadProductList {
  export type Response = {
    id: string;
    name: string;
    description: string;
    ref: string;
    price: number;
    updatedAt: string;
  }
}
