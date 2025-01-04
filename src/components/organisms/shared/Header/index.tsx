"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ROUTES } from "@/config/routes";
import { useCartContext } from "@/context/CartContext";
import Icon, { IconName } from "@/components/atoms/Icon";
import Badge from "@/components/atoms/Badge";

export default function Header() {
  const { totalQuantity } = useCartContext();
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  return (
    <header className="sticky top-0 left-0 w-full h-16 bg-surface_neutral py-5 px-4 z-50">
      <nav className="w-full max-w-7xl mx-auto flex justify-between">
        <div>
          <Link href={ROUTES.home} id={`${ROUTES.home}-header-link`}>
            <Image
              src="/logos/gamershop.png"
              width={150}
              height={24}
              alt="site-logo"
              priority
            />
          </Link>
        </div>

        <div className="relative">
          <Link
            href={ROUTES.cart}
            id={`${ROUTES.cart}-header-link`}
            aria-label="Cart Link"
          >
            <Icon name={IconName.cart} />
          </Link>
          {totalQuantity && hydrated ? (
            <Badge
              label={totalQuantity.toString()}
              className="!font-bold !py-0.5 !px-1 text-xxs border border-border_neutral rounded-full absolute -top-1.5 -right-1.5 "
            />
          ) : null}
        </div>
      </nav>
    </header>
  );
}
