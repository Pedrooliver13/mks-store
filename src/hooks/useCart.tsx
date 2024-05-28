// Packages
import { useContext, useMemo } from "react";

// Contexts
import { GlobalContext } from "contexts/globalContext";

interface UseCartResponse {
  totalCartItems: number;
  totalPriceCart: number;
  isDisabledSubmit: boolean;
}

export const useCart = (): UseCartResponse => {
  const { cartList } = useContext(GlobalContext);

  const totalCartItems = useMemo(() => {
    return cartList.reduce((acc, cartItem) => acc + cartItem?.quantity, 0);
  }, [cartList]);

  const totalPriceCart = useMemo(() => {
    return cartList.reduce(
      (acc, cartItem) => acc + cartItem.quantity * cartItem.price,
      0
    );
  }, [cartList]);

  const isDisabledSubmit = useMemo(() => totalCartItems <= 0, [totalCartItems]);

  return { totalCartItems, totalPriceCart, isDisabledSubmit };
};
