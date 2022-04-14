export interface DeleteProduct {
  delete: (id: string) => Promise<DeleteProduct.Response>
}

export namespace DeleteProduct {
  export type Response = {}
}
