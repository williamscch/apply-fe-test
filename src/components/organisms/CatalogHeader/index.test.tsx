import { render, screen, fireEvent } from "@testing-library/react";
import { availableFilters } from "@/constants/gamesFilters";
import CatalogHeader from ".";

jest.mock("@/components/molecules/Dropdown", () => ({
  __esModule: true,
  default: ({ label, onChange, options, value, id, defaultOption }: any) => (
    <div data-testid="dropdown">
      <label htmlFor={id}>{label}</label>
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        data-testid="dropdown-select"
      >
        {defaultOption && (
          <option key={defaultOption.value} value={defaultOption.value}>
            {defaultOption.label}
          </option>
        )}
        {options.map((option: any, i: number) => (
          <option key={option + i} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  ),
}));

jest.mock("@/components/molecules/PageHeader", () => ({
  __esModule: true,
  default: ({ title }: any) => <h1 data-testid="page-header">{title}</h1>,
}));

describe("CatalogHeader Component", () => {
  const mockSetGenre = jest.fn();

  it("renders the PageHeader with the correct title", () => {
    render(
      <CatalogHeader
        title="Test Catalog"
        currentGenre="all"
        setGenre={mockSetGenre}
      />
    );

    const header = screen.getByTestId("page-header");
    expect(header).toBeInTheDocument();
    expect(header).toHaveTextContent("Test Catalog");
  });

  it("renders the default title when no title is provided", () => {
    render(<CatalogHeader currentGenre="all" setGenre={mockSetGenre} />);

    const header = screen.getByTestId("page-header");
    expect(header).toBeInTheDocument();
    expect(header).toHaveTextContent("Catalog");
  });

  it("renders the Dropdown with the correct props", () => {
    render(
      <CatalogHeader
        title="Catalog"
        currentGenre="Action"
        setGenre={mockSetGenre}
      />
    );

    const dropdown = screen.getByTestId("dropdown");
    expect(dropdown).toBeInTheDocument();

    const select = screen.getByTestId("dropdown-select");
    expect(select).toHaveValue("Action");

    availableFilters.forEach((filter) => {
      expect(screen.getByText(filter)).toBeInTheDocument();
    });
  });

  it("calls setGenre when a new genre is selected", () => {
    render(
      <CatalogHeader
        title="Catalog"
        currentGenre="all"
        setGenre={mockSetGenre}
      />
    );

    const select = screen.getByTestId("dropdown-select");
    fireEvent.change(select, { target: { value: "Action" } });

    expect(mockSetGenre).toHaveBeenCalledWith("Action");
  });

  it("renders 'All' as the default option in the Dropdown when currentGenre is 'all'", () => {
    render(
      <CatalogHeader
        title="Catalog"
        currentGenre="all"
        setGenre={mockSetGenre}
      />
    );

    const select = screen.getByTestId("dropdown-select");
    expect(select).toHaveValue("all");
  });
});
