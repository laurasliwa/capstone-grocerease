import { useState } from "react";
import Form from "@/components/Form";
import ShoppingItemList from "@/components/ShoppingItemList";
import shoppingItemsData from "@/assets/shopping-items.json";
import { uid } from "uid";
import styled from "styled-components";

export default function HomePage() {
  return (
    <>
      <StyledHeader>
        <StyledHeadline>GrocerEase</StyledHeadline>
      </StyledHeader>
      <main>
        <ListHeader>
          <StyledListName>Shopping List</StyledListName>
          <StyledTotalItems>
            {shoppingItemsState.length} items total{" "}
          </StyledTotalItems>
        </ListHeader>
        <Form onCreateItem={handleCreateItem} />
        <ShoppingItemList shoppingItems={shoppingItemsState} />
      </main>
    </>
  );
}

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  text-align: center;
  border-radius: 0;
  border-style: solid;
  border-width: 2px 0;
  background-color: #fff4e9;
  color: #362f23;
  z-index: 1000;
  margin: 0;
`;

const StyledHeadline = styled.h1`
  text-align: center;
  color: #362f23;
  border-style: solid;
  border-bottom: 0;
  padding: 6px 0;
  margin: 0;
`;

const ListHeader = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 0.5fr;
  grid-template-rows: 0.2fr;
  grid-template-areas: "shoppinglist itemstotal";
  position: fixed;
  top: 58px;
  width: 100%;
  background-color: #fff4e9;
  border-style: solid;
  border-radius: 0 0 15px 15px;
  height: 40px;
`;

const StyledListName = styled.h2`
  grid-area: shoppinglist;
  font-size: 1rem;
  font-weight: normal;
  color: #362f23;
  padding: 0 0 0 10px;
  margin: 8px 0 0 0;
`;

const StyledTotalItems = styled.p`
  grid-area: itemstotal;
  text-align: right;
  font-size: 1rem;
  color: #362f23;
  padding: 0 10px 0 0;
  margin: 8px 0 0 0;
`;
