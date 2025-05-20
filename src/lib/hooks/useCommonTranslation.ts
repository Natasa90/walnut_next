import { useTranslation } from "next-i18next";

export const useCommonTranslation = () => {
  const { t } = useTranslation("common");
  return t;
};