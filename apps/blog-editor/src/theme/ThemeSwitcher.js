import { useEffect } from "react";
import { useTheme } from "next-themes";
import { DarkModeSwitch } from "react-toggle-dark-mode";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  const toggleDarkMode = (checked) => {
    setTheme(checked ? "dark" : "light");
  };

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  return (
    <div className={theme}>
      The current theme is: {theme}
      <DarkModeSwitch
        style={{ marginBottom: "2rem" }}
        className="h-6"
        checked={theme === "dark"}
        onChange={toggleDarkMode}
        size={120}
      />
    </div>
  );
};

export default ThemeSwitcher;
