import { Provider } from "react-redux";
import JobsFilters from "./components/JobsFilters";
import Jobs from "./components/Jobs";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <JobsFilters />
      <Jobs />
    </Provider>
  );
}

export default App;
