import { render, screen } from "@testing-library/react";
import { ROUTES } from "@/config/routes";
import { useCartContext } from "@/context/CartContext";
import Header from "./";

jest.mock("@/context/CartContext", () => ({
  useCartContext: jest.fn(),
}));

describe("Header Component", () => {
  const mockUseCartContext = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    mockUseCartContext.mockReturnValue({
      totalQuantity: 0,
    });
    (useCartContext as jest.Mock).mockImplementation(mockUseCartContext);
  });

  it("renders the header container", () => {
    render(<Header />);
    const header = screen.getByRole("banner");
    expect(header).toBeInTheDocument();
    expect(header).toHaveClass(
      "sticky top-0 left-0 w-full h-16 bg-surface_neutral py-5 px-4 z-50"
    );
  });

  it("renders the home link with the correct attributes", () => {
    render(<Header />);
    const homeLink = screen.getByRole("link", { name: /site-logo/i });
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute("href", ROUTES.home);
    expect(homeLink).toHaveAttribute("id", `${ROUTES.home}-header-link`);
  });

  it("renders the cart link with the correct attributes", () => {
    render(<Header />);
    const cartLink = screen.getByRole("link", { name: "Cart Link" });
    expect(cartLink).toBeInTheDocument();
    expect(cartLink).toHaveAttribute("href", ROUTES.cart);
    expect(cartLink).toHaveAttribute("id", `${ROUTES.cart}-header-link`);
  });

  it("renders the site logo with correct attributes", () => {
    render(<Header />);
    const logo = screen.getByAltText("site-logo");
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute("src", "/logos/gamershop.png");
    expect(logo).toHaveAttribute("width", "150");
    expect(logo).toHaveAttribute("height", "24");
  });

  it("does not render the badge when totalQuantity is 0", () => {
    render(<Header />);
    const badge = screen.queryByText("0");
    expect(badge).not.toBeInTheDocument();
  });

  it("renders the badge with the correct totalQuantity when hydrated", () => {
    mockUseCartContext.mockReturnValue({
      totalQuantity: 5,
    });
    render(<Header />);
    const badge = screen.getByText("5");
    expect(badge).toBeInTheDocument();
    expect(badge).toHaveClass(
      "!font-bold !py-0.5 !px-1 text-xxs border border-border_neutral rounded-full absolute -top-1.5 -right-1.5"
    );
  });
});
