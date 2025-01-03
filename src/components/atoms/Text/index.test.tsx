import { render, screen } from "@testing-library/react";
import Text from "./";

describe("Text component", () => {
  it("renders the correct HTML tag based on the variant prop", () => {
    const variants = ["h1", "h2", "h3", "h4", "h5", "p", "span"] as const;

    variants.forEach((variant) => {
      render(<Text variant={variant}>{`This is ${variant}`}</Text>);
      const element = screen.getByText(`This is ${variant}`);
      expect(element.tagName.toLowerCase()).toBe(variant);
    });
  });

  it("applies the correct default styles for each variant", () => {
    const variantStyles = {
      h1: "text-2xl md:text-4xl font-bold",
      h2: "text-xl md:text-2xl font-bold",
      h3: "text-xl font-bold",
      h4: "text-lg font-bold",
      h5: "text-base font-bold text-text_neutral",
      p: "text-base font-normal text-text_neutral",
      span: "text-lg font-normal",
    };

    Object.entries(variantStyles).forEach(([variant, styles]) => {
      render(
        <Text variant={variant as keyof typeof variantStyles}>{variant}</Text>
      );
      const element = screen.getByText(variant);
      expect(element).toHaveClass(styles);
    });
  });

  it("renders the default variant ('p') when no variant is provided", () => {
    render(<Text>This is default</Text>);
    const element = screen.getByText("This is default");
    expect(element.tagName.toLowerCase()).toBe("p");
  });

  it("applies custom class names when provided", () => {
    render(
      <Text variant="h1" className="custom-class">
        Custom Class
      </Text>
    );
    const element = screen.getByText("Custom Class");
    expect(element).toHaveClass("custom-class");
  });

  it("combines default and custom class names", () => {
    render(
      <Text variant="h1" className="custom-class">
        Combined Classes
      </Text>
    );
    const element = screen.getByText("Combined Classes");
    expect(element).toHaveClass("text-2xl md:text-4xl font-bold");
    expect(element).toHaveClass("custom-class");
  });

  it("renders children correctly", () => {
    render(<Text variant="p">This is a test</Text>);
    const element = screen.getByText("This is a test");
    expect(element).toBeInTheDocument();
  });
});
