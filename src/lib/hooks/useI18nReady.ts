import { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";

export const useI18nReady = (ns: string) => {
  const { t, i18n } = useTranslation(ns);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (i18n.isInitialized) {
      setLoading(false);
    }
  }, [i18n.isInitialized]);

  return { t, i18n, loading };
};
