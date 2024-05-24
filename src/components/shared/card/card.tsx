"use client";

// Packages
import { ReactElement, useContext } from "react";
import { ShoppingBagOpen as ShoppingBagOpenIcon } from "phosphor-react";
import Image from "next/image";

// Utils
import { priceFormatter } from "utils/formatter";

// Services
import { Product } from "services/products";

// Contexts
import { GlobalContext } from "contexts/globalContext";

// Styles
import * as Styled from "./styles";

interface CardProps extends Product {}

export const Card = (props: CardProps): ReactElement => {
  const { cartList, addProductInCart, updateQuantityCoffeeInCart } =
    useContext(GlobalContext);

  const handleClickAddProductInCart = (): void => {
    const product = {
      ...props,
      quantity: 1,
    };

    const productAlreadySelected = cartList.find(
      (productCart) => product.id === productCart?.id
    );

    if (productAlreadySelected) {
      updateQuantityCoffeeInCart(
        product?.id,
        productAlreadySelected?.quantity + 1
      );

      return;
    }

    addProductInCart(product);
  };

  return (
    <Styled.CardContainer>
      <div className="image">
        <Image
          src={props?.photo}
          alt={"product image"}
          width={218}
          height={200}
          priority
        />
      </div>

      <div className="info">
        <div className="info__header">
          <h1>{props?.name}</h1>

          <span className="info__header--price">
            {priceFormatter.format(props.price)}
          </span>
        </div>

        <div className="info__description">{props?.description}</div>
      </div>

      <button onClick={handleClickAddProductInCart}>
        <ShoppingBagOpenIcon size={20} />
        <span>COMPRAR</span>
      </button>
    </Styled.CardContainer>
  );
};
