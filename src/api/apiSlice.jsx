import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:3000' }),
    tagTypes: ['Products'],
    endpoints: builder => ({
        getProducts: builder.query({
            query: () => '/products',
            providesTags: ['Products']
        }),
        deleteProduct: builder.mutation({
            query: id => ({
                url: `/products/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['Products']
        }),
        getFilters: builder.query({
            query: () => '/clothing'
        })
    })
})

export const { useGetProductsQuery, useDeleteProductMutation, useGetFiltersQuery } = apiSlice;