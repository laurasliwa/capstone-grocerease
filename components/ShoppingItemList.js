import ShoppingItem from "./ShoppingItem";
import styled from "styled-components";

export default function ShoppingItemList({ shoppingItems }) {
  return (
    <>
      <StyledItemList>
        {shoppingItems.map((shoppingItem) => {
          return (
            <ShoppingItem
              key={shoppingItem.id}
              quantity={shoppingItem.quantity}
              name={shoppingItem.name}
              category={shoppingItem.category}
              id={shoppingItem.id}
            />
          );
        })}
      </StyledItemList>
    </>
  );
}

const StyledItemList = styled.ul`
  margin: 90px 0 0 0;
  padding: 10px;
`;
