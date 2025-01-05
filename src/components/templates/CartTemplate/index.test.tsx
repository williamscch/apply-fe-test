import { render, screen } from "@testing-library/react";
import { ROUTES } from "@/config/routes";
import CartTemplate from "./";

jest.mock("@/components/molecules/PageHeaderWithLink", () => ({
  __esModule: true,
  default: ({ title, subtitle, link }: any) => (
    <div data-testid="page-header-with-link">
      <h1>{title}</h1>
      {subtitle && <h2>{subtitle}</h2>}
      <a href={link.href}>{link.label}</a>
    </div>
  ),
}));

jest.mock("@/components/organisms/CartGames", () => ({
  __esModule: true,
  default: () => <div data-testid="cart-games">CartGames Component</div>,
}));

jest.mock("@/components/organisms/CartSummary", () => ({
  __esModule: true,
  default: () => <div data-testid="cart-summary">CartSummary Component</div>,
}));

describe("CartTemplate Component", () => {
  it("renders the CartTemplate container", () => {
    render(<CartTemplate />);
    const section = screen.getByRole("region");
    expect(section).toBeInTheDocument();
    expect(section).toHaveClass("flex flex-col gap-8 md:gap-12");
  });

  it("renders PageHeaderWithLink with the correct props", () => {
    render(
      <CartTemplate
        title="My Cart"
        subtitle="Review your items"
        link={{ href: ROUTES.cart, label: "Back to Cart" }}
      />
    );

    const header = screen.getByTestId("page-header-with-link");
    expect(header).toBeInTheDocument();

    expect(screen.getByText("My Cart")).toBeInTheDocument();
    expect(screen.getByText("Review your items")).toBeInTheDocument();
    const link = screen.getByText("Back to Cart");
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", ROUTES.cart);
  });

  it("renders default props when none are provided", () => {
    render(<CartTemplate />);

    const header = screen.getByTestId("page-header-with-link");
    expect(header).toBeInTheDocument();

    expect(screen.getByText("Cart")).toBeInTheDocument();
    const link = screen.getByText("Home");
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", ROUTES.home);
  });

  it("renders CartGames and CartSummary components", () => {
    render(<CartTemplate />);

    const cartGames = screen.getByTestId("cart-games");
    expect(cartGames).toBeInTheDocument();

    const cartSummary = screen.getByTestId("cart-summary");
    expect(cartSummary).toBeInTheDocument();
  });

  it("ensures the layout is correct with CartGames and CartSummary", () => {
    render(<CartTemplate />);

    const gridContainer = screen
      .getByLabelText("cart-template")
      .querySelector("div.grid");
    expect(gridContainer).toBeInTheDocument();
    expect(gridContainer).toHaveClass(
      "grid md:grid-cols-4fr_3fr gap-12 lg:gap-20"
    );

    const cartGames = screen.getByTestId("cart-games");
    const cartSummary = screen.getByTestId("cart-summary");

    expect(gridContainer).toContainElement(cartGames);
    expect(gridContainer).toContainElement(cartSummary);
  });
});
