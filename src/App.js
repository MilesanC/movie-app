import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import MovieDetailPage from "./pages/MovieDetailPage";
import MoviesPage from "./pages/MoviesPage";
import Top250Page from "./pages/Top250Page";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailPage />} />
        <Route path="/top-250" element={<Top250Page />} />
      </Routes>
    </Layout>
  );
}

export default App;
