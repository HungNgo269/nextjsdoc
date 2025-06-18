import { Inter, Lusitana } from "next/font/google";

export const inter = Inter({ subsets: ["latin"], weight: "400" });
export const interBold = Inter({ subsets: ["latin"], weight: "700" });

export const interViet = Inter({ subsets: ["vietnamese"] });

export const lusitana = Lusitana({
  weight: ["400", "700"],
  subsets: ["latin"],
});
