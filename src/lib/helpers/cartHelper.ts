import { CartItem, extractedProductsList } from "../types/Types";

export const getUserCartFromStorage = () => {
  const data = localStorage.getItem("userCart");
  if (data) {
    return JSON.parse(data);
  } else {
    return null;
  }
};

export const setUserCartToStorage = (cart: CartItem[] | any) => {
  return localStorage.setItem("userCart", JSON.stringify(cart));
};
export const mergeStockArray = (
  initArray: extractedProductsList[],
  id: number,
  quantity: number
) => {
  const copyInitArray = structuredClone(initArray);
  const findedProductIndex = copyInitArray.findIndex((el) => el.id == id);
  if (findedProductIndex == -1) {
    copyInitArray.push({ id, quantity });
  } else {
    copyInitArray[findedProductIndex].quantity = quantity;
  }
  return copyInitArray;
};

export const deleteItemFromCart = (
  initArray: extractedProductsList[],
  id: number
) => {
  const copyInitArray = structuredClone(initArray);
  const findedProductIndex = copyInitArray.findIndex((el) => el.id == id);
  if (findedProductIndex != -1) {
    copyInitArray.splice(findedProductIndex,1);
    return copyInitArray;
  }
  return initArray;
};
