import { appWithTranslation } from 'next-i18next';
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Playfair_Display, Inter } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"], weight: "700" });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500"] });

function App({ Component, pageProps }: AppProps) {
    return (
        <div className={`${inter.className} min-h-screen flex flex-col`}>
            <Navbar />
            <main className="flex-1">
                <Component {...pageProps} />
            </main>
            <Footer />
        </div>
    );
}

export default appWithTranslation(App);