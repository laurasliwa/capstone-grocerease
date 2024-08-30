import styled from "styled-components";

export default function ShoppingItem({ quantity, name, category }) {
  return (
    <ItemContainer>
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
`;

const ItemQuantity = styled.li`
  grid-area: itemquantity;
  margin: 0;
  padding: 13px;
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
