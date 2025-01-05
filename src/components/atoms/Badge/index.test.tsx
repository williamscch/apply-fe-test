import { render, screen } from "@testing-library/react";
import Badge from "./";

describe("Badge component", () => {
  it("renders with the correct label", () => {
    render(<Badge label="Test Badge" />);
    const badgeElement = screen.getByText("Test Badge");
    expect(badgeElement).toBeInTheDocument();
  });

  it("applies default class names correctly", () => {
    render(<Badge label="Test Badge" />);
    const badgeElement = screen.getByText("Test Badge");
    expect(badgeElement).toHaveClass(
      "bg-surface_muted font-normal text-base text-text_contrast rounded px-2 py-1 pointer-events-none"
    );
  });

  it("applies additional className when provided", () => {
    render(<Badge label="Test Badge" className="custom-class" />);
    const badgeElement = screen.getByText("Test Badge");
    expect(badgeElement).toHaveClass("custom-class");
  });

  it("combines default and additional class names correctly", () => {
    render(<Badge label="Test Badge" className="custom-class" />);
    const badgeElement = screen.getByText("Test Badge");
    expect(badgeElement).toHaveClass(
      "bg-surface_muted font-normal text-base text-text_contrast rounded px-2 py-1 pointer-events-none custom-class"
    );
  });
});
