import { render, screen, fireEvent } from "@testing-library/react";
import DynamicButton from "./";

describe("DynamicButton component", () => {
  const defaultProps = {
    label: "Click Me",
    onClick: jest.fn(),
    variant: "default" as const,
    className: "custom-class",
    disabled: false,
  };

  it("renders the button with the correct label", () => {
    render(<DynamicButton {...defaultProps} />);
    const button = screen.getByText("Click Me");
    expect(button).toBeInTheDocument();
  });

  it("applies the correct variant", () => {
    render(<DynamicButton {...defaultProps} variant="outline" />);
    const button = screen.getByText("Click Me");
    expect(button).toHaveClass(
      "bg-transparent border border-border_contrast text-text_contrast"
    );
  });

  it("applies custom class names", () => {
    render(<DynamicButton {...defaultProps} />);
    const button = screen.getByText("Click Me");
    expect(button).toHaveClass("custom-class");
  });

  it("is disabled when the disabled prop is true", () => {
    render(<DynamicButton {...defaultProps} disabled />);
    const button = screen.getByText("Click Me");
    expect(button).toBeDisabled();
    expect(button).toHaveClass(
      "disabled:opacity-75 disabled:cursor-not-allowed"
    );
  });

  it("is not disabled when the disabled prop is false", () => {
    render(<DynamicButton {...defaultProps} />);
    const button = screen.getByText("Click Me");
    expect(button).not.toBeDisabled();
  });

  it("calls the onClick handler when clicked", () => {
    render(<DynamicButton {...defaultProps} />);
    const button = screen.getByText("Click Me");
    fireEvent.click(button);
    expect(defaultProps.onClick).toHaveBeenCalledTimes(1);
  });

  it("renders with the default variant when no variant is provided", () => {
    render(<DynamicButton {...defaultProps} variant={undefined} />);
    const button = screen.getByText("Click Me");
    expect(button).toHaveClass(
      "bg-surface_interactive border-none text-text_light"
    );
  });
});
