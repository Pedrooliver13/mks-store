"use client";

// Packages
import { ReactElement } from "react";
import Image from "next/image";
import { X as XIcon } from "phosphor-react";

// Styles
import * as Styled from "./styles";

export const CartCard = (): ReactElement => {
  return (
    <Styled.cartCardContainer>
      <div className="remove">
        <XIcon size={20} />
      </div>

      <div className="image">
        <Image
          src={
            "https://images.unsplash.com/photo-1715590876582-18e4844864a6?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt={""}
          width={100}
          height={57}
          priority
        />
      </div>

      <h1>Apple Watch Series 4 GPS</h1>

      <div className="dashboard">
        <div className="dashboard__counter">0</div>
        <span className="dashboard__price">R$399</span>
      </div>
    </Styled.cartCardContainer>
  );
};
