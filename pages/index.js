import shoppingItems from "@/assets/shopping-items.json";
import ShoppingItemList from "@/Components/ShoppingItemList";
import styled from "styled-components";

export default function HomePage() {
  return (
    <>
      <StyledHeader>
        <StyledHeadline>GrocerEase</StyledHeadline>
        <StyledContainer>
          <StyledListName>Shopping List</StyledListName>
          <StyledTotalItems>
            {shoppingItems.length} items total{" "}
          </StyledTotalItems>
        </StyledContainer>
      </StyledHeader>
      <main>
        <ShoppingItemList shoppingItems={shoppingItems} />
      </main>
    </>
  );
}

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  text-align: center;
  border-radius: 0 0 15px 15px;
  background-color: #fff4e9;
  color: #362f23;
  z-index: 1000;
  margin: 0;
`;

const StyledHeadline = styled.h1`
  top: 0;
  width: 100%;
  text-align: center;
  color: #362f23;
  border-style: solid;
  border-bottom: 0;
  padding: 7px 0;
  z-index: 1000;
  margin: 0;
`;

const StyledContainer = styled.div`
  display: flex;
  border-style: solid;
  border-radius: 0 0 15px 15px;
  height: 40px;
`;

const StyledListName = styled.div`
  top: 0;
  width: 100%;
  text-align: left;
  font-size: 1em;
  color: #362f23;
  padding: 0 0 0 10px;
  z-index: 1000;
  margin: 8px 0 0 0;
`;

const StyledTotalItems = styled.div`
  top: 0;
  width: 100%;
  text-align: right;
  font-size: 1em;
  color: #362f23;
  padding: 0 10px 0 0;
  z-index: 1000;
  margin: 8px 0 0 0;
`;
