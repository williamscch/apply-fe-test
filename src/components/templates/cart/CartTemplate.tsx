import { ROUTES } from "@/config/routes";
import { IconName } from "@/components/atoms/Icon";
import PageHeaderWithLink from "@/components/molecules/PageHeaderWithLink";
import CartGames from "@/components/organisms/cart/CartGames";

interface CartTemplateProps {
  title?: string;
  subtitle?: string;
  link?: { href: string; label: string; icon?: IconName };
}

export default function CartTemplate({
  title = "Cart",
  link = {
    label: "Home",
    href: ROUTES.home,
  },
  subtitle,
}: CartTemplateProps) {
  return (
    <section className="flex flex-col gap-8 md:gap-12">
      <PageHeaderWithLink title={title} subtitle={subtitle} link={link} />
      <div className="grid md:grid-cols-4fr_3fr gap-12 md:gap-20">
        <CartGames />
      </div>
    </section>
  );
}
