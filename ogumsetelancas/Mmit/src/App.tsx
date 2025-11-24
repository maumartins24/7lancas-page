import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import HomePage from "./pages/Home";
import ArrecadacaoPage from "./pages/Arrecadacao";

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/arrecadacao" element={<ArrecadacaoPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
