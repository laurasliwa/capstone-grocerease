import styled from "styled-components";

export default function ShoppingItem({ quantity, name, category }) {
  return (
    <ItemContainer category={category}>
      <ItemQuantity>{quantity}</ItemQuantity>
      <ItemName>{name}</ItemName>
      <ItemCategory>{category}</ItemCategory>
      <StyledButton href="/">Details</StyledButton>
    </ItemContainer>
  );
}

const ItemContainer = styled.li`
  display: grid;
  grid-template-columns: 0.2fr 1.6fr 0.2fr 0.2fr 0.2fr;
  grid-template-rows: 0.4fr 0.4fr 0 0;
  grid-template-areas:
    "itemquantity itemname details edit delete"
    "itemquantity itemcategory details edit delete";
  border: 1px solid #362f23;
  padding: 0;
  margin: 6px;
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

const ItemQuantity = styled.span`
  grid-area: itemquantity;
  margin: 0;
  padding: 0.8rem 1rem;
  font-size: 1.8rem;
  list-style: none;
`;

const ItemName = styled.span`
  grid-area: itemname;
  margin: 0.6rem 0 0 0;
  font-size: 1.4rem;
  list-style: none;
`;

const ItemCategory = styled.span`
  grid-area: itemcategory;
  margin: 0 0 0.4rem 0.1rem;
  font-size: 0.8rem;
  list-style: none;
`;

const StyledButton = styled.button`
  grid-are: details;
  border-radius: 15px;
  height: 1.8rem;
  align-self: center;
  border-width: 0.08rem;
  background-color: #fff4e9;
`;
