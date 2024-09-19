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
    const newItem = Object.fromEntries(formData);

    onCreateItem(newItem);
    event.target.reset();
    setSelectedCategory("");
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <h3>Add new item</h3>
      <label htmlFor="itemName">Item Name</label>
      <input
        name="itemName"
        id="itemName"
        type="text"
        placeholder="(Required)"
        required
      />
      <label htmlFor="quantity">Quantity</label>
      <input
        name="quantity"
        id="quantity"
        type="number"
        placeholder="(Required)"
        required
      />
      <label htmlFor="category">Category</label>
      <select
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
      </select>
      <label htmlFor="comment">Comment</label>
      <textarea name="comment" id="comment" placeholder="(Optional)"></textarea>
      <button>Create</button>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  margin: 90px 0 0 0;
  padding: 10px;
`;
