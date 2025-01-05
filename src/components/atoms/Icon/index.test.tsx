import { render, screen } from "@testing-library/react";
import Icon, { IconName } from "./";

describe("Icon component", () => {
  it("renders the SVG element", () => {
    render(<Icon name={IconName.cart} />);
    const svgElement = screen.getByRole("img");
    expect(svgElement).toBeInTheDocument();
  });

  it("applies the correct size", () => {
    render(<Icon name={IconName.cart} size={32} />);
    const svgElement = screen.getByRole("img");
    expect(svgElement).toHaveAttribute("width", "32");
    expect(svgElement).toHaveAttribute("height", "32");
  });

  it("applies the correct color", () => {
    render(<Icon name={IconName.cart} color="#FF0000" />);
    const pathElement = screen.getByTestId("icon-path-cart");
    expect(pathElement).toHaveAttribute("fill", "#FF0000");
  });

  it("renders the correct path for the 'cart' icon", () => {
    render(<Icon name={IconName.cart} />);
    const pathElement = screen.getByTestId("icon-path-cart");
    expect(pathElement).toBeInTheDocument();
  });

  it("renders the correct path for the 'spinner' icon", () => {
    render(<Icon name={IconName.spinner} />);
    const pathElement = screen.getByTestId("icon-path-spinner");
    expect(pathElement).toBeInTheDocument();
  });

  it("renders the correct path for the 'dropdown' icon", () => {
    render(<Icon name={IconName.dropdown} />);
    const pathElement = screen.getByTestId("icon-path-dropdown");
    expect(pathElement).toBeInTheDocument();
  });

  it("applies custom attributes to the SVG element", () => {
    render(<Icon name={IconName.cart} data-testid="custom-icon" />);
    const svgElement = screen.getByTestId("custom-icon");
    expect(svgElement).toBeInTheDocument();
  });

  it("uses the default viewBox when not provided", () => {
    render(<Icon name={IconName.cart} />);
    const svgElement = screen.getByRole("img");
    expect(svgElement).toHaveAttribute("viewBox", "0 0 24 24");
  });

  it("applies a custom viewBox when provided", () => {
    render(<Icon name={IconName.cart} viewBox="0 0 48 48" />);
    const svgElement = screen.getByRole("img");
    expect(svgElement).toHaveAttribute("viewBox", "0 0 48 48");
  });

  it("renders nothing if the icon name is invalid", () => {
    render(<Icon name={"invalid" as IconName} />);
    const svgElement = screen.getByRole("img");
    expect(svgElement).toBeInTheDocument();
    expect(svgElement.childElementCount).toBe(0); // No paths should be rendered
  });
});
