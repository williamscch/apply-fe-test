import { availableFilters } from "@/utils/endpoint";
import Text from "@/components/atoms/Text";
import Dropdown from "@/components/molecules/Dropdown";

export default function CatalogHeader() {
  return (
    <section className="grid gap-12">
      <Text variant="h1">Top Sellers</Text>
      <Dropdown
        className="w-full xs:w-fit xs:ml-auto"
        selectCn="w-full"
        labelCn="pr-6 border-r border-border_contrast max-h-6"
        label="Genre"
        onChange={(value) => {}}
        id="genre-select"
        options={availableFilters}
        value=""
      />
    </section>
  );
}
