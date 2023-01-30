import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { StateManagement } from "../lib/StateManagement";
import { Poppins } from "@next/font/google";
const poppins = Poppins({
  weight: ["100", "400", "900"],
  subsets: ["latin"],
});
export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={poppins.className}>
      <StateManagement>
        <Component {...pageProps} />
      </StateManagement>
    </main>
  );
}
