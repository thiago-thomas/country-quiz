import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MainLayout as Layout } from "./layouts/MainLayout";
import { MainPage } from "./pages/MainPage";
import { CongratsPage } from "./pages/CongratsPage";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/congrats" element={<CongratsPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
