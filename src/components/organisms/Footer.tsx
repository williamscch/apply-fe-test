import Image from "next/image";

export function Footer() {
  return (
    <footer className="h-44 w-full bg-surface_contrast">
      <div className="h-full w-full grid place-items-center">
        <Image
          src="/logos/applydigitallogo.png"
          width={170}
          height={44}
          alt="apply-logo"
        ></Image>
      </div>
    </footer>
  );
}
