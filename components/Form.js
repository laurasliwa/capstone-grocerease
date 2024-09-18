export default function CreateForm() {
  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
  }
  return (
    <form onSubmit={handleSubmit}>
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
      <select key="category" name="category" data-js="category" required>
        <option key={categories} value={categories}>
          {categories}
        </option>
      </select>
      <label htmlFor="comment">Comment</label>
      <textarea name="comment" id="comment" placeholder="(Optional)"></textarea>
      <button>Create</button>
    </form>
  );
}
