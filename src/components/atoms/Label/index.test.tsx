import { render, screen } from "@testing-library/react";
import Label from "./";

describe("Label component", () => {
  it("renders the label element", () => {
    render(<Label htmlFor="test-input">Test Label</Label>);
    const labelElement = screen.getByText("Test Label");
    expect(labelElement).toBeInTheDocument();
    expect(labelElement.tagName).toBe("LABEL");
  });

  it("sets the correct htmlFor attribute", () => {
    render(<Label htmlFor="test-input">Test Label</Label>);
    const labelElement = screen.getByText("Test Label");
    expect(labelElement).toHaveAttribute("for", "test-input");
  });

  it("applies default class names", () => {
    render(<Label htmlFor="test-input">Test Label</Label>);
    const labelElement = screen.getByText("Test Label");
    expect(labelElement).toHaveClass("text-xl leading-tight font-bold");
  });

  it("applies custom class names when provided", () => {
    render(
      <Label htmlFor="test-input" className="custom-class">
        Test Label
      </Label>
    );
    const labelElement = screen.getByText("Test Label");
    expect(labelElement).toHaveClass("custom-class");
  });

  it("combines default and custom class names", () => {
    render(
      <Label htmlFor="test-input" className="custom-class">
        Test Label
      </Label>
    );
    const labelElement = screen.getByText("Test Label");
    expect(labelElement).toHaveClass("text-xl leading-tight font-bold");
    expect(labelElement).toHaveClass("custom-class");
  });

  it("renders the correct children", () => {
    render(<Label htmlFor="test-input">Custom Label Text</Label>);
    const labelElement = screen.getByText("Custom Label Text");
    expect(labelElement).toBeInTheDocument();
  });
});
