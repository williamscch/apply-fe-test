import Link from "next/link";
import Icon, { IconName } from "@/components/atoms/Icon";
import Text from "@/components/atoms/Text";
import PageHeader from "@/components/molecules/PageHeader";

interface PageHeaderWithLinkProps {
  title: string;
  subtitle?: string;
  link: { href: string; label: string; icon?: IconName };
}

export default function PageHeaderWithLink({
  title,
  subtitle,
  link,
}: PageHeaderWithLinkProps) {
  return (
    <section className="grid gap-4 md:gap-6 pt-4 md:pt-6">
      <Link
        href={link.href}
        className="flex gap-2 text-text_contrast hover:underline items-center"
      >
        {link.icon && <Icon name={IconName.arrowLeft} color="#3B3B3B" />}

        <Text variant="p" className="font-medium">
          {link.label}
        </Text>
      </Link>

      <PageHeader title={title} subtitle={subtitle} />
    </section>
  );
}
