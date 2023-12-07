import type { ReactNode } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <nav className="flex w-full items-center justify-center border-b border-white border-opacity-50 bg-gray-800 py-4">
      </nav>
      <main className="mx-auto flex w-full max-w-screen-xl items-center justify-center px-2">
        {/* <NextThemesProvider attribute="class" defaultTheme="dark" enableSystem> */}
          {children}
        {/* </NextThemesProvider> */}
      </main>
    
    </>
  );
}