import { render, screen } from "@testing-library/react";
import PageHeader from "./";

describe("PageHeader component", () => {
  const defaultProps = {
    title: "Test Title",
    subtitle: "Test Subtitle",
  };

  it("renders the section element with correct classes", () => {
    render(<PageHeader {...defaultProps} />);
    const section = screen.getByTestId("page-header");
    expect(section).toBeInTheDocument();
    expect(section).toHaveClass("grid gap-3 pt-8 md:pt-12");
  });

  it("renders the title with the correct variant", () => {
    render(<PageHeader {...defaultProps} />);
    const title = screen.getByText("Test Title");
    expect(title).toBeInTheDocument();
    expect(title.tagName).toBe("H1");
  });

  it("renders the subtitle when provided", () => {
    render(<PageHeader {...defaultProps} />);
    const subtitle = screen.getByText("Test Subtitle");
    expect(subtitle).toBeInTheDocument();
    expect(subtitle.tagName).toBe("H2");
    expect(subtitle).toHaveClass("font-normal");
  });

  it("does not render the subtitle when not provided", () => {
    render(<PageHeader title="Test Title" />);
    const subtitle = screen.queryByText("Test Subtitle");
    expect(subtitle).not.toBeInTheDocument();
  });

  it("renders the correct title when only title is provided", () => {
    render(<PageHeader title="Only Title" />);
    const title = screen.getByText("Only Title");
    expect(title).toBeInTheDocument();
    expect(title.tagName).toBe("H1");
  });
});
