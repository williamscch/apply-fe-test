import Link from "next/link";
import Image from "next/image";
import { ROUTES } from "@/config/routes";
import Icon from "@/components/atoms/Icon";

export function Header() {
  return (
    <header className="sticky top-0 left-0 w-full h-16 bg-surface_neutral py-5 px-4">
      <nav className="w-full max-w-7xl mx-auto flex justify-between">
        <div>
          <Link href={ROUTES.home} id={`${ROUTES.home}-header-link`}>
            <Image
              src="/logos/gamershop.png"
              width={150}
              height={24}
              alt="site-logo"
            />
          </Link>
        </div>

        <div>
          <Link href={ROUTES.cart} id={`${ROUTES.cart}-header-link`}>
            <Icon name="cart" />
          </Link>
        </div>
      </nav>
    </header>
  );
}
