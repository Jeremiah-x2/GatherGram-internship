import { Manrope, Montserrat, Style_Script } from "next/font/google";
import { Inter } from "next/font/google";

export const styleScript = Style_Script({
  subsets: ["latin"],
  weight: ["400"],
});

export const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "900"],
});

export const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});
