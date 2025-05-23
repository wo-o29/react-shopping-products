import { ProductItemType } from "@/apis/products/product.type";
import ProductItem from "./Item";
import * as S from "./ProductList.styled";
import { CartItemType } from "@/apis/cartItems/cartItem.type";
import { use } from "react";

interface ProductListProps {
  resource: Promise<ProductItemType[]>;
  cartItems: CartItemType[];
  updateCartItems: (newCartItems: CartItemType[]) => void;
}

function ProductList({
  resource,
  cartItems,
  updateCartItems,
}: ProductListProps) {
  const products = use(resource);

  return (
    <>
      {products.length > 0 ? (
        <S.ProductList>
          {products.map((productItem) => (
            <ProductItem
              key={productItem.id}
              product={productItem}
              cartItems={cartItems}
              updateCartItems={updateCartItems}
            />
          ))}
        </S.ProductList>
      ) : (
        <S.EmptyProductList>등록된 상품이 없습니다.</S.EmptyProductList>
      )}
    </>
  );
}

export default ProductList;
