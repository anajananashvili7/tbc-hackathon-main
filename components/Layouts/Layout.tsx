"use client"

import "./Layout.css";
import { Header } from "../Headers/Header";
import { Footer } from "../Footers/Footer";
import { ThemeProvider } from "@emotion/react";
import { theme } from "@/services/providers/ThemeProviderMui";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="layout">
      <ThemeProvider theme={theme}>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </ThemeProvider>
    </div>
  )
}
