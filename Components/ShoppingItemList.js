import ShoppingItem from "./ShoppingItem";
import styled from "styled-components";

export default function ShoppingItemList({ headline, shoppingItems }) {
  return (
    <>
      <h1>{headline}</h1>
      <div>
        {shoppingItems.map((shoppingItem) => {
          return (
            <ShoppingItem
              key={shoppingItems.id}
              quantity={shoppingItem.quantity}
              name={shoppingItem.name}
              category={shoppingItem.category}
            />
          );
        })}
      </div>
    </>
  );
}
