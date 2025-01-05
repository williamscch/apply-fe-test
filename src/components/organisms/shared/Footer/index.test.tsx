import { render, screen } from "@testing-library/react";
import { ROUTES } from "@/config/routes";
import Footer from "./";

describe("Footer Component", () => {
  it("renders the footer container", () => {
    render(<Footer />);
    const footer = screen.getByRole("contentinfo");
    expect(footer).toBeInTheDocument();
    expect(footer).toHaveClass("h-44 w-full bg-surface_contrast");
  });

  it("renders the link with the correct href and id", () => {
    render(<Footer />);
    const link = screen.getByRole("link", { name: /apply-logo/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", ROUTES.home);
    expect(link).toHaveAttribute("id", `${ROUTES.home}-footer-link`);
  });

  it("renders the image with correct attributes", () => {
    render(<Footer />);
    const image = screen.getByAltText("apply-logo");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "/logos/applydigitallogo.png");
    expect(image).toHaveAttribute("width", "170");
    expect(image).toHaveAttribute("height", "44");
  });

  it("ensures the footer layout is centered", () => {
    render(<Footer />);
    const footerContent = screen.getByRole("contentinfo").firstChild;
    expect(footerContent).toHaveClass("h-full w-full grid place-items-center");
  });
});
