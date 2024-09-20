import GlobalStyle from "../styles";
import { useState } from "react";
import shoppingItemsData from "@/assets/shopping-items.json";
import { uid } from "uid";

export default function App({ Component, pageProps }) {
  const [shoppingItemsState, setShoppingItemsState] =
    useState(shoppingItemsData);

  function handleCreateItem(newItem) {
    const itemWithId = { ...newItem, id: uid() };
    console.log(itemWithId);
    setShoppingItemsState((prevItems) => [itemWithId, ...prevItems]);
  }
  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        onCreateItem={handleCreateItem}
        shoppingItems={shoppingItemsState}
      />
    </>
  );
}
