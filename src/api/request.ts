import axios from "axios";
import {
  AUTH_URL,
  CHECK_TOKEN,
  GET_CART,
  GET_ITEM_CATEGORIES,
  GET_PRODUCTS,
} from "./constants";
import { extractedProductsList } from "../types/types";

//auth
export const login = async (username: string, password: string) => {
  const res = await axios.post(
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
  const res = await axios.get(CHECK_TOKEN, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

//products
export const getItemCategories = async () => {
  const res = await axios.get(GET_ITEM_CATEGORIES);
  return res.data;
};

export const getProducts = async (limit: number) => {
  const res = await axios.get(`${GET_PRODUCTS}?limit=${limit}`);
  return res.data;
};

export const getProduct = async (id: string) => {
  const res = await axios.get(`${GET_PRODUCTS}/${id}`);
  return res.data;
};

//cart
export const getCartOfUser = async (id: number) => {
  const res = await axios.get(`https://dummyjson.com/carts/${id}`);
  return res.data;
};

export const putChangedQuantityProduct = async (
  userId: number,
  changeQuantity: extractedProductsList[]
) => {
  const res = await axios.put(
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
