import axios from "axios";
import {
  AUTH_URL,
  CHECK_TOKEN,
  GET_CART,
  GET_ITEM_CATEGORIES,
  GET_PRODUCTS,
  GET_REC_PRODUCTS_BY_SEARCH,
} from "./Constants1";
import { extractedProductsList } from "../lib/types/Types1";

const instance = axios.create({
  baseURL:process.env.API_SERVER_URL
})

//auth
export const login = async (username: string, password: string) => {
  const res = await instance.post(
    AUTH_URL,
    { username, password },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return res.data;
};

export const currentUserToken = async (token: string) => {
  const res = await instance.get(CHECK_TOKEN, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

//products
export const getItemsCategories = async () => {
  const res = await instance.get(GET_ITEM_CATEGORIES);
  return res.data;
};

export const getProducts = async (limit: number) => {
  const res = await instance.get(`${GET_PRODUCTS}?limit=${limit}`);
  return res.data;
};

export const getProduct = async (id: string) => {
  const res = await instance.get(`${GET_PRODUCTS}/${id}`);
  return res.data;
};

//cart
export const getCartOfUser = async (id: number) => {
  const res = await instance.get(`https://dummyjson.com/carts/${id}`);
  return res.data;
};

export const putChangedQuantityProduct = async (
  userId: number,
  changeQuantity: extractedProductsList[]
) => {
  const res = await instance.put(
    `https://dummyjson.com/carts/${userId}`,
    {
      products: changeQuantity,
    },
    {
      headers: { "Content-Type": "application/json" },
    }
  );
  return res.data;
};



//search

export const getRecProductsBySearch = async (searchValue: string) => {
  const res = await instance.get(`${GET_REC_PRODUCTS_BY_SEARCH}?q=${searchValue}&limit=5`);
  return res.data;
}