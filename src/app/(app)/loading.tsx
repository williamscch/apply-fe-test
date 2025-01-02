import Image from "next/image";

export default function Loading() {
  return (
    <div
      className="flex items-center justify-center h-screen bg-surface_neutral"
      aria-live="polite"
    >
      <div>
        <Image
          src="/logos/gamershop.png"
          width={180}
          height={50}
          alt="site-logo"
          title="GamerShop logo"
        />
      </div>
    </div>
  );
}
