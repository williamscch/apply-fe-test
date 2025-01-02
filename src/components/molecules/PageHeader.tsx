import Text from "@/components/atoms/Text";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <section className="grid gap-3 pt-8 md:pt-12">
      <Text variant="h1">{title}</Text>
      {subtitle && (
        <Text variant="h2" className="font-normal">
          {subtitle}
        </Text>
      )}
    </section>
  );
}
