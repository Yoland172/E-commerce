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


export const getQunatityProductByIdFromStorage = (id:number) => {
  const data = localStorage.getItem("userCart");
  if(data) {
    const parsedData = JSON.parse(data);
    const product = parsedData.products.find((el:CartItem) => el.id == id);
    return product ? product.quantity : null;
  }

}

export const updateQuantityProduct = (productId: number, quantity: number, price:number, discountPercentage: number) => {
  console.log(productId, quantity);
  const data = localStorage.getItem("userCart");
  if (data) {
    let parsedData = JSON.parse(data);
    const productIndex = parsedData.products.findIndex((el: CartItem) => el.id === productId);
    parsedData.products[productIndex].quantity = quantity;
    parsedData.products[productIndex].total = price*quantity;
    parsedData.products[productIndex].discountedPrice = Math.round(Number((quantity * (price - (price * discountPercentage) / 100)).toFixed(2)));
    localStorage.setItem("userCart", JSON.stringify(parsedData));
  }
}