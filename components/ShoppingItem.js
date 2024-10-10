import styled from "styled-components";
import Link from "next/link";
import { useState } from "react";
import Delete from "@/public/icons/delete.svg";
import Edit from "@/public/icons/edit.svg";

export default function ShoppingItem({
  id,
  quantity,
  name,
  category,
  onDeleteItem,
  onTogglePurchased,
  isPurchased,
  handleEditItem,
}) {
  const [isDeleteConfirmVisible, setIsDeleteConfirmVisible] = useState(false);

  function handleToggleDelete() {
    setIsDeleteConfirmVisible(!isDeleteConfirmVisible);
  }

  return (
    <ItemContainer $category={category}>
      {isDeleteConfirmVisible ? (
        <>
          <ConfirmDialog>Delete item?</ConfirmDialog>
          <ConfirmButton onClick={() => onDeleteItem(id)}>Yes</ConfirmButton>
          <CancelButton onClick={handleToggleDelete}>No</CancelButton>
        </>
      ) : (
        <>
          <ItemQuantity>{quantity}</ItemQuantity>
          <ItemName $isPurchased={isPurchased}>{name}</ItemName>
          <ItemCategory>{category}</ItemCategory>
          <StyledLink href={`/${id}`}>Details</StyledLink>
          <EditButton onClick={handleEditItem}>
            <EditIcon />
          </EditButton>
          <StyledCheckBox
            type="checkbox"
            defaultChecked={isPurchased}
            onChange={() => onTogglePurchased(id)}
          ></StyledCheckBox>
          <StyledCheckboxLabel>Purchased</StyledCheckboxLabel>
          <DeleteButton onClick={handleToggleDelete}>
            <DeleteIcon />
          </DeleteButton>
        </>
      )}
    </ItemContainer>
  );
}

const ItemContainer = styled.li`
  display: grid;
  grid-template-columns: 0.2fr 1.6fr 0.2fr 0.2fr;
  grid-template-rows: 0.4fr 0.4fr 0 0;
  grid-template-areas:
    "itemquantity itemname details edit"
    "itemquantity itemcategory mark delete";
  border: 1px solid #362f23;
  padding: 0;
  margin: 6px;
  border-radius: 15px;
  background-color: ${({ $category }) => {
    switch ($category) {
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
        return " #a1b0be ";
    }
  }};
`;

const ItemQuantity = styled.span`
  grid-area: itemquantity;
  margin: 0;
  padding: 0.8rem 1rem;
  font-size: 1.4rem;
  list-style: none;
`;

const ItemName = styled.span`
  grid-area: itemname;
  margin: 0.6rem 0 0 0;
  font-size: 1.08rem;
  list-style: none;
  text-decoration: ${(props) => (props.$isPurchased ? "line-through" : "none")};
`;

const ItemCategory = styled.span`
  grid-area: itemcategory;
  margin: 0 0 0.4rem 0.1rem;
  font-size: 0.8rem;
  list-style: none;
`;

const StyledLink = styled(Link)`
  grid-area: details;
  border: 1px solid #362f23;
  border-radius: 15px;
  height: 1.4rem;
  width: 3.4rem;
  align-self: center;
  background-color: #fff4e9;
  text-decoration: none;
  color: #362f23;
  padding: 2px 0 0 6px;
  margin-left: 12px;
  font-size: 12px;
`;

const EditButton = styled.button`
  grid-area: edit;
  border: none;
  background-color: transparent;
`;

const EditIcon = styled(Edit)`
  width: 20px;
  height: 20px;
  border-left: 1px dotted #362f23;
`;

const StyledCheckBox = styled.input`
  grid-area: mark;
  width: 12px;
  height: 12px;
  margin-top: 4px;
`;

const StyledCheckboxLabel = styled.label`
  grid-area: mark;
  font-size: 12px;
  margin: 3px 0 0 14px;
`;

const DeleteButton = styled.button`
  grid-area: delete;
  border: none;
  background-color: transparent;
`;

const DeleteIcon = styled(Delete)`
  width: 20px;
  height: 20px;
  border-left: 1px dotted #362f23;
`;

const ConfirmDialog = styled.p`
  grid-area: itemname;
  align-items: center;
  padding: 10px 0;
  border: none;
  background-color: transparent;
`;

const ConfirmButton = styled.button`
  grid-area: details;
  background-color: #e0ffd3;
  color: #000;
  border: none;
  font-weight: bold;
  padding: 0 8px;
  margin: 8px 8px 0 0;
  border-radius: 15px;
`;

const CancelButton = styled.button`
  grid-area: edit;
  background-color: #ffd3d3;
  color: #000;
  border: none;
  font-weight: bold;
  padding: 0 8px;
  margin: 8px 8px 0 0;
  border-radius: 15px;
`;
