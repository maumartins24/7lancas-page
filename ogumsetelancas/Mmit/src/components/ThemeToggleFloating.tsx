// src/components/ThemeToggleFloating.tsx
import { useTheme } from "../contexts/ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa";

export default function ThemeToggleFloating() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`
        fixed bottom-5 right-5 z-50 p-4 rounded-full shadow-xl transition-all duration-300
        flex items-center justify-center
        ${isDarkMode 
          ? "bg-yellow-400 text-black hover:bg-yellow-300" 
          : "bg-blue-600 text-white hover:bg-blue-700"
        }
        hover:scale-110 active:scale-95
      `}
      aria-label="Alternar tema"
    >
      {isDarkMode ? <FaSun className="w-7 h-7" /> : <FaMoon className="w-7 h-7" />}
    </button>
  );
}