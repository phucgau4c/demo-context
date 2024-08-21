"use client";

import Payment from "@/components/Payment";
import ProductCart from "@/components/ProductCard";
import TableCart from "@/components/TableCart";

export default function CartPage() {

  return (
    <div>
      <ProductCart />
      <TableCart/>
      <Payment />
    </div>
  );
}
