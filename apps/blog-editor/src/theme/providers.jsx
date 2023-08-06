// app/providers.js
import { NextUIProvider } from '@nextui-org/react';
import {ThemeProvider as NextThemesProvider} from "next-themes";

export function Providers({ children }) {
  return (
    <NextUIProvider>
      <NextThemesProvider>
      {children}
      </NextThemesProvider>
    </NextUIProvider>
  );
}
