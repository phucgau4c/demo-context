import { Product } from "@/types";
import { css, cx } from "@linaria/core";
import { styled } from "@linaria/react";
import Image from "next/image";
import { FaMinus, FaPlus } from "react-icons/fa";

// import { useCartContext } from "@/context/CartContext";

type PropsCart = {
  products: Product[];
};

export default function TableCart() {
  const cssImage = css`
    width: 64px;
    height: 64px;
    border-radius: 10px;
  `;

  const Table = styled.table`
    max-width: 862px;
    width: 800px;
    border-collapse: collapse;
    margin: 0 auto;
  `;

  const tdCss = css`
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
    text-align: center;
  `;

  const Td = styled.td`
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
    text-align: center;
  `;

  const Span = styled.span`
    padding: 15px;
  `;

  const cssIcon = css`
    cursor: pointer;
  `;

  // const { handleAddProduct, handleMinusProduct, deleteProduct } =
  //   useCartContext();

  return (
    <Table>
      <thead>
        <tr>
          <th className={cx(tdCss)}>Image</th>
          <th className={cx(tdCss)}>Product Name</th>
          <th className={cx(tdCss)}>Price</th>
          <th className={cx(tdCss)}>Qty</th>
          <th className={cx(tdCss)}>Total</th>
          <th className={cx(tdCss)}></th>
        </tr>
      </thead>
      {/* <tbody>
        {products?.length ? (
          products.map((product) => (
            <tr key={product.id}>
              <Td>
                <Image
                  className={cx(cssImage)}
                  src={product.img}
                  alt={product.name}
                />
              </Td>
              <Td>{product.name}</Td>
              <Td>{product.price}$</Td>
              <Td>
                <FaPlus
                  className={cx(cssIcon)}
                  onClick={() => handleAddProduct(product)}
                />
                <Span>{product.qty}</Span>
                <FaMinus
                  className={cx(cssIcon)}
                  onClick={() => handleMinusProduct(product)}
                />
              </Td>
              <Td>{product.price * product.qty}$</Td>
              <Td
                onClick={() => deleteProduct(product)}
                className={cx(cssIcon)}
              >
                Delete
              </Td>
            </tr>
          ))
        ) : (
          <tr>
            <Td colSpan={6}>Not thing to pay here 😢!!</Td>
          </tr>
        )}
      </tbody> */}
    </Table>
  );
}
