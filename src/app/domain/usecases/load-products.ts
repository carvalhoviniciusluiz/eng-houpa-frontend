export interface LoadProducts {
  loadAll: () => Promise<LoadProducts.Response[]>
}

export namespace LoadProducts {
  export type Response = {
    id: string;
    name: string;
    description: string;
    ref: string;
    price: number;
    updatedAt: string;
  }
}
