import { availableFilters } from "@/constants/gamesFilters";
import Dropdown from "@/components/molecules/Dropdown";
import PageHeader from "@/components/molecules/PageHeader";

interface CatalogHeaderProps {
  title?: string;
  currentGenre: string;
  setGenre: (genre: string) => void;
}

export default function CatalogHeader({
  title = "Catalog",
  currentGenre,
  setGenre,
}: CatalogHeaderProps) {
  return (
    <section className="grid gap-8 md:gap-12">
      <PageHeader title={title} />
      <Dropdown
        className="w-full xs:w-fit xs:ml-auto"
        selectCn="w-full"
        labelCn="pr-6 border-r border-border_contrast max-h-6"
        label="Genre"
        onChange={setGenre}
        id="genre-select"
        options={availableFilters}
        value={currentGenre}
        defaultOption={{ label: "All", value: "all" }}
      />
    </section>
  );
}
