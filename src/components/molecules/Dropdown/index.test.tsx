import { render, screen, fireEvent } from "@testing-library/react";
import Dropdown from "./";

describe("Dropdown component", () => {
  const defaultProps = {
    id: "test-dropdown",
    label: "Test Label",
    value: "",
    options: ["Option 1", "Option 2", "Option 3"],
    onChange: jest.fn(),
    labelCn: "label-class",
    selectCn: "select-class",
    className: "dropdown-class",
    defaultOption: { label: "All", value: "" },
  };

  it("renders the container div with the correct class", () => {
    render(<Dropdown {...defaultProps} />);
    const container = screen.getByTestId("test-dropdown-container");
    expect(container).toBeInTheDocument();
    expect(container).toHaveClass(
      "relative flex items-center gap-6 w-fit dropdown-class"
    );
  });

  it("renders the Label component with the correct props", () => {
    render(<Dropdown {...defaultProps} />);
    const label = screen.getByText("Test Label");
    expect(label).toBeInTheDocument();
    expect(label).toHaveClass("label-class");
    expect(label.tagName).toBe("LABEL");
    expect(label).toHaveAttribute("for", "test-dropdown-select");
  });

  it("renders the Select component with the correct props", () => {
    render(<Dropdown {...defaultProps} />);
    const select = screen.getByRole("combobox");
    expect(select).toBeInTheDocument();
    expect(select).toHaveClass("select-class");
    expect(select).toHaveValue("");
  });

  it("renders the default option in the Select component", () => {
    render(<Dropdown {...defaultProps} />);
    const defaultOption = screen.getByText("All");
    expect(defaultOption).toBeInTheDocument();
    expect(defaultOption).toHaveAttribute("value", "");
  });

  it("renders the Icon component with the correct props", () => {
    render(<Dropdown {...defaultProps} />);
    const icon = screen.getByRole("img");
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveClass(
      "absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none"
    );
  });

  it("calls onChange when a different option is selected", () => {
    render(<Dropdown {...defaultProps} />);
    const select = screen.getByRole("combobox");

    fireEvent.change(select, { target: { value: "Option 2" } });
    expect(defaultProps.onChange).toHaveBeenCalledWith("Option 2");
    expect(defaultProps.onChange).toHaveBeenCalledTimes(1);
  });

  it("renders all options provided in the Select component", () => {
    render(<Dropdown {...defaultProps} />);
    defaultProps.options.forEach((option) => {
      expect(screen.getByText(option)).toBeInTheDocument();
    });
  });

  it("renders with no options if options array is empty", () => {
    render(<Dropdown {...defaultProps} options={[]} />);
    const options = screen.queryAllByRole("option");
    expect(options).toHaveLength(1); // default opt
  });

  it("applies additional className correctly", () => {
    render(<Dropdown {...defaultProps} className="custom-class" />);
    const container = screen.getByTestId("test-dropdown-container");
    expect(container).toHaveClass("custom-class");
  });

  it("associates the Label and Select components with the correct 'for' and 'id' attributes", () => {
    render(<Dropdown {...defaultProps} />);
    const label = screen.getByText("Test Label");
    const select = screen.getByRole("combobox");
    expect(label).toHaveAttribute("for", `${select.id}-select`);
  });
});
