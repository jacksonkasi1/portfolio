import { Providers } from "./providers";
import ThemeSwitcher from "./ThemeSwitcher";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body>
        {/* <main className="dark text-foreground bg-background"> */}
        <Providers>
          <ThemeSwitcher />
          {children}
        </Providers>
        {/* </main> */}
      </body>
    </html>
  );
}
