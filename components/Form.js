import styled from "styled-components";
import categories from "@/assets/categories.json";
import { useState } from "react";

export default function CreateForm({ onCreateItem }) {
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newItem = Object.fromEntries(formData.entries());

    onCreateItem(newItem);
    event.target.reset();
    setSelectedCategory("");
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledHeader>Add new item</StyledHeader>
      <label htmlFor="name">Item Name</label>
      <StyledItemNameInput
        name="name"
        id="name"
        type="text"
        placeholder="(Required)"
        required
      />
      <FlexContainer>
        <StyledCategorySelectContainer>
          <label htmlFor="category">Category</label>
          <StyledCategorySelect
            name="category"
            id="category"
            value={selectedCategory}
            onChange={handleCategoryChange}
            required
          >
            <option value="">---Choose a category---</option>
            {categories.map((category) => {
              return (
                <option key={category} value={category}>
                  {category}
                </option>
              );
            })}
          </StyledCategorySelect>
        </StyledCategorySelectContainer>

        <StyledQuantityInputContainer>
          <label htmlFor="quantity">Quantity</label>
          <StyledQuantityInput
            name="quantity"
            id="quantity"
            type="number"
            placeholder="(Required)"
            required
          />
        </StyledQuantityInputContainer>
      </FlexContainer>
      <label htmlFor="comment">Comment</label>
      <StyledCommentTextarea
        name="comment"
        id="comment"
        placeholder="(Optional)"
      ></StyledCommentTextarea>
      <StyledCreateButton>Create</StyledCreateButton>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 70px 0 0 0;
  padding: 10px;
  border-bottom: 1px solid #362f23;
`;

const FlexContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const StyledCategorySelectContainer = styled.div`
  flex: 2;
`;

const StyledQuantityInputContainer = styled.div`
  flex: 1;
`;

const StyledHeader = styled.h3`
  text-align: center;
  margin: 20px 0 0 0;
  font-size: 1.4rem;
`;
const StyledItemNameInput = styled.input`
  border: 1px solid #362f23;
  border-radius: 8px;
  height: 1.4rem;
`;

const StyledCategorySelect = styled.select`
  border: 1px solid #362f23;
  border-radius: 8px;
  height: 1.4rem;
  width: 100%;
`;

const StyledQuantityInput = styled.input`
  border: 1px solid #362f23;
  border-radius: 8px;
  height: 1.4rem;
  width: 100%;
`;

const StyledCommentTextarea = styled.textarea`
  border: 1px solid #362f23;
  border-radius: 8px;
  height: 1.4rem;
  height: 4rem;
  overflow-y: auto;
`;

const StyledCreateButton = styled.button`
  border: 1px solid #362f23;
  border-radius: 15px;
  height: 1.8rem;
  width: 4.2rem;
  align-self: center;
  background-color: #fff4e9;
  color: #362f23;
  padding: 2px 2px;
  margin: 10px 0 0 0;
  font-size: 16px;
`;
