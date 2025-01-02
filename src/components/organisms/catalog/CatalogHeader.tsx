import { availableFilters } from "@/constants/gamesFilters";
import Text from "@/components/atoms/Text";
import Dropdown from "@/components/molecules/Dropdown";

interface CatalogHeaderProps {
  title?: string;
  currentGenre: string;
  setGenre: (genre: string) => void;
}

export default function CatalogHeader({
  title = "Top Sellers",
  currentGenre,
  setGenre,
}: CatalogHeaderProps) {
  return (
    <section className="grid gap-12">
      <Text variant="h1">{title}</Text>
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
