import GlobalStyle from "../styles";
import { useState } from "react";
import shoppingItemsData from "@/assets/shopping-items.json";
import { uid } from "uid";

export default function App({ Component, pageProps }) {
  const [shoppingItems, setShoppingItems] = useState(shoppingItemsData);

  function handleCreateItem(newItem) {
    const itemWithId = {
      ...newItem,
      id: uid(),
      imageUrl: "placeholder.jpg",
      isPurchased: false,
    };
    setShoppingItems((prevItems) => [itemWithId, ...prevItems]);
  }

  function handleEditItem(id, newItem) {
    setShoppingItems(
      shoppingItems.map((shoppingItem) => {
        return shoppingItem.id === id
          ? { ...shoppingItem, ...newItem }
          : shoppingItem;
      })
    );
  }

  function handleDeleteItem(id) {
    setShoppingItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }

  function handleTogglePurchased(id) {
    setShoppingItems(
      shoppingItems
        .map((shoppingItem) =>
          shoppingItem.id === id
            ? { ...shoppingItem, isPurchased: !shoppingItem.isPurchased }
            : shoppingItem
        )
        .sort((a, b) => a.isPurchased - b.isPurchased)
    );
  }
  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        onCreateItem={handleCreateItem}
        onEditItem={handleEditItem}
        onDeleteItem={handleDeleteItem}
        onTogglePurchased={handleTogglePurchased}
        shoppingItems={shoppingItems}
      />
    </>
  );
}
