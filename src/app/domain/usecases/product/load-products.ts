export interface LoadProducts {
  loadAll: (params?: LoadProducts.Params) => Promise<LoadProducts.Response>
}

export namespace LoadProducts {
  export type Picture = {
    id: string;
    imagePath: string;
    cover: string;
    createdAt: string;
  }

  export type Params = {
    name?: string
  }

  export type ProductResponse = {
    id: string;
    name: string;
    description: string;
    ref: string;
    price: number;
    updatedAt: string;
    user: {
      id: string;
      email: string;
      name: string;
      updatedAt: string;
    }
    pictures: LoadProducts.Picture[];

    // virtual
    cover?: LoadProducts.Picture;
    priceFormated?: string;
  }

  export type Response = {
    data: ProductResponse[],
    meta: {
      count: number;
      firstItemOnPage: number;
      hasNextPage: boolean;
      hasPreviousPage: boolean;
      isFirstPage: boolean;
      isLastPage: boolean;
      lastItemOnPage: number;
      numberOfFirstItemOnPage: number;
      numberOfLastItemOnPage: number;
      page: number;
      pageCount: number;
      pageNumberIsGood: boolean;
      pageSize: number;
    }
  }
}
