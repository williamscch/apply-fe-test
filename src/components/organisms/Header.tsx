import Image from "next/image";
import CartIcon from "@/components/atoms/CartIcon";

export function Header() {
  return (
    <header className="fixed top-0 left-0 w-full h-16 bg-surface_neutral py-5 px-4 flex justify-center">
      <nav className="w-full max-w-7xl flex justify-between">
        <div>
          <Image
            src="/logos/gamershop.png"
            width={150}
            height={24}
            alt="site-logo"
          />
        </div>
        <div>
          <CartIcon />
        </div>
      </nav>
    </header>
  );
}
