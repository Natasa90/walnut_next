import { appWithTranslation } from "next-i18next";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Playfair_Display, Inter } from "next/font/google";
import { BottomInfo } from "@/components/BottomInfo";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useI18nReady } from "@/lib/hooks/useI18nReady";
import { BouncingLogo } from "@/components/BouncingLogo/BouncingLogo";

const playfair = Playfair_Display({ subsets: ["latin"], weight: "700" });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500"] });

function App({ Component, pageProps }: AppProps) {
  const { t, loading } = useI18nReady("common");
  const [showSpinner, setShowSpinner] = useState(false);
  const router = useRouter();

  useEffect(() => {
    let timer: NodeJS.Timeout;

    const handleStart = () => {
      timer = setTimeout(() => {
        setShowSpinner(true);
      }, 300);
    };

    const handleComplete = () => {
      clearTimeout(timer);
      setShowSpinner(false);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);

  return (
    <div className={`${inter.className} min-h-screen flex flex-col relative`}>
      {showSpinner && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-white/80">
          <BouncingLogo />
        </div>
      )}

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
