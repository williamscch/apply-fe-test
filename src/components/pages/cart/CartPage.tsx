"use client";

import { useCartContext } from "@/context/CartContext";
import { ROUTES } from "@/config/routes";
import { IconName } from "@/components/atoms/Icon";
import CartTemplate from "@/components/templates/cart/CartTemplate";
import PageTemplate from "@/components/templates/shared/PageTemplate";
import { useEffect, useState } from "react";

export default function CartPage() {
  const { totalQuantity } = useCartContext();
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  const subtitle = !hydrated
    ? "..."
    : totalQuantity > 0
    ? `${totalQuantity} items`
    : "No items";

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
