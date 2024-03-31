import { CartItem } from "../../types/types";

export const getUserCartFromStorage = () => {
  const data  = localStorage.getItem("userCart");
   if(data) {
    return JSON.parse(data)
   } else{
    return null
   }
};

export const setUserCartTotorage = (cart:CartItem[] ) => {
  return localStorage.setItem("userCart", JSON.stringify(cart));
};

export const deleteUserCartFromStorage = () => {
  return localStorage.removeItem("userCart");
};
