// Packages
import {
  ReactElement,
  createContext,
  useReducer,
  useCallback,
  useEffect,
} from "react";

// Hooks
import { useLocalStorage } from "hooks/useLocalStorage";

// Reducers
import {
  addProductInCartAction,
  removeProductInCartAction,
  updateProductsInCartAction,
  updateQuantityProductInCartAction,
} from "reducers/action";
import { productsReducer } from "reducers/reducer";

// Services
import { Product } from "services/products";

export interface GlobalContextProps {
  cartList: Array<Product>;
  addProductInCart: (product: Product) => void;
  updateQuantityProductInCart: (id: number, quantity: number) => void;
  removeProductInCart: (id: number) => void;
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

  const addProductInCart = useCallback((product: Product) => {
    dispatch(addProductInCartAction(product));
  }, []);

  const updateProductsInCart = useCallback((productList: Array<Product>) => {
    dispatch(updateProductsInCartAction({ productList }));
  }, []);

  const updateQuantityProductInCart = useCallback(
    (id: number, quantity: number) => {
      dispatch(updateQuantityProductInCartAction({ id, quantity }));
    },
    []
  );

  const removeProductInCart = useCallback((id: number) => {
    dispatch(removeProductInCartAction(id));
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        cartList,
        addProductInCart,
        updateQuantityProductInCart,
        removeProductInCart,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalContextProvider };
