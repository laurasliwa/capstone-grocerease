import categories from "@/assets/categories.json";
import shoppingItems from "@/assets/shopping-items.json";
import ShoppingItemList from "@/Components/ShoppingItemList";

const shoppingItemWithCategory = shoppingItems.map((shoppingItem) => {
  const category = categories.find(
    (category) => category.name === shoppingItem.category
  );
  return { ...shoppingItem };
});

export default function HomePage() {
  return (
    <div>
      <ShoppingItemList
        headline="GrocerEase"
        shoppingItems={shoppingItemWithCategory}
      />
    </div>
  );
}
