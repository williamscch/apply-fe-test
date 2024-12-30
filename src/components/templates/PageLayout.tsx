interface PageLayoutProps {
  children: React.ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="w-full flex flex-col pb-8 md:pb-12 px-4">
      <main className="flex-grow w-full max-w-7xl mx-auto">{children}</main>
    </div>
  );
}
