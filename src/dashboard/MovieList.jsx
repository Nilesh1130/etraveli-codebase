import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../store/MovieListSlice";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import MovieDetails from "./MovieDetails";
const MovieList = () => {
  const [episodeDetails, setEpisodeDetails] = useState();
  const [filterData, setFilterData] = useState([]);
  const dispatch = useDispatch();
  const { data, status, error, searchString, sortBy } = useSelector(
    (state) => state.movieList
  );

  useEffect(() => {
    if (searchString) {
      const filterArr = data.results.filter((ele) => {
        return ele?.title?.toUpperCase()?.includes(searchString?.toUpperCase());
      });

      setFilterData(filterArr);
    } else {
      setFilterData(data?.results);
    }
  }, [data, searchString]);

  useEffect(() => {
    if (sortBy !== undefined) {
      if (sortBy) {
        const filterArr = [...data.results].sort((a, b) => {
          return a.episode_id - b.episode_id;
          //   return 1;
        });
        setFilterData(filterArr);
      } else {
        const filterArr = [...data.results].sort((a, b) => {
          return b.episode_id - a.episode_id;
        });
        setFilterData(filterArr);
      }
    } else {
      setFilterData(data?.results);
    }
  }, [data, sortBy]);
  const [colDefs, setColDefs] = useState([
    { field: "episode_id", valueGetter: (p) => `Episode ${p.data.episode_id}` },
    { field: "title" },
    {
      field: "release_date",
    },
  ]);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const handleRowClick = (params) => {
    setEpisodeDetails(data?.results[params.rowIndex]);
  };
  return (
    <>
      <div className="half-screen left">
        {status === "loading" && <p>Loading...</p>}
        {status === "failed" && <p>Error: {error}</p>}
        {status === "succeeded" && (
          <div className="ag-theme-quartz" style={{ width: "100%" }}>
            <AgGridReact
              rowData={filterData}
              columnDefs={colDefs}
              onRowClicked={(e) => handleRowClick(e)}
            />
          </div>
        )}
      </div>
      <div className="half-screen right">
        {episodeDetails?.title ? (
          <MovieDetails episodeDetails={episodeDetails} />
        ) : (
          "Please select Episode"
        )}
      </div>
    </>
  );
};

export default MovieList;
