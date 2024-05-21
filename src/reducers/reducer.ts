// Packages
import { produce } from "immer";

// Reducers
import { ActionTypes } from "./action";

// Services
import { Product } from "services/products";

interface ProductState {
  cartList: Product[];
}

export const productsReducer = (state: ProductState, action: any): any => {
  switch (action.type) {
    case ActionTypes.ADD_PRODUCT_IN_CART:
      return produce(state, (draft) => {
        draft.cartList.push(action.payload.product);
      });

    case ActionTypes.REMOVE_PRODUCT_IN_CART:
      return produce(state, (draft) => {
        const productIndex = draft.cartList.findIndex(
          (product) => product.id === action.payload.id
        );

        if (productIndex >= 0) {
          draft.cartList.splice(productIndex, 1);
        }
      });

    default:
      return state;
  }
};
