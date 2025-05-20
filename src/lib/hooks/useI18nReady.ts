import { useTranslation } from "next-i18next";

export const useI18nReady = (ns?: string) => {
  const { t, i18n, ready } = useTranslation(ns || undefined);
  return { t, i18n, loading: !ready };
};
