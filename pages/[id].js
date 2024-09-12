import { useRouter } from "next/router";
import Link from "next/link";
import styled from "styled-components";
import shoppingItems from "@/assets/shopping-items.json";
import ShoppingItem from "@/components/ShoppingItem";
import Image from "next/image";

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
      <main>
        <HeaderSubline>
          <StyledLink href="/">← Back</StyledLink>
        </HeaderSubline>
        <div>
          {currentItem ? (
            <>
              <ShoppingItemDetailsContainer $category={currentItem.category}>
                <article>
                  <StyledQuantity>
                    <StyledNumber>{currentItem.quantity}</StyledNumber>
                    <span>Quantity</span>
                  </StyledQuantity>
                  <section>
                    <StyledItemname>{currentItem.name}</StyledItemname>
                    {currentItem.category}
                  </section>
                  <Image
                    src={`/images/${currentItem.imageUrl}`}
                    alt={currentItem.name}
                    style={{ objectFit: "contain" }}
                    width={250}
                    height={300}
                    priority={true}
                  />
                  <section>
                    <h3>Comments </h3>
                    <StyledComment>{currentItem.comment}</StyledComment>
                  </section>
                </article>
              </ShoppingItemDetailsContainer>
            </>
          ) : (
            <p>Shopping item not found</p>
          )}
        </div>
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

const HeaderSubline = styled.div`
  position: fixed;
  top: 58px;
  width: 100%;
  background-color: #fff4e9;
  border-style: solid;
  border-radius: 0 0 15px 15px;
  height: 40px;
  padding: 8px 0 0 10px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #362f23;
  font-weight: bold;
`;

const ShoppingItemDetailsContainer = styled.article`
  display: grid;
  grid-template-columns: 0.2fr 1.6fr 0.4fr;
  grid-template-rows: 2.4fr 4fr 0.4fr 3fr;
  grid-template-areas:
    "quantity itemname category"
    "image image image"
    "subline subline subline"
    "comment comment comment";
  position: fixed;
  align-items: start;
  top: 106px;
  padding: 20px 40px;
  margin: 0 20px;
  border-radius: 15px;
  border: 1px solid;
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

const StyledQuantity = styled.section`
  grid-area: quantity;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 76px;
  padding: 6px 0;
  border: 1px solid;
  border-radius: 18px;
  background-color: #fff4e9;
`;

const StyledNumber = styled.span`
  font-size: 1.8rem;
`;

const StyledItemname = styled.h2`
  grid-area: itemname;
`;

const StyledComment = styled.p`
  grid-area: comment;
  border: solid 1px;
  border-radius: 15px;
  background-color: #fff4e9;
`;
