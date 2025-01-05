import { render, screen, fireEvent } from "@testing-library/react";
import { Game } from "@/types/games";
import GameCard from "./";

jest.mock("next/dynamic", () => () => {
  const MockDynamicButton = ({ label, onClick, ...props }: any) => (
    <button data-testid="dynamic-button" onClick={onClick} {...props}>
      {label}
    </button>
  );
  MockDynamicButton.preload = jest.fn();
  return MockDynamicButton;
});

describe("GameCard Component", () => {
  const mockGame: Game = {
    id: "1",
    name: "Test Game",
    description: "A test game description",
    genre: "Action",
    price: 59.99,
    image: "/test-image.jpg",
    isNew: true,
  };

  it("renders the catalog template correctly", () => {
    render(
      <GameCard
        template="catalog"
        game={mockGame}
        button={{ label: "Add to cart", onClick: jest.fn() }}
      />
    );

    expect(screen.getByAltText("Test Game-img")).toBeInTheDocument();
    expect(screen.getByText("Action")).toBeInTheDocument();
    expect(screen.getByText("Test Game")).toBeInTheDocument();
    expect(screen.getByText("$59.99")).toBeInTheDocument();
  });

  it("renders the cart template correctly", () => {
    render(
      <GameCard
        template="cart"
        game={mockGame}
        button={{ label: "Remove", onClick: jest.fn() }}
      />
    );

    expect(screen.getByAltText("Test Game-img")).toBeInTheDocument();
    expect(screen.getByText("Action")).toBeInTheDocument();
    expect(screen.getByText("Test Game")).toBeInTheDocument();
    expect(screen.getByText("A test game description")).toBeInTheDocument();
    expect(screen.getByText("$59.99")).toBeInTheDocument();
  });

  it("displays the 'New' badge when game.isNew is true", () => {
    render(<GameCard template="catalog" game={mockGame} />);

    expect(screen.getByText("New")).toBeInTheDocument();
  });

  it("does not display the 'New' badge when game.isNew is false", () => {
    const nonNewGame = { ...mockGame, isNew: false };
    render(<GameCard template="catalog" game={nonNewGame} />);

    expect(screen.queryByText("New")).not.toBeInTheDocument();
  });

  it("calls the button onClick handler with the correct game", () => {
    const onClickMock = jest.fn();
    render(
      <GameCard
        template="catalog"
        game={mockGame}
        button={{ label: "Add to cart", onClick: onClickMock }}
      />
    );

    const button = screen.getByTestId("dynamic-button");
    fireEvent.click(button);

    expect(onClickMock).toHaveBeenCalledWith(mockGame);
  });

  it("renders the dynamic button with correct label and props", () => {
    const onClickMock = jest.fn();
    render(
      <GameCard
        template="catalog"
        game={mockGame}
        button={{ label: "Add to cart", onClick: onClickMock }}
      />
    );

    const dynamicButton = screen.getByTestId("dynamic-button");
    expect(dynamicButton).toBeInTheDocument();
    expect(dynamicButton).toHaveTextContent("Add to cart");
    fireEvent.click(dynamicButton);
    expect(onClickMock).toHaveBeenCalled();
  });

  it("renders the icon in cart button for Remove label", () => {
    const onClickMock = jest.fn();
    render(
      <GameCard
        template="cart"
        game={mockGame}
        button={{ label: "Remove", onClick: onClickMock }}
      />
    );

    const button = screen.getByRole("button");
    expect(button.firstChild).toHaveRole("img");
  });
});
