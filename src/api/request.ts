import axios from "axios";
import { AUTH_URL, CHECK_TOKEN, GET_ITEM_CATEGORIES, GET_PRODUCTS } from "./constants";

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
}

export const getProduct = async(id:string) => {
  const res = await axios.get(`${GET_PRODUCTS}/${id}`);
  return res.data;
}
