import { BrowserRouter as Router, Routes, Route } from "react-router";
import { ThemeProvider } from "./contexts/ThemeContext";
import HomePage from "./pages/Home";

export default function App() {
  return (     
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
