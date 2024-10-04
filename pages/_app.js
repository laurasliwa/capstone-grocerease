import GlobalStyle from "../styles";
import { useState } from "react";
import shoppingItemsData from "@/assets/shopping-items.json";
import { uid } from "uid";

export default function App({ Component, pageProps }) {
  const [shoppingItems, setShoppingItems] = useState(shoppingItemsData);
  const [isPurchased, setIsPurchased] = useState(false);

  function handleCreateItem(newItem) {
    const itemWithId = { ...newItem, id: uid(), imageUrl: "placeholder.jpg" };
    setShoppingItems((prevItems) => [itemWithId, ...prevItems]);
  }

  function handleDeleteItem(id) {
    setShoppingItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }

  function handleTogglePurchased(id) {
    const purchasedShoppingItems = shoppingItems.map((shoppingItem) =>
      shoppingItem.id === id
        ? { ...shoppingItem, isPurchased: !shoppingItem.isPurchased }
        : shoppingItem
    );
    setShoppingItems(purchasedShoppingItems);
  }

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        onCreateItem={handleCreateItem}
        onDeleteItem={handleDeleteItem}
        onTogglePurchased={handleTogglePurchased}
        shoppingItems={shoppingItems}
      />
    </>
  );
}
