import Link from "next/link";
import Image from "next/image";
import { ROUTES } from "@/config/routes";

export default function Footer() {
  return (
    <footer className="h-44 w-full bg-surface_contrast">
      <div className="h-full w-full grid place-items-center">
        <Link href={ROUTES.home} id={`${ROUTES.home}-footer-link`}>
          <Image
            src="/logos/applydigitallogo.png"
            width={170}
            height={44}
            alt="apply-logo"
          />
        </Link>
      </div>
    </footer>
  );
}
