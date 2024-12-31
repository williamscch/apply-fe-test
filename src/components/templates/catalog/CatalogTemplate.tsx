import { Game } from "@/types/game";
import CatalogGames from "@/components/organisms/catalog/CatalogGames";
import CatalogHeader from "@/components/organisms/catalog/CatalogHeader";

interface CatalogPageTemplateProps {
  games: Game[];
}

export default function CatalogTemplate({ games }: CatalogPageTemplateProps) {
  return (
    <section className="flex flex-col gap-12 pt-12">
      <CatalogHeader />
      <CatalogGames games={games} />
    </section>
  );
}
