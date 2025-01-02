import Text from "@/components/atoms/Text";

interface CartHeaderProps {
  title?: string;
  subtitle?: string;
}

export default function CartHeader({
  title = "Your Cart",
  subtitle,
}: CartHeaderProps) {
  return (
    <section className="grid gap-3">
      <Text variant="h1">{title}</Text>
      {subtitle && (
        <Text variant="h2" className="font-normal">
          {subtitle}
        </Text>
      )}
    </section>
  );
}
