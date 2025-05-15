import { useRouter } from "next/router";
import { useState, useRef, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";

export const LanguageSwitcher = () => {
  const router = useRouter();
  const { locale, pathname, query, asPath } = router;

  const [isOpen, setIsOpen] = useState(false);
  const switcherRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (switcherRef.current && !switcherRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const changeLanguage = (lng: string) => {
    setIsOpen(false);
    router.push({ pathname, query }, asPath, { locale: lng });
  };

  return (
    <div className="relative inline-block text-left" ref={switcherRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex justify-center items-center gap-2 w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 transition"
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-controls="language-menu"
        aria-label="Language selection dropdown"
      >
        <span aria-hidden="true">
          {locale === "sr" ? "🇷🇸 Serbian" : "🇬🇧 English"}
        </span>
        <FaChevronDown className="text-xs" aria-hidden="true" />
      </button>

      {isOpen && (
        <div
          id="language-menu"
          role="menu"
          aria-label="Language options"
          className="absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50"
        >
          <button
            onClick={() => changeLanguage("sr")}
            disabled={locale === "sr"}
            role="menuitem"
            aria-label="Switch to Serbian"
            className={`w-full text-left px-4 py-2 text-sm ${
              locale === "sr"
                ? "text-gray-400 cursor-not-allowed"
                : "hover:bg-gray-100 text-gray-700"
            }`}
          >
            🇷🇸 Serbian
          </button>
          <button
            onClick={() => changeLanguage("en")}
            disabled={locale === "en"}
            role="menuitem"
            aria-label="Switch to English"
            className={`w-full text-left px-4 py-2 text-sm ${
              locale === "en"
                ? "text-gray-400 cursor-not-allowed"
                : "hover:bg-gray-100 text-gray-700"
            }`}
          >
            🇬🇧 English
          </button>
        </div>
      )}
    </div>
  );
};
