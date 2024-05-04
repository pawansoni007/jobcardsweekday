import { Provider } from "react-redux";
import JobsFilters from "./components/JobsFilters";
import Jobs from "./components/Jobs";
import store from "./redux/store";
import { Container } from "@mui/material";

function App() {
  return (
    <Provider store={store}>
      <Container maxWidth="lg" sx={{ mx: "auto", py: 3 }}>
        <JobsFilters />
        <Jobs />
      </Container>
    </Provider>
  );
}

export default App;
