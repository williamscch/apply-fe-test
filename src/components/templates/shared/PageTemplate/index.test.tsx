import { render, screen } from "@testing-library/react";
import PageTemplate from "./";

describe("PageTemplate Component", () => {
  it("renders the PageTemplate container with correct structure", () => {
    render(
      <PageTemplate>
        <p>Page Content</p>
      </PageTemplate>
    );

    const container = screen.getByLabelText("page-template");
    expect(container).toBeInTheDocument();
    expect(container).toHaveClass("w-full flex flex-col pb-8 md:pb-12 px-4");
  });

  it("renders the main element with correct structure", () => {
    render(
      <PageTemplate>
        <p>Page Content</p>
      </PageTemplate>
    );

    const main = screen.getByRole("main");
    expect(main).toBeInTheDocument();
    expect(main).toHaveClass("flex-grow w-full max-w-7xl mx-auto");
  });

  it("renders children correctly inside the main element", () => {
    render(
      <PageTemplate>
        <p data-testid="child">Page Content</p>
      </PageTemplate>
    );

    const main = screen.getByRole("main");
    const child = screen.getByTestId("child");

    expect(main).toContainElement(child);
    expect(child).toBeInTheDocument();
    expect(child).toHaveTextContent("Page Content");
  });
});
