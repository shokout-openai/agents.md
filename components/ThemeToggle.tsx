import { useEffect, useState } from "react";

type Theme = "light" | "dark";

const toggleLabels: Record<Theme, string> = {
  light: "ダークテーマに切り替え",
  dark: "ライトテーマに切り替え",
};

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "dark" : "light");
  }, []);

  const handleToggle = () => {
    const nextTheme: Theme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
    document.documentElement.style.colorScheme = nextTheme;
    window.localStorage.setItem("theme", nextTheme);
  };

  const label = toggleLabels[theme];

  return (
    <button
      type="button"
      onClick={handleToggle}
      className="inline-flex items-center gap-2 rounded-full border border-gray-300 dark:border-gray-600 px-3 py-2 text-xs font-medium text-gray-700 dark:text-gray-200 bg-white/80 dark:bg-gray-900/80 backdrop-blur hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      aria-label={label}
      title={label}
    >
      <span className="text-base" aria-hidden="true">
        {theme === "dark" ? "🌙" : "☀️"}
      </span>
      <span>{theme === "dark" ? "Dark" : "Light"}</span>
    </button>
  );
}
