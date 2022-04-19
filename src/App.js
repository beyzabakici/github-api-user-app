import { Routes, Route } from "react-router-dom";
import { NavBar } from "./components";
import { HOME_SCREEN, STARED_REPOS_SCREEN } from "./constants/navigations";
import { HomeScreen, StaredReposScreen } from "./screens";

const App = () => {
  return (
    <div>
      <p className="uppercase ...">The quick brown fox ...</p>
      <p className="lowercase ...">The quick brown fox ...</p>
      <button className="">sdds</button>
      <NavBar />
      <Routes>
        <Route
          path={`${STARED_REPOS_SCREEN}`}
          element={<StaredReposScreen />}
        />

        <Route path={`${HOME_SCREEN}`} element={<HomeScreen />} />
      </Routes>
    </div>
  );
};

export default App;
