import styled from "styled-components";
import categories from "@/assets/categories.json";
import { useEffect, useState } from "react";

export default function ShoppingItemForm({
  onCreateItem,
  onEditItem,
  editItem = null,
  onToggleIsEditing,
}) {
  const [selectedCategory, setSelectedCategory] = useState(
    editItem ? editItem.category : ""
  );

  useEffect(() => {
    if (editItem) {
      setSelectedCategory(editItem.category);
    } else {
      setSelectedCategory("");
    }
  }, [editItem]);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newItem = Object.fromEntries(formData);
    console.log(newItem);

    if (editItem) {
      onEditItem(editItem.id, newItem);
    } else {
      onCreateItem(newItem);
    }

    onToggleIsEditing(null);
  }

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  return (
    <FormContainer>
      <StyledForm onSubmit={handleSubmit}>
        <StyledHeader>
          {editItem ? "Edit shopping item" : "Add new item"}
        </StyledHeader>
        <label htmlFor="name">Item Name</label>
        <StyledItemNameInput
          defaultValue={editItem ? editItem.name : ""}
          name="name"
          id="name"
          type="text"
          placeholder="(Required)"
          maxLength="20"
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
              defaultValue={editItem ? editItem.quantity : ""}
              name="quantity"
              id="quantity"
              type="number"
              placeholder="(Required)"
              min="0"
              max="999"
              required
            />
          </StyledQuantityInputContainer>
        </FlexContainer>
        <label htmlFor="comment">Comment</label>
        <StyledCommentTextarea
          defaultValue={editItem ? editItem.comment : ""}
          name="comment"
          id="comment"
          placeholder="(Optional)"
          maxLength="100"
          wrap="hard"
        />
        {editItem ? (
          <StyledSubmitButton>Submit</StyledSubmitButton>
        ) : (
          <StyledCreateButton>Create</StyledCreateButton>
        )}
      </StyledForm>
      {editItem && (
        <StyledCancelButton
          onClick={() => {
            onToggleIsEditing(null);
          }}
        >
          Cancel
        </StyledCancelButton>
      )}
    </FormContainer>
  );
}

const FormContainer = styled.div`
  margin: 70px 0 0 0;
  padding: 10px;
  border-bottom: 1px solid #362f23;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
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
  resize: none;
  word-wrap: break-word;
  overflow-wrap: break-word;
  white-space: pre-wrap;
`;

const StyledButton = styled.button`
  border: 1px solid #362f23;
  border-radius: 15px;
  height: 1.8rem;
  width: 4.2rem;
  background-color: #fff4e9;
  color: #362f23;
  padding: 2px 2px;
  margin: 10px 0 0 0;
  font-size: 16px;
`;

const StyledCreateButton = styled(StyledButton)`
  align-self: center;
`;

const StyledSubmitButton = styled(StyledButton)`
  position: relative;
  left: 105px;
`;

const StyledCancelButton = styled(StyledButton)`
  position: absolute;
  left: 185px;
  top: 304px;
`;
