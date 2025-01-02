import { ROUTES } from "@/config/routes";
import { IconName } from "@/components/atoms/Icon";
import CartTemplate from "@/components/templates/cart/CartTemplate";
import PageTemplate from "@/components/templates/shared/PageTemplate";

export default function CartPage() {
  return (
    <PageTemplate>
      <CartTemplate
        title="Your Cart"
        link={{
          label: "Back to Catalog",
          href: ROUTES.catalog,
          icon: IconName.arrowLeft,
        }}
      />
    </PageTemplate>
  );
}
