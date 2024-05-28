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
  updateProductsInCart: (productList: Array<Product>) => void;
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

  const { value } = useLocalStorage("@mks-store:cart-state-1.0.0", []);

  const { cartList } = productState;

  const addProductInCart = useCallback(
    (product: Product) => {
      dispatch(addProductInCartAction(product));

      localStorage.setItem(
        "@mks-store:cart-state-1.0.0",
        JSON.stringify([...cartList, product])
      );
    },
    [cartList]
  );

  const updateProductsInCart = useCallback((productList: Array<Product>) => {
    dispatch(updateProductsInCartAction(productList));

    localStorage.setItem(
      "@mks-store:cart-state-1.0.0",
      JSON.stringify(productList)
    );
  }, []);

  const updateQuantityProductInCart = useCallback(
    (id: number, quantity: number) => {
      const updatedList = cartList.map((product: Product) => {
        if (product.id !== id) {
          return product;
        }

        return {
          ...product,
          quantity,
        };
      });

      dispatch(updateQuantityProductInCartAction({ id, quantity }));

      localStorage.setItem(
        "@mks-store:cart-state-1.0.0",
        JSON.stringify(updatedList)
      );
    },
    [cartList]
  );

  const removeProductInCart = useCallback(
    (id: number) => {
      const updatedList = cartList.filter(
        (product: Product) => product.id !== id
      );

      dispatch(removeProductInCartAction(id));

      localStorage.setItem(
        "@mks-store:cart-state-1.0.0",
        JSON.stringify(updatedList)
      );
    },
    [cartList]
  );

  useEffect(() => {
    if (value) {
      dispatch(updateProductsInCartAction(value));
    }
  }, [value]);

  return (
    <GlobalContext.Provider
      value={{
        cartList,
        addProductInCart,
        updateProductsInCart,
        updateQuantityProductInCart,
        removeProductInCart,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalContextProvider };
