import "@/styles/globals.css";
import type { Metadata } from "next";

import { ActiveSectionContextProvider } from "@/context/activeSectionContext";
import { ThemeContextProvider } from "@/context/themeContext";

import ThemeSwitch from "@/components/ThemeSwitch";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ParticlesContainer from "@/components/ParticlesContainer";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio",
  icons: "/next.svg",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className="relative pt-28 sm:pt-36 bg-gray-50 dark:bg-gray-900 dark:text-gray-50 text-gray-950 dark:text-opacity-90">
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]" />

        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]" />

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <ParticlesContainer />
            <Header />
            {children}
            <Footer />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
};

export default RootLayout;
