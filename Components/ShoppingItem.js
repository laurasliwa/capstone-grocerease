import styled from "styled-components";

export default function ShoppingItem({ quantity, name, category }) {
  return (
    <ItemContainer category={category}>
      <ItemQuantity>{quantity}</ItemQuantity>
      <ItemName>{name}</ItemName>
      <ItemCategory>{category}</ItemCategory>
    </ItemContainer>
  );
}

const ItemContainer = styled.ul`
  display: grid;
  grid-template-columns: 0.2fr 1fr 0.5fr 0.5fr;
  grid-template-rows: 0.4fr 0.4fr 0 0;
  grid-template-areas:
    "itemquantity itemname edit delete"
    "itemquantity itemcategory edit delete";
  border: 1px solid #362f23;
  padding: 0;
  margin: 5px;
  border-radius: 15px;
  background-color: ${({ category }) => {
    switch (category) {
      case "Dairy":
        return "#E3E3E3";
      case "Bakery":
        return "#F6ECDE";
      case "Fruits":
        return "#FDECF7";
      case "Vegetables":
        return "#F1FDEC";
      case "Meat":
        return "#FFE6DF";
      case "Beverages":
        return "#FFFEDF";
      case "Snacks":
        return "#E5D8C2";
      case "Household":
        return "#C2E5E0";
      case "Personal Care":
        return "#C2D3E5";
      default:
        return "gray";
    }
  }};
`;

const ItemQuantity = styled.li`
  grid-area: itemquantity;
  margin: 0;
  padding: 0.81rem 0.95rem 0.81rem 0.95rem;
  font-size: 1.5em;
  list-style: none;
`;

const ItemName = styled.li`
  grid-area: itemname;
  margin: 0.5rem 0 0 0;
  font-size: 1.25em;
  list-style: none;
`;

const ItemCategory = styled.li`
  grid-area: itemcategory;
  margin: 0 0 0.25rem 0.05rem;
  font-size: 0.75em;
  list-style: none;
`;
