"use client";

// Packages
import { ReactElement } from "react";
import { X as XIcon } from "phosphor-react";
import * as Dialog from "@radix-ui/react-dialog";

// Components
import { CartCard } from "components/core";

// Styles
import * as Styled from "./styles";

export const Cart = (): ReactElement => {
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
          <CartCard />
          <CartCard />
          <CartCard />
          <CartCard />
          <CartCard />
        </div>

        <div className="total">
          Total: <span>R$ 798</span>
        </div>
        <button type="submit" disabled>
          Finalizar Compra
        </button>
      </Styled.Content>
    </Dialog.Portal>
  );
};
