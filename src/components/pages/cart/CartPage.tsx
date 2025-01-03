"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { useCartContext } from "@/context/CartContext";
import { ROUTES } from "@/config/routes";
import { IconName } from "@/components/atoms/Icon";
import PageTemplate from "@/components/templates/shared/PageTemplate";
import Loader from "@/components/molecules/Loader";

const CartTemplate = dynamic(
  () => import("@/components/templates/cart/CartTemplate"),
  {
    ssr: false,
    loading: () => <Loader className="pt-36 md:pt-56" />,
  }
);

export default function CartPage() {
  const { totalQuantity } = useCartContext();

  const subtitle = totalQuantity > 0 ? `${totalQuantity} items` : "No items";

  return (
    <PageTemplate>
      <CartTemplate
        title="Your Cart"
        subtitle={subtitle}
        link={{
          label: "Back to Catalog",
          href: ROUTES.catalog,
          icon: IconName.arrowLeft,
        }}
      />
    </PageTemplate>
  );
}
