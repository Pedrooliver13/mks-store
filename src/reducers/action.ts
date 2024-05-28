// Services
import { Product } from "services/products";

export enum ActionTypes {
  ADD_PRODUCT_IN_CART = "ADD_PRODUCT_IN_CART",
  UPDATE_PRODUCTS_IN_CART = "UPDATE_PRODUCTS_IN_CART",
  UPDATE_QUANTITY_PRODUCT_IN_CART = "UPDATE_QUANTITY_PRODUCT_IN_CART",
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

export const updateProductsInCartAction = (
  productList: Array<Product>
): ActionResponse<Array<Product>> => {
  return {
    type: ActionTypes.UPDATE_PRODUCTS_IN_CART,
    payload: {
      productList,
    },
  };
};

export const updateQuantityProductInCartAction = ({
  id,
  quantity,
}: {
  id: number;
  quantity: number;
}): ActionResponse<number> => {
  return {
    type: ActionTypes.UPDATE_QUANTITY_PRODUCT_IN_CART,
    payload: {
      id,
      quantity,
    },
  };
};

export const removeProductInCartAction = (
  id: number
): ActionResponse<number> => {
  return {
    type: ActionTypes.REMOVE_PRODUCT_IN_CART,
    payload: {
      id,
    },
  };
};
