import Form from "@/components/Form";
import ShoppingItemList from "@/components/ShoppingItemList";
import styled from "styled-components";
import { useState } from "react";

export default function HomePage({
  shoppingItems,
  onCreateItem,
  onDeleteItem,
  onTogglePurchased,
  onEditItem,
}) {
  const purchasedItems = shoppingItems.filter((item) => item.isPurchased);
  const unPurchasedItems = shoppingItems.filter((item) => !item.isPurchased);

  const [editItem, setEditItem] = useState(null);
  const [mode, setMode] = useState("default");

  function handleChangeMode(mode) {
    setMode(mode);
  }

  function handleItemToEdit(item) {
    setEditItem(item);
  }

  return (
    <>
      <StyledHeader>
        <StyledHeadline>GrocerEase</StyledHeadline>
      </StyledHeader>
      <StyledMain>
        <ListHeader>
          <StyledListName>Shopping List</StyledListName>
          <StyledTotalItems>
            {unPurchasedItems.length} items to buy{" "}
          </StyledTotalItems>
        </ListHeader>
        <StyledButtonContainer>
          <StyledFormButton
            type="button"
            onClick={() => handleChangeMode("add")}
          >
            +
          </StyledFormButton>
        </StyledButtonContainer>

        {mode === "add" && (
          <Form
            onSubmitItem={onCreateItem}
            editItem={editItem}
            mode={mode}
            onChangeMode={handleChangeMode}
          />
        )}

        {mode === "edit" && (
          <Form
            onSubmitItem={onEditItem}
            editItem={editItem}
            mode={mode}
            onChangeMode={handleChangeMode}
          />
        )}

        <ShoppingItemList
          shoppingItems={unPurchasedItems}
          onDeleteItem={onDeleteItem}
          onTogglePurchased={onTogglePurchased}
          onHandleEditItem={handleItemToEdit}
          onChangeMode={handleChangeMode}
        />

        {unPurchasedItems.length === 0 && (
          <StyledMessageContainer>
            <StyledMessage>
              I feel so empty <span>🥺</span> Add new items with the form above.
            </StyledMessage>
          </StyledMessageContainer>
        )}
        <StyledPurchasedHeader>
          <StyledPurchasedName>Purchased items</StyledPurchasedName>
          <StyledPurchasedItems>
            {purchasedItems.length} items bought{" "}
          </StyledPurchasedItems>
        </StyledPurchasedHeader>
        <ShoppingItemList
          shoppingItems={purchasedItems}
          onDeleteItem={onDeleteItem}
          onTogglePurchased={onTogglePurchased}
          onHandleEditItem={handleItemToEdit}
          onToggleIsEditing={() => setIsEditMode(true)}
        />
      </StyledMain>
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

const StyledMain = styled.main`
  margin-top: 120px;
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
  z-index: 5;
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

const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledFormButton = styled.button`
  border-bottom: 1px solid #362f23;
  border-radius: 15px;
  background-color: #fff4e9;
  color: #362f23;
  z-index: 1;
`;

const StyledMessageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 16px;
`;

const StyledMessage = styled.p`
  border: 1px solid #362f23;
  border-radius: 15px;
  height: 4rem;
  width: 20rem;
  background-color: #fff4e9;
  color: #362f23;
  padding: 4px;
  margin: 0 26px;
  font-size: 20px;
  text-align: center;
`;

const StyledPurchasedHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 8px;
  padding: 4px 8px 0 8px;
  border-radius: 15px;
  border-style: solid;
  border-width: 2px;
  background-color: #fff4e9;
  height: 34px;
`;

const StyledPurchasedName = styled.h3`
  font-size: 1rem;
  font-weight: normal;
  color: #362f23;
`;

const StyledPurchasedItems = styled.p`
  font-size: 1rem;
  color: #362f23;
  text-align: right;
`;
