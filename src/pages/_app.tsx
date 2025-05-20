import { appWithTranslation } from "next-i18next";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BottomInfo } from "@/components/BottomInfo";
import { Playfair_Display, Inter } from "next/font/google";
import { useI18nReady } from "@/lib/hooks/useI18nReady";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { BouncingLogo } from "@/components/BouncingLogo";

const playfair = Playfair_Display({ subsets: ["latin"], weight: "700" });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500"] });

function App({ Component, pageProps }: AppProps) {
    const { loading: i18nLoading } = useI18nReady("common");

    const router = useRouter();
    const [pageLoading, setPageLoading] = useState(false);

    useEffect(() => {
        const handleStart = () => setPageLoading(true);
        const handleComplete = () => setPageLoading(false);

        router.events.on("routeChangeStart", handleStart);
        router.events.on("routeChangeComplete", handleComplete);
        router.events.on("routeChangeError", handleComplete);

        return () => {
            router.events.off("routeChangeStart", handleStart);
            router.events.off("routeChangeComplete", handleComplete);
            router.events.off("routeChangeError", handleComplete);
        };
    }, [router]);

    const showLoadingOverlay = i18nLoading || pageLoading;

    return (
        <div
            className={`${inter.className} min-h-screen flex flex-col relative`}
        >
            <Navbar />

            <main
                className={`flex-1 transition-opacity duration-300 ease-in-out ${
                    showLoadingOverlay
                        ? "opacity-0 pointer-events-none"
                        : "opacity-100"
                }`}
            >
                <Component {...pageProps} />
            </main>

            {showLoadingOverlay && (
                <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 z-50">
                    <BouncingLogo />
                </div>
            )}

            <BottomInfo />
            <Footer />
        </div>
    );
}

export default appWithTranslation(App);
