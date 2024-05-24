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
  const { cartList } = useContext(GlobalContext);
  const { totalPriceCart } = useCart();

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
        <button type="submit" disabled>
          Finalizar Compra
        </button>
      </Styled.Content>
    </Dialog.Portal>
  );
};
