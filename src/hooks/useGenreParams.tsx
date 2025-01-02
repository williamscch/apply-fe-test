import { useRouter, useSearchParams } from "next/navigation";

export function useGenreParams(initialGenre: string) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentGenre = searchParams.get("genre") || initialGenre;

  const setGenreInURL = (newGenre: string) => {
    router.push(`?genre=${newGenre}`);
  };

  return { currentGenre, setGenreInURL };
}
