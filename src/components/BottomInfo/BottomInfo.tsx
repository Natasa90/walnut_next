// components/BottomInfo.tsx
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";

export const BottomInfo = () => {
  return (
    <div className="flex flex-col items-start p-4 gap-2 text-center text-sm">
      <p>
        📍{" "}
        <a
          href="https://www.google.com/maps/search/?api=1&query=Drage+Dulica+Moravca,+Brezane"
          target="_blank"
          rel="noopener noreferrer"
        >
          Drage Dulica Moravca, Brezane
        </a>
      </p>
      <p>
        📞{" "}
        <a href="tel:+381603065700">
          +381 603065700
        </a>
      </p>
      <p>
        📧{" "}
        <a href="mailto:natasa.golubovic90@gmail.com">
          natasa.golubovic90@gmail.com
        </a>
      </p>
      <p className="inline-flex items-center justify-center gap-1">
        <FaInstagram className="inline" />
        <Link
          href="https://www.instagram.com/walnut_pool_house?igsh=dGNnbHlzdXJrMWdn"
          target="_blank"
          rel="noopener noreferrer"
        >
          @walnut_pool_house
        </Link>
      </p>
    </div>
  );
};

