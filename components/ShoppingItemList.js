import ShoppingItem from "./ShoppingItem";
import styled from "styled-components";

export default function ShoppingItemList({
  shoppingItems,
  onDeleteItem,
  handleTogglePurchased,
}) {
  const boughtShoppingItems = shoppingItems.filter(
    (shoppingItem) => shoppingItem.isPurchased
  );
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
              onDeleteItem={onDeleteItem}
              onTogglePurchased={handleTogglePurchased}
            />
          );
        })}
      </StyledItemList>
      <StyledPurchasedList>
        <h4>Purchased items</h4>
        {boughtShoppingItems.length} items total{" "}
      </StyledPurchasedList>
    </>
  );
}

const StyledItemList = styled.ul`
  margin: 0;
  padding: 10px;
`;

const StyledPurchasedList = styled.ul`
  margin: 0;
  padding: 10px;
`;
