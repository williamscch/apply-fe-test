import { render, screen } from "@testing-library/react";
import MainLayout from "./";

jest.mock("@/context/CartContext", () => ({
  CartProvider: ({ children }: any) => (
    <div data-testid="cart-provider">{children}</div>
  ),
}));

jest.mock("@/components/organisms/shared/Header", () => ({
  __esModule: true,
  default: () => <header data-testid="header">Header Component</header>,
}));

jest.mock("@/components/organisms/shared/Footer", () => ({
  __esModule: true,
  default: () => <footer data-testid="footer">Footer Component</footer>,
}));

describe("MainLayout Component", () => {
  it("renders the MainLayout container with correct structure", () => {
    render(
      <MainLayout>
        <main data-testid="children">Main Content</main>
      </MainLayout>
    );

    const container = screen.getByText("Main Content").closest("div");

    expect(container).toBeInTheDocument();
    expect(container).toHaveClass("flex-grow");
  });

  it("renders the Header component", () => {
    render(
      <MainLayout>
        <main data-testid="children">Main Content</main>
      </MainLayout>
    );

    const header = screen.getByTestId("header");
    expect(header).toBeInTheDocument();
    expect(header).toHaveTextContent("Header Component");
  });

  it("renders the Footer component", () => {
    render(
      <MainLayout>
        <main data-testid="children">Main Content</main>
      </MainLayout>
    );

    const footer = screen.getByTestId("footer");
    expect(footer).toBeInTheDocument();
    expect(footer).toHaveTextContent("Footer Component");
  });

  it("renders children correctly", () => {
    render(
      <MainLayout>
        <main data-testid="children">Main Content</main>
      </MainLayout>
    );

    const children = screen.getByTestId("children");
    expect(children).toBeInTheDocument();
    expect(children).toHaveTextContent("Main Content");
  });

  it("wraps children and layout components within CartProvider", () => {
    render(
      <MainLayout>
        <main data-testid="children">Main Content</main>
      </MainLayout>
    );

    const cartProvider = screen.getByTestId("cart-provider");
    expect(cartProvider).toBeInTheDocument();

    const header = screen.getByTestId("header");
    const children = screen.getByTestId("children");
    expect(cartProvider).toContainElement(header);
    expect(cartProvider).toContainElement(children);
  });
});
