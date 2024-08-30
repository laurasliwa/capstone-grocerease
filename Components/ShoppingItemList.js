import ShoppingItem from "./ShoppingItem";
import styled from "styled-components";

export default function ShoppingItemList({ headline, shoppingItems }) {
  return (
    <>
      <StyledHeadline>{headline}</StyledHeadline>
      <StyledItemList>
        {shoppingItems.map((shoppingItem) => {
          return (
            <ShoppingItem
              key={shoppingItem.id}
              quantity={shoppingItem.quantity}
              name={shoppingItem.name}
              category={shoppingItem.category}
            />
          );
        })}
      </StyledItemList>
    </>
  );
}

const StyledHeadline = styled.h1`
  position: fixed;
  top: 0;
  width: 100%;
  text-align: center;
  background-color: #c0cfc6;
  color: #362f23;
  padding: 7px 0;
  z-index: 1000;
  margin: 0;
`;

const StyledItemList = styled.ul`
  margin: 55px 0 0 0;
  padding: 10px;
`;
