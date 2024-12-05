import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

describe("<App />", () => {
  it("should render App component", () => {
    render(<App />);
    const element = screen.getByTestId("appComponent");
    expect(element).toBeDefined();
  });

  it("should have class with name main-container", () => {
    render(<App />);
    const element = screen.getByTestId("appComponent");
    expect(element).toHaveClass("main-container");
  });
});
