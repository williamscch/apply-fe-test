import { render, screen } from "@testing-library/react";
import Loader from "./";

describe("Loader component", () => {
  it("renders the loader container", () => {
    render(<Loader />);
    const loader = screen.getByRole("status");
    expect(loader).toBeInTheDocument();
    expect(loader).toHaveClass("flex-1 grid place-items-center py-16");
  });

  it("applies custom class names", () => {
    render(<Loader className="custom-class" />);
    const loader = screen.getByRole("status");
    expect(loader).toHaveClass("custom-class");
  });

  it("renders the Icon component with the default props", () => {
    render(<Loader />);
    const icon = screen.getByRole("img");
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveClass("animate-spin");
    expect(icon).toHaveAttribute("width", "150");
    expect(icon).toHaveAttribute("height", "150");
    expect(icon).toHaveAttribute("viewBox", "0 0 64 64");
  });

  it("renders the Icon component with custom props", () => {
    render(<Loader iconSize={200} iconViewBox="0 0 100 100" />);
    const icon = screen.getByRole("img");
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveAttribute("width", "200");
    expect(icon).toHaveAttribute("height", "200");
    expect(icon).toHaveAttribute("viewBox", "0 0 100 100");
  });

  it("ensures aria attributes are set correctly", () => {
    render(<Loader />);
    const loader = screen.getByRole("status");
    expect(loader).toHaveAttribute("aria-live", "polite");
  });
});
