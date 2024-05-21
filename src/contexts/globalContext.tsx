// Packages
import { ReactElement, createContext, useReducer } from "react";

// Reducers
import {
  addProductInCartAction,
  removeProductInCartAction,
} from "reducers/action";
import { productsReducer } from "reducers/reducer";

// Services
import { Product } from "services/products";

export interface GlobalContextProps {
  cartList: Array<Product>;
  addProductInCart: (product: Product) => void;
  removeProductInCart: (id: string) => void;
}

interface GlobalProviderProps {
  children: ReactElement;
}

const GlobalContext = createContext({} as GlobalContextProps);

const GlobalContextProvider = ({
  children,
}: GlobalProviderProps): ReactElement => {
  const [productState, dispatch] = useReducer(productsReducer, {
    cartList: [],
  });

  const { cartList } = productState;

  const addProductInCart = (product: Product) => {
    dispatch(addProductInCartAction(product));
  };

  const removeProductInCart = (id: string) => {
    dispatch(removeProductInCartAction(id));
  };

  return (
    <GlobalContext.Provider
      value={{ cartList, addProductInCart, removeProductInCart }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalContextProvider };
