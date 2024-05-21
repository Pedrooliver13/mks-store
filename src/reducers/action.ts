// Services
import { Product } from "services/products";

export enum ActionTypes {
  ADD_PRODUCT_IN_CART = "ADD_PRODUCT_IN_CART",
  REMOVE_PRODUCT_IN_CART = "REMOVE_PRODUCT_IN_CART",
}

export interface ActionResponse<T> {
  type: string;
  payload: {
    [name: string]: T;
  };
}

export const addProductInCartAction = (
  product: Product
): ActionResponse<Product> => {
  return {
    type: ActionTypes.ADD_PRODUCT_IN_CART,
    payload: {
      product,
    },
  };
};

export const removeProductInCartAction = (
  id: string
): ActionResponse<string> => {
  return {
    type: ActionTypes.REMOVE_PRODUCT_IN_CART,
    payload: {
      id,
    },
  };
};
