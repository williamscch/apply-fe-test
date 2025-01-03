import Image from "next/image";
import { Game } from "@/types/games";
import { cn } from "@/utils/cn";
import Icon, { IconName } from "@/components/atoms/Icon";
import Button from "@/components/atoms/Button";
import Text from "@/components/atoms/Text";
import Card from "@/components/atoms/Card";
import Badge from "@/components/atoms/Badge";
import dynamic from "next/dynamic";

const DynamicButton = dynamic(
  () =>
    import("@/components/molecules/DynamicButton").then(
      (module) => module.default
    ),
  {
    ssr: false,
    loading: () => (
      <Button variant="outline" className="w-full mt-auto uppercase" disabled>
        Loading...
      </Button>
    ),
  }
);

interface GameCardProps {
  template: "catalog" | "cart";
  game: Game;
  cardClassName?: string;
  button?: {
    label?: string;
    onClick?: (game: Game) => void;
  };
}

export default function GameCard({
  template,
  game,
  button,
  cardClassName,
}: GameCardProps) {
  const renderNewBadge = game.isNew ? (
    <Badge label="New" className="absolute m-3" />
  ) : null;

  const catalogTemplate = (
    <Card className={cardClassName}>
      {renderNewBadge}
      <div className="w-full rounded-t-2xl overflow-hidden aspect-1_16 md:aspect-1_38 bg-surface_neutral">
        <Image
          width={240}
          height={335}
          src={game.image}
          alt={`${game.name}-img`}
          className="object-cover w-full h-full"
        />
      </div>

      <div className="flex flex-col flex-1 mt-5 gap-4">
        <div className="grid gap-3">
          <Text variant="h5" className="uppercase">
            {game.genre}
          </Text>
          <div className="grid grid-cols-2fr_1fr gap-1">
            <Text variant="h4">{game.name}</Text>
            <Text variant="h3" className="text-end">
              ${game.price}
            </Text>
          </div>
        </div>

        {button ? (
          <DynamicButton
            label={button.label || "Add to cart"}
            onClick={() => button.onClick?.(game)}
            variant="outline"
            className="w-full mt-auto uppercase"
          />
        ) : null}
      </div>
    </Card>
  );

  const cartTemplate = (
    <Card
      className={cn(
        "relative lg:flex-row gap-4 md:gap-6 px-4 py-5",
        cardClassName
      )}
    >
      {renderNewBadge}
      <div className="w-full lg:w-64 pr-8 lg:p-0 overflow-hidden aspect-video">
        <Image
          width={256}
          height={156}
          src={game.image}
          alt={`${game.name}-img`}
          className="object-cover w-full h-full"
        />
      </div>

      <div className="flex flex-col flex-1 gap-3">
        <Text variant="h5" className="uppercase">
          {game.genre}
        </Text>
        <div className="grid gap-2">
          <Text variant="h4" className="mt-">
            {game.name}
          </Text>
          <Text variant="p" className="">
            {game.description}
          </Text>
        </div>
        <Text variant="h3" className="mt-auto lg:pr-4 text-end">
          ${game.price}
        </Text>
      </div>

      {button ? (
        <Button
          variant="icon"
          className="absolute top-4 right-3 p-0"
          onClick={() => button?.onClick?.(game)}
        >
          {button.label === "Remove" ? (
            <Icon name={IconName.x} color="#8F8F8F" />
          ) : (
            button.label
          )}
        </Button>
      ) : null}
    </Card>
  );

  const templates = {
    catalog: catalogTemplate,
    cart: cartTemplate,
  };

  return templates[template];
}
