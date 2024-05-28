"use client";

// Packages
import { ReactElement, useContext } from "react";
import { X as XIcon } from "phosphor-react";
import * as Dialog from "@radix-ui/react-dialog";

// Components
import { CartCard } from "components/core";

// Hooks
import { useCart } from "hooks/useCart";

// Contexts
import { GlobalContext } from "contexts/globalContext";

// Utils
import { priceFormatter } from "utils/formatter";

// Styles
import * as Styled from "./styles";

export const Cart = (): ReactElement => {
  const { cartList, updateProductsInCart } = useContext(GlobalContext);
  const { totalPriceCart, isDisabledSubmit } = useCart();

  const handleSubmit = () => {
    updateProductsInCart([]);
    document.body.click();
  };

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="overlay" />

      <Styled.Content>
        <Dialog.Title className="title">
          Carrinho <br />
          de compras
        </Dialog.Title>

        <Styled.CloseButton>
          <XIcon size={20} />
        </Styled.CloseButton>

        <div className="description">
          {cartList.map((product) => (
            <CartCard key={product.id} {...product} />
          ))}
        </div>

        <div className="total">
          Total: <span>{priceFormatter.format(totalPriceCart)}</span>
        </div>

        <Dialog.Close asChild>
          <button
            type="submit"
            disabled={isDisabledSubmit}
            onClick={handleSubmit}
          >
            Finalizar Compra
          </button>
        </Dialog.Close>
      </Styled.Content>
    </Dialog.Portal>
  );
};
