"use client";

// Packages
import { ReactElement, useContext } from "react";
import Image from "next/image";
import { X as XIcon } from "phosphor-react";

// Components
import { CounterButton } from "components/core";

// Contexts
import { GlobalContext } from "contexts/globalContext";

// Services
import { Product } from "services/products";

// Utils
import { priceFormatter } from "utils/formatter";

// Styles
import * as Styled from "./styles";

interface CartCardProps extends Product {}

export const CartCard = (props: CartCardProps): ReactElement => {
  const { removeProductInCart, updateQuantityProductInCart } =
    useContext(GlobalContext);

  const handleClickRemoveProductInCart = (): void => {
    removeProductInCart(props?.id);
  };

  const handleQuantityProductInCartChange = (quantity: number): void => {
    updateQuantityProductInCart(props?.id, quantity);
  };

  return (
    <Styled.cartCardContainer>
      <div className="remove" onClick={handleClickRemoveProductInCart}>
        <XIcon size={20} />
      </div>

      <div className="image">
        <Image src={props?.photo} alt={""} width={100} height={57} />
      </div>

      <h1>{props?.name}</h1>

      <div className="dashboard">
        <div className="dashboard__counter">
          <CounterButton
            value={props?.quantity}
            getValue={(value) => handleQuantityProductInCartChange(value)}
          />
        </div>
        <span className="dashboard__price">
          {priceFormatter.format(props?.price)}
        </span>
      </div>
    </Styled.cartCardContainer>
  );
};
