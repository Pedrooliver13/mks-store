"use client";

// Packages
import { ReactElement, useContext } from "react";
import { ShoppingCart as ShoppingCartIcon } from "phosphor-react";
import * as Dialog from "@radix-ui/react-dialog";
import Link from "next/link";

// Components
import { Cart } from "components/core";

// Hooks
import { useCart } from "hooks/useCart";

// Styles
import * as Styled from "./styles";

export const Header = (): ReactElement => {
  const { totalCartItems } = useCart();

  return (
    <Styled.HeaderContainer>
      <div className="content container">
        <Link href="/" className="logo">
          MKS <span>Sistemas</span>
        </Link>

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <div className="cart">
              <ShoppingCartIcon size={18} />

              <span>{totalCartItems}</span>
            </div>
          </Dialog.Trigger>

          <Cart />
        </Dialog.Root>
      </div>
    </Styled.HeaderContainer>
  );
};
