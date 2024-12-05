import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { InputText } from "primereact/inputtext";
import { useDispatch } from "react-redux";
import { updateSearchString, updateSortBy } from "../store/MovieListSlice";
const Filter = () => {
  const dispatch = useDispatch();
  const handleSort = () => {
    dispatch(updateSortBy());
  };

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      dispatch(updateSearchString(e.target.value));
    }
  };
  return (
    <div className="filter" data-testid="filterComponent">
      <div className="sort-by">
        <button onClick={handleSort}>{"Sort By Episode"}</button>
      </div>
      <div className="search">
        <IconField iconPosition="left">
          <InputIcon className="pi pi-search"> </InputIcon>
          <InputText
            placeholder="Search"
            style={{ width: "100%" }}
            onKeyDown={handleSearch}
          />
        </IconField>
      </div>
    </div>
  );
};

export default Filter;
