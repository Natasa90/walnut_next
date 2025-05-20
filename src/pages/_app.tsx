import { appWithTranslation } from "next-i18next";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BottomInfo } from "@/components/BottomInfo";
import { Playfair_Display, Inter } from "next/font/google";
import { useI18nReady } from "@/lib/hooks/useI18nReady";

const playfair = Playfair_Display({ subsets: ["latin"], weight: "700" });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500"] });

function App({ Component, pageProps }: AppProps) {
  const { loading } = useI18nReady("common");

  return (
    <div className={`${inter.className} min-h-screen flex flex-col relative`}>
      <Navbar />

      <main
        className={`flex-1 transition-opacity duration-300 ease-in-out ${
          loading ? "opacity-0" : "opacity-100"
        }`}
      >
        <Component {...pageProps} />
      </main>

      <BottomInfo />
      <Footer />
    </div>
  );
}

export default appWithTranslation(App);
