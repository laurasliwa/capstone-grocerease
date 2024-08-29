import styled from "styled-components";

export default function ShoppingItem({ quantity, name, category }) {
  return (
    <section>
      <p>{quantity}</p>
      <p>{name}</p>
      <p>{category}</p>
    </section>
  );
}
