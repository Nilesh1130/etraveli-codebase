/* eslint-disable react/prop-types */
const MovieDetails = ({ episodeDetails }) => {
  return (
    <div data-testid="movieDetailsComponent">
      <h3 data-testid="title">{episodeDetails.title}</h3>
      <p data-testid="opening_crawl">{episodeDetails.opening_crawl}</p>
      <p data-testid="director">Directed by : ${episodeDetails.director}</p>
    </div>
  );
};

export default MovieDetails;
