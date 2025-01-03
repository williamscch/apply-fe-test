import { render, screen, fireEvent } from "@testing-library/react";
import Button, { ButtonProps } from "./";

describe("Button component", () => {
  const defaultProps: ButtonProps = {
    children: "Click me",
    onClick: jest.fn(),
  };

  it("renders the button with default properties", () => {
    render(<Button {...defaultProps} />);
    const buttonElement = screen.getByRole("button", { name: /click me/i });

    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass(
      "w-fit px-6 py-4 text-base font-bold leading-none rounded-lg focus:outline-none hover:opacity-75 disabled:opacity-75 disabled:cursor-not-allowed"
    );
    expect(buttonElement).toHaveClass(
      "bg-surface_interactive border-none text-text_light"
    ); // Default variant
    expect(buttonElement).not.toBeDisabled();
  });

  it("applies the 'outline' variant class correctly", () => {
    render(<Button {...defaultProps} variant="outline" />);
    const buttonElement = screen.getByRole("button", { name: /click me/i });

    expect(buttonElement).toHaveClass(
      "bg-transparent border border-border_contrast text-text_contrast"
    );
  });

  it("applies the 'icon' variant class correctly", () => {
    render(<Button {...defaultProps} variant="icon" />);
    const buttonElement = screen.getByRole("button", { name: /click me/i });

    expect(buttonElement).toHaveClass("h-fit bg-transparent p-2");
  });

  it("applies additional custom classes", () => {
    render(<Button {...defaultProps} className="custom-class" />);
    const buttonElement = screen.getByRole("button", { name: /click me/i });

    expect(buttonElement).toHaveClass("custom-class");
  });

  it("disables the button when the 'disabled' prop is true", () => {
    render(<Button {...defaultProps} disabled />);
    const buttonElement = screen.getByRole("button", { name: /click me/i });

    expect(buttonElement).toBeDisabled();
    expect(buttonElement).toHaveClass(
      "disabled:opacity-75 disabled:cursor-not-allowed"
    );
  });

  it("does not trigger onClick when the button is disabled", () => {
    const onClickMock = jest.fn();
    render(<Button {...defaultProps} onClick={onClickMock} disabled />);
    const buttonElement = screen.getByRole("button", { name: /click me/i });

    fireEvent.click(buttonElement);

    expect(onClickMock).not.toHaveBeenCalled();
  });

  it("triggers onClick when clicked", () => {
    const onClickMock = jest.fn();
    render(<Button {...defaultProps} onClick={onClickMock} />);
    const buttonElement = screen.getByRole("button", { name: /click me/i });

    fireEvent.click(buttonElement);

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it("renders children correctly", () => {
    render(<Button {...defaultProps}>Submit</Button>);
    const buttonElement = screen.getByRole("button", { name: /submit/i });

    expect(buttonElement).toBeInTheDocument();
  });
});
