import shoppingItems from "@/assets/shopping-items.json";
import ShoppingItemList from "@/Components/ShoppingItemList";

export default function HomePage() {
  return (
    <div>
      <ShoppingItemList headline="GrocerEase" shoppingItems={shoppingItems} />
    </div>
  );
}
