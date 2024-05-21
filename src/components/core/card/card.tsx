"use client";

// Packages
import { ReactElement } from "react";
import Image from "next/image";
import { ShoppingBagOpen as ShoppingBagOpenIcon } from "phosphor-react";

// Utils
import { priceFormatter } from "utils/formatter";

// Services
import { Product } from "services/products";

// Styles
import * as Styled from "./styles";

interface CardProps extends Product {}

export const Card = (props: CardProps): ReactElement => {
  return (
    <Styled.CardContainer>
      <div className="image">
        <Image src={props?.photo} alt={""} width={218} height={200} priority />
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

      <button>
        <ShoppingBagOpenIcon size={20} />
        <span>COMPRAR</span>
      </button>
    </Styled.CardContainer>
  );
};
