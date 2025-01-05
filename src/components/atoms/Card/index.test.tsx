import { render, screen } from "@testing-library/react";
import Card from "./";

describe("Card component", () => {
  it("renders the Card with default styles", () => {
    render(
      <Card>
        <div>Test Content</div>
      </Card>
    );

    const cardElement = screen.getByRole("article");
    expect(cardElement).toBeInTheDocument();
    expect(cardElement).toHaveClass(
      "w-full h-full border-[0.5px] border-border_neutral rounded-2xl overflow-hidden p-6 flex flex-col"
    );
  });

  it("renders children correctly", () => {
    render(
      <Card>
        <div>Test Content</div>
      </Card>
    );

    const childElement = screen.getByText("Test Content");
    expect(childElement).toBeInTheDocument();
  });

  it("applies custom classes passed via className prop", () => {
    render(
      <Card className="custom-class">
        <div>Test Content</div>
      </Card>
    );

    const cardElement = screen.getByRole("article");
    expect(cardElement).toHaveClass("custom-class");
  });

  it("combines default and custom classes correctly", () => {
    render(
      <Card className="custom-class">
        <div>Test Content</div>
      </Card>
    );

    const cardElement = screen.getByRole("article");
    expect(cardElement).toHaveClass(
      "w-full h-full border-[0.5px] border-border_neutral rounded-2xl overflow-hidden p-6 flex flex-col custom-class"
    );
  });
});
