import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import MovieDetails from "./MovieDetails";
const DUMMY_EPISODE_DETAILS = {
  title: "attack",
  opening_crawl:
    "There is unrest in the Galactic Senate. Several thousand solar systems have declared their intentions to leave the Republic.",
  director: "George Lucas",
};
describe("<MovieDetails />", () => {
  it("should render MovieDetails component", () => {
    render(<MovieDetails episodeDetails={DUMMY_EPISODE_DETAILS} />);
    const element = screen.getByTestId("movieDetailsComponent");
    expect(element).toBeDefined();
  });

  it("should have TITLE as attack", () => {
    render(<MovieDetails episodeDetails={DUMMY_EPISODE_DETAILS} />);
    const element = screen.getByTestId("title");
    expect(element).toHaveTextContent(DUMMY_EPISODE_DETAILS.title);
  });

  it("should have correct OPENING_CRAWL", () => {
    render(<MovieDetails episodeDetails={DUMMY_EPISODE_DETAILS} />);
    const element = screen.getByTestId("opening_crawl");
    expect(element).toHaveTextContent(DUMMY_EPISODE_DETAILS.opening_crawl);
  });

  it("should have DIRECTOR as George Lucas", () => {
    render(<MovieDetails episodeDetails={DUMMY_EPISODE_DETAILS} />);
    const element = screen.getByTestId("director");
    const directorContent = `Directed by : $${DUMMY_EPISODE_DETAILS.director}`;
    expect(element).toHaveTextContent(directorContent);
  });
});
