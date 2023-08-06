// app/layout.js
import { Providers } from "./providers";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body>
        {/* <main className="dark text-foreground bg-background"> */}
          <Providers>{children}</Providers>
        {/* </main> */}
      </body>
    </html>
  );
}
