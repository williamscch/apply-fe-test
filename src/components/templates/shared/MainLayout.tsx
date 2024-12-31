import Header from "@/components/organisms/shared/Header";
import Footer from "@/components/organisms/shared/Footer";

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen min-w-56">
      <Header />
      <div className="flex-grow">{children}</div>
      <Footer />
    </div>
  );
}
