import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollPortfolio from "./components/ScrollPortfolio";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<ScrollPortfolio />} />
      </Routes>
    </Router>
  );
}

export default App;
