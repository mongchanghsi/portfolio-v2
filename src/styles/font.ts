import { Montserrat, NTR } from "next/font/google";

const ntrFont = NTR({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

const montserratFont = Montserrat({
  weight: ["100", "200", "300", "400", "600", "700", "800"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

const baseFont = montserratFont;

export default baseFont;
