import { render, screen, fireEvent } from "@testing-library/react";
import Select, { SelectProps } from "./";

describe("Select component", () => {
  const defaultProps: SelectProps = {
    id: "test-select",
    label: "Test Select",
    value: "",
    options: ["Option 1", "Option 2", "Option 3"],
    onChange: jest.fn(),
    className: "custom-class",
    defaultOption: { label: "All", value: "" },
  };

  it("renders the select element", () => {
    render(<Select {...defaultProps} />);
    const selectElement = screen.getByRole("combobox");
    expect(selectElement).toBeInTheDocument();
  });

  it("applies default classes", () => {
    render(<Select {...defaultProps} />);
    const selectElement = screen.getByRole("combobox");
    expect(selectElement).toHaveClass(
      "border-none outline-none appearance-none bg-transparent text-xl px-4 cursor-pointer"
    );
  });

  it("applies custom classes when provided", () => {
    render(<Select {...defaultProps} />);
    const selectElement = screen.getByRole("combobox");
    expect(selectElement).toHaveClass("custom-class");
  });

  it("combines default and custom classes", () => {
    render(<Select {...defaultProps} />);
    const selectElement = screen.getByRole("combobox");
    expect(selectElement).toHaveClass(
      "border-none outline-none appearance-none bg-transparent text-xl px-4 cursor-pointer custom-class"
    );
  });

  it("renders the correct default option", () => {
    render(<Select {...defaultProps} />);
    const defaultOption = screen.getByText("All");
    expect(defaultOption).toBeInTheDocument();
    expect(defaultOption).toHaveAttribute("value", "");
  });

  it("renders all options correctly", () => {
    render(<Select {...defaultProps} />);
    defaultProps.options.forEach((option) => {
      expect(screen.getByText(option)).toBeInTheDocument();
    });
  });

  it("sets the correct value for the select element", () => {
    render(<Select {...defaultProps} value="Option 2" />);
    const selectElement = screen.getByRole("combobox");
    expect(selectElement).toHaveValue("Option 2");
  });

  it("calls onChange when a different option is selected", () => {
    const onChangeMock = jest.fn();
    render(<Select {...defaultProps} onChange={onChangeMock} />);
    const selectElement = screen.getByRole("combobox");

    fireEvent.change(selectElement, { target: { value: "Option 2" } });
    expect(onChangeMock).toHaveBeenCalledWith("Option 2");
    expect(onChangeMock).toHaveBeenCalledTimes(1);
  });

  it("renders with a custom default option", () => {
    const customDefaultOption = { label: "Select One", value: "select-one" };
    render(<Select {...defaultProps} defaultOption={customDefaultOption} />);
    const defaultOption = screen.getByText("Select One");
    expect(defaultOption).toBeInTheDocument();
    expect(defaultOption).toHaveAttribute("value", "select-one");
  });

  it("renders with no options if options array is empty", () => {
    render(<Select {...defaultProps} options={[]} />);
    const options = screen.queryAllByRole("option");
    expect(options).toHaveLength(1); // Only the default option
  });
});
