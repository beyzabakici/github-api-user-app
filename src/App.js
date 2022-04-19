import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components";
import { HOME_SCREEN, STARED_REPOS_SCREEN } from "./constants/navigations";
import { HomeScreen } from "./screens";

const App = () => {
  return (
    <div class="bg-gray-900">
      <div className="container mx-auto px-4">
        <Navbar />
        <Routes>
          <Route path={`${HOME_SCREEN}`} element={<HomeScreen />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
