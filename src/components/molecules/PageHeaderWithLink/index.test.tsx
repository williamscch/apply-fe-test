import { render, screen } from "@testing-library/react";
import PageHeaderWithLink from "./";
import { IconName } from "@/components/atoms/Icon";

describe("PageHeaderWithLink Component", () => {
  const defaultProps = {
    title: "Test Title",
    subtitle: "Test Subtitle",
    link: {
      href: "/test-link",
      label: "Back to Home",
      icon: IconName.arrowLeft,
    },
  };

  it("renders the title and subtitle correctly", () => {
    render(<PageHeaderWithLink {...defaultProps} />);

    expect(screen.getByText(/test title/i)).toBeInTheDocument();
    expect(screen.getByText(/test subtitle/i)).toBeInTheDocument();
  });

  it("renders the link with correct label and href", () => {
    render(<PageHeaderWithLink {...defaultProps} />);

    const link = screen.getByRole("link", { name: /back to home/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/test-link");
  });

  it("renders the icon when provided", () => {
    render(<PageHeaderWithLink {...defaultProps} />);

    const icon = screen.getByRole("img");
    expect(icon).toBeInTheDocument();
  });

  it("does not render the icon when not provided", () => {
    const propsWithoutIcon = {
      ...defaultProps,
      link: { href: "/test-link", label: "Back to Home" },
    };

    render(<PageHeaderWithLink {...propsWithoutIcon} />);

    expect(screen.queryByRole("img")).not.toBeInTheDocument();
  });

  it("renders the link with the correct child content", () => {
    render(<PageHeaderWithLink {...defaultProps} />);

    const link = screen.getByRole("link", { name: /back to home/i });
    expect(link).toHaveTextContent("Back to Home");
  });
});
