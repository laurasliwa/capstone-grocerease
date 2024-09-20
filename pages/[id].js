import { useRouter } from "next/router";
import Link from "next/link";
import styled from "styled-components";
import shoppingItemsData from "@/assets/shopping-items.json";
import Image from "next/image";

export default function ItemDetails() {
  const router = useRouter();
  const { id } = router.query;

  const currentItem = shoppingItemsData.find((item) => item.id === id);

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
                <StyledQuantity>
                  <StyledNumber>{currentItem.quantity}</StyledNumber>
                  <span>Quantity</span>
                </StyledQuantity>
                <StyledItemName>{currentItem.name}</StyledItemName>
                <StyledCategory>{currentItem.category}</StyledCategory>
                <StyledImage
                  src={`/images/${currentItem.imageUrl}`}
                  alt={currentItem.name}
                  style={{ objectFit: "contain" }}
                  width={250}
                  height={300}
                  priority={true}
                />
                <StyledCommentTitle>Comments </StyledCommentTitle>
                <StyledComment>{currentItem.comment}</StyledComment>
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
  z-index: 1000;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #362f23;
  font-weight: bold;
`;

const ShoppingItemDetailsContainer = styled.article`
  display: grid;
  grid-template-columns: 0.2fr 1.6fr 0.4fr;
  grid-template-rows: 0.2fr 0.2fr 3fr 0.4fr 0.6fr;
  grid-template-areas:
    "quantity category category"
    "quantity itemname itemname"
    "image image image"
    "subline subline subline"
    "comment comment comment";
  position: relative;
  margin: 106px 12px;
  max-width: 100%;
  width: 94%;
  border-radius: 20px;
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
  margin: 5px 0 0 5px;
  border: 1px solid;
  border-radius: 18px;
  background-color: #fff4e9;
`;

const StyledNumber = styled.span`
  font-size: 1.8rem;
`;

const StyledItemName = styled.h2`
  grid-area: itemname;
  margin: 4px 0 0 4px;
  font-size: 2rem;
  font-weight: normal;
`;

const StyledCategory = styled.h3`
  grid-area: category;
  font-weight: normal;
  font-size: 1rem;
  margin: 8px 10px 0 164px;
  display: flex;
  justify-content: flex-end;
  padding-right: 2px;
  text-align: right;
`;

const StyledImage = styled(Image)`
  grid-area: image;
  max-width: 100%;
  height: auto;
  margin: 6px auto;
`;

const StyledCommentTitle = styled.h4`
  grid-area: subline;
  margin: 10px 8px 0 8px;
`;

const StyledComment = styled.p`
  grid-area: comment;
  border: solid 1px;
  border-radius: 15px;
  padding: 2px 6px;
  margin: 0 5px 5px 5px;
  background-color: #fff4e9;
`;
