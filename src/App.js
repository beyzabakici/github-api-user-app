import { Routes, Route, useLocation } from "react-router-dom";
import { NavBar } from "./components";
import {
  FAVORITES_PAGE,
  HOME_SCREEN,
  NOT_FOUND_PAGE,
  USER_PROFILE,
} from "./constants/navigations";
import {
  FavoritesPage,
  HomePage,
  NotFoundPage,
  UserProfile,
} from "./screens";

const App = () => {
  const { pathname } = useLocation();
  return (
    <div className="app w-full">
      <div className="container mx-auto px-4">
        {pathname !== NOT_FOUND_PAGE && <NavBar />}
        <Routes>
          <Route path={HOME_SCREEN} element={<HomePage />} />
          <Route path={USER_PROFILE} element={<UserProfile />} />
          <Route path={FAVORITES_PAGE} element={<FavoritesPage />} />
          <Route path={NOT_FOUND_PAGE} element={<NotFoundPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
