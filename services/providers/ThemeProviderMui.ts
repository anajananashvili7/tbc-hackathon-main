"use client";

import { createTheme } from '@mui/material/styles';
import { Noto_Sans_Georgian } from "next/font/google";

const noto_sans_georgia = Noto_Sans_Georgian({ subsets: ["georgian", "latin"], weight: ["400", "500", "600", "700"] })

export const theme = createTheme({
  typography: {
    fontFamily: noto_sans_georgia.style.fontFamily,
  },
});
