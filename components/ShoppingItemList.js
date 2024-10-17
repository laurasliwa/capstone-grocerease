import ShoppingItem from "./ShoppingItem";
import styled from "styled-components";

export default function ShoppingItemList({
  shoppingItems,
  onDeleteItem,
  onTogglePurchased,
  onHandleEditItem,
  onChangeMode,
}) {
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
              isPurchased={shoppingItem.isPurchased}
              onDeleteItem={onDeleteItem}
              onTogglePurchased={onTogglePurchased}
              onActivateEditMode={() => {
                onChangeMode("edit"), onHandleEditItem(shoppingItem);
              }}
            />
          );
        })}
      </StyledItemList>
    </>
  );
}

const StyledItemList = styled.ul`
  margin: 0;
  padding: 10px;
`;
