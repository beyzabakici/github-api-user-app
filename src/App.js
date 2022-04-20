import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components";
import { FAVORITES_PAGE, HOME_SCREEN, USER_PROFILE } from "./constants/navigations";
import { FavoritesPage, HomeScreen, UserProfile } from "./screens";

const App = () => {
  return (
    <div className="app w-full">
      <div className="container mx-auto px-4">
        <Navbar />
        <Routes>
          <Route path={HOME_SCREEN} element={<HomeScreen />} />
          <Route path={USER_PROFILE} element={<UserProfile />} />
          <Route path={FAVORITES_PAGE} element={<FavoritesPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
