import { appWithTranslation } from 'next-i18next';
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Playfair_Display, Inter } from "next/font/google";
import { BottomInfo } from '@/components/BottomInfo';
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const playfair = Playfair_Display({ subsets: ["latin"], weight: "700" });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500"] });

function App({ Component, pageProps }: AppProps) {
  const [isRouteChanging, setIsRouteChanging] = useState(false);
  const [showSpinner, setShowSpinner] = useState(false);
  const router = useRouter();

  useEffect(() => {
    let timer: NodeJS.Timeout;

    const handleStart = () => {
      setIsRouteChanging(true);
      timer = setTimeout(() => {
        setShowSpinner(true);
      }, 300);
    };

    const handleComplete = () => {
      clearTimeout(timer);
      setIsRouteChanging(false);
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
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/60 backdrop-blur-sm transition-opacity duration-300">
          <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-600 rounded-full animate-spin" />
        </div>
      )}
      <Navbar />
      <main className="flex-1">
        <Component {...pageProps} />
      </main>
      <BottomInfo />
      <Footer />
    </div>
  );
}

export default appWithTranslation(App);
