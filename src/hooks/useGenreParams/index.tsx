import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useEffect } from "react";

export function useGenreParams(initialGenre: string) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const currentGenre = searchParams.get("genre") || initialGenre;

  const setGenreInURL = (newGenre: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (newGenre) {
      params.set("genre", newGenre);
    } else {
      params.delete("genre");
    }

    const updatedUrl = params.toString()
      ? `${pathname}?${params.toString()}`
      : pathname;
    router.push(updatedUrl);
  };

  useEffect(() => {
    if (pathname === "/") {
      setGenreInURL(initialGenre);
    }
  }, [pathname, initialGenre]);

  return { currentGenre, setGenreInURL };
}
