import { Providers } from "./providers";
import ThemeSwitcher from "./ThemeSwitcher";
import { useTheme } from "next-themes";

export default function RootLayout({ children }) {
  const { theme } = useTheme();
  return (
    <html lang="en" className={theme === "dark" ? "dark" : ""}>
      <body>
        <Providers>
          <ThemeSwitcher />
          {children}
        </Providers>
      </body>
    </html>
  );
}
