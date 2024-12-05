import "./App.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import Movie from "./dashboard/Movie";
import { Provider } from "react-redux";
import { store } from "./store";
function App() {
  return (
    <>
      <Provider store={store}>
        <div className="main-container" data-testid="appComponent">
          <Movie />
        </div>
      </Provider>
    </>
  );
}

export default App;
