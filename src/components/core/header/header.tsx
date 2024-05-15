"use client";

// Packages
import { ReactElement } from "react";
import Link from "next/link";
import { ShoppingCart as ShoppingCartIcon } from "phosphor-react";

// Styles
import * as Styled from "./styles";

export const Header = (): ReactElement => {
  return (
    <Styled.HeaderContainer>
      <div className="content container">
        <Link href="/" className="logo">
          MKS <span>Sistemas</span>
        </Link>

        <div className="cart">
          <ShoppingCartIcon size={18} />

          <span>0</span>
        </div>
      </div>
    </Styled.HeaderContainer>
  );
};
