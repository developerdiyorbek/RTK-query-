import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (limit: number) => `/products?limit=${limit}`,
    }),

    deleteProduct: builder.mutation({
      query: (productId: number) => ({
        url: `/products/${productId}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const { useGetProductsQuery, useDeleteProductMutation } = productApi;
