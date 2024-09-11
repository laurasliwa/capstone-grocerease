import { useRouter } from "next/router";
import Link from "next/link";
import styled from "styled-components";
import shoppingItems from "@/assets/shopping-items.json";
import ShoppingItem from "@/components/ShoppingItem";

export default function ItemDetails() {
  const router = useRouter();
  const { id } = router.query;

  const currentItem = shoppingItems.find((item) => item.id === id);

  if (!currentItem) {
    return <p>Shopping item not found.</p>;
  }

  return (
    <>
      <StyledHeader>
        <StyledHeadline>GrocerEase</StyledHeadline>
      </StyledHeader>
      <StyledLink href="/">← Back</StyledLink>
      <main>
        <article>
          <ShoppingItem />
        </article>
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

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const StyledArticle = styled.article`
  top: 500px;
`;
