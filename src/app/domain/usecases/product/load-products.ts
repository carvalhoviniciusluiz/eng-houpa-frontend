export interface LoadProducts {
  loadAll: () => Promise<LoadProducts.Response[]>
}

export namespace LoadProducts {
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
