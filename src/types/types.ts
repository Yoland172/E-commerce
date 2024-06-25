export interface IconProps {
  width: number;
  height: number;
}

export interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
  total: number;
  discountPercentage: number;
  discountedPrice: number;
  thumbnail: string;
}


export interface ItemCategory {
  slug: string;
  name: string;
  url:string;
}