export interface CartItem {
  productId: number;
  name: string;
  price: number;
  quantity: number;
}
export interface CartState {
  items: CartItem[];
}
