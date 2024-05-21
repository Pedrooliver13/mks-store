"use client";

// Packages
import { ReactElement } from "react";
import { ShoppingCart as ShoppingCartIcon } from "phosphor-react";
import * as Dialog from "@radix-ui/react-dialog";
import Link from "next/link";

// Components
import { Cart } from "components/core";

// Styles
import * as Styled from "./styles";

export const Header = (): ReactElement => {
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

              <span>0</span>
            </div>
          </Dialog.Trigger>

          <Cart />
        </Dialog.Root>
      </div>
    </Styled.HeaderContainer>
  );
};
