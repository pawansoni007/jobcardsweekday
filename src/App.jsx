import { Provider } from "react-redux";
import Jobs from "./components/Jobs";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Jobs />
    </Provider>
  );
}

export default App;
